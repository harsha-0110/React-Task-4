import React, { useState, useEffect } from 'react';

const TableComponent = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/users')
      .then(response => response.json())
      .then(data => {
        if (Array.isArray(data)) {
          setUsers(data);
        } else if (data && Array.isArray(data.users)) {
          setUsers(data.users);
        }
      });
  }, []);

  return (
    <div>
      <h1>User Records</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Maiden Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Username</th>
            <th>Password</th>
            <th>Birth Date</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.maidenName}</td>
              <td>{user.age}</td>
              <td>{user.gender}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.username}</td>
              <td>{user.password}</td>
              <td>{user.birthDate}</td>
              <td>
                {`${user.address.city}, ${user.address.state} - ${user.address.postalCode}`}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
