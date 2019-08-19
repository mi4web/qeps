/* created by imamudin on 02/01/19 */

import routeNames from "../routes/routeNames";

export const RESPONSE_KEYS = {};

export const APP_INITIAL_STATE = {
  app: {},
};


export const NAV = [
  {
    text: 'Home',
    route: routeNames.LANDING
  },
  {
    text: 'About Us',
    route: routeNames.ABOUT
  },
  {
    text: 'Our Aim',
    route: routeNames.VISION
  },
  {
    text: 'Facilities',
    route: routeNames.FACILITIES
  },
  {
    text: 'Contact',
    route: routeNames.CONTACT
  }
]
