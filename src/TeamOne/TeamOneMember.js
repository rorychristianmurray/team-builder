import React from "react";
import "../index.css";

const TeamOneMember = props => {
  console.log("TeamOneMember props", props);

  const setEditMember = event => {
    event.preventDefault();
    props.setEditMember(props.member);
  };

  return (
    <div className="member">
      <div>Name: {props.member.name}</div>
      <div>Role: {props.member.role}</div>
      <button className="edit-button" onClick={setEditMember}>
        Edit
      </button>
    </div>
  );
};

export default TeamOneMember;
