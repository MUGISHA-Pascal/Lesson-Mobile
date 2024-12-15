import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, TextInput,ImageBackground,Dimensions, ScrollView,Image } from 'react-native';
import AntD from 'react-native-vector-icons/AntDesign'
const quizzes = [
  {
    id: '1',
    title: 'UI UX Design',
    questions: '10 Questions',
    duration: '1 hour 15 min',
    rating: '4.8',
  },
  {
    id: '2',
    title: 'Graphic Design',
    questions: '10 Questions',
    duration: '1 hour 15 min',
    rating: '4.8',
  },
  
];

const tabs = ['All', 'Ibyapa', 'Ibisanzwe', 'Ibizami'];

const QuizList = ({ navigation }) => {
  const [searchText, setSearchText] = useState('');
  const [selectedTab, setSelectedTab] = useState('All');
   const [selectedQuiz,setSelected] = useState("No")
  const filteredQuizzes = quizzes.filter(quiz =>
    quiz.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <ImageBackground style={{ height: Dimensions.get("screen").height, width: "100%",flex:1 }} source={require("../../../assets/quiz.png")}>
        <StatusBar
          backgroundColor="#1e90ff"
          barStyle="dark-content"
          hidden={false}
          translucent={false}
          networkActivityIndicatorVisible={false}
        />
  <View style={{ flex: 1, }}>
  <View style={{ marginTop: 10, marginHorizontal: 20, flexDirection: "row", justifyContent: "space-between" }}>
                    <View>
                        <TouchableOpacity onPress={()=>navigation.goBack()}>
                            {/* <Image style={{ width: 30, height: 30 }} source={require("../../../assets/image.png")} /> */}
                            <AntD style={{ fontSize: 30, color: "#FFFFFF" }} name='arrowleft' />

                        </TouchableOpacity>
                    </View>
                    <View>

                        <Image style={{ height: 30, width: 30, borderRadius: 100 }} source={{ uri: "https://www.parentmap.com/images/article/9321/YoungBoy.jpg" }} />
                    </View>
                </View>
     <View style={{marginHorizontal:20,marginTop:10}}>
     <Text style={styles.welcome}>Hello, Gloria</Text>
      <Text style={styles.subTitle}>Let's test your knowledge</Text>
      <View style={styles.inputContainer}>
      <TouchableOpacity  style={styles.searchButton}>
          <AntD name="search1" size={20} color="#1e90ff" />
        </TouchableOpacity>
            <TextInput
              style={styles.input}
              placeholder="Search for any quiz/exam"
              placeholderTextColor="#aaa"


            />
          <TouchableOpacity  style={styles.searchButton}>
          <AntD name="filter" size={20} color="#1e90ff" />
        </TouchableOpacity>
          </View>
     </View>

      
      <View style={{ position: "absolute", bottom: 4, width: "100%" }}>
                    <View style={{ justifyContent: "center", alignItems: "center", display: "flex" }}>
                        <View style={{ backgroundColor: "white", height: Dimensions.get("screen").height - 230, width: Dimensions.get("screen").width - 20, borderRadius: 32, padding: 20 }}>
                            <View style={{ alignItems: "center", justifyContent: "center" }}>
                                <View style={{ height: 5, width: 50, backgroundColor: "#1e90ff", borderRadius: 3, marginBottom: 25 }}></View>
                            </View>

      {/* Tabs */}
      <View style={styles.tabsContainer}>
        {tabs.map(tab => (
          <TouchableOpacity
            key={tab}
            style={[
              styles.tab,
              selectedTab === tab ? styles.activeTab : null,
            ]}
            onPress={() => setSelectedTab(tab)}
          >
            <Text
              style={[
                styles.tabText,
                selectedTab === tab ? styles.activeTabText : null,
              ]}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Quiz List */}

      
      <FlatList
        data={filteredQuizzes}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={{...styles.card,borderColor:"#1e90ff", borderWidth:selectedQuiz===index ? 2 : 0}}
            onPress={()=>setSelected(index)}

          >
            <View style={styles.quizInfo}>
              <View style={styles.imagePlaceholder} />
              <View style={styles.content}>
                <Text style={styles.title}>  {item.title}</Text>
                <Text style={styles.meta}><AntD style={{color:"#999999",fontSize:14}} name='profile' />{item.questions}</Text>
                <Text style={styles.meta}><AntD style={{color:"#999999",fontSize:14}} name='clockcircleo' />{item.duration}</Text>
              </View>
            </View>
            <View style={styles.ratingContainer}>
          
              <AntD name="star" style={{color:"#F2C94C",fontSize:20}}/> 
                 <Text style={styles.rating}>{item.rating}</Text>
            </View>
          </TouchableOpacity>
        )}

        ListFooterComponent={<>
      <View style={{marginBottom:20}}>
    <Text style={{color:"#333333",fontWeight:500,fontSize:18,marginVertical:10}}>Continue Quiz</Text>
    
 <View style={styles.quizInfoTwo}>
              <View style={styles.imagePlaceholderCon} />
              <View style={styles.content}>
               
                <Text style={{...styles.title,marginLeft:6}}> Amategeko yo</Text>  
               
                    
                
                
                
                <Text style={styles.meta}><AntD style={{color:"#999999",fontSize:14}} name='profile' /> 8/10 Questions</Text>
                <Text style={styles.meta}><AntD style={{color:"#999999",fontSize:14}} name='clockcircleo' /> 44 min</Text>

                <TouchableOpacity onPress={()=>navigation.navigate("Quiz")} style={{backgroundColor:"#333333",width:"100%",paddingVertical:10,borderRadius:5,marginVertical:10,marginLeft:10}}>
                    <Text style={{color:"white",fontSize:12,fontWeight:400,textAlign:"center"}}>Continue Quiz</Text>
                </TouchableOpacity>
              </View>
              <AntD name='delete' style={{fontSize:20, position:"absolute",right:0, color:"#999999"}} />
            </View>
           
 </View>   
        </>}

        showsVerticalScrollIndicator = {false}
      />




      <TouchableOpacity  onPress={() => navigation.navigate('Quizde', { quiz: {title: "UI UX Design"}, rating:3.4 })} style={styles.startButton}>
        <Text style={styles.startButtonText}>Start Quiz</Text>
      </TouchableOpacity>

      </View>
      </View>
      </View>
    
    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
 
   
    padding: 20,
  },
  welcome: {
    fontSize: 14,
    color: '#FFFFFF',
    marginBottom: 5,
    fontWeight:"400"
  },
  subTitle: {
    fontSize: 20,
    color: 'white',
    fontWeight: '700',
    marginBottom: 15,
  },
  searchContainer: {
    marginBottom: 10,
  },
  searchInput: {
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 8,
    fontSize: 16,
    color: '#202244',
  },
  tabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  tab: {
    padding: 10,
  
    backgroundColor: '#FFF',
  },
  activeTab: {
    borderBottomColor: '#1e90ff',
    borderBottomWidth:2,

  },
  tabText: {
    fontSize: 14,
    color: '#999999',
  },
  activeTabText: {
    color: '#1e90ff',
    fontWeight: 'bold',
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.7,
    shadowRadius: 5,
    elevation: 2,
    marginTop:4,
    marginHorizontal:3
  },
  quizInfo: {
    flexDirection: 'row',

  },
  quizInfoTwo: {
    flexDirection: 'row',
  
  },
  imagePlaceholder: {
    width: 70,
    height: 70,
    backgroundColor: '#E0E0E0',
    borderRadius: 5,
    marginRight: 10,
  },
  imagePlaceholderCon: {
    width: 120,
    height: 120,
    backgroundColor: '#E0E0E0',
    borderRadius: 5,
    
  },
  content: {
    marginLeft:3

  },

  title: {
    fontSize: 18,
    color: '#1e90ff',
    fontWeight: 'bold',
  },
  meta: {
    fontSize: 14,
    color: '#606060',
    marginLeft:10
  },
  ratingContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:"row",
    gap:10
  },
  rating: {
    fontSize: 16,
    color: '#1e90ff',
    fontWeight:"600"
  },
  startButton: {
    backgroundColor: '#1e90ff',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  
  },
  startButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 50,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: 'white',
    marginBottom: 18,

    height: 45,
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
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 10,
  },
});

export default QuizList;
