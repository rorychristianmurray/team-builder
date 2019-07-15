import React, { useState, useEffect } from "react";

const TeamOneForm = props => {
  const [formState, setFormState] = useState({
    name: "",
    role: "",
    email: "",
    isEditing: false
  });

  useEffect(() => {
    if (props.memberToEdit) {
      return setFormState(props.memberToEdit);
    }
  }, [props.memberToEdit]);

  const handleChanges = event => {
    console.log("TeamOneForm handleChanges formState", formState);
    setFormState({
      ...formState,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    props.updateTeam(formState);
    setFormState({
      name: "",
      role: "",
      email: ""
    });
    console.log("handleSubmit event", event);
  };

  const handleTeamMember = () => {
    if (!formState.isEditing) {
      // select last team member by id and add 1
      const id = props.teamOne[props.teamOne.length - 1].id + 1;
      props.addTeamMember([...props.teamOne, { id, ...formState }]);
    } else {
      const filterTeamMembers = props.teamOne.filter(member => {
        return member.id !== formState.id;
      });
      props.addTeamMember([...filterTeamMembers, formState]);
    }
  };

  console.log("TeamOneForm props", props);
  console.log("TeamOneForm formState", formState);

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input
          type="text"
          name="name"
          placeholder="name"
          onChange={handleChanges}
          value={formState.name}
        />
      </label>
      <label>
        Role
        <input
          type="text"
          name="role"
          placeholder="role"
          onChange={handleChanges}
          value={formState.role}
        />
      </label>
      <label>
        Email
        <input
          type="email"
          name="email"
          placeholder="email"
          onChange={handleChanges}
          value={formState.email}
        />
      </label>
      <button>Submit</button>
    </form>
  );
};

export default TeamOneForm;
