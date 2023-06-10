import React, { useState, useEffect } from "react";

const RandomUserGenerator = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      const response = await fetch("https://randomuser.me/api/");
      const data = await response.json();
      console.log(data);
      setUser(data.results[0]);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <div>
      <button onClick={fetchUser}>Generate Random User</button>
      {user && (
        <div>
          <img src={user.picture.large} alt="User" />
          <p>
            Name: {user.name.first} {user.name.last}
          </p>
          <p>Email: {user.email}</p>
          <p>
            Location: {user.location.city}, {user.location.country}
          </p>
        </div>
      )}
    </div>
  );
};

export default RandomUserGenerator;
