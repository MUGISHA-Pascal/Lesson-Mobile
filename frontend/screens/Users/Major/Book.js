import React from 'react'
import { ScrollView, View, TouchableOpacity, Text, Image, StyleSheet, TextInput, Dimensions,Modal } from 'react-native'
import AntD from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import { Category, images, Courses } from '../DemoData/Datas';
import { FlatList } from 'react-native';
import { useState } from 'react';

const Book = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [isBookmarked, setIsBookmarked] = useState(true);
  
    const handleRemoveBookmark = () => {
        setIsBookmarked(false);  
        setModalVisible(false);  // Close the modal
        alert('Item removed from bookmarks');
      };
    
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
                        <TouchableOpacity onPress={()=>   setModalVisible(true)}>
 <AntD name='book' size={20} color="#333" />

                        </TouchableOpacity>
                       
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
                <TouchableOpacity onPress={() => {
                 
                    navigation.goBack()}} style={{ flexDirection: "row", alignItems: "center", paddingHorizontal: 20 }}>
                    <AntD style={{ fontSize: 25, marginRight: 6 }} name='arrowleft' />
                    <Text style={{ fontSize: 21, fontWeight: 600, color: "#202244" }}>Bookmarks</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.goBack()} style={{ flexDirection: "row", alignItems: "center", paddingHorizontal: 20 }}>
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

                            </>}
                          

                        ListFooterComponent={
                          <View style={{ marginBottom:100 }}>
                            
                          </View>
                        }
                  showsVerticalScrollIndicator ={false}
                        />
                    </View>



                </View>
          
            <Modal
        transparent={true}
        visible={modalVisible}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <View style={styles.iconContainer}>
              <View style={styles.warningIcon} />
            </View>
            <Text style={styles.modalText}>Do you want to remove this from bookmarks?</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.confirmButton} onPress={handleRemoveBookmark}>
                <Text style={styles.confirmText}>Yes</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.cancelButton} onPress={() => setModalVisible(false)}>
                <Text style={styles.cancelText}>No</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
        </View>
    )
}

export default Book
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
    contentContainer: {
        flex: 1,
      },
      bookmarkButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
      },
      bookmarkText: {
        marginLeft: 8,
        fontSize: 16,
      },
      modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      },
      modalContainer: {
        width: '80%',
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
      },
      iconContainer: {
        marginBottom: 15,
      },
      warningIcon: {
        backgroundColor: 'black',
        width: 70,
        height: 70,
        borderRadius: 50,
      },
      modalText: {
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 20,
      },
      buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
      },
      confirmButton: {
        backgroundColor: '#ff4d4d',
        padding: 10,
        borderRadius: 50,
        marginRight: 10,
        width:"40%"
      },
      confirmText: {
        color: 'white',
        fontWeight: 'bold',
        textAlign:"center"
      },
      cancelButton: {
        backgroundColor: '#ddd',
        padding: 10,
        borderRadius: 50,
          width:"40%",
          justifyContent:"center"
      },
      cancelText: {
        color: 'black',
        fontWeight: 'bold',
        textAlign:"center"
      },
});

