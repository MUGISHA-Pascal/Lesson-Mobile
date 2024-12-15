import React from 'react';
import { View, Text, StyleSheet, FlatList, Image,TouchableOpacity } from 'react-native';
import AntD from 'react-native-vector-icons/AntDesign';
const courses = [
  {
    id: '1',
    title: 'Build Personal Branding',
    role: 'Web Designer',
    status: 'Paid',
  },
  {
    id: '2',
    title: 'Mastering Blender 3D',
    role: 'UI/UX Designer',
    status: 'Paid',
  },
  {
    id: '3',
    title: 'Full Stack Web Development',
    role: 'Web Development',
    status: 'Paid',
  },
  {
    id: '4',
    title: 'Complete UI Designer',
    role: 'HR Management',
    status: 'Paid',
  },
  {
    id: '5',
    title: 'Sharing Work with Team',
    role: 'Finance & Accounting',
    status: 'Paid',
  },
];

const CourseCard = ({ title, role, status }) => {
  return (
    <View style={styles.card}>
      <View style={styles.iconContainer}>
        {/* Example Placeholder for Image/Icon */}
        <View style={styles.iconPlaceholder} />
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.role}>{role}</Text>
      </View>
      <View style={styles.statusContainer}>
        <Text style={styles.status}>{status}</Text>
      </View>
    </View>
  );
};

const Trans = ({navigation}) => {
  return (
    <View style={styles.container}>
         <View style={{ backgroundColor: "#F5F9FF", paddingVertical: 20, flexDirection: "row", justifyContent: "space-between",marginTop:-4 }}>
                <TouchableOpacity style={{ flexDirection: "row", alignItems: "center", paddingHorizontal: 10 }}>
                    
                    <Text style={{ fontSize: 24, fontWeight: 700, color: "#202244" }}>Transactions</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>navigation.navigate("Search")} style={{ flexDirection: "row", alignItems: "center", paddingHorizontal: 10 }}>
                    <Image style={{ width: 30, height: 30 }} source={require("../../assets/search.jpeg")} />
                </TouchableOpacity>
            </View>

      <FlatList
        data={courses}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CourseCard title={item.title} role={item.role} status={item.status} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F9FF',  // Background color as specified
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
    width: 100,
    height: 100,
    borderRadius: 20,
    backgroundColor: 'black', 
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#202244', // Title color as specified
  },
  role: {
    fontSize: 14,
    color: '#606060',
  },
  statusContainer: {
    backgroundColor: '#0961F5',  // Background for Paid status (you can change this color)
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
  },
  status: {
    color: '#FFF',
    fontWeight: 'bold',
  },
});

export default Trans;
