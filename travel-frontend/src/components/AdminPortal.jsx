import React from "react";
import "./admin.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import io from "socket.io-client";
import { toast, ToastContainer } from "react-toastify";

// Import toastify css file
import "react-toastify/dist/ReactToastify.css";

// toast-configuration method,
// it is compulsory method.

const AdminPortal = () => {
  const [statistics, setStatistics] = useState({
    totalUsers: 0,
    activeUsers: 0,
  });
  const [recentActivities, setRecentActivities] = useState([]);

  useEffect(() => {
    const socket = io("https://travel-amc4.onrender.com"); // Replace with your server's URL

    // Listen for 'statistics' event from the server
    // socket.on('statistics', (data) => {
    //     setStatistics(data);
    // });

    // Listen for 'recentActivities' event from the server
    socket.on("form submitted", (data) => {
      setRecentActivities((prevData) => ({ ...prevData, data }));
      // toast(data.details + " inquired about trip to " + data.destination);
      toast(data.details + " inquired about trip to " + data.destination, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        toastId: "success1",
      });
    });

    // Listen for 'systemInformation' event from the server
    socket.on("systemInformation", (data) => {
      setSystemInformation(data);
    });
  });

  return (
    <div className="app-container">
      <header>
        <h1>Admin Dashboard</h1>
      </header>

      <nav>
        <Link to="/adminportal">Dashboard</Link>
        <Link to="/users">Users</Link>
      </nav>
      <div>
        <h2>Dashboard</h2>

        <div className="dashboard-content">
          <div className="card">
            <h3>Statistics</h3>
            <p>Total Users: {statistics.totalUsers}</p>
            <p>Active Users: {statistics.activeUsers}</p>
          </div>

          <div className="card">
            <h3>Recent Activities</h3>
            <ul>
              <li>
                {recentActivities.data &&
                  recentActivities.data.details +
                    " inquired about trip to " +
                    recentActivities.data.destination}
              </li>
            </ul>
          </div>

          <div className="card">
            <h3>System Information</h3>
            <p>Server Status: Online</p>
            <p>Database Connection: Stable</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPortal;
