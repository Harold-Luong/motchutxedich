import React, { useState, useEffect } from "react";
import "./App.css";
import "./component/map/MapTravel";
import ProvincesCheckBox from "./component/map/ProvincesCheckBox";
import { getUserById } from "./fireStore/user/getUserById";

function App() {
  const userId = "HSXg366yGD1aEl8PDwkA";
  const [user, setUser] = useState({});

  //get user from firestore
  const fetchUserFromStore = async () => {
    return await getUserById(userId);
  };

  // useEffects function fetches user data from firestore
  useEffect(() => {
    const getUserFromLocalStorage = () => {
      return JSON.parse(localStorage.getItem("userData")) || {};
    };
    let userLocal = getUserFromLocalStorage();
    setUser(userLocal);
    // if user doesn't exist in local storage, fetch from firestore and set to local storage
    if (Object.keys(userLocal).length === 0) {
      fetchUserFromStore()
        .then((userData) => {
          setUser(userData);
          console.log(userData);
          localStorage.setItem("userData", JSON.stringify(userData));
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }, []);

  return (
    <div className="App">
      <ProvincesCheckBox provinces={user.selectedProvinces} />
    </div>
  );
}

export default App;
