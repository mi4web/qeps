import React, {Component} from "react";
import DefaultLayout from "../../Layout/DefaultLayout/DefaultLayout";
import AboutComponent from "./AboutComponent";

class About extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <div>
                <DefaultLayout>
                    <AboutComponent />
                </DefaultLayout>
            </div>
        )
    }
}

export default About;
