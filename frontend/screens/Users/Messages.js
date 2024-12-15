import React, { useState } from 'react';
import {
  View,
  TextInput,
  FlatList,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
  StatusBar,
} from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';
import Font from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';


import { useNavigation } from '@react-navigation/native';

const screen = Dimensions.get("window");

const sampleUsers = [
  {
    id: 1,
    username: 'JohnDoe',
    profile_pic: 'https://i0.wp.com/picjumbo.com/wp-content/uploads/woman-with-sun-glasses-in-flower-field-summer-free-photo.jpg',
    last_message: 'Hey, how are you?',
    status: true,
  },
  {
    id: 2,
    username: 'JaneSmith',
    profile_pic: 'https://i.pinimg.com/564x/15/0f/a8/150fa8800b0a0d5633abc1d1c4db3d87.jpg',
    last_message: 'Looking forward to our meeting.',
    status: false,
  },
  {
    id: 3,
    username: 'JaneSmith',
    profile_pic: 'https://i.pinimg.com/564x/15/0f/a8/150fa8800b0a0d5633abc1d1c4db3d87.jpg',
    last_message: 'Looking forward to our meeting.',
    status: false,
  },
  {
    id: 4,
    username: 'JaneSmith',
    profile_pic: 'https://i.pinimg.com/564x/15/0f/a8/150fa8800b0a0d5633abc1d1c4db3d87.jpg',
    last_message: 'Looking forward to our meeting.',
    status: false,
  },
  {
    id: 5,
    username: 'JaneSmith',
    profile_pic: 'https://i.pinimg.com/564x/15/0f/a8/150fa8800b0a0d5633abc1d1c4db3d87.jpg',
    last_message: 'Looking forward to our meeting.',
    status: false,
  },
 
];

const Messages = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredUsers, setFilteredUsers] = useState(sampleUsers);

  const navigation = useNavigation();

  const handleSearch = () => {
    navigation.navigate("Search", { mess: "yes" });
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F5F9FF',

    },
    searchBar: {
      paddingHorizontal: 16,
      paddingVertical: 5,
      borderRadius: 10,
      marginTop: 5,
      marginBottom: 5,
      marginHorizontal: 20,
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#D6EAF8',
    },
    userItem: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 16,
      paddingHorizontal: 16,
      borderBottomWidth: 0.4,
      borderBottomColor: '#ddd',
    },
    profileImg: {
      width: 50,
      height: 50,
      borderRadius: 25,
      marginRight: 16,
    },
    userInfo: {
      flex: 1,
    },
    searchIcon: {
      marginRight: 5,
    },
    userName: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#000',
    },
    prevMessage: {
      fontSize: 14,
      color: '#999',
    },
    searchContainer: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#D6EAF8',
      borderRadius: 5,
      paddingHorizontal: 10,
      marginHorizontal: 20,
    },
    header: {
      
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginHorizontal:20,
      marginTop:20,marginBottom:20
    },
    headerTitle: {
      fontSize: 24,
      fontWeight: "700",
      color: "#202244",
    },
    headerSubtitle: {
      fontSize: 13,
      fontWeight: "600",
      color: "#545454CC",
    },
    profileImage: {
      width: 30,
      height: 30,
      borderRadius: 20,
      marginTop:-15
    },
  });

  const renderUser = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('ChatScreen', { id: item.id, name: item.username, pro: item.profile_pic })}>
      <View style={styles.userItem}>
        <Image
          source={{ uri: item.profile_pic || 'https://example.com/default-profile.png' }}
          style={styles.profileImg}
        />
        <View style={styles.userInfo}>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.userName}>{item.username}</Text>
            {!item.status && <Text style={{marginLeft:10,color:"#0961F5"}}>Active</Text>}
          </View>
          {item.last_message && <Text style={styles.prevMessage}>{item.last_message}</Text>}
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
          <View>
            <Text style={styles.headerTitle}>Messages</Text>
            <Text style={styles.headerSubtitle}>Meet your mentors</Text>
          </View>
          <TouchableOpacity onPress={()=>navigation.navigate("Search")}>
          <Image style={styles.profileImage} source={require("../../assets/search.jpeg")} />
          </TouchableOpacity>
        </View>
      <View style={{backgroundColor:"white",marginHorizontal:20,borderRadius:10,height:"auto",marginBottom:10 }}>
    
        
        <FlatList
          data={filteredUsers}
          renderItem={renderUser}
          keyExtractor={(item) => item.id.toString()}
          style={{backgroundColor:"white",height:Dimensions.get("screen").height-250,marginBottom:50,borderRadius:10, }}
        />
      </View>
    </View>
  );
};

export default Messages;
