import React from "react";

function Security() {
  return (
    <div className="content">
      <h1>Security</h1>

      <div className="form">
        <ul className="form-container">
          <li>
            <h2>Security Settings</h2>
          </li>

          <li>
            <label>Password</label>
            <input type="password" placeholder="Enter new password" />
          </li>

          <li>
            <label>Confirm Password</label>
            <input type="password" placeholder="Confirm password" />
          </li>

          <li>
            <button className="button primary">
              Update
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Security;
