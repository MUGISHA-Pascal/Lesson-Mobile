import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  Dimensions,
  ImageBackground,
  StatusBar,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../../VAUTH/Auth";

const ViewQuizzes = ({ route, navigation }) => {
  const { user } = useContext(AuthContext);
  const { userId } = useContext(AuthContext);
  const { course_id } = route.params; // Get course_id passed as a route parameter
  const [quizzes, setQuizzes] = useState([]); // State to hold the quizzes
  const [loading, setLoading] = useState(true); // State for loading indicator

  // Function to fetch quizzes from the API
  const fetchQuizzes = async () => {
    try {
      const response = await axios.get(
        `http://10.12.73.148:4000/quiz/${course_id}`
      );
      console.log(response.data);
      setQuizzes(response.data.quizzes);
    } catch (error) {
      console.error("Error fetching quizzes:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log("the course id is", course_id);
    fetchQuizzes(); // Fetch quizzes when the component loads
  }, []);

  return (
    <ImageBackground
      style={{
        height: Dimensions.get("screen").height,
        width: "100%",
        flex: 1,
      }}
      source={require("../../../assets/quiz.png")}
    >
      <StatusBar backgroundColor="#1e90ff" barStyle="dark-content" />
      <View style={{ flex: 1 }}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <AntDesign name="arrowleft" style={styles.icon} />
            <Text style={styles.headerText}>View Quizzes</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.container}>
          {loading ? (
            <ActivityIndicator size="large" color="#1e90ff" />
          ) : quizzes.length > 0 ? (
            <ScrollView>
              {quizzes.map((quiz) => (
                <View key={quiz.id} style={styles.quizCard}>
                  <Text style={styles.quizTitle}>{quiz.title}</Text>
                  <Text style={styles.quizDetails}>
                    Max Attempts: {quiz.max_attempts}
                  </Text>
                  {/* Add Question Button */}
                  {user.role !== "admin" ? (
                    <TouchableOpacity
                      style={styles.addQuestionButton}
                      onPress={() =>
                        navigation.navigate("addQuestions", {
                          quiz_id: quiz.id,
                          userId: userId,
                        })
                      }
                    >
                      <Text style={styles.buttonText}>Add Question</Text>
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity
                      style={styles.addQuestionButton}
                      onPress={() =>
                        navigation.navigate("doQuiz", {
                          quiz_id: quiz.id,
                          userId: userId,
                        })
                      }
                    >
                      <Text style={styles.buttonText}>Do Quiz</Text>
                    </TouchableOpacity>
                  )}
                </View>
              ))}
            </ScrollView>
          ) : (
            <Text style={styles.noQuizzes}>
              No quizzes added for this course.
            </Text>
          )}
        </View>
      </View>
    </ImageBackground>
  );
};

export default ViewQuizzes;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: 50,
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  icon: {
    fontSize: 30,
    color: "#FFFFFF",
  },
  headerText: {
    color: "#FFFFFF",
    fontWeight: "800",
    fontSize: 18,
  },
  container: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 20,
    margin: 20,
    flex: 1,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  quizCard: {
    backgroundColor: "#f9f9f9",
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    borderLeftWidth: 5,
    borderColor: "#1e90ff",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  quizTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#202244",
  },
  quizDetails: {
    fontSize: 14,
    color: "#606060",
    marginTop: 5,
  },
  noQuizzes: {
    fontSize: 16,
    color: "#606060",
    textAlign: "center",
    marginTop: 20,
  },
  addQuestionButton: {
    marginTop: 10,
    backgroundColor: "#1e90ff",
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
