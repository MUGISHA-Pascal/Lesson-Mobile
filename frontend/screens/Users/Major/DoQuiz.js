import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
  TextInput,
  Alert,
} from "react-native";
import axios from "axios";

const PerformQuiz = ({ route, navigation }) => {
  const { quiz_id } = route.params; // Get the quiz_id from navigation params
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [loading, setLoading] = useState(true);

  // Fetch questions from the API
  const fetchQuestions = async () => {
    try {
      const response = await axios.get(`http://10.12.73.148:4000/questions/${quiz_id}`);
      console.log("Quiz Questions:", response.data);
      setQuestions(response.data.questions);

      // Initialize answers object with empty values
      const initialAnswers = {};
      response.data.questions.forEach((_, index) => {
        initialAnswers[index] = ""; // Empty string for each question
      });
      setAnswers(initialAnswers);
    } catch (error) {
      console.error("Error fetching quiz questions:", error);
      Alert.alert("Error", "Unable to fetch questions. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  // Update the answer for a question
  const handleAnswerChange = (index, value) => {
    setAnswers((prevAnswers) => ({ ...prevAnswers, [index]: value }));
  };

  // Submit answers to the backend
  const submitQuiz = async () => {
    try {
      const payload = {
        quiz_id,
        answers: Object.entries(answers).map(([index, answer]) => ({
          question_id: questions[index]?.id, // Assuming each question has an `id` field
          answer_text: answer,
        })),
      };

      console.log("Submitting Answers:", payload);

    //   const response = await axios.post("http://10.12.73.148:4000/submit-quiz", payload);
    //   console.log("Submit Response:", response.data);

      Alert.alert("Success", "Quiz submitted successfully!");
      navigation.navigate('Cert', {quiz_id: quiz_id});
    //   navigation.goBack();
    } catch (error) {
      console.error("Error submitting quiz:", error);
      Alert.alert("Error", "Failed to submit quiz. Please try again.");
    }
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#1e90ff" />
      ) : (
        <ScrollView>
          <Text style={styles.title}>Quiz Questions</Text>
          {questions.length > 0 ? (
            questions.map((question, index) => (
              <View key={index} style={styles.questionCard}>
                <Text style={styles.questionText}>
                  {index + 1}. {question.question_text}
                </Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter your answer"
                  value={answers[index]}
                  onChangeText={(value) => handleAnswerChange(index, value)}
                />
              </View>
            ))
          ) : (
            <Text>No questions available.</Text>
          )}
          <TouchableOpacity style={styles.submitButton} onPress={submitQuiz}>
            <Text style={styles.buttonText}>Submit Quiz</Text>
          </TouchableOpacity>
        </ScrollView>
      )}
      <TouchableOpacity style={styles.finishButton} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Finish Quiz</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#f5f5f5" },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 20 },
  questionCard: { backgroundColor: "#FFF", padding: 15, borderRadius: 8, marginBottom: 15 },
  questionText: { fontSize: 16, color: "#333" },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginTop: 10,
    fontSize: 16,
    backgroundColor: "#fafafa",
  },
  submitButton: {
    backgroundColor: "#28a745",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
  },
  finishButton: {
    backgroundColor: "#1e90ff",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: { color: "#FFF", fontSize: 16, fontWeight: "bold" },
});

export default PerformQuiz;
