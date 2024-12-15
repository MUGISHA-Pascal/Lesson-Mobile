import React from 'react'
import { ScrollView, View, TouchableOpacity, Text, Image, StyleSheet, TextInput, Dimensions } from 'react-native'
import AntD from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import { Category, images, Courses } from '../DemoData/Datas';
import { FlatList } from 'react-native';
import { useState } from 'react';

const Courseinside = ({ navigation }) => {


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
                    <Text style={{ fontSize: 21, fontWeight: 600, color: "#202244" }}>All Courses</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate("Search")} style={{ flexDirection: "row", alignItems: "center", paddingHorizontal: 20 }}>
                    <Image style={{ width: 30, height: 30 }} source={require("../../../assets/search.jpeg")} />
                </TouchableOpacity>
            </View>


            <View style={{ paddingHorizontal: 25 }}>


                

                <View>
                    <FlatList
                        data={Courses}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={renderCourseItem}

                        ListHeaderComponent={<>
                            <View>

                                <FlatList
                                    horizontal
                                    data={popularCourses}
                                    keyExtractor={(item, index) => index.toString()}
                                    renderItem={({ item }) => (
                                        <TouchableOpacity onPress={() => setSelectedPopular(item)} style={{ paddingHorizontal: 20, paddingVertical: 8, marginRight: 10, backgroundColor: selectedPopular == item ? "#167F71" : "#E8F1FF", borderRadius: 50, marginTop: 0 }}>
                                            <Text style={{ fontSize: 13, fontWeight: 700, color: selectedPopular == item ? "#ffff" : "#202244" }}>{item}</Text>
                                        </TouchableOpacity>


                                    )}
                                />
                            </View>
                        </>
                        }

                        ListFooterComponent={
                            <>

                                <View style={{ marginBottom: 100 }}>

                                </View></>
                        }

                        showsVerticalScrollIndicator={false}
                    />
                </View>



            </View>

        </View>
    )
}

export default Courseinside
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
});

