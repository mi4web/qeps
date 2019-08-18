import React, {Component} from 'react';
import ReactWow from 'react-wow';
import PropTypes from 'prop-types';

class HomeComponent extends Component {
  render() {
    return (
        <div className='home'>
          <div className="titleWrapper">
            <div className='title'>
              <ReactWow animation='slideInRight'>
                <div className='first'>
                  A Place To Learn
                </div>
              </ReactWow>
              <div className="flex-row second j-c">
                <ReactWow animation='slideInRight' delay='0.5s'>
                  <div className='and'>
                    &
                  </div>
                </ReactWow>
                <ReactWow animation='zoomIn' delay='1s'>
                  <div>
                    &nbsp;Grow
                  </div>
                </ReactWow>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default HomeComponent;
