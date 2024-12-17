import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const CertificatePage = ({ route, navigation }) => {
  const { quiz_id } = route.params; // Passed from PerformQuiz

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎉 Congratulations! 🎉</Text>
      <Text style={styles.text}>You have successfully completed the quiz.</Text>
      <Text style={styles.text}>Your Quiz ID: {quiz_id}</Text>
      <Text style={styles.text}>Your certificate is ready!</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()} // Return to previous page
      >
        <Text style={styles.buttonText}>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#f5f5f5" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 10 },
  text: { fontSize: 16, marginVertical: 5, color: "#333" },
  button: { marginTop: 20, backgroundColor: "#1e90ff", padding: 15, borderRadius: 8 },
  buttonText: { color: "#FFF", fontSize: 16, fontWeight: "bold" },
});

export default CertificatePage;
