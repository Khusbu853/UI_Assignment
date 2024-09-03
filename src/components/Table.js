import React, { useState } from "react";
import './styles/table.css';
import TableRow from "./TableRow";
import { tableData } from "./data/tableData";

const Table = () => {
  // State for filters
  const [nameFilter, setNameFilter] = useState("");
  const [cityFilter, setCityFilter] = useState("");
  const [genderFilter, setGenderFilter] = useState("");

  // Extract city names
  const Cities = [...new Set(tableData.map(member => member.city))];

  // Filter data based on 'search by name' and filter by 'City' and 'Gender'
  const filteredData = tableData.filter(member => {
    const fullName = `${member.firstname} ${member.lastname}`.toLowerCase();
    const location = `${member.city}, ${member.state}, ${member.pincode}`.toLowerCase();
    const gender = member.gender.toLowerCase();

    return (
      fullName.includes(nameFilter.toLowerCase()) &&
      (cityFilter === "" || location.includes(cityFilter.toLowerCase())) &&
      (genderFilter === "" || gender === genderFilter.toLowerCase())
    );
  });

  return (
    <div className="table-container">
      <h2>All Members</h2>
      <div className="table-filters">
        <input
          type="text"
          placeholder="Search by name . . ."
          value={nameFilter}
          onChange={(e) => setNameFilter(e.target.value)}
        />
        <select
          value={cityFilter}
          onChange={(e) => setCityFilter(e.target.value)}
        >
          <option value="">City</option>
          {Cities.map((city, index) => (
            <option key={index} value={city}>{city}</option>
          ))}
        </select>
        <select
          value={genderFilter}
          onChange={(e) => setGenderFilter(e.target.value)}
        >
          <option value="">Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>
      <div className="table-responsive">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Location</th>
              <th>Age</th>
              <th>Gender</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((member, index) => (
                <TableRow key={index} member={member} />
              ))
            ) : (
              <tr>
                <td colSpan="6" style={{ textAlign: "center" }}>No results found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;

