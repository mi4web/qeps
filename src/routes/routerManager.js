import * as R from 'ramda';
import Route from './routeNames';

const BASE_URL = '/';

const routes = {
    landing: {
        path: BASE_URL,
        name: Route.LANDING
    },
    vision: {
        path: '/vision',
        name: Route.VISION
    },
    about: {
        path: '/about',
        name: Route.ABOUT
    },
    contact: {
        path: '/contact',
        name: Route.CONTACT
    },
    facilities: {
        path: '/facilities',
        name: Route.FACILITIES
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

