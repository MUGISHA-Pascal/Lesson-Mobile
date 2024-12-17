import React, { useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Image, TextInput, ScrollView } from 'react-native';
import AntD from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';
import { useState } from 'react'
import CheckBox from '@react-native-community/checkbox';
import PhoneInput from 'react-native-phone-number-input';
import { useRoute } from '@react-navigation/native';
import axios from 'axios';
import Message_info from '../Users/Major/Mine/Messages';


const Phone = ({ navigation }) => {
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [toggleCheckBox, setToggleCheckBox] = useState(false)
  const [phoneNumber, setPhoneNumber] = useState('');
  const [focusPhone,setFocusPhone] = useState(false)
  const [nophone, setNophone] = useState("")
  const [userExist,setExist] = useState("")
  const phoneInput = useRef(null);
  const route = useRoute()

  const insertData = async () => {
  

   if(phoneNumber.trim() == ""){
     setNophone("The phone number is required")
     setTimeout(() => {
      setNophone(
        ""
      )
     }, 3000);
   }else{
    try {
      const responce = await axios.post("http://192.168.1.78:4000/auth/usersignup", {
        username: route.params.name,
        phone_number: phoneNumber,
  
      })
   if(responce.data.success){
    console.log(responce.data)
    if(responce.data.user.success = 1){
    navigation.navigate("FullInfo", {name:route.params.name, id : responce.data.user.id, phone:phoneNumber})
    }

   }else{
    
    setExist("yes")
    setTimeout(()=>{
      setExist("")

    },3000)

   }
    } catch (error) {
      console.log(error)
    }
   }
  }

  return (
    <View style={styles.container}>

      <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginTop: 15, flexDirection: "row", alignItems: "center", marginHorizontal: 30 }}>
        <AntD style={{ fontSize: 25, marginRight: 6 }} name='arrowleft' />
        <Text style={{ fontSize: 21, fontWeight: 600, color: "#202244" }}>Nemero</Text>
      </TouchableOpacity>
      <View style={styles.containerTwo}>
        <ScrollView style={{}} showsVerticalScrollIndicator={false}>
          <View style={styles.All_combined_container}>


            <View style={{ marginTop: 20 }}>
              <Text style={{ fontSize: 25, marginVertical: 10, fontWeight: 400, color: "#202244" }}>
                Andikamo Nemero yawe ya telefone
              </Text> 

              {userExist && <Message_info type="error" message="The user with this phone number exist" />
              }
              <View style={{...styles.phoneInputContainer,borderColor:nophone ? "red" : focusPhone ?  "#0961F5":"rgba(236, 236, 236,0.4)", borderWidth:2}}>
                <PhoneInput
                  placeholder="Phone number"
                  onChangeText={setPhoneNumber}
                  style={styles.phoneInput}
                  keyboardType="phone-pad"
                  ref={phoneInput}
                  defaultValue={phoneNumber}
                  containerStyle={styles.phoneContainer}
                  textContainerStyle={styles.textInput}
                  onChangeFormattedText={setPhoneNumber}
                  defaultCode="RW"
                  layout="first"
                  withShadow
                  autoFocus
                  textInputProps={{
                                  
                    onFocus:()=>setFocusPhone(true),
                    onBlur:()=>setFocusPhone(false)
                  }}
                />
              </View>
                {nophone&&<Text style={{marginTop:-18,marginBottom:10,marginLeft:5,color:"red"}}>{nophone}</Text>}



              {/* <View style={{ flexDirection: "row" }}>
            <TouchableOpacity onPress={() => setToggleCheckBox(!toggleCheckBox)}>
              {toggleCheckBox ? <><Image style={{ width: 25, height: 25 }} source={require("../../assets/check.png")} /></> : <><Feather name="circle" style={{ fontSize: 25, color: "#545454", }} /></>}
            </TouchableOpacity>
            <Text style={{ color: "#545454", fontWeight: 800, fontSize: 13, paddingLeft: 5, paddingTop: 2 }}>Agree to Terms & Conditions</Text>

          </View> */}

            </View>


            <View style={styles.stepsContainer}>


              <TouchableOpacity onPress={insertData} style={styles.nextButton}>
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


            </View>

          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Phone;

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
    marginHorizontal: 10
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
  continueWith: {
    flexDirection: "row",
    justifyContent: "space-between"

  },
  phoneInputContainer: {
    alignItems: "center",
    backgroundColor: "#F5F9FF",
    height: 60,
    marginBottom: 30,
    borderRadius: 12,
    shadowOpacity: 0
  },
  phoneInput: {
    backgroundColor: "red"
  },
  phoneContainer: {
    borderRadius: 10,
    marginBottom: 20,
    paddingRight: 20,
    backgroundColor: "white",
    height: 56,
    width: "100%"
  },
  textInput: {
    fontSize: 16,
    padding: 0,
    backgroundColor: "white",
  },
});
