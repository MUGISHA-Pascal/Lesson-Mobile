import React, { useState, useRef, useContext, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Image, TextInput, ScrollView, Alert } from 'react-native';
import AntD from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import DateTimePicker from 'react-native-ui-datepicker';
import dayjs from 'dayjs';
import PhoneInput from 'react-native-phone-number-input';
import Feather from 'react-native-vector-icons/Feather';
import { Dropdown } from 'react-native-element-dropdown';
import { AuthContext } from '../../VAUTH/Auth';
import * as DocumentPicker from 'expo-document-picker'
import { useRoute } from '@react-navigation/native';
import axios from 'axios';
import { AlertNotificationRoot, Toast } from 'react-native-alert-notification';

const FullInfo = ({ navigation }) => {
  const [courseDetails, setCourseDetails] = useState({file:null})
  const route = useRoute()
  const [fullname, setFullname] = useState(route.params.name);
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState(route.params.phone);
  const [gender, setGender] = useState('');
  const [date, setDate] = useState(dayjs().toDate());
  const [open, setOpen] = useState(false);

  const [fn,setFn] = useState(false)
  const [en,setEn] = useState("")
  const [fe,setFe] = useState(false)
  const [ee,setEe] = useState("")
  const [fb,setFb] = useState(false)
  const [eb,setEb] = useState("")
  const [fg,setFg] = useState(false)
  const [eg,setEg] = useState("")
  const phoneInput = useRef(null);
  const genderArray = [
    { label: "Male", value: "Male" },
    { label: "Female", value: "Female" },
    { label: "Decide to not say", value: "Decide to not say" }
  ];
  const [isFocus, setIsFocus] = useState(false);
  const [profileImage, setProfileImage] = useState(null);
  const [user, setUser] = useState()
  

  const handleSubmit = async () => {
    let old = "2008-01-1"; // Example input
    let go = false;
    const age =new Date(date).getFullYear() - new Date(old).getFullYear()
    
    if(age >= 15) {
      setEb("Please use appropriate year");
      setTimeout(() => {
        setEb("");
      }, 3000);
      
    }else
    if (gender.trim() === "") {
      setEg("Please gender is required");
      
      setTimeout(() => {
        setEg("");
      }, 3000);
    }else{
 try {
      const response = await axios.put('http://192.168.1.67:4000/user/fill_profile', {
        fullname,
        nickname,
        email,
        phone_number: phoneNumber,
        gender,
        id : route.params.id
      
      });
      // Alert.alert('Success', 'Profile updated successfully!');
      console.log(response.data);
      navigation.navigate('Pin',{id: route.params.id}); // Navigate to the next screen
    } catch (error) {
      Alert.alert('Error', 'Failed to update profile. Please try again.');
      console.error(error);
    }
    }
     
   
   
  };

  const handleFilePick = async () => {
    console.log('Opening file picker...');
    try {
      const res = await DocumentPicker.getDocumentAsync({
        type: "*/*", // Allow all file types
      });

        console.log('File selected:', res);
        // setSelectedFile(res.assets[0].name)
        setProfileImage(res)
        
        Alert.alert('File Selected', `You selected: ${res.name}`);
      uploadImage(profileImage)
    } catch (err) {
      console.error('Error picking file:', err);
      Alert.alert('Error', 'Failed to pick file. Please try again.');
    }
  };


  
  
  
  const uploadImage = async (image) => {
    const formData = new FormData();
    formData.append('ProfilePicture', {
      uri: image.uri,
      type: image.type,
      name: image.name,
    });
   console.log(image.uri)
    try {
      const response = await axios.put(`http://192.168.1.67:4000/user/upload_profile/${route.params.id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      // Alert.alert('Success', 'Profile image uploaded successfully!');
      console.log(response.data);

    } catch (error) {
      // Alert.alert('Error', 'Failed to upload image. Please try again.');
      Toast.show({
        type: ALERT_TYPE.ERROR,
        title: 'Error',
        textBody: 'Failed to upload image. Please try again.',
      })
      
      console.error(error);
    }
  };



  return (
    <AlertNotificationRoot>
    
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginTop: 15, flexDirection: "row", alignItems: "center", marginHorizontal: 30 }}>
        <AntD style={{ fontSize: 25, marginRight: 6 }} name='arrowleft' />
        <Text style={{ fontSize: 21, fontWeight: 600, color: "#202244" }}>Fill Your Profile</Text>
      </TouchableOpacity>

      <View style={styles.containerTwo}>
        <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
          <View style={styles.All_combined_container}>
            <View style={{ justifyContent: "center", alignItems: "center", marginBottom: 10, marginTop: 34 }}>
            <View>
          <Image
            width={150}
            height={150}
            style={{ borderRadius: 100, opacity: 0.5 }}
            source={profileImage || { uri: "https://i.pinimg.com/564x/15/0f/a8/150fa8800b0a0d5633abc1d1c4db3d87.jpg" }}
          />
          <TouchableOpacity onPress={handleFilePick} style={{ position: "absolute", right: 0, bottom: 5, fontSize: 30, backgroundColor: "#167F71", padding: 7, borderRadius: 50 }}>
            <Feather name='edit' style={{ fontSize: 25, color: "white" }} />
          </TouchableOpacity>
        </View>
            </View>

            <View style={{ marginTop: 40 }}>
              <View style={{...styles.inputContainer,borderColor:"rgba(236, 236, 236,0.4)",borderWidth:2 }}>
                <TextInput
                  style={{ ...styles.input, paddingLeft: 3 }}
                  placeholder="Full Name"
                  placeholderTextColor="#aaa"
                  value={fullname}
                  onChangeText={setFullname}
                  editable = {false}
                  
                  
                />
              </View>

              <View style={{...styles.inputContainer,borderColor:fn ?  "#0961F5":"rgba(236, 236, 236,0.4)", borderWidth:2}}>
                <TextInput
                  style={{ ...styles.input, paddingLeft: 3,}}
                  placeholder="Nick Name (Optional)"
                  placeholderTextColor="#aaa"
                  value={nickname}
                  onChangeText={setNickname}
                  onFocus={()=>setFn(true)}
                  onBlur={()=>setFn(false)}
                />
              </View>

              <TouchableOpacity onPress={() => setOpen(true)} style={{...styles.inputContainer,borderColor:eb ? "red" : fb ?  "#0961F5":"rgba(236, 236, 236,0.4)", borderWidth:2}}>
                <AntD name="calendar" size={23} color="#545454" style={styles.icon} />
                <Text style={{ opacity: 0.4 }}>{dayjs(date).format('YYYY-MM-DD')}</Text>
              </TouchableOpacity>
            </View>

             {eb&&<Text style={{marginTop:-18,marginBottom:10,marginLeft:5,color:"red"}}>{eb}</Text>}
            
            

            <View style={{...styles.inputContainer,borderColor:fe ?  "#0961F5":"rgba(236, 236, 236,0.4)", borderWidth:2}}>
              <Fontisto name="email" size={23} color="#545454" style={styles.icon} />
              <TextInput
                style={styles.input}
                placeholder="Email (Optional)"
                placeholderTextColor="#aaa"
                value={email}
                onChangeText={setEmail}
                onFocus={()=>setFe(true)}
                onBlur={()=>setFe(false)}
              />
            </View>
            

            <View style={styles.phoneInputContainer}>
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
                // autoFocus
                disabled
              />
            </View>

            <View style={{ zIndex: 10 }}>
              <Dropdown
                style={[styles.dropdown,{borderColor:eg ? "red" : fg ?  "#0961F5":"rgba(236, 236, 236,0.4)", borderWidth:2}]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={genderArray}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? 'Gender' : '...'}
                searchPlaceholder="Search..."
                value={gender}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                containerStyle={{ position: "absolute", bottom: 150, borderRadius: 10 }}
                onChange={item => {
                  setGender(item.value);
                  setIsFocus(false);
                }}
                renderLeftIcon={() => <></>}
              />
            </View>
             {eg&&<Text style={{marginTop:-18,marginBottom:10,marginLeft:5,color:"red"}}>{eg}</Text>}
            
            

            <View style={styles.stepsContainer}>
              <TouchableOpacity onPress={handleSubmit} style={styles.nextButton}>
                <View></View>
                <View></View>
                <View style={{ marginHorizontal: 30 }}>
                  <Text style={{ color: "#FFFFFF", fontWeight: "600", fontSize: 18, textAlign: "center" }}>Continue</Text>
                </View>
                <View style={styles.nextButtonInsider}>
                  <AntD name="arrowright" style={styles.arrowIcon} />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>

      {open && (
        <View style={styles.modal}>
          <View style={styles.modal2}>
            <DateTimePicker
              mode="single"
              date={date}
              onChange={(params) => {
                setDate(params.date);
                setOpen(false);
              }}
            />
            <TouchableOpacity onPress={() => setOpen(false)} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
    </AlertNotificationRoot>
  );
};

export default FullInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F9FF',
    height: Dimensions.get("screen").height,
    width: "100%"
  },
  containerTwo: {
    backgroundColor: '#F5F9FF',
    justifyContent: 'center',
    alignItems: 'center',
    height: "100%",
    width: "100%",
  },
  All_combined_container: {
    width: '100%',
    paddingVertical: 20,
    marginBottom: 150
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
  input: {
    flex: 1,
    color: '#000',
  },
  modal: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: '#202244CC',
    alignItems: 'center',
    zIndex: 999,
    height: Dimensions.get("screen").height,
    width: "100%"
  },
  modal2: {
    backgroundColor: 'white',
    padding: 20,
    alignItems: 'center',
    zIndex: 9999,
    height: "60%",
    width: "90%",
    borderRadius: 40,
    marginTop: 50
  },
  closeButton: {
    backgroundColor: '#0961F5',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  closeButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
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
    height: 60,
    width: "100%"
  },
  textInput: {
    fontSize: 16,
    padding: 0,
    backgroundColor: "white",
  },
  dropdown: {
    height: 60,
    backgroundColor: 'white',
    borderWidth: 0,
    paddingHorizontal: 8,
    marginBottom: 23,
    borderRadius: 12,
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 16,
    opacity: 0.6
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});