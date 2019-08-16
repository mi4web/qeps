import fetch from "node-fetch";
import checkResponse from './httpResponseInterceptor';
import checkRequest from './httpRequestInterceptor';

var apisUnderProcess = [];

const getReqIndentifier = (method, url) => {
    let pathname = url;
    if (url.indexOf('?') > -1) {
        pathname = url.substr(0, url.indexOf('?'));
    }
    return method + pathname
};

const handleAbort = (requestObj) => {
    const { params: { method }, url } = requestObj;
    const controller = new AbortController();
    const signal = controller.signal;
    const reqIdentifier = getReqIndentifier(method, url);
    let underProcess = apisUnderProcess.find(x => x.req === reqIdentifier);
    if (underProcess) {
        console.log("Under process ===", underProcess);
        underProcess.controller.abort();
    }
    apisUnderProcess = apisUnderProcess.filter(x => x.req !== reqIdentifier);
    apisUnderProcess.push({ req: reqIdentifier, controller });
    return signal;
}
export const httpFetch = async (url, opts = {}) => {
    let response;
    let requestObj = checkRequest(url, opts);
    const reqIdentifier = getReqIndentifier(requestObj.params.method, requestObj.url);
    try {
        if (opts.abortPrevious) {
            let signal = handleAbort(requestObj);
            requestObj.params.signal = signal;
        }
        response = await fetch(requestObj.url, requestObj.params)
            .then(checkResponse)
            .then(r => {
                if (opts.abortPrevious) {
                    apisUnderProcess = apisUnderProcess.filter(x => x.req !== reqIdentifier);
                }
                return r.json()
            });
    } catch (e) {
        if (opts.abortPrevious) {
            apisUnderProcess = apisUnderProcess.filter(x => x.req !== reqIdentifier);
        }
        console.log("Not able to fetch response for ", url, e)
    }
    return response;
};

export default httpFetch;
