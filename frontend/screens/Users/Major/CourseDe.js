import React, { useContext, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Dimensions, Image, StatusBar, ScrollView, Pressable } from 'react-native';
import { Ionicons, MaterialIcons, AntDesign } from '@expo/vector-icons';
import { AuthContext } from '../../../VAUTH/Auth';
const CourseDe = ({ route, navigation }) => {
  const {user} = useContext(AuthContext);
  const { course_id,fileName } = route.params;
 useEffect(()=>{
  console.log(course_id)
 },[])
  return (

    <>
      <ImageBackground style={{ height: Dimensions.get("screen").height, width: "100%", flex: 1 }} source={require("../../../assets/quiz.png")}>
        <StatusBar
          backgroundColor="#1e90ff"
          barStyle="dark-content"
          hidden={false}
          translucent={false}
          networkActivityIndicatorVisible={false}
        />
        <View style={{ flex: 1 }}>
          <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", gap: 8, paddingHorizontal: 20, marginTop: 30 }}>
            <TouchableOpacity style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", gap: 5 }} onPress={() => navigation.goBack()}>
              <AntDesign style={{ fontSize: 30, color: "#FFFFFF" }} name='arrowleft' />
              <Text style={{ color: "#FFFFFF", fontWeight: '800', fontSize: 18 }}>Inshamake z' isomo</Text>
            </TouchableOpacity>
            <View>
              <Image style={{ height: 30, width: 30, borderRadius: 100 }} source={{ uri: "https://www.parentmap.com/images/article/9321/YoungBoy.jpg" }} />
            </View>
          </View>
          
          <View style={styles.courseHeader}>
            <View>
              <Text style={styles.courseTitle}>Title</Text>
              <Text style={{ color: "white" }}>Duration: 33:22</Text>
            </View>
            <View style={styles.ratingContainer}>
              <Text style={styles.rating}><AntDesign name='star' style={styles.rating} /> 33.3</Text>
            </View>
          </View>

          <View style={{ position: "absolute", bottom: 4, width: "100%" }}>
            <View style={{ justifyContent: "center", alignItems: "center", display: "flex" }}>
              <View style={{ backgroundColor: "white", height: Dimensions.get("screen").height - 200, width: Dimensions.get("screen").width - 20, borderRadius: 32, padding: 20 }}>
                <View style={{ alignItems: "center", justifyContent: "center" }}>
                  <View style={{ height: 5, width: 50, backgroundColor: "#1e90ff", borderRadius: 3, marginBottom: 25 }}></View>
                </View>

                <ScrollView>
                  <View style={styles.container}>
                    {/* Course Details */}
                    <Text style={styles.sectionTitle}>Brief Overview of the Course</Text>
                    <View style={styles.infoContainer}>
                      <View style={styles.infoRow}>
                        <Ionicons name="book" style={{ backgroundColor: "#202244", color: "white", padding: 5, fontSize: 25, borderRadius: 50 }} />
                        <View style={styles.infoText}>
                          <Text style={styles.infoTitle}>Lessons</Text>
                          <Text style={styles.infoDescription}>Engaging and informative sessions</Text>
                        </View>
                      </View>

                      <View style={styles.infoRow}>
                        <Ionicons name="time" style={{ backgroundColor: "#202244", color: "white", padding: 5, fontSize: 25, borderRadius: 50 }} />
                        <View style={styles.infoText}>
                          <Text style={styles.infoTitle}>33:22</Text>
                          <Text style={styles.infoDescription}>Total duration of the course</Text>
                        </View>
                      </View>

                      <View style={styles.infoRow}>
                        <MaterialIcons name="stars" style={{ backgroundColor: "#202244", color: "white", padding: 5, fontSize: 25, borderRadius: 50 }} />
                        <View style={styles.infoText}>
                          <Text style={styles.infoTitle}>Earn a Certificate</Text>
                          <Text style={styles.infoDescription}>Complete all modules and pass the final assessment</Text>
                        </View>
                      </View>
                    </View>

                    {/* Notice Section */}
                    <Text style={styles.noticeTitle}>Important Information</Text>
                    <View style={styles.bulletPoints}>
                      <Text style={styles.bulletPoint}>• Each lesson is followed by an interactive quiz</Text>
                      <Text style={styles.bulletPoint}>• Review the materials at your own pace</Text>
                      <Text style={styles.bulletPoint}>• Contact support for any technical assistance</Text>
                    </View>
                  </View>
                </ScrollView>


                  {/* YOur task is to debug for Navigate to "PDFViewer" screen and debug accordingly for viewing attached pdf file for course */}
                <TouchableOpacity onPress={() => navigation.navigate('Lesson', {fileName: fileName})} style={styles.enrollButton}>
                  <Text style={styles.enrollButtonText}>Enroll Now</Text>
                </TouchableOpacity>

                {user.role === "admin" ? (
                <View>
                    <Pressable style={styles.enrollButton} onPress={() => navigation.navigate('addQuiz', { course_id: course_id })}>
                    <Text style={styles.enrollButtonText}>+ Quiz</Text>
                  </Pressable>
                  <Pressable style={styles.enrollButton} onPress={() => navigation.navigate('viewQuizzes', { course_id: course_id })}>
                    <Text style={styles.enrollButtonText}>Get Quizzes</Text>
                  </Pressable>
                </View>
                ) : (
                 
                  <View>
                <Pressable style={styles.enrollButton} onPress={() => navigation.navigate('viewQuizzes', { course_id: course_id })}>
                    <Text style={styles.enrollButtonText}>View Quizzes</Text>
                  </Pressable>
                  </View>
                // Add the button for the user to do the quiz and view the quizzes for his course  
                )}
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 5,
    paddingTop: 30,
  },
  courseHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
    marginHorizontal: 25,
    top: 30,
  },
  courseTitle: {
    fontSize: 18,
    color: 'white',
    fontWeight: '700',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    fontSize: 18,
    color: '#FFB800',
  },
  sectionTitle: {
    fontSize: 18,
    color: '#202244',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  infoContainer: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  infoText: {
    marginLeft: 10,
  },
  infoTitle: {
    fontSize: 16,
    color: '#202244',
    fontWeight: 'bold',
  },
  infoDescription: {
    fontSize: 14,
    color: '#606060',
  },
  noticeTitle: {
    fontSize: 14,
    color: '#606060',
    marginBottom: 10,
    fontWeight: 'bold',
  },
  bulletPoints: {
    marginBottom: 20,
  },
  bulletPoint: {
    fontSize: 14,
    color: '#606060',
    marginVertical: 5,
  },
  enrollButton: {
    backgroundColor: '#008CFF',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 'auto',
    marginBottom: 20,
  },
  enrollButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CourseDe;
