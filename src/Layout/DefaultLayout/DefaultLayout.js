import React, { Component } from "react";
import PropTypes from "prop-types";
import "./DefaultLayout.scss";
import NavBar from "../../components/Nav/NavBar";
import { NAV } from "../../constants/appConstants";


class DefaultLayout extends Component {


    render() {
        return (
            <div className="mainContainer">
                <NavBar items={NAV}></NavBar>
                {this.props.children}
            </div>
        );
    }
}

DefaultLayout.propTypes = {
    header: PropTypes.bool,
    footer: PropTypes.bool
};
export default DefaultLayout;
