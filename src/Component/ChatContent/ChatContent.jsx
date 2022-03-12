import React, { Component, createRef } from "react";
import "./chatContent.css";
import Avatar from "../ChatList/Avatar";
import ChatItem from "./ChatItem";
import ChatItem2 from "./ChatItem2";

class ChatContent extends Component {
  messagesEndRef = createRef("");
  chatItms = [];

  constructor(props) {
    super(props);
    this.state = {
      chat: this.chatItms,
      msg: "",
      response: ""
    };
  }

  scrollToBottom = () => {
    this.messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  componentDidMount() {
    window.addEventListener("keydown", (e) => {
      if (e.keyCode === 13) {
        if (this.state.msg !== "") {
          this.chatItms.push({
            key: 1,
            type: "",
            msg: this.state.msg,
            image:
              "https://i.pinimg.com/originals/ea/69/dc/ea69dc6226e72a33f82d3add20b470df.jpg"
          });
          this.setState({ chat: [...this.chatItms] });
          this.scrollToBottom();
          this.setState({ msg: "" });
        }
        localStorage.setItem("key", [...this.chatItms, this.state.msg]);
      }
    });
    this.scrollToBottom();
    this.setState({ response: this.state.msg });
    localStorage.getItem("key", [...this.chatItms, this.state.msg]);
  }
  onStateChange = (e) => {
    this.setState({ msg: e.target.value });
  };

  render() {
    return (
      <div className="main__chatcontent">
        <div className="content__header">
          <div className="blocks">
            <div className="current-chatting-user">
              <Avatar
                isOnline="active"
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU"
              />
              <p>Tim Hover</p>
            </div>
          </div>

          <div className="blocks">
            <div className="settings">
              <button className="btn-nobg">
                <i className="fa fa-cog"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="content__body">
          <div className="chat__items">
            {this.state.chat.map((itm, index) => {
              return (
                <>
                  <ChatItem
                    animationDelay={index + 2}
                    key={itm.key}
                    user={itm.type ? itm.type : "me"}
                    msg={itm.msg}
                    image={itm.image}
                    response={itm.response}
                  />
                  <ChatItem2
                    animationDelay={index + 4}
                    key={itm.key + 1}
                    user={itm.type ? itm.type : "other"}
                    msg={itm.msg}
                    // image={itm.image}
                  />
                </>
              );
            })}
            <div ref={this.messagesEndRef} />
          </div>
        </div>
        <div className="content__footer">
          <div className="sendNewMessage">
            <button className="addFiles">
              <i className="fa fa-plus"></i>
            </button>
            <input
              type="text"
              placeholder="Type a message here"
              onChange={this.onStateChange}
              value={this.state.msg}
            />
            <button className="btnSendMsg" id="sendMsgBtn">
              <i className="fa fa-paper-plane"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default ChatContent;
