import React from "react";
import Friends from "./Friends"



  const friends = [
    { name: 'Carl', age: 120, email: 'carl@rockclimbing.com' },
    { name: 'Owen', age: 48, email: 'owen@games.com' },
    { name: 'Jannon', age: 18, email: 'jannon@hello.com' },
  ];
  
   



function FriendsList() {

  return (
    <React.Fragment>
      <hr/>
      {friends.map((friends, index) =>
        <Friends name={friends.name}
        age={friends.age}
        email={friends.email}
        key={index}/>
        
        
        )}
    </React.Fragment>
  );
}



export default FriendsList;

