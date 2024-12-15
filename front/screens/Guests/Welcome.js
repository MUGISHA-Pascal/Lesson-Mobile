import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import AntD from 'react-native-vector-icons/AntDesign';

const Welcome = ({navigation}) => {
  return (
    <View style={styles.container}>

        <View style={styles.All_combined_container2}>
        <View style={{justifyContent:"flex-end",flexDirection:"row",marginHorizontal:34}}  >
            <TouchableOpacity  onPress={()=>navigation.navigate("AuthMethod")} style={{}}>
                <Text style={{fontWeight:"600",color:"#202244",fontSize:16}}>Skip</Text>
            </TouchableOpacity>
            
            
        </View>
        </View>
       
      <View style={styles.All_combined_container}> 
       
        <Text style={styles.Text_Titile}>Online Learning</Text>
        <Text style={styles.subText_Titile}>
          We Provide Online Classes and Pre-Recorded Lectures!
        </Text>
        <View style={styles.stepsContainer}>
          <View style={styles.steps}>
            <View style={styles.stepActive}></View>
            <View style={styles.stepInactive}></View>
            <View style={styles.stepInactive}></View>
          </View>
          <TouchableOpacity onPress={()=>navigation.navigate("Welcometwo")} style={styles.nextButton}>
            <AntD name="arrowright" style={styles.arrowIcon} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F9FF',
    justifyContent: 'center',
    alignItems: 'center',
    height: "100%",
    width:"100%"
  },
  All_combined_container: {
    width: '100%',
    padding: 20,
    position:"absolute",
    bottom:30,
   
   
  },
  All_combined_container2: {
    width: '100%',
    padding: 20,
    position:"absolute",
    top:94,
   
   
  },
  Text_Titile: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#202244',
    marginBottom: 10,
    textAlign: 'center',
   
  },
  subText_Titile: {
    fontSize: 14,
    color: '#545454',
    marginBottom: 20,
    textAlign: 'center',
  },
  stepsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 150,
    marginHorizontal:10
  },
  steps: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  stepActive: {
    backgroundColor: '#0961F5',
    width: 20,
    height: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  stepInactive: {
    backgroundColor: '#D5E2F5',
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  nextButton: {
    backgroundColor: '#0961F5',
    width: 50,
    height: 50,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrowIcon: {
    fontSize: 30,
    color: '#FFFFFF',
  },
});
