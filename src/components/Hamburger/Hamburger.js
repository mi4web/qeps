import React from 'react';
import {NavLink} from 'react-router-dom';
import './Hamburger.scss';
import {NAV} from "../../constants/appConstants";
import {getPathByName} from "../../routes/routerManager";


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
    }
  }

  handleMenuClick() {
    this.setState({menuOpen: !this.state.menuOpen});
  }

  handleLinkClick() {
    this.setState({menuOpen: false});
  }

  scrollIntoView = item => {
    const selector = `#${item.href}`
    document.querySelector(selector).scrollIntoView({
      behavior: "smooth"
    });
    this.setState({
      menuOpen: !this.state.menuOpen
    })
  }

  render() {
    const menuItems = NAV.map((val, index) => {
      return (
          <MenuItem key={index} delay={`${index * 0.1}s`}>
            <a onClick={() => this.scrollIntoView(val)}>
              {val.text}
            </a>
          </MenuItem>)
    });

    return (
        <div className="hamburger">
          <div className={"menuButton container"}>
            <MenuButton open={this.state.menuOpen} onClick={() => this.handleMenuClick()}/>
          </div>
          <Menu open={this.state.menuOpen}>
            {menuItems}
          </Menu>
        </div>
    )
  }
}

/* MenuItem.jsx*/
class MenuItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
    }
  }

  handleHover() {
    this.setState({hover: !this.state.hover});
  }

  render() {
    const styles = {
      container: {
        animationDelay: this.props.delay,
      },
      menuItem: {
        color: this.state.hover ? 'gray' : '#fafafa',
        animationDelay: this.props.delay,

      },
      line: {
        animationDelay: this.props.delay,

      }
    }
    return (
        <div className={"container item"} style={styles.container}>
          <div
              className={"menuItem"}
              style={styles.menuItem}
              onMouseEnter={() => {
                this.handleHover();
              }}
              onMouseLeave={() => {
                this.handleHover();
              }}
              onClick={this.props.onClick}
          >
            {this.props.children}
          </div>
          <div className={"line"} style={styles.line}/>
        </div>
    )
  }
}

/* Menu.jsx */
class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: this.props.open ? this.props.open : false,
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.open !== this.state.open) {
      this.setState({open: nextProps.open});
    }
  }

  render() {
    const styles = {
      container: {
        height: this.state.open ? '100%' : 0,
      }
    }
    return (
        <div style={styles.container} className={"menuList container"}>
          {
            this.state.open ?
                <div className={"menuList"}>
                  {this.props.children}
                </div> : null
          }
        </div>
    )
  }
}

/* MenuButton.jsx */
class MenuButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: this.props.open ? this.props.open : false,
      color: this.props.color ? this.props.color : '#777',
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.open !== this.state.open) {
      this.setState({open: nextProps.open});
    }
  }

  handleClick() {
    this.setState({open: !this.state.open});
  }

  render() {
    const styles = {
      container: {
        height: '40px',
        width: '40px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        padding: '4px',
      },
      line: {
        height: '2px',
        width: '20px',
        background: this.state.color,
        transition: 'all 0.2s ease',
      },
      lineTop: {
        transform: this.state.open ? 'rotate(45deg)' : 'none',
        transformOrigin: 'top left',
        marginBottom: '5px',
      },
      lineMiddle: {
        opacity: this.state.open ? 0 : 1,
        transform: this.state.open ? 'translateX(-16px)' : 'none',
      },
      lineBottom: {
        transform: this.state.open ? 'translateX(-1px) rotate(-45deg)' : 'none',
        transformOrigin: 'top left',
        marginTop: '5px',
      },
    }
    return (
        <div style={styles.container}
             onClick={this.props.onClick ? this.props.onClick :
                 () => {
                   this.handleClick();
                 }}>
          <div style={{...styles.line, ...styles.lineTop}}/>
          <div style={{...styles.line, ...styles.lineMiddle}}/>
          <div style={{...styles.line, ...styles.lineBottom}}/>
        </div>
    )
  }
}
