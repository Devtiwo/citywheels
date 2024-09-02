import React, { useEffect } from "react";
import axios from "axios";
import { baseUrl } from "../Redux/authSlice";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");
      try {
        const response = await axios.get(`${baseUrl}/user/dashboard`, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        });
        if (response.data.status) {
          console.log("welcome");
        } else {
          localStorage.removeItem("token");
          navigate("/login");
        }
      } catch (err) {
        console.error("Error fetching dashboard:", err);
        navigate("/login");
      }
    };
    fetchData();
  }, [navigate]);
  return <div>Dashboard</div>;
};

export default Dashboard;
