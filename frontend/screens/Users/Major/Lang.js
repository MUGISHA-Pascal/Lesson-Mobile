// LanguageSelector.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import AntD from 'react-native-vector-icons/AntDesign';
import { Picker } from '@react-native-picker/picker';

const LanguageSelector = ({ navigation }) => {
  const [language, setLanguage] = useState('en'); // Default language

  const handleLanguageChange = (itemValue) => {
    setLanguage(itemValue);
    console.log("Language selected:", itemValue);
  };

  return (
    <View style={{ backgroundColor: "#F5F9FF", flex: 1 }}>
      {/* Go Back Arrow */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.arrowContainer}>
          <AntD style={styles.arrowIcon} name='arrowleft' />
          <Text style={styles.headerText}>Language Selector</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.container}>
        <Text style={styles.heading}>Language Preference</Text>
        <Text style={styles.text}>Select your preferred language:</Text>

        <View style={styles.languageSelector}>
          <Picker
            selectedValue={language}
            style={styles.picker}
            onValueChange={handleLanguageChange}
          >
            <Picker.Item label="English" value="en" />
            <Picker.Item label="Français" value="fr" />
            <Picker.Item label="Español" value="es" />
            {/* Add more languages as needed */}
          </Picker>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#F5F9FF", 
    paddingVertical: 20, 
    flexDirection: "row", 
    justifyContent: "space-between"
  },
  arrowContainer: {
    flexDirection: "row", 
    alignItems: "center", 
    paddingHorizontal: 20
  },
  arrowIcon: {
    fontSize: 25, 
    marginRight: 6 
  },
  headerText: {
    fontSize: 21, 
    fontWeight: '600', 
    color: "#202244"
  },
  container: {
    padding: 20, 
    backgroundColor: '#F5F9FF',
  },
  heading: {
    fontSize: 22, 
    fontWeight: 'bold', 
    marginBottom: 20, 
    color: '#202244',
  },
  text: {
    fontSize: 16, 
    lineHeight: 22, 
    marginBottom: 20, 
    color: '#202244',
  },
  languageSelector: {
    backgroundColor: '#fff', 
    padding: 10, 
    borderRadius: 8, 
    marginBottom: 20, 
    borderColor: '#ccc', 
    borderWidth: 1,
  },
  picker: {
    height: 50, 
    width: '100%',
  },
});

export default LanguageSelector;
