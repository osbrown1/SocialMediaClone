import React from "react";
import Home from "./Home";
import Notifications from "./Notifications";
import Messages from "./Messages";
import Search from "./Search";
import Tweet from "./Tweet";

function Header(){
  return (
    <div className='Header'>
      <Home />
      <Notifications />
      <Messages />
      <Search />
      <Tweet />
    </div>

  );
}

export default Header;