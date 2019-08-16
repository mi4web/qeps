import React, {Component} from "react";
import DefaultLayout from "../../Layout/DefaultLayout/DefaultLayout";
import HomeComponent from "./HomeComponent";

class Home extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <div>
                <DefaultLayout>
                    <HomeComponent />
                </DefaultLayout>
            </div>
        )
    }
}

export default Home;
