import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import AntD from 'react-native-vector-icons/AntDesign';

const Welcomethree = ({navigation}) => {
  return (
    <View style={styles.container}>

        <View style={styles.All_combined_container2}>
        <View style={{justifyContent:"flex-end",flexDirection:"row",marginHorizontal:34}}  >
            <TouchableOpacity  onPress={()=>navigation.navigate("AuthMethod")}  style={{}}>
                <Text style={{fontWeight:"600",color:"#202244",fontSize:16}}>Skip</Text>
            </TouchableOpacity>
            
            
        </View>
        </View>
       
      <View style={styles.All_combined_container}> 
       
        <Text style={styles.Text_Titile}>Get Online Certificate</Text>
        <Text style={styles.subText_Titile}>
        Analyse your scores and Track your results
        </Text>
        <View style={styles.stepsContainer}>
          <View style={styles.steps}>
            <View style={styles.stepInactive}></View>
            <View style={styles.stepInactive}></View>
            <View style={styles.stepActive}></View>
          </View>
          <TouchableOpacity  onPress={()=>navigation.navigate("AuthMethod")}  style={styles.nextButton}>
            <Text style={{color:"#FFFFFF", fontWeight:"600",fontSize:18,marginLeft:30}}>Get Started</Text>
          <View style={styles.nextButtonInsider}>
            <AntD name="arrowright" style={styles.arrowIcon} />
          </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Welcomethree;

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
    width: 200,
    height: 60,
    borderRadius: 100,
  justifyContent: "space-between",
    alignItems: 'center',
    flexDirection:"row",
  },
  nextButtonInsider: {
    backgroundColor: 'white',
    width: 47,
    height: 47,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight:8
  },
  arrowIcon: {
    fontSize: 30,
    color: '#0961F5',
  },
});
