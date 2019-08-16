import * as R from 'ramda';
import Route from './routeNames';

const BASE_URL = '/';

const routes = {
    landing: {
        path: BASE_URL,
        name: Route.LANDING
    },
    vision: {
        path: BASE_URL,
        name: Route.VISION
    },
    about: {
        path: BASE_URL,
        name: Route.ABOUT
    },
    contact: {
        path: BASE_URL,
        name: Route.CONTACT
    }
};

export default routes;

export const getPathByKey = key => {
    return routes[key].path;
}
export const getPathByName = name => {
    const findPathByName = R.compose(R.prop('path'), R.find(R.propEq('name', name)), R.values);
    return findPathByName(routes)
};

export const getNameByPath = path => {
    const findNameByPath = R.compose(R.prop('name'), R.find(R.propEq('path', path)), R.values);
    return findNameByPath(routes)
};

