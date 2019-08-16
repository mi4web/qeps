import React, {Component} from "react";
import DefaultLayout from "../../Layout/DefaultLayout/DefaultLayout";
import VisionComponent from "./VisionComponent";

class Vision extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <div>
                <DefaultLayout>
                    <VisionComponent />
                </DefaultLayout>
            </div>
        )
    }
}

export default Vision;
