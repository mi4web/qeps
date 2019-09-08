import React, { Component } from 'react';
import ReactWoW from 'react-wow';
import './Contact.scss';
import SideHead from "../../components/SideHead/SideHead";
import { REFS } from "../../constants/appConstants";
import routeNames from "../../routes/routeNames";

class ContactComponent extends Component {
    render() {
        return (
            <div className='contact' id={REFS[routeNames.CONTACT]}>
                <SideHead heading={'Contact'}>
                    <div className="contactContent">
                        Quari English Public School
                        <br/>
                        Vill. - Milki Rajwara
                        <br/>
                        P.S - Rosera
                        <br/>
                        District - Samastipur
                        <br/>
                        Bihar - 848210
                        <br/>
                        Mob: <a href="tel:9818038295">+91 9818038295</a>
                        <br/>
                        Email: <a href="mailto:er.sajid@hotmail.com">qeps2018@gmail.com</a>

                    </div>

                </SideHead>

            </div>
        );
    }
}

export default ContactComponent;
