import React, {Component} from "react";
import DefaultLayout from "../../Layout/DefaultLayout/DefaultLayout";
import HomeComponent from "./HomeComponent";
import VisionComponent from "./../Vision/VisionComponent";
import './Home.scss';
import AboutComponent from "../About/AboutComponent";
import FacilitiesComponent from "../Facilities/FacilitiesComponent";
import ContactComponent from "../Contact/ContactComponent";
import FooterComponent from "../Footer/FooterComponent";

class Home extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
        <DefaultLayout>
          <HomeComponent/>
          <AboutComponent/>
          <VisionComponent/>
          <FacilitiesComponent/>
          <ContactComponent/>
          <FooterComponent/>
        </DefaultLayout>
    )
  }
}

export default Home;
