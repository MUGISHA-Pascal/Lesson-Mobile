import React, { useState, useContext } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  StatusBar,
  Alert,
} from "react-native";
import { AuthContext } from "../../../VAUTH/Auth"; // User context for role
import { AntDesign } from "@expo/vector-icons";

const AddQuiz = ({ route, navigation }) => {
  const { user } = useContext(AuthContext); // Access user role
  const { course_id } = route.params;

  const [title, setTitle] = useState("");
  const [maxAttempts, setMaxAttempts] = useState("");

  const handleSubmit = async () => {
    if (!title || !maxAttempts) {
      Alert.alert("Error", "Please fill all fields");
      return;
    }

    try {
      const response = await fetch(`http://10.12.73.148:4000/quiz/add/${user.id}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          course_id: course_id,
          title: title,
          max_attempts: maxAttempts,
        }),
      });

      const data = await response.json();
      if (response.status === 200) {
        Alert.alert("Success", "Quiz added successfully");
        navigation.goBack();
      } else {
        Alert.alert("Error", data.message || "Failed to add quiz");
      }
    } catch (error) {
      console.error("Error:", error);
      Alert.alert("Error", "Something went wrong!");
    }
  };

  return (
    <ImageBackground
      style={{ flex: 1, height: Dimensions.get("screen").height, width: "100%" }}
      source={require("../../../assets/quiz.png")}
    >
      <StatusBar backgroundColor="#1e90ff" barStyle="light-content" />
      <View style={{ flex: 1, paddingHorizontal: 20 }}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign name="arrowleft" style={styles.icon} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Add Quiz</Text>
          <View></View>
        </View>

        {/* Form */}
        <View style={styles.formContainer}>
          <Text style={styles.label}>Quiz Title</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter quiz title"
            placeholderTextColor="#999"
            value={title}
            onChangeText={setTitle}
          />

          <Text style={styles.label}>Max Attempts</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter max attempts"
            placeholderTextColor="#999"
            keyboardType="numeric"
            value={maxAttempts}
            onChangeText={setMaxAttempts}
          />

          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <Text style={styles.submitButtonText}>Add Quiz</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default AddQuiz;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 50,
    marginBottom: 20,
  },
  icon: {
    fontSize: 30,
    color: "#FFFFFF",
  },
  headerTitle: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
  },
  formContainer: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    elevation: 5,
    marginTop: 20,
  },
  label: {
    fontSize: 16,
    color: "#333",
    marginBottom: 5,
    fontWeight: "bold",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    fontSize: 16,
    color: "#333",
  },
  submitButton: {
    backgroundColor: "#1e90ff",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  submitButtonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});
