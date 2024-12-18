import React from 'react';
import { StyleSheet, View, Dimensions, Text, ActivityIndicator } from 'react-native';
import { WebView } from 'react-native-webview';

// PLEASE VISIT THIS URL IF YOU WANT TO FIX THE PDF VIEWER PROBLEM using react-native-pdf 
//cz webView is returning nothing
//https://github.com/wonday/react-native-pdf/issues/834
const PDFViewer = ({ route }) => {
  // Get the fileName from the route parameters or modify as needed
  const { fileName } = route.params;
  
  // Construct the URL dynamically
  const pdfUrl = `http://10.12.73.148:4000/courses/file/${fileName}`;

  return (
    <View style={styles.container}>
      <WebView 
        source={{ uri: pdfUrl }} 
        style={{ flex: 1 }}
        originWhitelist={['*']}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  pdf: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PDFViewer;
