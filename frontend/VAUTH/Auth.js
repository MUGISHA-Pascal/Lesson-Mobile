import React, { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [userId, setUserId] = useState(null);
  const [loading ,setLoading]= useState(true)

  useEffect(() => {
    const intervalId = setInterval(() => {
    
        checkAndSetUserId();
      
    }, 5000); // Poll every 5 seconds

    // Cleanup function to clear the interval
    return () => {
      clearInterval(intervalId);
    };
  }, [userId]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (userId) {
        fetchUser();
      }
    }, 5000); // Poll every 5 seconds

    // Cleanup function to clear the interval
    return () => {
      clearInterval(intervalId);
    };
  }, [userId]);

  const checkAndSetUserId = async () => {
    try {
      const storedUserId = await AsyncStorage.getItem("user");
      const parsedUserId = storedUserId ? JSON.parse(storedUserId) : null;

      if (parsedUserId) {
        setUserId(parsedUserId);
   
      } else {
        console.log("No user ID found in AsyncStorage.");
        setLoading(false)
      }
    } catch (error) {
      console.error("Failed to retrieve user ID from AsyncStorage:", error);
    }
  };

  const fetchUser = async () => {
    try {
      const response = await axios.get(`http://192.168.1.67:4000/user/get_user/${userId}`);
      if (response.data.user && Object.keys(response.data.user).length !== 0) {
        setUser(response.data.user);
        // console.log("User data fetched successfully:", response.data.user);
        setLoading(false)
      } else {
        console.log("Failed to get the response or user data is empty");
        setLoading(true)
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };
// console.log(userId)
  const getUser = async (id) => {
   
    try {
      const response = await axios.get(`http://192.168.1.67:4000/user/get_user/${id}`);
      if (response.data.user && Object.keys(response.data.user).length !== 0) {
        setLoading(true)
        setUser(response.data.user);
        setTimeout(()=>{
          setLoading(false)
        },3000)
      } else {
        console.log("Failed to get the response");
        setLoading(false)
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const change = () => {
    AsyncStorage.removeItem("user");
    setUserId(null);
    setUser({});
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        change,
        userId,
        getUser,
        loading
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
