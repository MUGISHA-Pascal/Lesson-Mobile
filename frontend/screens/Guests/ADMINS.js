import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
  TextInput,
  ScrollView,
  Alert,
} from "react-native";
import AntD from "react-native-vector-icons/AntDesign";
import Fontisto from "react-native-vector-icons/Fontisto";
import { Picker } from "@react-native-picker/picker";
import Feather from "react-native-vector-icons/Feather";
import CheckBox from "@react-native-community/checkbox";
import axios from "axios";

const Admin = ({ navigation }) => {
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone_number: "",
    password_hash: "",
    role: "sub_admin", // Default role
  });

  const handleSignUp = async () => {
    if (!toggleCheckBox) {
      Alert.alert("Error", "You must agree to the terms and conditions.");
      return;
    }

    try {
      const response = await axios.post(
        "http://192.168.1.78:4000/auth/signup",
        user
      );

      Alert.alert(
        "Success",
        "Account created successfully!" + response.data.user.id
      );
      console.log(response.data.user.id);
      navigation.navigate("FullInfo", { id: response.data.user.id });
    } catch (error) {
      Alert.alert("Error", "Failed to create account. Please try again.");
      console.log(error)
    }
  };

  const handleInputChange = (field, value) => {
    setUser({ ...user, [field]: value });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{
          marginTop: 15,
          flexDirection: "row",
          alignItems: "center",
          marginHorizontal: 30,
        }}
      >
        <AntD style={{ fontSize: 25, marginRight: 6 }} name="arrowleft" />
        <Text style={{ fontSize: 21, fontWeight: 600, color: "#202244" }}>
          Sign Up
        </Text>
      </TouchableOpacity>
      <View style={styles.containerTwo}>
        <ScrollView style={{}}>
          <View style={styles.All_combined_container}>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginBottom: 30,
                marginTop: 94,
              }}
            >
              <Image
                source={require("../../assets/LOGOTEXT.png")}
                style={{ height: 80, width: 200 }}
              />
            </View>

            <Text style={styles.Text_Titile}>Getting Started.!</Text>
            <Text style={{ color: "#545454", fontWeight: "700", fontSize: 14 }}>
              Create an Account to Continue your allCourses
            </Text>
            <View style={{ marginTop: 40 }}>
              <View style={styles.inputContainer}>
                <Fontisto
                  name="person"
                  size={20}
                  color="#545454"
                  style={styles.icon}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Username"
                  placeholderTextColor="#aaa"
                  value={user.username}
                  onChangeText={(value) => handleInputChange("username", value)}
                />
              </View>

              <View style={styles.inputContainer}>
                <Fontisto
                  name="email"
                  size={20}
                  color="#545454"
                  style={styles.icon}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Email"
                  placeholderTextColor="#aaa"
                  value={user.email}
                  onChangeText={(value) => handleInputChange("email", value)}
                />
              </View>

              <View style={styles.inputContainer}>
                <Fontisto
                  name="phone"
                  size={20}
                  color="#545454"
                  style={styles.icon}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Phone Number"
                  placeholderTextColor="#aaa"
                  value={user.phone_number}
                  onChangeText={(value) =>
                    handleInputChange("phone_number", value)
                  }
                />
              </View>

              <View style={styles.inputContainer}>
                <AntD
                  name="lock"
                  size={20}
                  color="#545454"
                  style={styles.icon}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Password"
                  placeholderTextColor="#aaa"
                  secureTextEntry={!isPasswordVisible}
                  value={user.password_hash}
                  onChangeText={(value) =>
                    handleInputChange("password_hash", value)
                  }
                />
                <TouchableOpacity
                  onPress={() => setPasswordVisible(!isPasswordVisible)}
                >
                  <Feather
                    name={isPasswordVisible ? "eye" : "eye-off"}
                    size={20}
                    color="#545454"
                    style={styles.icon}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.inputContainer}>
                <Text style={styles.label}>Select Role:</Text>
                <Picker
                  selectedValue={user.role}
                  onValueChange={(itemValue) =>
                    handleInputChange("role", itemValue)
                  }
                  style={styles.picker}
                >
                  <Picker.Item label="Lesson Seeker" value="lesson_seeker" />
                  <Picker.Item label="Admin" value="admin" />
                  <Picker.Item label="Sub Admin" value="sub_admin" />
                </Picker>
              </View>

              <View style={{ flexDirection: "row" }}>
                <TouchableOpacity
                  onPress={() => setToggleCheckBox(!toggleCheckBox)}
                >
                  {toggleCheckBox ? (
                    <>
                      <Image
                        style={{ width: 25, height: 25 }}
                        source={require("../../assets/check.png")}
                      />
                    </>
                  ) : (
                    <>
                      <Feather
                        name="circle"
                        style={{ fontSize: 25, color: "#545454" }}
                      />
                    </>
                  )}
                </TouchableOpacity>
                <Text
                  style={{
                    color: "#545454",
                    fontWeight: 800,
                    fontSize: 13,
                    paddingLeft: 5,
                    paddingTop: 2,
                  }}
                >
                  Agree to Terms & Conditions
                </Text>
              </View>
            </View>

            <View style={styles.stepsContainer}>
              <TouchableOpacity
                onPress={handleSignUp}
                style={styles.nextButton}
              >
                <View></View>
                <View></View>
                <View style={{ marginHorizontal: 30 }}>
                  <Text
                    style={{
                      color: "#FFFFFF",
                      fontWeight: "600",
                      fontSize: 18,
                      textAlign: "center",
                    }}
                  >
                    Sign Up
                  </Text>
                </View>
                <View style={styles.nextButtonInsider}>
                  <AntD name="arrowright" style={styles.arrowIcon} />
                </View>
              </TouchableOpacity>
              <Text
                style={{
                  paddingVertical: 20,
                  color: "#545454",
                  fontSize: 18,
                  fontWeight: 800,
                }}
              >
                Or Continue With
              </Text>

              <View style={styles.continueWith}>
                <TouchableOpacity style={styles.LoginButton}>
                  <View style={styles.nextButtonInsider}>
                    <Image
                      style={{ width: 20, height: 20 }}
                      source={require("../../assets/google.png")}
                    />
                  </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.LoginButton}>
                  <View style={styles.nextButtonInsider}>
                    <Image
                      style={{ width: 20, height: 20 }}
                      source={require("../../assets/apple.png")}
                    />
                  </View>
                </TouchableOpacity>
              </View>

              <TouchableOpacity
                onPress={() => navigation.navigate("Login")}
                style={styles.nextButton2}
              >
                <Text
                  style={{
                    color: "#545454",
                    fontWeight: "800",
                    fontSize: 14,
                    textAlign: "center",
                  }}
                >
                  Already have an Account?
                </Text>
                <Text
                  style={{
                    color: "#0961F5",
                    fontWeight: "800",
                    fontSize: 14,
                    textAlign: "center",
                    textDecorationLine: "underline",
                    paddingLeft: 5,
                  }}
                >
                  SIGN IN
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Admin;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#F5F9FF",
    height: "100%",
    width: "100%",
  },
  containerTwo: {
    backgroundColor: "#F5F9FF",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%",
  },
  All_combined_container: {
    width: "100%",
    paddingVertical: 20,

    marginBottom: 100,
  },
  All_combined_container2: {
    width: "100%",
    padding: 20,
    position: "absolute",
    top: 94,
  },
  Text_Titile: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#202244",
    marginBottom: 10,
    textAlign: "left",
  },
  subText_Titile: {
    fontSize: 14,
    color: "#545454",
    marginBottom: 20,
    textAlign: "center",
  },
  stepsContainer: {
    alignItems: "center",
    marginTop: 35,
    marginHorizontal: 10,
    justifyContent: "center",
  },
  steps: {
    flexDirection: "row",
    alignItems: "center",
  },
  stepActive: {
    backgroundColor: "#0961F5",
    width: 20,
    height: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  stepInactive: {
    backgroundColor: "#D5E2F5",
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  nextButton: {
    backgroundColor: "#0961F5",
    width: Dimensions.get("screen").width - 60,
    height: 60,
    borderRadius: 100,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },

  LoginButton: {
    height: 60,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginHorizontal: 10,
  },
  nextButton2: {
    width: Dimensions.get("screen").width - 60,
    height: 60,
    borderRadius: 100,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  nextButtonInsider: {
    backgroundColor: "white",
    width: 47,
    height: 47,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
  },
  arrowIcon: {
    fontSize: 30,
    color: "#0961F5",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: "white",
    marginBottom: 18,

    height: 60,
  },
  picker: {
    height: 50,
    width: "70%",
  },
  role: {
    fontSize: 14,
    color: "#545454",
    marginBottom: 4,
  },
  icon: {
    marginRight: 10,
    fontSize: 20,
  },
  input: {
    flex: 1,
    color: "#000",
  },
  continueWith: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
