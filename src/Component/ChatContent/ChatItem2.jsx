import React, { Component } from "react";
import Avatar2 from "../ChatList/Avatar2";

class ChatItem2 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div
        style={{ animationDelay: `0.8s` }}
        className={`chat__item ${this.props.user ? this.props.user : "other"}`}
      >
        <div className="chat__item__content">
          <div className="chat__msg">{this.props.msg}</div>
          <div className="chat__meta">
            <span>16 mins ago</span>
            <span>Seen 1.03PM</span>
          </div>
        </div>
        <Avatar2 isOnline="active" image={this.props.image} />
      </div>
    );
  }
}
export default ChatItem2;
