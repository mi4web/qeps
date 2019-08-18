import React, {Component} from "react";
import DefaultLayout from "../../Layout/DefaultLayout/DefaultLayout";
import HomeComponent from "./HomeComponent";
import './Home.scss';

class Home extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
        <DefaultLayout>
          <HomeComponent/>
        </DefaultLayout>
    )
  }
}

export default Home;
