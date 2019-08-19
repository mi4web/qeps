import React, {Component} from 'react';
import {NavLink, withRouter} from 'react-router-dom';
import ReactWOW from 'react-wow'
import './Navbar.scss';
import 'animate.css';
import {getPathByName} from "../../routes/routerManager";
import {REFS} from "../../constants/appConstants";
import classNames from "../../utils/classNames";
import throttle from "../../utils/throttle";
import routeNames from "../../routes/routeNames";

class NavBar extends Component {

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll)
    this.innerHeight = window.innerHeight;
  }

  onScroll = throttle(() => {
    const activeRoute = Object.entries(REFS).find(([_, id]) => {
      let section = document.querySelector(`#${id}`);
      const elem = section.querySelector('.sideHead');
      const rect = elem ? elem.getBoundingClientRect() : section.getBoundingClientRect();
      return rect && rect.top > -2 && rect.top < this.innerHeight;
    })
    if (activeRoute) {
      this.setState({
        selectedRoute: activeRoute[0]
      })
    } else {
      this.setState({
        selectedRoute: routeNames.LANDING
      })
    }
  }, 200)
  scrollIntoView = item => {
    const selector = `#${item.href}`
    document.querySelector(selector).scrollIntoView({
      behavior: "smooth"
    });
    setTimeout(() => {
      this.setState({
        selectedRoute: item.route
      })
    }, 1000)
  }

  render() {
    const {items, location: {path}} = this.props;
    const {selectedRoute} = this.state || {};
    return (
        <div className="navigation">
          <nav className="navbar">
            {items.map((item, index) => {
              return (
                  <ReactWOW animation='bounceIn' delay={0.1 * (index + 1) + 's'} key={index}>
                    <a onClick={() => this.scrollIntoView(item)} className={classNames({active: item.route === selectedRoute})}>
                      <span>{item.text}</span>
                    </a>
                  </ReactWOW>)

            })}
          </nav>
        </div>
    );
  }
}

export default withRouter(NavBar);
