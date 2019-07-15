import React, { useState } from "react";
import TeamOneMember from "./TeamOneMember";
import TeamOneForm from "./TeamOneForm";

const TeamOneList = props => {
  const [teamOne, setTeamOne] = useState([
    {
      name: "Rory",
      age: 30,
      email: "rory@lambda.com",
      role: "Front End Dev",
      id: 1
    },
    {
      name: "Abbey",
      age: 30,
      email: "abbey@lambda.com",
      role: "UX Designer",
      id: 2
    }
  ]);

  const [memberToEdit, setMemberToEdit] = useState("");

  const updateTeam = member => {
    console.log("TeamOneList member", member);
    setTeamOne([...teamOne, member]);
  };

  const addTeamMember = member => {
    console.log("TeamOneList member", member);
    setTeamOne([...teamOne, member]);
  };

  const setEditMember = member => {
    setMemberToEdit(member);
  };

  console.log("TeamOneList teamOne", teamOne);
  console.log("TeamOneList memberToEdit", memberToEdit);
  return (
    <div className="team-list">
      Team One incoming
      {teamOne.map(member => {
        return (
          <TeamOneMember
            member={member}
            key={member.name}
            setEditMember={setEditMember}
          />
        );
      })}
      <TeamOneForm
        updateTeam={updateTeam}
        memberToEdit={memberToEdit}
        teamOne={teamOne}
        addTeamMember={addTeamMember}
      />
    </div>
  );
};

export default TeamOneList;
