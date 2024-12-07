import React, { createContext, useContext, useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export const AuthContext = createContext({});
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(true);
  const [userId, setUserId] = useState(null)



  const getUser = async (id) => {
    try {
      const response = await axios.get(
        `http://10.12.73.148:4000/user/get_user/${id}`
      );
      if (response) { 
        // console.log(response.data);
        setUser(response.data)
      } else {
        console.log("Failed to get the response");
      }
    } catch (error) {
      
      if (error) {
        console.log(error)
        // Alert.alert("Failed to get user with that id");
      }
    }
  };
  useEffect(()=> {
   if(userId > 0) {

    getUser(userId)
   }
  }, [])

  const change = () => {
    setUser(!user)
  }
  return (
    <AuthContext.Provider value={{
      user,
      change,
      setUserId,
      userId
    }}>
      {children}
    </AuthContext.Provider>
  );
};




