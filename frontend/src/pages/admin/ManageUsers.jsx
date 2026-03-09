import React from "react";


const ManageUsers = () => {
  return (
    <div className="dashboard-container">
      <h1>👥 Manage Users</h1>

      <table className="admin-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Rahul</td>
            <td>rahul@gmail.com</td>
            <td>User</td>
            <td>
              <button className="delete-btn">Delete</button>
            </td>
          </tr>

          <tr>
            <td>Admin</td>
            <td>admin@gmail.com</td>
            <td>Admin</td>
            <td>
              <button className="delete-btn">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ManageUsers;