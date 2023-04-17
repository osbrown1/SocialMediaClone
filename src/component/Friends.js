import React from "react";
import PropTypes from 'prop-types';


function Friends(friends) {

return (
  <React.Fragment>
    <h1>{friends.name}</h1>
    <h1>{friends.age}</h1>
    <h1>{friends.email}</h1>
  </React.Fragment>
)
};

Friends.propTypes = {
  name: PropTypes.string,
  age: PropTypes.string,
  email: PropTypes.string,
};

export default Friends;