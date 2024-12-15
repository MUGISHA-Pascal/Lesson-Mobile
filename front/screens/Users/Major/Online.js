import React from 'react'
import { ScrollView, View, TouchableOpacity, Text, Image, StyleSheet, TextInput, Dimensions } from 'react-native'
import AntD from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import { Category, images, Courses } from '../DemoData/Datas';
import { FlatList } from 'react-native';
import { useState } from 'react';

const Online = ({ navigation }) => {


    const popularCourses = [
        "Data Science Basics",
        "Web Development",
        "Digital Marketing",
        "Machine Learning",
        "Project Management",
        "Graphic Design",
        "Accounting Fundamentals",
        "React Native Development",
        "Cybersecurity 101",
        "Intro to Psychology",
        "Creative Writing",
        "AI Foundations",
        "Social Media Marketing",
        "UX/UI Design",
        "Java Programming"
    ];
    const [selectedCategory, setSelectedCategory] = useState("")
    const [selectedPopular, setSelectedPopular] = useState("")



    const renderCourseItem = ({ item }) => (
        <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.content}>
                <View style={styles.header}>
                    <View>
                        <Text style={styles.category}>{item.category}</Text>
                
                    </View>
                    <View style={styles.bookmarkIcon}>
                        <AntD name='book' size={20} color="#333" />
                    </View>
                </View>

                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.price}>{item.price}</Text>
                <View style={styles.courseInfo}>
                <Text style={styles.rating}> <AntD name='star' size={15} color="orange" /> {item.rating}</Text>
                    <Text style={styles.students}>{item.students} Std</Text>
                </View>
            </View>
        </View>
    );



    return (
        <View style={{ flex: 1, backgroundColor: "#F5F9FF" }}>
            <View style={{ backgroundColor: "#F5F9FF", paddingVertical: 20, flexDirection: "row", justifyContent: "space-between" }}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{ flexDirection: "row", alignItems: "center", paddingHorizontal: 20 }}>
                    <AntD style={{ fontSize: 25, marginRight: 6 }} name='arrowleft' />
                    <Text style={{ fontSize: 21, fontWeight: 600, color: "#202244" }}>Results</Text>
                </TouchableOpacity>
{/* 
                <TouchableOpacity onPress={() => navigation.goBack()} style={{ flexDirection: "row", alignItems: "center", paddingHorizontal: 20 }}>
                    <Image style={{ width: 30, height: 30 }} source={require("../../../assets/search.jpeg")} />
                </TouchableOpacity> */}
            </View>

          
                <View style={{ paddingHorizontal: 25 }}>

                          
                <View style={styles.inputContainer}>
            <Image style={{ width: 30, height: 30 }} source={require("../../../assets/sear.jpeg")} />
            <TextInput
              style={styles.input}
              placeholder="Search for.."
              placeholderTextColor="#aaa"


            />
          <TouchableOpacity  style={styles.searchButton}>
          <AntD name="search1" size={20} color="white" />
        </TouchableOpacity>
          </View>
                    <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                        

                        <View>
                        <Text style={{color:"#202244",fontWeight:600,fontSize:15}}>Results for "<Text style={{color:"#0961F5"}}>Ibyapa byingenzi</Text>"</Text>
                        
                        </View>
                        <Text style={{color:"#0961F5"}}>About 30 results</Text>
                    </View>


                    <View>
                        <FlatList
                            data={Courses}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={renderCourseItem}

                         

ListFooterComponent={
    <View style={{ marginBottom:500 }}>
      
    </View>
  }
  showsVerticalScrollIndicator={false}

                        />
                    
                    </View>



                </View>
     
        </View>
    )
}

export default Online
const styles = StyleSheet.create({



    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        marginVertical: 10,
        padding: 0,
        flexDirection: 'row',
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    image: {
        width: 100,
        height: 120,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        backgroundColor: '#000',
    },
    content: {
        marginLeft: 10,
        flex: 1,
        justifyContent: 'space-around',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    category: {
        color: 'orange',
        fontWeight: 'bold',
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    bookmarkIcon: {
        paddingRight: 10,
    },
    courseInfo: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        gap: 10,
        alignItems: 'center',
        marginTop: 5,
    },
    price: {
        fontSize: 16,
        color: '#007bff',
    },
    rating: {
        fontSize: 14,
        color: '#555',
    },
    students: {
        fontSize: 14,
        color: '#555',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 12,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 1,
        borderColor: 'white',
        marginBottom: 18,
    
        height: 60,
        width: "100%",
        marginTop: 0,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
    
      },
      icon: {
        marginRight: 10,
        fontSize: 20
      },
      input: {
        flex: 1,
        color: '#000',
      },
      searchButton: {
        backgroundColor: '#007bff',
        padding: 10,
        borderRadius: 10,
      },
});

