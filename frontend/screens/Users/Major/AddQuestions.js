import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import axios from 'axios';

const AddQuestions = ({ route, navigation }) => {
  const { quiz_id, userId } = route.params; // Receive quiz_id and userId
  const [questionText, setQuestionText] = useState('');
  const [correctAnswer, setCorrectAnswer] = useState('');

  const handleAddQuestion = async () => {
    try {
      const response = await axios.post(`http://10.12.73.148:4000/questions/add/${userId}`, {
        quiz_id,
        question_text: questionText,
        correct_answer: correctAnswer,
      });
      Alert.alert('Success', response.data.message);
      navigation.goBack(); // Go back to the previous page
    } catch (error) {
      console.error('Error adding question:', error);
      Alert.alert('Error', 'Failed to add question');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Add Question</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter Question Text"
        value={questionText}
        onChangeText={setQuestionText}
      />

      <TextInput
        style={styles.input}
        placeholder="Enter Correct Answer"
        value={correctAnswer}
        onChangeText={setCorrectAnswer}
      />

      <TouchableOpacity style={styles.button} onPress={handleAddQuestion}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddQuestions;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#1e90ff',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#1e90ff',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
