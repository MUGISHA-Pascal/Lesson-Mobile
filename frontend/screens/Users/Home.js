import React, { useState, useEffect, useContext } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  Alert,
  ImageBackground,
  StatusBar,
} from "react-native";
import { TouchableOpacity } from "react-native";
import AntD from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";
import { FlatList } from "react-native";
import { Courses, nameYearArray } from "./DemoData/Datas";
import { ScrollView } from "react-native";
import { TouchableWithoutFeedback } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Make sure to install @expo/vector-icons if not already
import { AuthContext } from "../../VAUTH/Auth";
import axios from "axios";

export const Home = () => {

  const {user} = useContext(AuthContext);
  const navigation = useNavigation();
  const Academi = [
    "Mathematics",
    "Science",
    "History",
    "Language Arts",
    "Computer Science",
    "Engineering",
    "Health and Medicine",
    "Business and Finance",
    "Social Studies",
    "Art and Design",
    "Music",
    "Psychology",
    "Environmental Studies",
    "Physical Education",
    "Philosophy",
  ];

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
    "Java Programming",
  ];

  const [coursesData, setCoursesData] = useState([]);
  
  const getCourses = async () => {
    try {
      const res = await axios.get("http://10.12.73.148:4000/courses");
      console.log(res.data)
      setCoursesData(res.data.c)
    }catch(error) {
      console.log(error)
    }
  }
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedPopular, setSelectedPopular] = useState("");
  const slides = [
    {
      discount: "25% OFF*",
      title: "Today's Special",
      description:
        "Get a Discount for Every Course Order only Valid for Today!",
    },
    {
      discount: "30% OFF*",
      title: "Flash Sale",
      description: "Limited time offer, grab your favorite courses now!",
    },
    {
      discount: "20% OFF*",
      title: "Weekly Deal",
      description: "Special discounts on selected courses this week!",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically move to the next slide every 3 seconds
  useEffect(() => {
    getCourses()
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  // Navigate slides with left and right buttons
  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % slides.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((currentIndex - 1 + slides.length) % slides.length);
  };


  const renderCourseItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={{ paddingHorizontal: 5, paddingBottom: 10 }}>
        <View style={styles.content}>
          <View style={styles.header}>
            <View>
              <Text style={styles.category}>{item.category}</Text>
              <Text style={styles.name}>{item.name}</Text>
            </View>
            <View style={styles.bookmarkIcon}>
              <AntD name="book" size={20} color="#333" />
            </View>
          </View>

          <View style={styles.courseInfo}>
            <Text style={styles.price}>{item.price} | </Text>
            <Text style={styles.rating}>
              {" "}
              <AntD name="star" size={15} color="orange" /> {item.rating} |{" "}
            </Text>
            <Text style={styles.students}>{item.students} Std</Text>
          </View>
        </View>
      </View>
    </View>
  );

  return (
    <View style={{ flex: 1, backgroundColor: "#F5F9FF", width: "100%" }}>
      <StatusBar
        backgroundColor="#F5F9FF"
        barStyle="dark-content"
        hidden={false}
        translucent={false}
        networkActivityIndicatorVisible={false}
      />
      <ScrollView>
        <View style={{ paddingHorizontal: 25 }}>
          <View
            style={{
              marginTop: 40,
              flexDirection: "row",
              justifyContent: "space-around",
              gap: 0,
              display: "flex",
            }}
          >
            <View>
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: 700,
                  color: "#202244",
                  marginBottom: 5,
                }}
              >
                Hi,<Text>
                  {user ? user.username : 'User'}
                  
                </Text>
              </Text>
              <Text
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  color: "#545454CC",
                  paddingRight: 70,
                }}
              >
                What Would you like to learn Today? Search Below.
              </Text>
            </View>
            <View>
              <TouchableOpacity onPress={() => navigation.navigate("Noti")}>
                <Image
                  style={{ width: 40, height: 40 }}
                  source={require("../../assets/no.jpeg")}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.inputContainer}>
            <Image
              style={{ width: 30, height: 30 }}
              source={require("../../assets/sear.jpeg")}
            />
            <TouchableWithoutFeedback
              onPress={() => navigation.navigate("Search")}
            >
              <TextInput
                style={styles.input}
                placeholder="Search for.."
                placeholderTextColor="#aaa"
                onPress={() => navigation.navigate("Search")}
              />
            </TouchableWithoutFeedback>

            <TouchableOpacity onPress={() => navigation.navigate("Online")}>
              <Image
                style={{ width: 40, height: 40 }}
                source={require("../../assets/fil.jpeg")}
              />
            </TouchableOpacity>
          </View>

          <ImageBackground
            source={require("../../assets/Backdrop.png")}
            style={styles.containerS}
            imageStyle={{ borderRadius: 22 }}
          >
            <View style={styles.overlay}>
              <Text style={styles.discountText}>
                {slides[currentIndex].discount}
              </Text>
              <Text style={styles.titleText}>{slides[currentIndex].title}</Text>
              <Text style={styles.descriptionText}>
                {slides[currentIndex].description}
              </Text>
            </View>

            {/* Left and Right Navigation Buttons */}
            <View style={styles.navContainer}>
              <TouchableOpacity
                onPress={handlePrevious}
                style={styles.navButton}
              >
                <Ionicons name="chevron-back" size={24} color="white" />
              </TouchableOpacity>
              <TouchableOpacity onPress={handleNext} style={styles.navButton}>
                <Ionicons name="chevron-forward" size={24} color="white" />
              </TouchableOpacity>
            </View>
          </ImageBackground>

          <View style={{ marginTop: 20 }}>
            <View
              style={{
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <View>
                <Text
                  style={{ color: "#202244", fontWeight: 600, fontSize: 18 }}
                >
                  Categories
                </Text>
              </View>
              <View>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Cat")}
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 4,
                  }}
                >
                  <Text
                    style={{ color: "#0961F5", fontSize: 12, fontWeight: 800 }}
                  >
                    SEE ALL
                  </Text>
                  <AntD
                    name="right"
                    style={{ color: "#0961F5", fontSize: 12, fontWeight: 800 }}
                  />
                </TouchableOpacity>
              </View>
            </View>

            <View>
              <FlatList
                horizontal
                data={Academi}
                keyExtractor={(item, index) => index.toString()} // provide a key for each item
                renderItem={({ item }) => (
                  <TouchableOpacity
                    onPress={() => setSelectedCategory(item)}
                    style={{
                      paddingHorizontal: 5,
                      paddingVertical: 20,
                      marginRight: 10,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 15,
                        fontWeight: 700,
                        color: selectedCategory == item ? "#0961F5" : "#A0A4AB",
                      }}
                    >
                      {item}
                    </Text>
                  </TouchableOpacity>
                )}
              />
            </View>

            {/* FOR THE CATEGORIES CODES */}

            <View
              style={{
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <View>
                <Text
                  style={{ color: "#202244", fontWeight: 600, fontSize: 18 }}
                >
                  Polupar Courses
                </Text>
              </View>
              <View>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Popular")}
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 4,
                  }}
                >
                  <Text
                    style={{ color: "#0961F5", fontSize: 12, fontWeight: 800 }}
                  >
                    SEE ALL
                  </Text>
                  <AntD
                    name="right"
                    style={{ color: "#0961F5", fontSize: 12, fontWeight: 800 }}
                  />
                </TouchableOpacity>
              </View>
            </View>

            <FlatList
              horizontal
              data={popularCourses}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => setSelectedPopular(item)}
                  style={{
                    paddingHorizontal: 20,
                    paddingVertical: 8,
                    marginRight: 10,
                    backgroundColor:
                      selectedPopular == item ? "#167F71" : "#E8F1FF",
                    borderRadius: 50,
                    marginTop: 10,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 13,
                      fontWeight: 700,
                      color: selectedPopular == item ? "#ffff" : "#202244",
                    }}
                  >
                    {item}
                  </Text>
                </TouchableOpacity>
              )}
            />

            <View style={{}}>
              <FlatList
                data={Courses}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderCourseItem}
                horizontal
              />
            </View>

            <View
              style={{
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <View>
                <Text
                  style={{ color: "#202244", fontWeight: 600, fontSize: 18 }}
                >
                  Mentors
                </Text>
              </View>
              <View>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Mentors")}
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 4,
                  }}
                >
                  <Text
                    style={{ color: "#0961F5", fontSize: 12, fontWeight: 800 }}
                  >
                    SEE ALL
                  </Text>
                  <AntD
                    name="right"
                    style={{ color: "#0961F5", fontSize: 12, fontWeight: 800 }}
                  />
                </TouchableOpacity>
              </View>
            </View>

            <View style={{}}>
              <FlatList
                data={nameYearArray}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                  <View
                    style={{
                      padding: 10,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <View
                      style={{
                        width: 80,
                        height: 80,
                        borderRadius: 20,
                        backgroundColor: "black",
                      }}
                    ></View>
                    <Text
                      style={{
                        color: "#202244",
                        fontWeight: 600,
                        fontSize: 13,
                      }}
                    >
                      {item.name}
                    </Text>
                  </View>
                )}
                horizontal
              />
            </View>

            <View style={{ marginBottom: 50 }}></View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: "white",
    marginBottom: 18,

    height: 60,
    width: "100%",
    marginTop: 30,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
  },
  icon: {
    marginRight: 10,
    fontSize: 20,
  },
  input: {
    flex: 1,
    color: "#000",
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    margin: 10,
    padding: 0,
    flexDirection: "column",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  image: {
    width: "100%",
    height: 150,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: "#000",
  },
  content: {
    marginLeft: 10,
    flex: 1,
    justifyContent: "space-around",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between", // This will push the bookmark icon to the right
    alignItems: "center",
  },
  category: {
    color: "orange",
    fontWeight: "bold",
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  bookmarkIcon: {
    paddingRight: 10, // Adjust padding for spacing
  },
  courseInfo: {
    flexDirection: "row",
    justifyContent: "flex-start",
    gap: 10,
    alignItems: "center",
    marginTop: 5,
  },
  price: {
    fontSize: 16,
    color: "#007bff",
  },
  rating: {
    fontSize: 14,
    color: "#555",
  },
  students: {
    fontSize: 14,
    color: "#555",
  },
  containerS: {
    width: "100%",
    height: 180,
    borderRadius: 22,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  discountText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "600",
  },
  titleText: {
    color: "#FFF",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 5,
  },
  descriptionText: {
    color: "#FFF",
    fontSize: 14,
    textAlign: "center",
    marginTop: 10,
  },
  navContainer: {
    position: "absolute",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  navButton: {
    padding: 10,
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    borderRadius: 20,
  },
});
