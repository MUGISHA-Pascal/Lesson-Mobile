import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity, AsyncStorage, ImageBackground, Dimensions, StatusBar, Modal, FlatList } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Octicons from 'react-native-vector-icons/Octicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import RenderHTML from 'react-native-render-html';
import Toast from 'react-native-toast-message';
const CourseScreen = ({ navigation }) => {
  const [selectedModule, setSelectedModule] = useState("Module 1");
  const [lessonIndex, setLessonIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isSidebarVisible, setSidebarVisible] = useState(false);
  const [bookmark, setBookmark] = useState(false)


  const [modules,setModules]  = useState({
    "Module 1": {
      "Introduction to Caregiving": [
        {
          content: `<div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; max-width: 600px; margin: auto;">
    <h1 style="color: #333;">The Importance of Learning Programming</h1>
    <p style="font-size: 16px; line-height: 1.5; color: #666;">
        Programming is an essential skill in today’s digital world. As technology continues to advance, the ability to code is becoming increasingly valuable across various fields. 
    </p>
    <h2 style="color: #555;">Why Learn Programming?</h2>
    <p style="font-size: 16px; line-height: 1.5; color: #666;">
        Learning programming can enhance your problem-solving skills and logical thinking. It allows you to automate tasks, analyze data, and create applications that can improve efficiency in personal and professional settings.
    </p>
    <img src="https://images.javatpoint.com/images/home-1.png" alt="Programming Image" style="width: 100%; border-radius: 8px; margin: 10px 0;">
    <h2 style="color: #555;">Popular Programming Languages</h2>
    <ul style="font-size: 16px; color: #666;">
        <li>Python</li>
        <li>JavaScript</li>
        <li>Java</li>
        <li>C#</li>
        <li>Ruby</li>
    </ul>
    <p style="font-size: 16px; line-height: 1.5; color: #666;">
        Each of these languages has its own strengths and is suited for different types of tasks. Choosing the right language depends on your goals and the projects you wish to undertake.
    </p>
    <h2 style="color: #555;">Conclusion</h2>
    <p style="font-size: 16px; line-height: 1.5; color: #666;">
        In conclusion, learning programming opens up a world of possibilities. Whether you want to build websites, analyze data, or create software, programming is a skill that will serve you well in the future.
    </p>
</div>
`
          ,
          image: "https://example.com/images/introduction_to_caregiving.jpg"
        }
      ],
      "Client Rights": [
        {
          content: "This section focuses on the rights of clients in a caregiving setting. Topics include respect, privacy, autonomy, and the importance of obtaining informed consent.",
          image: "https://example.com/images/client_rights.jpg"
        }
      ],
      "Caregiver Rights": [
        {
          content: "An overview of the rights and protections available to caregivers, including workplace safety, boundaries, and support resources.",
          image: "https://example.com/images/caregiver_rights.jpg"
        }
      ]
    },
    "Module 2": {
      "Fundamental Skills": [
        {
          content: "This section teaches essential caregiving skills, such as personal care techniques, mobility assistance, and effective time management.",
          image: "https://example.com/images/fundamental_skills.jpg"
        }
      ],
      "Introduction to car driving lincence": [
        {
          content: `<div>
    <h1>Introduction to Car Driving Licenses</h1>
    <p>Obtaining a car driving license is an essential step for anyone looking to drive legally and safely. A driving license serves as proof that a driver has passed the necessary tests and understands the rules of the road.</p>
    
    <h2>Types of Driving Licenses</h2>
    <p>There are various types of driving licenses depending on the vehicle type:</p>
    <ul>
        <li><strong>Class A:</strong> For motorcycles.</li>
        <li><strong>Class B:</strong> For standard cars.</li>
        <li><strong>Class C:</strong> For commercial vehicles.</li>
        <li><strong>Class D:</strong> For trucks and large vehicles.</li>
    </ul>
    
    <h2>Requirements to Obtain a Driving License</h2>
    <p>The requirements may vary by country or region but generally include:</p>
    <ol>
        <li>Being of legal age (usually 18 years).</li>
        <li>Passing a written knowledge test on traffic laws.</li>
        <li>Completing a vision test.</li>
        <li>Completing a practical driving test.</li>
    </ol>

    <h2>The Importance of a Driving License</h2>
    <p>A driving license is not just a legal requirement; it also ensures that drivers are educated about road safety and regulations. This helps reduce accidents and promotes responsible driving behavior.</p>
    
    <h2>Conclusion</h2>
    <p>In conclusion, a car driving license is crucial for anyone who wishes to drive. It symbolizes the driver's knowledge and ability to navigate the roads safely. If you're considering getting your license, be sure to understand the requirements and prepare adequately for the tests.</p>
</div>
`,
          image: "https://example.com/images/fundamental_skills.jpg"
        }
      ],

    },

  }) 



  const handleModuleChange = (module) => {
    setSelectedModule(module);
    setLessonIndex(0);
    setProgress(0);
    setSidebarVisible(false);
  };

  const handleNextLesson = () => {
    if (lessonIndex < Object.keys(modules[selectedModule]).length - 1) {
      setLessonIndex(lessonIndex + 1);
      setProgress((lessonIndex + 1) / Object.keys(modules[selectedModule]).length);
    } else {
      setProgress((lessonIndex + 1) / Object.keys(modules[selectedModule]).length);
      console.log("End of module reached");
      Toast.show({
        type: 'success',
        text1: 'Hello',
        text2: 'You accomplished this chapter, ready for the next one ????'
      },)
      console.log((lessonIndex + 1) / Object.keys(modules[selectedModule]).length)

    }
  };

  const handlePreviousLesson = () => {
    if (lessonIndex > 0) {
      setLessonIndex(lessonIndex - 1);
      setProgress((lessonIndex - 1) / Object.keys(modules[selectedModule]).length);
    } else {
      console.log("Start of module reached");
    }
  };

  const currentLessonKey = Object.keys(modules[selectedModule])[lessonIndex];
  const currentLessonContent = modules[selectedModule][currentLessonKey][0];

  const moduleKeys = Object.keys(modules);

  const lessonKeys = Object.keys(modules[selectedModule]); // Array of lesson titles in the current module
  const isModuleComplete = lessonIndex === lessonKeys.length - 1;
  const isCourseComplete = selectedModule === moduleKeys[moduleKeys.length - 1] && isModuleComplete;



  console.log("iS MODULE==>", isCourseComplete)
  const toggleBookmark = () => {
    setBookmark(prevBookmark => {
      const newBookmarkState = !prevBookmark;

      Toast.show({
        type: 'success',
        text1: newBookmarkState ? 'Bookmark Added' : 'Bookmark Removed',
        text2: newBookmarkState
          ? 'This lesson has been bookmarked successfully!'
          : 'This lesson has been removed from your bookmarks.'
      });

      return newBookmarkState;
    });
  };

  <TouchableOpacity onPress={toggleBookmark}>
    <FontAwesome
      name={bookmark ? "bookmark" : 'bookmark-o'}
      style={{ fontSize: 25, color: "white" }}
    />
  </TouchableOpacity>

  return (
    <>
      <ImageBackground style={{ height: Dimensions.get("screen").height, width: "100%", flex: 1 }} source={require("../../../assets/quiz.png")}>
        <StatusBar
          backgroundColor="#1e90ff"
          barStyle="white-content"
          hidden={false}
          translucent={false}
          networkActivityIndicatorVisible={false}
        />
        <View style={{ flex: 1 }}>
          <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", gap: 8, paddingHorizontal: 20, marginTop: 10, marginBottom: 15 }}>
            <TouchableOpacity style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", gap: 5 }} onPress={() => navigation.goBack()}>
              <AntDesign style={{ fontSize: 30, color: "#FFFFFF" }} name="arrowleft" />
              <Text style={{ color: "#FFFFFF", fontWeight: 800, fontSize: 18 }}>Iga</Text>
            </TouchableOpacity>
            <View style={{ flexDirection: "row", gap: 15 }}>

              <TouchableOpacity onPress={() => navigation.navigate("Comments")}>
                <Octicons
                  name='comment-discussion' style={{ fontSize: 25, color: "white" }} />
              </TouchableOpacity>
              <TouchableOpacity onPress={toggleBookmark}>
                <FontAwesome
                  name={bookmark ? "bookmark" : 'bookmark-o'}
                  style={{ fontSize: 25, color: "white" }}
                />
              </TouchableOpacity>

            </View>
          </View>

          <View contentContainerStyle={styles.container}>

            <View style={{ padding: 0, height: "100%", backgroundColor: "white" }}>
              <View style={{ width: `${progress * 100}%`, height: 5, backgroundColor: "green" }}></View>


              <View style={{ flexDirection: "row", alignItems: "center", marginHorizontal: 20 }}>
                <TouchableOpacity onPress={() => navigation.navigate("Vid")}>
                  <AntDesign name='videocamera' style={{ color: "#0961F5", fontSize: 24 }} />
                </TouchableOpacity>
                <Text style={{ ...styles.header, paddingHorizontal: 16, paddingVertical: 10 }}>Diploma in Caregiving</Text>

              </View>
              <View>
                <Modal
                  animationType="slide"
                  transparent={true}
                  visible={isSidebarVisible}
                  onRequestClose={() => setSidebarVisible(false)}
                >
                  <StatusBar
                    backgroundColor="#1e90ff"
                    barStyle="light-content"
                    hidden={false}
                    translucent={false}
                    networkActivityIndicatorVisible={false}
                  />
                  <View style={styles.sidebarContainer}>
                    <Text style={styles.sidebarTitle}>Choose a Module </Text>
                    <TouchableOpacity onPress={() => navigation.navigate("Vid")} style={{ flexDirection: "row", alignItems: "center", marginVertical: 8, gap: 5, }}>
                      <AntDesign name='videocamera' style={{ color: "#0961F5", fontSize: 24 }} />
                      <Text style={{ color: "#0961F5" }}>Or Watch</Text>
                    </TouchableOpacity>
                    <FlatList
                      data={Object.keys(modules)}
                      keyExtractor={(item) => item}
                      renderItem={({ item }) => (
                        <TouchableOpacity

                          style={[styles.moduleItem, selectedModule === item && styles.selectedItem]}
                          onPress={() => handleModuleChange(item)}
                        >
                          <Text style={{ ...styles.moduleText, color: selectedModule === item ? "white" : "#555" }}>{item}</Text>
                        </TouchableOpacity>
                      )}
                    />
                    <TouchableOpacity
                      style={styles.closeButton}
                      onPress={() => setSidebarVisible(false)}
                    >
                      <Text style={styles.closeButtonText}>Close</Text>
                    </TouchableOpacity>
                  </View>
                </Modal>
              </View>


              <View style={styles.contentContainer}>

                <View style={styles.contentContainer}>

                  <View style={{ flexDirection: "row", gap: 5, marginTop: -50, marginBottom: 20, padding: 16 }}>
                    <View >
                      <TouchableOpacity
                        style={styles.openSidebarButton}
                        onPress={() => setSidebarVisible(true)}
                      >
                        <Image style={{ width: 30, height: 30 }} source={require("../../../assets/image.png")} />
                      </TouchableOpacity>

                    </View>

                    <View>

                      <Text style={styles.lessonText}>
                        {selectedModule && <Text style={styles.selectedText}> {selectedModule}</Text>} : {currentLessonKey}
                      </Text>
                    </View>
                  </View>

                </View>

                <ScrollView style={{ padding: 10, top: -30 }}>
                  <RenderHTML
                    contentWidth={100}
                    source={{
                      html: `
              <div style='background-color:#f9f9f9; border-radius:10px;margin-bottom:220px'>
                ${currentLessonContent.content}
              </div>
            `,
                    }}
                  />
                </ScrollView>



                <Image source={{ uri: currentLessonContent.image }} style={styles.image} />

              </View>


              <View style={styles.navigationContainer}>
                <TouchableOpacity style={styles.prevButton} onPress={handlePreviousLesson}>
                  <Image style={{ width: 50, height: 50, borderRadius: 50 }} source={require("../../../assets/left.jpeg")} />
                </TouchableOpacity>
                {isCourseComplete ? <>

                  <TouchableOpacity onPress={() => navigation.navigate('Quizde', { quiz: { title: "UI UX Design" }, rating: 3.4 })} style={styles.nextButtonNN}>

                    <View></View>
                    <Text style={styles.nextButtonText}>Finish and take a quiz</Text>
                    <View style={styles.nextButtonIconContainer}>
                      <AntDesign name="arrowright" style={styles.arrowIcon} />
                    </View>
                  </TouchableOpacity>
                </> : <>


                  {isModuleComplete ? <>
                    <TouchableOpacity onPress={handleNextLesson} style={styles.nextButtonN}>

                      <View></View>
                      <Text style={styles.nextButtonText}>Next Module</Text>
                      <View style={styles.nextButtonIconContainer}>
                        <AntDesign name="arrowright" style={styles.arrowIcon} />
                      </View>
                    </TouchableOpacity>
                  </> : <>
                    <TouchableOpacity style={styles.nextButton} onPress={handleNextLesson}>
                      <Image style={{ width: 50, height: 50, borderRadius: 50 }} source={require("../../../assets/rightC.jpeg")} />
                    </TouchableOpacity>
                  </>}
                </>}
              </View>
            </View>
          </View>
        </View>
        <Toast />

      </ImageBackground>
    </>
  );

};

