import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import Router from "../../routes/routes";
import './App.scss';
import {NAV} from "../../constants/appConstants";
import NavBar from "../Nav/NavBar";
import logo from '../../img/logo.png';


class App extends Component {
  static getData() {
    return Promise.resolve({});
  }

  componentDidMount() {
  }


  render() {
    return (
        <React.Fragment>
          <div className='header'>
            <div className='brand'>
              <img src={logo} alt=""/>
              <h1>Quari English Public School</h1>
            </div>
            <NavBar items={NAV}></NavBar>
          </div>
          <Router></Router>
        </React.Fragment>
    );
  }
}

const mapDispatchToProps = {};

const mapStateToProps = ({extranet}) => {
  return {}
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
