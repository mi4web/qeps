/* created by imamudin on 02/01/19 */

import routeNames from "../routes/routeNames";

export const RESPONSE_KEYS = {};

export const APP_INITIAL_STATE = {
    app: {},
};


export const REFS = {
    [routeNames.LANDING]: 'home',
    [routeNames.ABOUT]: 'about',
    [routeNames.VISION]: 'aim',
    [routeNames.FACILITIES]: 'facilities',
    [routeNames.CONTACT]: 'contact',
}

export const NAV = [
    {
        text: 'Home',
        route: routeNames.LANDING,
        href: REFS[routeNames.LANDING]
    },
    {
        text: 'About Us',
        route: routeNames.ABOUT,
        href: REFS[routeNames.ABOUT]
    },
    {
        text: 'Our Aim',
        route: routeNames.VISION,
        href: REFS[routeNames.VISION]
    },
    {
        text: 'Facilities',
        route: routeNames.FACILITIES,
        href: REFS[routeNames.FACILITIES]
    },
    {
        text: 'Contact',
        route: routeNames.CONTACT,
        href: REFS[routeNames.CONTACT]
    }
]
