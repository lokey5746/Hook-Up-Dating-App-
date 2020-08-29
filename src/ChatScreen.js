import React, { useState } from "react";
import "./ChatScreen.css";
import Avatar from "@material-ui/core/Avatar";

function ChatScreen() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      name: "Prayga",
      image:
        "https://m.media-amazon.com/images/M/MV5BNmVkODYwNDgtY2I2MC00Mjg4LWI4OTUtNzFhYTA3ODJhOTA2XkEyXkFqcGdeQXVyNDc2NzU1MTA@._V1_SY1000_CR0,0,743,1000_AL_.jpg",
      message: "Hello",
    },

    {
      name: "Prayga",
      image:
        "https://m.media-amazon.com/images/M/MV5BNmVkODYwNDgtY2I2MC00Mjg4LWI4OTUtNzFhYTA3ODJhOTA2XkEyXkFqcGdeQXVyNDc2NzU1MTA@._V1_SY1000_CR0,0,743,1000_AL_.jpg",
      message: "Hows it going ",
    },

    {
      message: "Fine ...",
    },
  ]);

  const handleSend = (e) => {
    e.preventDefault();
    setMessages([...messages, { message: input }]);
    setInput("");
  };
  return (
    <div className="chatScreen">
      <p className="chatScreen__timestamp">
        YOU MATCH WITH PRAYGA ON 10/08/2019
      </p>
      {messages.map((message) =>
        message.name ? (
          <div className="chatScreen__message">
            <Avatar
              className="chatScreen__image"
              alt="message.name"
              src={message.image}
            />
            <p className="chatScreen__text">{message.message}</p>
          </div>
        ) : (
          <div className="chatScreen__message">
            <p className="chatScreen__textUser">{message.message}</p>
          </div>
        )
      )}
      <div>
        <form className="chatScreen__input">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="chatScreen_inputFeild"
            placeholder="send message"
            type="text"
          />
          <button
            onClick={handleSend}
            type="submit"
            className="chatScreen__inputButton"
          >
            SEND
          </button>
        </form>
      </div>
    </div>
  );
}

export default ChatScreen;
