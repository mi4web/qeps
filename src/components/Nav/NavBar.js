import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Navbar.scss';
import { getPathByName } from "../../routes/routerManager";
import Hamburger from "../Hamburger/Hamburger";

class NavBar extends Component {
    render() {
        const { items, location: { path } } = this.props;
        return (
            <div className="navigation">
                <nav className="navbar">
                    {items.map((item, index) => {

                        return <NavLink to={getPathByName(item.route)} activeClassName="active" key={index} exact>
                            <span>{item.text}</span>
                        </NavLink>
                    })}
                </nav>
            </div>
        );
    }
}

export default withRouter(NavBar);
