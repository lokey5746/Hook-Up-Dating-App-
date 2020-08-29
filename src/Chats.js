import React from "react";
import Chat from "./Chat";

function Chats() {
  return (
    <div className="chats">
      <Chat
        name="Prayga"
        message="Hello"
        timestamp="30 minute ago"
        profilePic="https://m.media-amazon.com/images/M/MV5BNmVkODYwNDgtY2I2MC00Mjg4LWI4OTUtNzFhYTA3ODJhOTA2XkEyXkFqcGdeQXVyNDc2NzU1MTA@._V1_SY1000_CR0,0,743,1000_AL_.jpg"
      />

      <Chat
        name="Naba"
        message="Hello Baby"
        timestamp="10 Second ago"
        profilePic="https://static.toiimg.com/thumb/msid-67611616,width-800,height-600,resizemode-75,imgsize-210667,pt-32,y_pad-40/67611616.jpg"
      />

      <Chat
        name="Zayan"
        message="What's up bro!!!"
        timestamp="10 Second ago"
        profilePic="https://www.somagnews.com/wp-content/uploads/2020/06/38-10-e1592081237169.jpg"
      />

      <Chat
        name="Lokey"
        message="What the hell..."
        timestamp="5 minute ago"
        profilePic="https://filmdaily.co/wp-content/uploads/2020/02/loki-1-cast.jpg"
      />

      <Chat
        name="Thor"
        message="I am the odinson"
        timestamp="10 Minute ago"
        profilePic="https://www.indiewire.com/wp-content/uploads/2019/05/06-thor-avengers-endgame.w700.h467.jpg"
      />
    </div>
  );
}

export default Chats;