const styles = StyleSheet.create({
  container: {

    backgroundColor: '#F5F9FF',
    marginTop: 30,
    height: "100%",



  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  subHeader: {
    fontSize: 14,
    color: '#333',
    marginVertical: 8,
  },
  moduleDropdownContainer: {
    marginVertical: 12,
  },
  picker: {
    height: 50,
    width: '100%',
  },
  contentContainer: {
    marginTop: 16,
    backgroundColor: "white",
  },
  lessonText: {
    fontSize: 16,
    color: '#555',
    lineHeight: 24,
  },
  keyPoint: {
    backgroundColor: '#f0f0f0',
    padding: 12,
    fontSize: 14,
    color: '#333',
    borderRadius: 8,
    marginTop: 12,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginVertical: 16,
  },
  navigationContainer: {
    flexDirection: 'row',

    bottom: 70,
    position: "absolute",
    width: "100%",
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",
    alignSelf: "center",

  },
  prevButton: {

    borderRadius: 50,
    marginHorizontal: 20,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.2)"
  },
  nextButton: {

    borderRadius: 50,
    marginHorizontal: 20
  },


  openSidebarButton: {

    backgroundColor: '#1e90ff',
    borderRadius: 8,
    width: 35
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  selectedText: {
    marginTop: 10,
    color: '#333',
    fontWeight: 'bold',
  },
  sidebarContainer: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    padding: 20,
    borderLeftWidth: 1,
    borderColor: '#ccc',

  },
  sidebarTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  moduleItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  moduleText: {
    fontSize: 16,
    color: '#555',
    marginVertical: 2
  },
  selectedItem: {
    backgroundColor: '#1e90ff',
    borderRadius: 10
  },
  closeButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#ff6347',
    borderRadius: 8,
  },
  closeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  nextButtonN: {
    backgroundColor: '#0961F5',
    width: '50%',
    height: 50,
    borderRadius: 100,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 0,
    paddingHorizontal: 6,
    marginRight: 20
  },
  nextButtonNN: {
    backgroundColor: '#0961F5',
    width: '65%',
    height: 50,
    borderRadius: 100,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 0,
    paddingHorizontal: 6,
    marginRight: 20
  },
  nextButtonText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 16,
    textAlign: 'center',
  },
  nextButtonIconContainer: {
    backgroundColor: 'white',
    width: 42,
    height: 42,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  arrowIcon: {
    fontSize: 30,
    color: '#0961F5',
  },
});

export default CourseScreen;
