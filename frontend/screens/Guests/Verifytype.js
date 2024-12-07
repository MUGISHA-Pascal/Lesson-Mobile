import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Image } from 'react-native';
import AntD from 'react-native-vector-icons/AntDesign';

const Verifytype = ({navigation}) => {
  return (
    <View style={styles.container}>

       <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginTop: 69, flexDirection: "row", alignItems: "center", marginHorizontal: 30 }}>
                <AntD style={{ fontSize: 25, marginRight: 6 }} name='arrowleft' />
                <Text style={{ fontSize: 21, fontWeight: 600, color: "#202244" }}>Forgot Password</Text>
            </TouchableOpacity>
       
   <View style={styles.containerTwo}>
   <View style={styles.All_combined_container}> 
     
        <Text style={styles.Text_Titile}>Select which contact details should we use to Reset Your Password</Text>
           <View>
            
           <TouchableOpacity style={styles.LoginButton}>
           <View style={styles.nextButtonInsider}>
           <Image style={{width:40,height:40}} source={require("../../assets/cu_em.jpeg")} />
          </View>
          <View>
          <Text style={{color:"rgba(80, 80, 80, 1)", fontWeight:"700",fontSize:12,marginLeft:8}}>Via Email</Text>
            <Text style={{color:"rgba(32, 34, 68, 1)", fontWeight:"700",fontSize:15,marginLeft:8}}>Continue with Google</Text>
          
          </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.LoginButton}>
           <View style={styles.nextButtonInsider}>
           <Image style={{width:40,height:40}} source={require("../../assets/cu_em.jpeg")} />
          </View>
          <View>
          <Text style={{color:"rgba(80, 80, 80, 1)", fontWeight:"700",fontSize:12,marginLeft:8}}>Via SMS</Text>
            <Text style={{color:"rgba(32, 34, 68, 1)", fontWeight:"700",fontSize:15,marginLeft:8}}>+250 786 255 668</Text>
          
          </View>
          </TouchableOpacity>
           </View>

         
        <View style={styles.stepsContainer}>
               
          <TouchableOpacity onPress={()=>navigation.navigate("OTP")} style={styles.nextButton}>
          <View>

</View>
<View>
 
</View>
            <Text style={{color:"#FFFFFF", fontWeight:"600",fontSize:18,marginLeft:30}}>Continue</Text>
          <View style={styles.nextButtonInsider}>
            <AntD name="arrowright" style={styles.arrowIcon} />
          </View>
          </TouchableOpacity>

          
        </View>
      </View>
   </View>
    </View>
  );
};

export default Verifytype;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F9FF',  
     height: "100%",
    width:"100%"
   
  },
  containerTwo: {
  
    backgroundColor: '#F5F9FF',
    justifyContent: 'center',
    alignItems: 'center',
       height: "80%",
    width:"100%"
 
  },
  All_combined_container: {
    width: '100%',
    padding: 20,
    position:"absolute",
    bottom:0,
    
   
   
  },
  All_combined_container2: {
    width: '100%',
    padding: 20,
    position:"absolute",
    top:94,
   
   
  },
  Text_Titile: {
    fontSize: 14,
    color: "rgba(84, 84, 84, 1)",
    marginBottom: 10,
    textAlign: 'center',
    fontWeight:"700"
   
  },
  subText_Titile: {
    fontSize: 14,
    color: '#545454',
    marginBottom: 20,
    textAlign: 'center',
  },
  stepsContainer: {

    alignItems: 'center',
    marginTop: 0,
    marginHorizontal:10,
    justifyContent:"center"
  },
  steps: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  nextButton: {
    backgroundColor: '#0961F5',
    width: Dimensions.get("screen").width-60,
    height: 60,
    borderRadius: 100,
  justifyContent: "space-between",
    alignItems: 'center',
    flexDirection:"row",
    marginTop:50
  },

  LoginButton: {
    height: 60,
    borderRadius: 12,
 
    alignItems: 'center',
    flexDirection:"row",
    backgroundColor:"white",
    height:80,
    paddingHorizontal:10,
    marginVertical:10
  },
  nextButton2: {

    width: Dimensions.get("screen").width-60,
    height: 60,
    borderRadius: 100,
    alignItems: 'center',
    flexDirection:"row",
    justifyContent:"center"
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
