// import {getCookie} from "../storage/cookie";
import * as R from 'ramda';
import {getCookie} from "../storage/cookie";


const getPostHeaders = (headers, injectxsrf) => {

    if (!headers) {
        headers = {};
    }

    headers['Content-Type'] = 'application/json';
    headers['client'] = 'web';

    const xxsrfToken = getCookie && getCookie('XSRF-TOKEN');
    let withXsrf = {};
    if (xxsrfToken && injectxsrf) {
        withXsrf = {
            'X-XSRF-TOKEN': xxsrfToken,
            'X-CSRF-TOKEN': xxsrfToken
        };
    }
    return { headers: Object.assign(headers, withXsrf) };
};

const checkRequest = (url, options) => {

    const modifiedUrl = url;

    let params = R.clone(options);
    const headers = getPostHeaders(params && params.headers, url.indexOf('/sso/inject') > -1);

    const safeStringify = R.ifElse(R.is(Object), R.toString, R.identity);
    params.method = options.method || 'GET';
    params.body = safeStringify(params.body);
    params.timeout = 5000; //set timeout
    params = { ...headers, ...params };

    return {
        url: modifiedUrl,
        params: params
    }
};

export default checkRequest;
