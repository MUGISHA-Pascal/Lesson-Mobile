import React, { createContext, useContext, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, TextInput, ScrollView } from 'react-native';
import AntD from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import { AuthContext } from '../../VAUTH/Auth';

const Password = ({ navigation }) => {
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const {change} = useContext(AuthContext)

  return (
    <View style={styles.container}>
   
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.goBackButton}>
        <AntD style={styles.goBackIcon} name="arrowleft" />
        <Text style={styles.goBackText}>Create New Password</Text>
      </TouchableOpacity>

    
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
    
        <View style={styles.inputWrapper}>

          <Text style={{color:"rgba(32, 34, 68, 1)",fontWeight:600,fontSize:19,paddingVertical:10}}>Create Your New Password</Text>
          <View style={styles.inputContainer}>
            <AntD name="lock" size={20} color="#545454" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#aaa"
              secureTextEntry={!isPasswordVisible}
            />
            <TouchableOpacity onPress={() => setPasswordVisible(!isPasswordVisible)}>
              <Feather name={isPasswordVisible ? "eye" : "eye-off"} size={20} color="#545454" style={styles.icon} />
            </TouchableOpacity>
          </View>

          <View style={styles.inputContainer}>

            <AntD name="lock" size={20} color="#545454" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Confirm Password"
              placeholderTextColor="#aaa"
              secureTextEntry={!isConfirmPasswordVisible}
            />
            <TouchableOpacity onPress={() => setConfirmPasswordVisible(!isConfirmPasswordVisible)}>
              <Feather name={isConfirmPasswordVisible ? "eye" : "eye-off"} size={20} color="#545454" style={styles.icon} />
            </TouchableOpacity>
          </View>

          <TouchableOpacity onPress={change()} style={styles.nextButton}>
            <View></View>
            <View></View>
            <Text style={styles.nextButtonText}>Continue</Text>
            <View style={styles.nextButtonIconContainer}>
              <AntD name="arrowright" style={styles.arrowIcon} />
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Password;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F9FF',
  },
  goBackButton: {
    marginTop: 69,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 30,
  },
  goBackIcon: {
    fontSize: 25,
    marginRight: 6,
  },
  goBackText: {
    fontSize: 21,
    fontWeight: '600',
    color: '#202244',
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  inputWrapper: {
    position: 'absolute',
    bottom: 30,
    left: 0,
    right: 0,
    padding: 20,
    
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
    fontSize: 20,
  },
  input: {
    flex: 1,
    color: '#000',
  },
  nextButton: {
    backgroundColor: '#0961F5',
    width: '100%',
    height: 60,
    borderRadius: 100,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 35,
    paddingHorizontal:6,
  },
  nextButtonText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 18,
    textAlign: 'center',
  },
  nextButtonIconContainer: {
    backgroundColor: 'white',
    width: 47,
    height: 47,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  arrowIcon: {
    fontSize: 30,
    color: '#0961F5',
  },
});
