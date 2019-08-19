import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactWoW from "react-wow";
import './SideHead.scss';

export default (props) => {
    return (

        <div className="sideHead">
            <ReactWoW animation='slideInLeft'>
                <div className='heading'>
                    {props.heading}
                </div>
            </ReactWoW>
            <div className="content">
                {props.children}
            </div>
        </div>
    )
};
