import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import Router from "../../routes/routes";
import './App.scss';
import {NAV} from "../../constants/appConstants";
import NavBar from "../Nav/NavBar";
import logo from '../../img/logo.png';
import Hamburger from "../Hamburger/Hamburger";


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
            <a className='brand' href='#home'>
              <img src={logo} alt=""/>
              <div>
                <h1>Quari English Public School</h1>
                <div className='subtitle'>(With Hostel)</div>
              </div>
            </a>
            <NavBar items={NAV}></NavBar>
          </div>
          <Hamburger />
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
