import React from 'react';
import { View, Text, StyleSheet, FlatList, Image,TouchableOpacity } from 'react-native';
import AntD from 'react-native-vector-icons/AntDesign';
const courses = [
    {
      id: '1',
      title: 'John Doe', 
      role: 'Web Design',
      status: 'Active', 
    },
    {
      id: '2',
      title: 'Jane Smith', 
      role: 'UI/UX Design', 
      status: 'Active', 
    },
    {
      id: '3',
      title: 'Emily Johnson', 
      role: 'Full Stack Web Development',
      status: 'Active', 
    },
    {
      id: '4',
      title: 'Michael Brown',  
      role: 'Human Resources Management',
      status: 'Inactive', 
    },
    {
      id: '5',
      title: 'Sarah Lee',  
      role: 'Finance & Accounting', 
      status: 'Inactive',  
    },
    {
      id: '6',
      title: 'Sarah Lee',  
      role: 'Finance & Accounting', 
      status: 'Inactive',  
    },
    {
      id: '7',
      title: 'Sarah Lee',  
      role: 'Finance & Accounting', 
      status: 'Inactive',  
    },
    {
      id: '8',
      title: 'Sarah Lee',  
      role: 'Finance & Accounting', 
      status: 'Inactive',  
    },
    {
      id: '9',
      title: 'Sarah Lee',  
      role: 'Finance & Accounting', 
      status: 'Inactive',  
    },
  ];
  

const CourseCard = ({ title, role, status }) => {
  return (
    <View style={styles.card}>
      <View style={styles.iconContainer}>
       
        <View style={styles.iconPlaceholder} />
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.role}>{role}</Text>
      </View>
      <View style={{...styles.statusContainer,backgroundColor: status == 'Active'  ? '#0961F5' : "red",borderRadius:50 }}>
        <Text style={styles.status}>{status}</Text>
      </View>
    </View>
  );
};

const Mentor = ({navigation}) => {
  return (
    <View style={styles.container}>
         <View style={{ backgroundColor: "#F5F9FF", paddingVertical: 20, flexDirection: "row", justifyContent: "space-between",marginTop:-4 }}>
                <TouchableOpacity onPress={()=>navigation.goBack()} style={{ flexDirection: "row", alignItems: "center", paddingHorizontal: 10 }}>
                <AntD style={{ fontSize: 25, marginRight: 6 }} name='arrowleft' />

                    <Text style={{ fontSize: 24, fontWeight: 700, color: "#202244" }}>Mentors</Text>
                </TouchableOpacity>

            </View>

    <View style={{borderRadius:16,paddingBottom:80}}>
     
    <FlatList
        data={courses}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CourseCard title={item.title} role={item.role} status={item.status} />
        )}
      />
    </View>
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
    paddingHorizontal: 15,
   

    marginBottom: 10,
 
    paddingTop:10
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

export default Mentor;
