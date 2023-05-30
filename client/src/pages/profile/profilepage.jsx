import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import newRequest from "../../utils/newRequest";
import "./Navbar.scss";
import "./ProfilePage.scss";

function Navbar() {
  // ...Navbar component code...

  return (
    // ...Navbar JSX code...
  );
}

const ProfilePage = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  return (
    <>
      <Navbar />
      <div className="profile-page">
        <div className="container">
          <h1>Profile</h1>
          <div className="profile-info">
            <div className="avatar">
              <img src={currentUser.user.img || "/img/noavatar.jpg"} alt="" />
            </div>
            <div className="user-info">
              <h2>{currentUser?.username}</h2>
              <p>Email: {currentUser?.email}</p>
              <p>Country: {currentUser?.country}</p>
              <p>Phone: {currentUser?.phone}</p>
              <p>Description: {currentUser?.desc}</p>
              {/* Display other user details */}
            </div>
          </div>
          <div className="dashboard">
            <h2>Dashboard</h2>
            <ul className="dashboard-menu">
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              {currentUser.user.isSeller && (
                <>
                  <li>
                    <Link to="/mygigs">Gigs</Link>
                  </li>
                  <li>
                    <Link to="/add">Add New Gig</Link>
                  </li>
                </>
              )}
              <li>
                <Link to="/orders">Orders</Link>
              </li>
              <li>
                <Link to="/messages">Messages</Link>
              </li>
              <li>
                <button onClick={handleLogout}>Logout</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
