import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Image } from 'react-native';
import AntD from 'react-native-vector-icons/AntDesign';
import * as WebBrowser from 'expo-web-browser'
import * as Google from 'expo-auth-session/providers/google'
import * as AuthSession from 'expo-auth-session';



  WebBrowser.maybeCompleteAuthSession()

const AuthMethod = ({navigation}) => {

  const [request, responce, promptAsync] = Google.useAuthRequest({
    // webClientId:"171513257792-q47qu64eobjjugk1u0socricfk032gqg.apps.googleusercontent.com",
    // iosClientId:"171513257792-b0f3eanov7v33ptal15jf2ogue0atoia.apps.googleusercontent.com",
    androidClientId:"171513257792-cpuqn2vpdkccd9r2sbmmlafdd6eubjan.apps.googleusercontent.com"
  
  })

  const handleToken = ()=>{
    if(responce?.type === "success"){
      const {authentication} = responce;
      const token = authentication?.accessToken;
      console.log("access token", token)
    }
  }

  useEffect(()=>{
    handleToken();

  },[responce])
  return (
    <View style={styles.container}>

      
       
      <View style={styles.All_combined_container}> 
       
        <Text style={styles.Text_Titile}>LOGO</Text>
           {/* <View>
            
           <TouchableOpacity onPress={()=>promptAsync()} style={styles.LoginButton}>
           <View style={styles.nextButtonInsider}>
           <Image style={{width:20,height:20}} source={require("../../assets/google.png")} />
          </View>
            <Text style={{color:"#545454", fontWeight:"800",fontSize:16,marginLeft:8}}>Continue with Google</Text>
          
          </TouchableOpacity>

          <TouchableOpacity style={styles.LoginButton}>
           <View style={styles.nextButtonInsider}>
           <Image style={{width:20,height:20}} source={require("../../assets/apple.png")} />
          </View>
            <Text style={{color:"#545454", fontWeight:"800",fontSize:16,marginLeft:8}}>Continue with Apple</Text>
          
          </TouchableOpacity>
           </View> */}

         
        <View style={styles.stepsContainer}>
                {/* <Text style={{paddingVertical:20, color:"#545454",fontSize:18,fontWeight:800}}>(Or)</Text> */}

          <TouchableOpacity onPress={()=>navigation.navigate("Login")} style={styles.nextButton}>
            <Text style={{color:"#FFFFFF", fontWeight:"600",fontSize:18,marginLeft:30}}>Sign In with Your Account</Text>
          <View style={styles.nextButtonInsider}>
            <AntD name="arrowright" style={styles.arrowIcon} />
          </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>navigation.navigate("Register")} style={styles.nextButton2}>
            <Text style={{color:"#545454", fontWeight:"800",fontSize:14,textAlign:"center"}}>Don’t have an Account?</Text>
            <Text style={{color:"#0961F5", fontWeight:"800",fontSize:14,textAlign:"center",textDecorationLine: 'underline',paddingLeft:5}}>SIGN UP</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate("AdminLogin")} style={styles.nextButton2}>
            <Text style={{color:"#0961F5", fontWeight:"800",fontSize:14,textAlign:"center",textDecorationLine: 'underline',paddingLeft:5}}>CLICK HERE TO LOGIN AS ADMIN</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>navigation.navigate("Admin")} style={styles.nextButton2}>
            <Text style={{color:"#0961F5", fontWeight:"800",fontSize:14,textAlign:"center",textDecorationLine: 'underline',paddingLeft:5}}>CLICK HERE TO REGISTER UR TESTING ADMIN</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default AuthMethod;

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

    alignItems: 'center',
    marginTop: 100,
    marginHorizontal:10,
    justifyContent:"center"
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
    width: Dimensions.get("screen").width-60,
    height: 60,
    borderRadius: 100,
  justifyContent: "space-between",
    alignItems: 'center',
    flexDirection:"row",
  },

  LoginButton: {
    height: 60,
    borderRadius: 100,
  justifyContent: "center",
    alignItems: 'center',
    flexDirection:"row",
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
