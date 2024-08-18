import React, { useState, useEffect } from "react";
import "./App.css";
import { getUserById } from "./fireStore/user/getUserById";

function App() {
  const userId = "HSXg366yGD1aEl8PDwkA";
  const [user, setUser] = useState({});
  //get user from local storage
  const getUserFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem("userData")) || {};
  };

  // set user to local storage
  const setUserToLocalStorage = (userData) => {
    if (JSON.parse(localStorage.getItem("userData"))) {
      console.log("User already exists in local storage.");
      return;
    }
    localStorage.setItem("userData", JSON.stringify(userData));
  };

  //get user from firestore
  const fetchUserData = async () => {
    const userData = await getUserById(userId);
    if (userData) {
      setUser(userData);
    }
    return userData;
  };

  // useEffects function fetches user data from firestore
  useEffect(() => {
    let userData = getUserFromLocalStorage();
    if (Object.keys(userData).length === 0) {
      fetchUserData()
        .then((userData) => {
          console.log(userData);
          setUser(userData);
          setUserToLocalStorage(userData);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }, []);

  return <div className="App">{user.name}</div>;
}

export default App;
