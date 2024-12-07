import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet,Image } from 'react-native';
import AntD from 'react-native-vector-icons/AntDesign'
const friends = [
  { name: 'Rani Thomas', phone: '+91 702-897-7965' },
  { name: 'Anastasia', phone: '+91 702-897-7965' },
  { name: 'Vaibhav', phone: '+91b727-688-4052' },
  { name: 'Rahul Juman', phone: '+91 601-897-1714' },
  { name: 'Abby', phone: '+91 802-312-320' },
];

const Friends = ({navigation}) => {
  const renderItem = ({ item,index }) => (
    <View style={{...styles.friendItem, borderBottomColor:friends.length == index+1 ?  "white":"#E8F1FF"}}>
      <View style={{flexDirection:"row",alignItems:"center",gap:10,paddingHorizontal:13}}>
        <View style={{width:50,height:50,backgroundColor:"black",borderRadius:50}}></View>
        <View>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.phone}>{item.phone}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.inviteButton}>
        <Text style={styles.inviteText}>Invite</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={{backgroundColor:"#F5F9FF",flex:1}}>
    <View style={{ backgroundColor: "#F5F9FF", paddingVertical: 20, flexDirection: "row", justifyContent: "space-between" }}>
         <TouchableOpacity onPress={() => navigation.goBack()} style={{ flexDirection: "row", alignItems: "center", paddingHorizontal: 20 }}>
             <AntD style={{ fontSize: 25, marginRight: 6 }} name='arrowleft' />
             <Text style={{ fontSize: 21, fontWeight: 600, color: "#202244" }}>Terms & Conditions</Text>
         </TouchableOpacity>

         <TouchableOpacity onPress={() => navigation.goBack()} style={{ flexDirection: "row", alignItems: "center", paddingHorizontal: 20 }}>
             
         </TouchableOpacity>
     </View>
    <View style={styles.container}>

      <FlatList data={friends} keyExtractor={(item) => item.phone} renderItem={renderItem} />
      <View style={styles.shareOptions}>
      
    </View> 
     
        
      </View>
     <View style={{marginHorizontal:20,top:24}}>
     <Text style={{color:"#202244",fontSize:18,fontWeight:600}}>Share Invite Via</Text>

     </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 0,
    backgroundColor: 'white',
    marginHorizontal:30,
    borderRadius:20,
    elevation: 1,
    shadowColor: 'gray',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
    paddingTop:15
    
  },
  friendItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 7,
    backgroundColor:"white",
    borderBottomColor:"#E8F1FF",
    borderBottomWidth:1,
    paddingBottom:10,

    
  },
  name: {
    fontSize: 16,
  },
  phone: {
    fontSize: 14,
    color: '#777',
  },
  inviteButton: {
    backgroundColor: '#0961F5',
    paddingHorizontal: 20,
    borderRadius: 50,
    paddingVertical:5,
    marginRight:20
  },
  inviteText: {
    color: '#fff',
    fontSize: 16,
  },
  shareOptions: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default Friends;
