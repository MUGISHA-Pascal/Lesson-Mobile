import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Message_info = ({ type, message }) => {
  let containerStyle;
  let textStyle;

  switch (type) {
    case 'success':
      containerStyle = styles.successContainer;
      textStyle = styles.successText;
      break;
    case 'error':
      containerStyle = styles.errorContainer;
      textStyle = styles.errorText;
      break;
    case 'info':
      containerStyle = styles.infoContainer;
      textStyle = styles.infoText;
      break;
    default:
      containerStyle = styles.defaultContainer;
      textStyle = styles.defaultText;
  }

  return (
    <View style={containerStyle}>
      <Text style={textStyle}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  successContainer: {
    backgroundColor: '#4CAF50',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    elevation: 2  // Shadow for a 3D effect
  },
  successText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  errorContainer: {
    backgroundColor: '#F44336',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    elevation: 2  // Shadow for a 3D effect
  },
  errorText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  infoContainer: {
    backgroundColor: '#2196F3',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    elevation: 2  // Shadow for a 3D effect
  },
  infoText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  defaultContainer: {
    backgroundColor: '#E0E0E0',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    elevation: 2  // Shadow for a 3D effect
  },
  defaultText: {
    color: '#000',
  },
});

export default Message_info;
