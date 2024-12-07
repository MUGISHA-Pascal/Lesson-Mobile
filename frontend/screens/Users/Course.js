import React, { useState } from 'react';
import { TouchableOpacity, Text, View, StatusBar, Image, FlatList, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import { Courses, nameYearArray } from './DemoData/Datas';
import AntD from 'react-native-vector-icons/AntDesign'
import { TouchableWithoutFeedback } from 'react-native';

const coursesData = [
  { id: '1', title: 'Ibyapa byingenzi', progress: '30/60', rating: 4.4 },
  { id: '2', title: 'UI/UX Fundamentals', progress: '20/50', rating: 4.7 },
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
  "Java Programming"
];


const Course = ({ navigation }) => {
  const [selectedPopular, setSelectedPopular] = useState("")


  const renderCourseItem = ({ item}) => (
    <TouchableWithoutFeedback onPress={()=>navigation.navigate("Cdescri", {quiz:"Inshamake kuri rino somo"})}>
  
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
          <AntD name='book' size={20} color="#333" />
        </View>
      </View>
  
      <View style={styles.courseInfo}>
        <Text style={styles.price}>{item.price}  | </Text>
        <Text style={styles.rating}> <AntD name='star' size={15} color="orange" /> {item.rating}  | </Text>
        <Text style={styles.students}>{item.students} Std</Text>
      </View>
    </View>
  </View>
  </View>
    </TouchableWithoutFeedback>
   
  
    
  );
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#F5F9FF" barStyle="dark-content" />

      <ScrollView contentContainerStyle={{ paddingHorizontal: 20,marginTop:40 }}>
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.headerTitle}>Courses</Text>
            <Text style={styles.headerSubtitle}>Explore beyond imagination</Text>
          </View>
          <TouchableOpacity onPress={()=>navigation.navigate("Search")}>
          <Image style={styles.profileImage} source={require("../../assets/search.jpeg")} />
          </TouchableOpacity>
        </View>

        {/* Continue Course Section */}
        <View style={styles.continueSectionWrapper}>
          <Text style={styles.sectionTitle}>Continue your course</Text>
          <TouchableOpacity style={styles.continueCourseCard}>
            <View>
              <Text style={styles.continueCourseTitle}>{coursesData[0].title}</Text>
              <View style={styles.progressRow}>
                <Text style={styles.progressText}>{coursesData[0].progress}</Text>
                <View style={styles.ratingRow}>
                  <AntDesign name="star" size={14} color="#FFB800" />
                  <Text style={styles.ratingText}>{coursesData[0].rating}</Text>
                </View>
              </View>
            </View>
            <TouchableOpacity onPress={()=>navigation.navigate("Lesson")}>
                          <AntDesign name="arrowright" size={24} color="#202244" style={styles.arrowIcon} />

            </TouchableOpacity>
          </TouchableOpacity>
        </View>

        

<View style={{ justifyContent: "space-between", alignItems: "center", flexDirection: "row" ,marginTop:10}}>
              <View>
                <Text style={{ color: "#202244", fontWeight: 600, fontSize: 18 }}>Courses</Text>

              </View>
              <View>
                <TouchableOpacity onPress={()=>navigation.navigate("Courseinside")} style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", gap: 4, }}>
                  <Text style={{ color: "#0961F5", fontSize: 12, fontWeight: 800 }}>SEE ALL</Text>
                  <AntD name='right' style={{ color: "#0961F5", fontSize: 12, fontWeight: 800 }} />
                </TouchableOpacity>
              </View>
            </View>


<FlatList
              horizontal
              data={popularCourses}
              keyExtractor={(item, index) => index.toString()} 
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => setSelectedPopular(item)} style={{ paddingHorizontal: 20, paddingVertical: 8, marginRight: 10, backgroundColor: selectedPopular == item ? "#167F71" : "#E8F1FF", borderRadius: 50, marginTop: 10 }}>
                  <Text style={{ fontSize: 13, fontWeight: 700, color: selectedPopular == item ? "#ffff" : "#202244" }}>{item}</Text>
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


<View style={{ justifyContent: "space-between", alignItems: "center", flexDirection: "row" ,marginTop:10}}>
              <View>
                <Text style={{ color: "#202244", fontWeight: 600, fontSize: 18 }}>Completed Exams</Text>

              </View>
              <View>
                <TouchableOpacity onPress={()=>navigation.navigate("Completed")} style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", gap: 4, }}>
                  <Text style={{ color: "#0961F5", fontSize: 12, fontWeight: 800 }}>SEE ALL</Text>
                  <AntD name='right' style={{ color: "#0961F5", fontSize: 12, fontWeight: 800 }} />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.container}>
      {/* No Exam Section */}
      <View style={styles.noExamSection}>
        <AntDesign name="folderopen" size={60} color="#A0A0A0" style={styles.folderIcon} />
        <Text style={styles.noExamText}>No exam undertaken yet</Text>
      </View>

      {/* Take Exam Section */}
      <View style={styles.examSection}>
        {/* Nested Circles */}
        <View style={styles.outerCircle}>
          <View style={styles.middleCircle}>
            <View style={styles.innerCircle}>
              <TouchableOpacity onPress={()=>navigation.navigate("Start")} style={styles.takeExamButton}>
                <AntDesign name="pluscircle" size={40} color="#FFF" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <Text style={styles.takeExamText}>Take an Exam/Quiz</Text>
      </View>
    </View>

      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F9FF",
  },
  header: {
    marginTop: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
  },
  continueSectionWrapper: {
    marginTop: 20,
    backgroundColor:"#1e90ff",
    borderRadius:10,
    paddingHorizontal:10,
    paddingVertical:10

  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "white",
    marginBottom: 10,
  },
  continueCourseCard: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    marginBottom: 20,
  },
  continueCourseTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#202244",
  },
  progressRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
  },
  progressText: {
    fontSize: 14,
    color: "#606060",
  },
  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 15,
  },
  ratingText: {
    fontSize: 14,
    color: "#606060",
    marginLeft: 5,
  },
  arrowIcon: {
    alignSelf: 'center',
    backgroundColor:"#0961F5",
    padding:10,
    color:"white",
    borderRadius:50
  },
  exploreTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#202244",
    marginBottom: 15,
    marginTop: 15,
  },
  courseCard: {
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  courseTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#202244",
  },
  metaInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    margin: 10,
    padding: 0,
    flexDirection: 'column',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  image: {
    width: "100%",
    height: 150,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: '#000',
  },
  content: {
    marginLeft: 10,
    flex: 1,
    justifyContent: 'space-around',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between', // This will push the bookmark icon to the right
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
    paddingRight: 10, // Adjust padding for spacing
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


  // teqc


  noExamSection: {
    alignItems: 'center',
    marginBottom: 40,
  },
  folderIcon: {
    marginVertical: 10,
  },
  noExamText: {
    fontSize: 16,
    fontWeight: '600',
    color: "#606060",
  },
  examSection: {
    alignItems: 'center',
    marginBottom:50
  },
  outerCircle: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: "#DCE2F3",
    justifyContent: 'center',
    alignItems: 'center',
  },
  middleCircle: {
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: "#A3B9E4",
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#7A9BD3",
    justifyContent: 'center',
    alignItems: 'center',
  },
  takeExamButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#0066CC",
    justifyContent: 'center',
    alignItems: 'center',
  },
  takeExamText: {
    fontSize: 16,
    fontWeight: '600',
    color: "#202244",
    marginTop: 15,
  },
});

export default Course;
