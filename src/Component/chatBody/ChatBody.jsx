import ChatContent from "../ChatContent/ChatContent";
import ChatList from "../ChatList/ChatList";
import UserProfile from "../UserProfile/UserProfile";
import "./chatBody.css";

function ChatBody() {
  return (
    <div className="main_chatbody">
      <ChatList />
      <ChatContent />
      <UserProfile />
    </div>
  );
}

export default ChatBody;
