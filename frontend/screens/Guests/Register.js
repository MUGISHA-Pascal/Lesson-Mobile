import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Image, TextInput, ScrollView } from 'react-native';
import AntD from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';
import { useState } from 'react'
import CheckBox from '@react-native-community/checkbox';


const Register = ({navigation}) => {
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [toggleCheckBox, setToggleCheckBox] = useState(false)
  const [name,setName] = useState("")
  const [focususername,setFocusUsername] = useState(false)
    const [noname, setNoname] = useState("")
   const goooo = () =>{
    if(name.trim()!=""){
      navigation.navigate("Phone",{name:name})
    }else{
      setNoname("Please your full name is required")
      setTimeout(()=>{
        setNoname("")

      },3000)
    }
   }
  return (
    <View style={styles.container}>

<TouchableOpacity onPress={() => navigation.goBack()} style={{ marginTop: 69, flexDirection: "row", alignItems: "center",marginHorizontal:30 }}>
        <AntD style={{ fontSize: 25, marginRight: 6 }} name='arrowleft' />
        <Text style={{ fontSize: 21, fontWeight: 600, color: "#202244" }}>Sign Up</Text>
      </TouchableOpacity>
 <View style={styles.containerTwo}>
 <ScrollView style={{}} showsVerticalScrollIndicator = {false}>
      <View style={styles.All_combined_container}>
       
        <View style={{ justifyContent: "center", alignItems: "center", marginBottom: 30, marginTop: 94 }}>
          <Image source={require("../../assets/LOGOTEXT.png")} style={{ height: 80, width: 200 }} />
        </View>

        <Text style={styles.Text_Titile}>Getting Started.!</Text>
        <Text style={{ color: "#545454", fontWeight: "700", fontSize: 14 }}>Create an Account to Continue your allCourses</Text>
        <View style={{ marginTop: 40 }}>

          <View style={{...styles.inputContainer,borderColor:noname ? "red" : focususername ?  "#0961F5":"rgba(236, 236, 236,0.4)", borderWidth:2}}>
            <Fontisto name="person" size={20} color="#545454" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Amazina yawe"
              placeholderTextColor="#aaa"
              onChangeText={setName}
                       
                onFocus = {()=>setFocusUsername(true)}
                onBlur ={()=>setFocusUsername(false)}
            
            />
          </View>


 {noname&&<Text style={{marginTop:-18,marginBottom:10,marginLeft:5,color:"red"}}>{noname}</Text>}

          {/* <View style={{ flexDirection: "row" }}>
            <TouchableOpacity onPress={() => setToggleCheckBox(!toggleCheckBox)}>
              {toggleCheckBox ? <><Image style={{ width: 25, height: 25 }} source={require("../../assets/check.png")} /></> : <><Feather name="circle" style={{ fontSize: 25, color: "#545454", }} /></>}
            </TouchableOpacity>
            <Text style={{ color: "#545454", fontWeight: 800, fontSize: 13, paddingLeft: 5, paddingTop: 2 }}>Agree to Terms & Conditions</Text>

          </View> */}

        </View>


        <View style={styles.stepsContainer}>


          <TouchableOpacity onPress={goooo} style={styles.nextButton}>
            <View>

            </View>
            <View>

            </View>
            <View style={{ marginHorizontal: 30 }}>

              <Text style={{ color: "#FFFFFF", fontWeight: "600", fontSize: 18, textAlign: "center" }}>Komeza</Text>
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

          <TouchableOpacity onPress={()=>navigation.navigate("Login",{name:name})} style={styles.nextButton2}>
            <Text style={{ color: "#545454", fontWeight: "800", fontSize: 14, textAlign: "center" }}>Already have an Account?</Text>
            <Text style={{ color: "#0961F5", fontWeight: "800", fontSize: 14, textAlign: "center", textDecorationLine: 'underline', paddingLeft: 5 }}>SIGN IN</Text>
          </TouchableOpacity>
        </View>
        
      </View>
      </ScrollView>
 </View>
    </View>
  );
};

export default Register;

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
