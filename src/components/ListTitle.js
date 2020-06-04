import React from "react";

function ListTitle(props) {
  return (
    <div className="title-cont">
      <div className="avatar-img">
        <img src={props.user.avatarImg} alt={props.user.name} />
      </div>
      <h1 className="title">{props.user.name}'s To Dos</h1>
    </div>
  );
}

export default ListTitle;
