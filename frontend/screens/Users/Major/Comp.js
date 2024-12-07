import React from 'react';
import { View, Text, StyleSheet, FlatList, Image,TouchableOpacity } from 'react-native';
import AntD from 'react-native-vector-icons/AntDesign';

  


const Completed = ({navigation}) => {
  return (
    <View style={styles.container}>
         <View style={{ backgroundColor: "#F5F9FF", paddingVertical: 20, flexDirection: "row", justifyContent: "space-between",marginTop:-4 }}>
                <TouchableOpacity onPress={()=>navigation.goBack()} style={{ flexDirection: "row", alignItems: "center", paddingHorizontal: 10 }}>
                <AntD style={{ fontSize: 25, marginRight: 6 }} name='arrowleft' />

                    <Text style={{ fontSize: 24, fontWeight: 700, color: "#202244" }}>Quizes/Exams</Text>
                </TouchableOpacity>

         
            </View>

    <Text style={{color:"#202244",marginLeft:20}}>No Exam/Quiz completed yet.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F9FF',  
    paddingTop: 5,
    paddingHorizontal:10
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    elevation: 1,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  iconContainer: {
    marginRight: 10,
  },
  iconPlaceholder: {
    width: 80,
    height: 80,
    borderRadius: 50,
    backgroundColor: 'black', 
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#202244',
  },
  role: {
    fontSize: 14,
    color: '#606060',
  },
  statusContainer: {
    backgroundColor: '#0961F5',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
  },
  status: {
    color: '#FFF',
    fontWeight: 'bold',
  },
});

export default Completed;
