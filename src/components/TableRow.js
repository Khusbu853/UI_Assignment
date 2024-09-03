import React from "react";

const calculateAge = (dob) => {
  const birthDate = new Date(dob);
  const diffMs = Date.now() - birthDate.getTime();
  const ageDt = new Date(diffMs);

  return Math.abs(ageDt.getUTCFullYear() - 1970);
};

const TableRow = ({ member }) => {
  const fullName = `${member.firstname} ${member.lastname}`;
  const location = `${member.city}, ${member.state}, ${member.pincode}`;
  const age = `${calculateAge(member.dateOfBirth)} yrs`;

  return (
    <tr>
      <td>{fullName}</td>
      <td>{member.email}</td>
      <td>{member.mobile}</td>
      <td>{location}</td>
      <td>{age}</td>
      <td>{member.gender}</td>
    </tr>
  );
};

export default TableRow;
