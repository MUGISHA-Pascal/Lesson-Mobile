import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet,Image,TouchableOpacity } from 'react-native';
import AntD from 'react-native-vector-icons/AntDesign'
const Security = () => {
  const [rememberMe, setRememberMe] = useState(true);
  const [biometricID, setBiometricID] = useState(true);
  const [faceID, setFaceID] = useState(false);

  return (
    <View style={{backgroundColor:"#F5F9FF",flex:1}}>
    <View style={{ backgroundColor: "#F5F9FF", paddingVertical: 20, flexDirection: "row", justifyContent: "space-between" }}>
         <TouchableOpacity onPress={() => navigation.goBack()} style={{ flexDirection: "row", alignItems: "center", paddingHorizontal: 20 }}>
             <AntD style={{ fontSize: 25, marginRight: 6 }} name='arrowleft' />
             <Text style={{ fontSize: 21, fontWeight: 600, color: "#202244" }}>Security</Text>
         </TouchableOpacity>

         <TouchableOpacity onPress={() => navigation.goBack()} style={{ flexDirection: "row", alignItems: "center", paddingHorizontal: 20 }}>
             {/* <Image style={{ width: 30, height: 30 }} source={require("../../../assets/search.jpeg")} /> */}
         </TouchableOpacity>
     </View>
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.label}>Remember Me</Text>
        <Switch value={rememberMe} onValueChange={setRememberMe} />
      </View>

     

      <View style={styles.row}>
        <Text style={styles.label}>Google Authenticator</Text>
        <Text style={styles.link}></Text>
      </View>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 28,
    backgroundColor: '#F5F9FF',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 15,
  },
  label: {
    fontSize: 16,
  },
  link: {
    fontSize: 18,
    color: '#007bff',
  },
});

export default Security;
