import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactWoW from 'react-wow';
import SideHead from "../../components/SideHead/SideHead";
import './About.scss';
import { REFS } from "../../constants/appConstants";
import routeNames from "../../routes/routeNames";

class AboutComponent extends Component {
    render() {
        return (
            <div className="about" id={REFS[routeNames.ABOUT]}>
                <SideHead heading={'About Us'}>
                    <ReactWoW animation='fadeIn'>
                        <div className='aboutContent'>
                            Quari English Public School established in year 2019 is an Institution which provides quality all around education to all young boys
                            and girls to develop a sound mind, a robust physique and strong moral values which enable them to become successful in all
                            fields of life, society and National importance.

                            We invite you to discover the family of Quari English Public School and find your place in it.
                        </div>
                    </ReactWoW>
                </SideHead>
            </div>
        );
    }
}

export default AboutComponent;
