import React, {Component} from "react";
import { Link } from 'react-router-dom';
import DefaultLayout from "../Layout/DefaultLayout/DefaultLayout";
import {getPathByName} from "../routes/routerManager";
import routeNames from "../routes/routeNames";
import {withRouter} from 'react-router-dom';


class PageNotFound extends Component {

    componentWillMount(){
        this.props.history.replace('/');
    }

    render() {
        return (
            <DefaultLayout>
                 You have tried to access invalid URL / Path.
                  Please <Link to={getPathByName(routeNames.LANDING)}>Return to Home Page</Link>
            </DefaultLayout>
        )
    }

}

export default withRouter(PageNotFound);
