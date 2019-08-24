import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactWoW from 'react-wow';
import SideHead from "../../components/SideHead/SideHead";
import './Facilities.scss';
import { REFS } from "../../constants/appConstants";
import routeNames from "../../routes/routeNames";

class FacilitiesComponent extends Component {
    render() {
        return (
            <div className="facilities" id={REFS[routeNames.FACILITIES]}>
                <SideHead heading={'Facilities'}>
                    <div className="flex-row content">
                        <ul className="items">
                            <ReactWoW key='1' animation='slideInLeft' delay='0s'>
                                <li className="item">
                                    Preparation for Army School, Navodaya Vidyalaya, Jamia Millia, Aligarh School entrance exam
                                </li>
                            </ReactWoW>
                            <ReactWoW key='2' animation='slideInLeft' delay='0.1s'>
                                <li className="item">
                                    Experienced and qualified Teachers
                                </li>
                            </ReactWoW>
                            <ReactWoW key='3' animation='slideInLeft' delay='0.2s'>
                                <li className="item">
                                    Smart Classes
                                </li>
                            </ReactWoW>
                            <ReactWoW key='4' animation='slideInLeft' delay='0.3s'>
                                <li className="item">
                                    Computer, Mathematics and Science Labs
                                </li>
                            </ReactWoW>
                        </ul>
                        <ul className="items">
                            <ReactWoW animation='slideInRight' delay='0.4s'>
                                <li className="item">
                                    Admission via entrance exam only
                                </li>
                            </ReactWoW>
                            <ReactWoW animation='slideInRight' delay='0.5s'>
                                <li className="item">
                                    Maximum 20 Students per Teacher
                                </li>
                            </ReactWoW>
                            <ReactWoW animation='slideInRight' delay='0.6s'>
                                <li className="item">
                                    Extra attention for weaker Students
                                </li>
                            </ReactWoW>
                            <ReactWoW animation='slideInRight' delay='0.6s'>
                                <li className="item">
                                    Scholarship for bright Students
                                </li>
                            </ReactWoW>
                        </ul>
                    </div>

                    <ul className='bottom'>
                        <ReactWoW animation='slideInUp' delay='0'>
                            <li>Computer classes starting from Nursery standard</li>
                        </ReactWoW>
                        <ReactWoW animation='slideInUp' delay='0.5s'>
                            <li>English speaking exposure starting from Nursery standard</li>
                        </ReactWoW>
                    </ul>

                </SideHead>
            </div>
        );
    }
}

export default FacilitiesComponent;

