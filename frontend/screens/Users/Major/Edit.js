import React, { useState, useRef, useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Image, TextInput, ScrollView } from 'react-native';
import AntD from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import DateTimePicker from 'react-native-ui-datepicker'; // Your existing Date Picker
import dayjs from 'dayjs';
import PhoneInput from 'react-native-phone-number-input';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import { AuthContext } from '../../../VAUTH/Auth';

import { Dropdown } from 'react-native-element-dropdown';

import Icon from 'react-native-vector-icons/Ionicons'
const Edit = ({ navigation }) => {
  const {userId}  = useContext(AuthContext)

  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [date, setDate] = useState(dayjs().toDate()); // Initialize date with the current date
  const [open, setOpen] = useState(false); // State to control modal visibility
  const [number, setNumber] = useState("");
  const [phoneNumber, setPhoneNumber] = useState('');
  const [gender, setGender] = useState("")
  const phoneInput = useRef(null);
  const genderArray = [
    { label: "Male", value: "Male" },
    { label: "Female", value: "Female" },
    { label: "Decide to not say", value: "Decide to not say" }
  ]
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginTop: 20, flexDirection: "row", alignItems: "center",marginHorizontal:20 }}>
        <AntD style={{ fontSize: 25, marginRight: 6 }} name='arrowleft' />
        <Text style={{ fontSize: 21, fontWeight: 600, color: "#202244" }}>Fill Your Profile</Text>
      </TouchableOpacity>

      <View style={styles.containerTwo}>
        <ScrollView showsVerticalScrollIndicator={false}

          showsHorizontalScrollIndicator={false} >
          <View style={styles.All_combined_container}>

            <View style={{ justifyContent: "center", alignItems: "center", marginBottom: 10, marginTop: 34 }}>

              <View>
                <Image width={150} height={150} style={{ borderRadius: 100, opacity: 0.5 }} source={{ uri: "https://i.pinimg.com/564x/15/0f/a8/150fa8800b0a0d5633abc1d1c4db3d87.jpg" }} />
                <TouchableOpacity style={{ position: "absolute", right: 0, bottom: 5, fontSize: 30, backgroundColor: "#167F71", padding: 7, borderRadius: 50 }}>
                  <Feather name='edit' style={{ fontSize: 25, color: "white" }} />
                </TouchableOpacity>
              </View>
            </View>


            <View style={{ marginTop: 40 }}>
              <View style={styles.inputContainer}>
                <TextInput
                  style={{ ...styles.input, paddingLeft: 3 }}
                  placeholder="Full Name"
                  placeholderTextColor="#aaa"
                />
              </View>

              <View style={styles.inputContainer}>
                <TextInput
                  style={{ ...styles.input, paddingLeft: 3 }}
                  placeholder="Nick Name"
                  placeholderTextColor="#aaa"
                />
              </View>




              {/* Date Picker Trigger */}
              <TouchableOpacity
                onPress={() => setOpen(true)} // Open modal on click
                style={styles.inputContainer}
              >
                <AntD name="calendar" size={23} color="#545454" style={styles.icon} />
                <Text style={{ opacity: 0.4 }}>{dayjs(date).format('YYYY-MM-DD')}</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.inputContainer}>
              <Fontisto name="email" size={23} color="#545454" style={styles.icon} />
              <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="#aaa"
              />
            </View>

            <View style={styles.phoneInputContainer}>
              <PhoneInput
                placeholder="Phone number"
                onChangeText={setNumber}
                style={styles.phoneInput}
                keyboardType="phone-pad"
                ref={phoneInput}
                defaultValue={phoneNumber}
                containerStyle={styles.phoneContainer}
                textContainerStyle={styles.textInput}
                onChangeFormattedText={setNumber}
                defaultCode="RW"
                layout="first"
                withShadow
                autoFocus
              />
            </View>
            <View style={{ zIndex: 10 }}>
              <Dropdown
                style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
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
                value={value}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                containerStyle={{position:"absolute", bottom:150,borderRadius:10}}
                onChange={item => {
                  setValue(item.value);
                  setIsFocus(false);
                }}
                renderLeftIcon={() => (
                  // <AntDesign
                  //   style={styles.icon}
                  //   color={isFocus ? 'blue' : 'black'}
                  //   name="Safety"
                  //   size={20}
                  // />
                  <>
                  </>
                )}
              />

            </View>
            <View style={styles.stepsContainer}>
              <TouchableOpacity onPress={()=>navigation.navigate("Pin")} style={styles.nextButton}>
                <View>

                </View>
                <View>

                </View>
                <View style={{ marginHorizontal: 30 }}>
                  <Text style={{ color: "#FFFFFF", fontWeight: "600", fontSize: 18, textAlign: "center" }}>Update</Text>
                </View>
                <View style={styles.nextButtonInsider}>
                  <AntD name="arrowright" style={styles.arrowIcon} />
                </View>
              </TouchableOpacity>
            </View>

          
          </View>
        </ScrollView>
        
      </View>
        {/* Date Picker Modal */}
        {open && (
              <View style={styles.modal}>
              <View style={styles.modal2}>
                 <DateTimePicker
                  mode="single"
                  date={date}
                  onChange={(params) => {
                    setDate(params.date); // Update the selected date
                    setOpen(false); // Close the modal after date selection
                  }}
                />
                <TouchableOpacity onPress={() => setOpen(false)} style={styles.closeButton}>
                  <Text style={styles.closeButtonText}>Close</Text>
                </TouchableOpacity>
                </View>
              </View>
            )}
    </View>
  );
};

export default Edit;

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
    marginBottom:150
  },
  Text_Titile: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#202244',
    marginBottom: 10,
    textAlign: 'left',
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
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
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
    zIndex:999,
    height: Dimensions.get("screen").height,
    width:"100%"
  },
  modal2: {
   
    backgroundColor: 'white',
    padding: 20,
    alignItems: 'center',
    zIndex:9999,
    height:"60%",
    width:"90%",
    borderRadius:40,
    marginTop:50
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
    // Your custom styles here
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
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
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
