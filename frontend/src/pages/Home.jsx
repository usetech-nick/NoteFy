import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Home = () => {
  const { user, logout } = useContext(AuthContext);
  return (
    <div>
      <h1>Welcome {user?.name || "Guest"} 👋</h1>
      {user ? (
        <>
          <p>You are logged in as: {user.email}</p>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <p>Please log in to access your dashboard.</p>
      )}
    </div>
  );
};

export default Home;
