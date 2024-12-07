import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Image, TextInput,Alert, ScrollView } from 'react-native';
import AntD from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';
import { useState } from 'react'
import CheckBox from '@react-native-community/checkbox';
import { AuthContext } from '../../VAUTH/Auth';
import axios from 'axios'

const   Login = ({navigation}) => {
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [toggleCheckBox, setToggleCheckBox] = useState(false)
  const {change, setUserId} = useContext(AuthContext)

  const [email, setEmail] = useState('')
  const [password , setPassword]  = useState('')
  const handleLogin = async () => {
    try {
      const response = await axios.post('http://10.12.73.148:4000/auth/login', {
        email,
        password_hash:password,
      });
      Alert.alert("Logged IN successfully")
      setUserId(response.data.user.id)
      change()
      navigation.goBack()
    } catch (error) {
      Alert.alert('Error', 'Failed to log in. Please check your credentials.');
    }
  };

  return (
    <View style={styles.container}>
 <TouchableOpacity style={{ marginTop: 69, flexDirection: "row", alignItems: "center",marginHorizontal:30 }}>
        <AntD style={{ fontSize: 25, marginRight: 6 }} name='arrowleft' />
        <Text style={{ fontSize: 21, fontWeight: 600, color: "#202244" }}>Sign In</Text>
      </TouchableOpacity>
<View style={styles.containerTwo}>

<ScrollView style={{}}>
      <View style={styles.All_combined_container}>
       
        <View style={{ justifyContent: "center", alignItems: "center", marginBottom: 30, marginTop: 94 }}>
          <Image source={require("../../assets/LOGOTEXT.png")} style={{ height: 80, width: 200 }} />
        </View>

        <Text style={styles.Text_Titile}>Let’s Sign In!</Text>
        <Text style={{ color: "#545454", fontWeight: "700", fontSize: 14 }}>Login to Your Account to Continue your Courses</Text>
        <View style={{ marginTop: 40 }}>

        <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#aaa"
          value={email}
          onChangeText={setEmail}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#aaa"
          secureTextEntry={!isPasswordVisible}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={() => setPasswordVisible(!isPasswordVisible)}>
          <Feather name={isPasswordVisible ? "eye" : "eye-off"} size={20} color="#545454" style={styles.icon} />
        </TouchableOpacity>
      </View>


          <View style={{ flexDirection: "row", justifyContent:"space-between" }}>
          <View style={{ flexDirection: "row" }}>
          <TouchableOpacity onPress={() => setToggleCheckBox(!toggleCheckBox)}>
              {toggleCheckBox ? <><Feather name="check-square" style={{ fontSize: 25, color: "#167F71", }} /></> : <><Feather name="square" style={{ fontSize: 25, color: "#167F71", }} /></>}
            </TouchableOpacity>
            <Text style={{ color: "#545454", fontWeight: 800, fontSize: 13, paddingLeft: 5, paddingTop: 2 }}>Remember Me</Text>

          </View>

          <View >
            <TouchableOpacity onPress={()=>navigation.navigate("VerifyType")}>
              <Text style={{color:"#545454",fontSize:13,fontWeight:800}}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>
          </View>

        </View>


        <View style={styles.stepsContainer}>


          <TouchableOpacity onPress={handleLogin} style={styles.nextButton}>
            <View style={{ marginHorizontal: 30 }}>
              <Text style={{ color: "#FFFFFF", fontWeight: "600", fontSize: 18, textAlign: "center" }}>Sign In</Text>
            </View>
            <View style={styles.nextButtonInsider}>
              <AntD name="arrowright" style={styles.arrowIcon} />
            </View>
          </TouchableOpacity>
          <Text style={{ paddingVertical: 20, color: "#545454", fontSize: 18, fontWeight: 800 }}>Or Continue With</Text>

          <View style={styles.continueWith}>
            
            <TouchableOpacity style={styles.LoginButton}>
            <View style={styles.nextButtonInsider}>
            <Image style={{width:20,height:20}} source={require("../../assets/google.png")} />
           </View>
          
           </TouchableOpacity>
 
           <TouchableOpacity style={styles.LoginButton}>
            <View style={styles.nextButtonInsider}>
            <Image style={{width:20,height:20}} source={require("../../assets/apple.png")} />
           </View>
           </TouchableOpacity>

            </View>

          <TouchableOpacity onPress={()=>navigation.navigate("Register")} style={styles.nextButton2}>
            <Text style={{ color: "#545454", fontWeight: "800", fontSize: 14, textAlign: "center" }}>Already have an Account?</Text>
            <Text style={{ color: "#0961F5", fontWeight: "800", fontSize: 14, textAlign: "center", textDecorationLine: 'underline', paddingLeft: 5 }}>SIGN UP</Text>
          </TouchableOpacity>
        </View>
        
      </View>
      </ScrollView>
</View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F9FF',
  
    height: "100%",
    width: "100%"
  },
  containerTwo: {
    
    backgroundColor: '#F5F9FF',
    justifyContent: 'center',
    alignItems: 'center',
    height: "100%",
    width: "100%"
  },
  All_combined_container: {
    width: '100%',
    paddingVertical: 20,

  
    marginBottom: 100,


  },
  All_combined_container2: {
    width: '100%',
    padding: 20,
    position: "absolute",
    top: 94,


  },
  Text_Titile: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#202244',
    marginBottom: 10,
    textAlign: 'left',

  },
  subText_Titile: {
    fontSize: 14,
    color: '#545454',
    marginBottom: 20,
    textAlign: 'center',
  },
  stepsContainer: {

    alignItems: 'center',
    marginTop: 35,
    marginHorizontal: 10,
    justifyContent: "center"
  },
  steps: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  stepActive: {
    backgroundColor: '#0961F5',
    width: 20,
    height: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  stepInactive: {
    backgroundColor: '#D5E2F5',
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  nextButton: {
    backgroundColor: '#0961F5',
    width: Dimensions.get("screen").width - 60,
    height: 60,
    borderRadius: 100,
    justifyContent: "space-between",
    alignItems: 'center',
    flexDirection: "row",
  },

  LoginButton: {
    height: 60,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: 'center',
    flexDirection: "row",
    marginHorizontal:10
  },
  nextButton2: {

    width: Dimensions.get("screen").width - 60,
    height: 60,
    borderRadius: 100,
    alignItems: 'center',
    flexDirection: "row",
    justifyContent: "center"
  },
  nextButtonInsider: {
    backgroundColor: 'white',
    width: 47,
    height: 47,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8
  },
  arrowIcon: {
    fontSize: 30,
    color: '#0961F5',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: 'white',
    marginBottom: 18,

    height: 60,

  },
  icon: {
    marginRight: 10,
    fontSize: 20
  },
  input: {
    flex: 1,
    color: '#000',
  },
  continueWith:{
    flexDirection:"row",
    justifyContent:"space-between"

  }
});
