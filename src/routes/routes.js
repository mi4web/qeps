import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import Loadable from 'react-loadable';
import Home from "../views/Home/Home";
import {getPathByName} from "./routerManager";
import routeNames from './routeNames';


const AsyncPageNotFound = Loadable({
  loader: () => import(/* webpackChunkName: "PageNotFound" */ '../views/PageNotFound'),
  loading: () => <div className="hide">loading page...</div>,
});

const LandingPage = Loadable({
  loader: () => import(/* webpackChunkName: "Home" */ '../views/Home/Home'),
  loading: () => <div className="hide">loading page...</div>,
});


export const routes = [
  {
    path: getPathByName(routeNames.LANDING),
    component: Home,
    exact: true
  }
];


class Router extends Component {


  render() {
    return (
        <React.Fragment>
          <Switch>
            {routes.map((r, i) => <Route {...this.props} path={r.path} component={r.component} key={i} exact/>)}
            <Route component={AsyncPageNotFound}/>
          </Switch>
        </React.Fragment>
    );
  }


}

export default withRouter(Router);
