import React, { Component } from 'react';
import ReactWoW from 'react-wow';
import './Vision.scss';
import SideHead from "../../components/SideHead/SideHead";
import { REFS } from "../../constants/appConstants";
import routeNames from "../../routes/routeNames";

class VisionComponent extends Component {
    render() {
        return (
            <div className='vision' id={REFS[routeNames.VISION]}>
                <SideHead heading={'Our Aim'}>
                    <div className="visionContent">
                        <div className='title'>
                            <span className="secondaryColor">"</span>The School aims to provide a platform to its students to acquire the wealth of
                            knowledge upholding the ethical and moral values
                            <span className="secondaryColor">"</span>
                        </div>
                        <ul>
                            <ReactWoW animation='slideInRight' delay='0.1s'>
                                <li>We aim to enable our students to utilize the acquired knowledge, skills, attitude and values for their spiritual,
                                    moral
                                    and spiritual development.
                                </li>
                            </ReactWoW>
                            <ReactWoW animation='slideInRight' delay='0.15s'>
                                <li>To develop leadership qualities and team spirit in them</li>
                            </ReactWoW>
                            <ReactWoW animation='slideInRight' delay='0.2s'>
                                <li>To develop the spirit of co-operations, belongingness and service to humanity.</li>
                            </ReactWoW>
                            <ReactWoW animation='slideInRight' delay='0.25s'>
                                <li>To nurture love for environment and wild life.</li>
                            </ReactWoW>
                            <ReactWoW animation='slideInRight' delay='0.3s'>
                                <li>To channelise the inexhaustible energy of the young in the right direction towards creativity and self sufficiency
                                    and
                                    to
                                    fully utilize their inherent talents.
                                </li>
                            </ReactWoW>
                            <ReactWoW animation='slideInRight' delay='0.35s'>
                                <li>Emphasis on 4 I’s (Inquisitiveness, Intelligence, Innovativeness and Inspiration) with equal emphasis in academics
                                    and
                                    co-curricular activities.
                                </li>
                            </ReactWoW>
                        </ul>
                    </div>
                </SideHead>

            </div>
        );
    }
}

export default VisionComponent;
