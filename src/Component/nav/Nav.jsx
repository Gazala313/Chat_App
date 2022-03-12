import React from "react";
import "./nav.css";
import main_icon from "./main_icon.png";

class Nav extends React.Component {
  render() {
    return (
      <div className="nav">
        <div className="nav__blocks">
          <img src={main_icon}></img>
        </div>
        <div className="nav__blocks"></div>
        <div className="nav__blocks"></div>
      </div>
    );
  }
}

export default Nav;
