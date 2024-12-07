import React, { useContext, useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet,Alert, FlatList, Dimensions } from 'react-native';
import { MaterialIcons, Ionicons, FontAwesome5, AntDesign, Entypo } from '@expo/vector-icons'; // Import necessary icons
import { AuthContext } from '../../VAUTH/Auth';
import axios from 'axios';
import * as DocumentPicker from 'expo-document-picker'

const Account = ({navigation}) => {
  const {change, userId} = useContext(AuthContext)
  const [profileImage, setProfileImage] = useState(null);
  const profileOptions = [
    { title: 'Edit Profile', icon: <Ionicons name="person-outline" size={20} color="#333" /> , link:"Edit"},
    { title: 'Bookmarks', icon: <MaterialIcons name="book" size={20} color="#333" />, link:"Book" },
    { title: 'Payment Option', icon: <MaterialIcons name="payment" size={20} color="#333" />, link:"Payment" },
    { title: 'Notifications', icon: <Ionicons name="notifications-outline" size={20} color="#333" />, link:"NotificationSettings" },
    { title: 'Security', icon: <Ionicons name="shield-outline" size={20} color="#333" />,link:"Security" },
    { title: 'Language', icon: <Ionicons name="globe-outline" size={20} color="#333" />, rightText: 'English (US)',link:"Lang" },
    // { title: 'Dark Mode', icon: <Ionicons name="moon-outline" size={20} color="#333" /> },
    { title: 'Terms & Conditions', icon: <Ionicons name="document-text-outline" size={20} color="#333" />, link:"Terms" },
    { title: 'Help Center', icon: <AntDesign name="questioncircleo" size={20} color="#333" />, link:"Help" },
    { title: 'Invite Friends', icon: <Entypo name="share" size={20} color="#333" />, link:"Friends" },
    { title: 'LogOut', icon: <Entypo name="lock" size={20} color="#333" />, link:"out" },
    { title: 'Add Course', icon: <Entypo name="plus" size={20} color="#333" />, link:"add" },
  ];

  const [user, setUser] = useState()
  
 
  useEffect(()=>{
    if(userId > 0){
      getUser(userId)
    }else {
      console.log("Failed the id is ivalid")
      // Alert.alert("WE can't get user with that id")
    }
  }, [])

  const handleFilePick = async () => {
    console.log('Opening file picker...');
    try {
      const res = await DocumentPicker.getDocumentAsync({
        type: "*/*", // Allow all file types
      });

        console.log('File selected:', res);
        setProfileImage(res.assets[0])
        Alert.alert('File Selected', `You selected: ${res.assets[0].name}`);
      uploadImage(profileImage)
    } catch (err) {
      console.error('Error picking file:', err);
      Alert.alert('Error', 'Failed to pick file. Please try again.');
    }
  };


  const uploadImage = async (image) => {
    console.log("now we are uploading")
    const formData = new FormData();
    formData.append('ProfilePicture', {
      uri: image.uri,
      type: image.mimeType,
      name: image.name,
    });
   console.log(image.uri)
    try {
      const response = await axios.put(`http://10.12.73.148:4000/user/upload_profile/${userId}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      Alert.alert('Success', 'Profile image uploaded successfully!');
    } catch (error) {
      Alert.alert('Error', 'Failed to upload image. Please try again.');
      console.error(error);
    }
  };

  const renderProfileOption = ({ item }) => (
    <TouchableOpacity onPress={()=>{
      if(item.link=="out"){
        change()
      }else{
        navigation.navigate(item.link)
      }
    }} style={styles.optionRow}>
      <View style={styles.optionContent}>
        {item.icon}
        <Text style={styles.optionText}>{item.title}</Text>
      </View>
      
      {item.rightText ? (
        <>
          <Text style={styles.rightText}>{item.rightText}</Text>
          <AntDesign name="right" size={20} color="#333" />
        </>
      
      ) : (
        <AntDesign name="right" size={20} color="#333" />
      )}
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Profile Header */}
      <View style={{backgroundColor:"white",borderRadius:16,position:"absolute",width:"100%",bottom:5,height:Dimensions.get("screen").height-180}}>
      <View style={styles.header}>
        <View style={styles.avatarWrapper}>
          <Image
            source={{ uri: "https://www.parentmap.com/images/article/9321/YoungBoy.jpg" }} 
            style={styles.avatar}
          />
          <TouchableOpacity onPress={handleFilePick} style={styles.avatarIcon}>
            <AntDesign name="camerao" size={20} color="white" />
          </TouchableOpacity>
        </View>
        <Text style={styles.profileName}>{user ? user.username : 'Alex'}</Text>
        <Text style={styles.profileEmail}>{user ? user.email : 'alex@gmail.com.rw.in.rwanda'}</Text>
      </View>

      {/* Profile Options */}
      <FlatList
        data={profileOptions}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderProfileOption}
        showsVerticalScrollIndicator={false}
        style={{marginBottom:0}}
      />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F9FF',
    paddingHorizontal: 20,
    paddingTop: 40,
   alignItems:"center"
  },
  header: {
    alignItems: 'center',
    top: -40,
  },
  avatarWrapper: {
    position: 'relative',
    marginBottom: 10,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#e0e0e0',
  },
  avatarIcon: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    backgroundColor: '#167F71',
    borderRadius: 50,
    padding: 5,
  },
  profileName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  profileEmail: {
    fontSize: 14,
    color: '#666',
  },
  optionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 10,

  },
  optionContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionText: {
    fontSize: 16,
    color: '#333',
    marginLeft: 10,
  },
  rightText: {
    fontSize: 14,
    color: '#007bff',
    fontWeight:"800",
    marginRight:-90
  },
  addcourse:{ 
    
    marginLeft: 10,
    marginBottom:15,
    marginTop:17,
    display:'flex',
    flexDirection:'row',
    gap:16,
    marginLeft:10

   },
   plus:{
    fontSize:18,
    color: '#058bff',
    fontStyle:'bold'

   },
   addText:{
    color: '#0584ff',
    fontSize:16
   },

});

export default Account;
