// PaymentOption.js
import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import AntD from 'react-native-vector-icons/AntDesign';

const PaymentOption = ({ navigation }) => {
  return (
    <View style={{ backgroundColor: "#F5F9FF", flex: 1 }}>
      {/* Go Back Arrow */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.arrowContainer}>
          <AntD style={styles.arrowIcon} name='arrowleft' />
          <Text style={styles.headerText}>Payment Options</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.container}>
        <Text style={styles.heading}>Choose Your Payment Method</Text>

        <Text style={styles.text}>
          Please select your preferred payment option below. We offer various payment methods for your convenience.
        </Text>

        <View style={styles.paymentOption}>
          <Text style={styles.optionText}>Credit/Debit Card</Text>
        </View>

        <View style={styles.paymentOption}>
          <Text style={styles.optionText}>PayPal</Text>
        </View>

        <View style={styles.paymentOption}>
          <Text style={styles.optionText}>Bank Transfer</Text>
        </View>

        {/* Button to go to Language Selector Screen */}
        <TouchableOpacity 
          style={styles.nextButton} 
          onPress={() => navigation.navigate('LanguageSelector')}
        >
          <Text style={styles.nextButtonText}>Next: Select Language</Text>
        </TouchableOpacity>
      </ScrollView>
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
  paymentOption: {
    padding: 15, 
    backgroundColor: '#fff', 
    borderRadius: 8, 
    marginBottom: 15, 
    borderColor: '#ccc', 
    borderWidth: 1,
  },
  optionText: {
    fontSize: 18, 
    fontWeight: '600', 
    color: '#202244',
  },
  nextButton: {
    backgroundColor: '#202244', 
    padding: 15, 
    borderRadius: 8, 
    marginTop: 20,
  },
  nextButtonText: {
    fontSize: 16, 
    color: '#fff', 
    textAlign: 'center',
  },
});

export default PaymentOption;
