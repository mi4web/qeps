import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import ReactWOW from 'react-wow'
import './Navbar.scss';
import 'animate.css';
import { getPathByName } from "../../routes/routerManager";

class NavBar extends Component {
    componentDidMount() {
    }

    render() {
        const { items, location: { path } } = this.props;
        return (
            <div className="navigation">
                <nav className="navbar">
                    {items.map((item, index) => {

                        return (
                            <ReactWOW animation='bounceIn' delay={0.1 * (index + 1) + 's'}>
                                <a href={`#${item.href}`}>
                                    {item.text}
                                </a>
                            </ReactWOW>)

                    })}
                </nav>
            </div>
        );
    }
}

export default withRouter(NavBar);
