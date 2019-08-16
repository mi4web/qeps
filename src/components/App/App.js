import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import Router from "../../routes/routes";
import './App.scss';
import { NAV } from "../../constants/appConstants";
import NavBar from "../Nav/NavBar";


class App extends Component {
    static getData() {
        return Promise.resolve({});
    }

    componentDidMount() {
    }



    render() {
        return (
            <div>
                <NavBar items={NAV}></NavBar>
                <Router></Router>
            </div>
        );
    }
}

const mapDispatchToProps = {

};

const mapStateToProps = ({ extranet }) => {
    return {

    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
