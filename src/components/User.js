import React from 'react';
import '../App.css';

function User(props) {
    return (
      <div className="user">
        <div className="icon-container">{props.icon}</div>
        <span className="display-name">@{props.displayName}</span>
      </div>
    );
}

export default User;