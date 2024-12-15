import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import axios from 'axios';
import { AuthContext } from '../../../VAUTH/Auth'; // Assuming AuthContext provides user info
import * as DocumentPicker from 'expo-document-picker';


const AddCourse = ({ navigation }) => {
  const [selectedfile, setSelectedFile] = useState('')
  const { userId } = useContext(AuthContext); // Get userId from context
  const [courseDetails, setCourseDetails] = useState({
    title: '',
    description: '',
    content_type: 'text', // Default value
    category: '',
    file: null, // Store file information
  });

  const handleChange = (name, value) => {
    setCourseDetails({ ...courseDetails, [name]: value });
  };

  const handleFilePick = async () => {
    console.log('Opening file picker...');
    try {
      const res = await DocumentPicker.getDocumentAsync({
        type: "*/*", // Allow all file types
      });

        console.log('File selected:', res);
        setSelectedFile(res.assets[0].name)
        setCourseDetails({ ...courseDetails, file: res });
        Alert.alert('File Selected', `You selected: ${res.name}`);
     
    } catch (err) {
      console.error('Error picking file:', err);
      Alert.alert('Error', 'Failed to pick file. Please try again.');
    }
  };

  const handleSubmit = async () => {
    console.log('Submitting form with details:', courseDetails);

    if (!courseDetails.title || !courseDetails.description || !courseDetails.category) {
      Alert.alert('Validation Error', 'Please fill in all required fields.');
      console.log('Form submission failed due to missing fields.');
      return;
    }

    const formData = new FormData();
    formData.append('userId', userId);
    formData.append('courseTitle', courseDetails.title);
    formData.append('category', courseDetails.category);
    formData.append('courseDescription', courseDetails.description);
    formData.append('contentType', courseDetails.content_type);

    if (courseDetails.file) {
      console.log("file is" ,courseDetails.file)
      formData.append('file', {
        uri: courseDetails.file.assets[0].uri,
        name: courseDetails.file.assets[0].name,
        type: courseDetails.file.assets[0].mimeType,
      });
      console.log('File attached:', courseDetails.file.name);
    } else {
      console.log('No file attached to the form.');
    }

    try {
    
      const response = await axios.post('http://10.12.73.148:4000/courses/add_file', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      if (response.status === 200) {
        console.log('Form submission successful:', response.data);
        Alert.alert('Success', 'Course added successfully.');
        navigation.goBack(); // Navigate back after successful submission
      }
    } catch (error) {
      console.error('Error during form submission:', error.response?.data || error.message);
      Alert.alert('Error', 'Failed to add course. Please try again.');
      console.log(error)
    }finally {
      console.log(formData)
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add New Course</Text>
      <TextInput
        style={styles.input}
        placeholder="Course Title"
        value={courseDetails.title}
        onChangeText={(text) => handleChange('title', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={courseDetails.description}
        onChangeText={(text) => handleChange('description', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Category"
        value={courseDetails.category}
        onChangeText={(text) => handleChange('category', text)}
      />
      <TouchableOpacity style={styles.fileButton} onPress={handleFilePick}>
        <Text style={styles.fileButtonText}>
          {courseDetails.file ? 'Change File' : 'Select File'}
        </Text>
      </TouchableOpacity>
      {courseDetails.file && (
        <Text style={styles.selectedFileText}>
          Selected File: {selectedfile}
        </Text>
      )}
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F9FF',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  fileButton: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  fileButtonText: {
    color: '#606060',
  },
  selectedFileText: {
    fontSize: 14,
    color: '#333',
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#1e90ff',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '700',
  },
});

export default AddCourse;
