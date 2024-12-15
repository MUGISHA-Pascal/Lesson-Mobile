import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity,  ImageBackground,Dimensions,Image,StatusBar,ScrollView} from 'react-native';
import { Ionicons, MaterialIcons,AntDesign } from '@expo/vector-icons';

const QuizDetail = ({ route,navigation }) => {
  const { quiz } = route.params;

  return (
    <>
    

<ImageBackground style={{ height: Dimensions.get("screen").height, width: "100%",flex:1 }} source={require("../../../assets/quiz.png")}>
<StatusBar
  backgroundColor="#1e90ff"
  barStyle="dark-content"
  hidden={false}
  translucent={false}
  networkActivityIndicatorVisible={false}
/>
<View style={{ flex: 1, }}>
<View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", gap: 8 ,paddingHorizontal:20,marginTop:30}}>
                        <TouchableOpacity style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",gap:5}} onPress={()=>navigation.goBack()}>
                            <AntDesign style={{ fontSize: 30, color: "#FFFFFF" }} name='arrowleft' />
   <Text style={{ color: "#FFFFFF", fontWeight: 800, fontSize: 18 }}>Inshamake z' ikizami</Text>

                        </TouchableOpacity>
                        <View>
                        <Image style={{ height: 30, width: 30, borderRadius: 100 }} source={{ uri: "https://www.parentmap.com/images/article/9321/YoungBoy.jpg" }} />

                        </View>
                     
                    </View>
                    <View style={styles.quizHeader}>
       <View>
       <Text style={styles.quizTitle}>{quiz.title} Quiz</Text>
       <Text style={{color:"white"}}>200 Points</Text>
       </View>
        <View style={styles.ratingContainer}>
          <Text style={styles.rating}> <AntDesign name='star' style={styles.rating} /> {quiz.rating}</Text>
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
   

      

      {/* Quiz Details */}
      <Text style={styles.sectionTitle}>Brief explanation about this quiz</Text>
      <View style={styles.infoContainer}>
        <View style={styles.infoRow}>
          <Ionicons name="list" style={{backgroundColor:"#202244",color:"white", padding:5,fontSize:25,borderRadius:50}}  />
          <View style={styles.infoText}>
            <Text style={styles.infoTitle}>10 Questions</Text>
            <Text style={styles.infoDescription}>10 points for a correct answer</Text>
          </View>
        </View>

        <View style={styles.infoRow}>
          <Ionicons name="time" style={{backgroundColor:"#202244",color:"white", padding:5,fontSize:25,borderRadius:50}}  />
          <View style={styles.infoText}>
            <Text style={styles.infoTitle}>1 hour 15 min</Text>
            <Text style={styles.infoDescription}>Total duration of the quiz</Text>
          </View>
        </View>

        <View style={styles.infoRow}>
          <MaterialIcons name="stars" style={{backgroundColor:"#202244",color:"white", padding:5,fontSize:25,borderRadius:50}}  />
          <View style={styles.infoText}>
            <Text style={styles.infoTitle}>Win 10 stars</Text>
            <Text style={styles.infoDescription}>Answer all questions correctly</Text>
          </View>
        </View>
      </View>

      {/* Notice Section */}
      <Text style={styles.noticeTitle}>Please read the text below carefully so you can understand it</Text>
      <View style={styles.bulletPoints}>
        <Text style={styles.bulletPoint}>• 10 points awarded for a correct answer and no marks for an incorrect answer</Text>
        <Text style={styles.bulletPoint}>• Tap on options to select the correct answer</Text>
        <Text style={styles.bulletPoint}>• Tap on the bookmark icon to save interesting questions</Text>
        <Text style={styles.bulletPoint}>• Click submit if you are sure you want to complete all the quizzes</Text>
      </View>


    </View>
</ScrollView>
<TouchableOpacity  onPress={() => navigation.navigate('Quiz')} style={styles.startButton}>
<Text style={styles.startButtonText}>I Understand</Text>
</TouchableOpacity>

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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#008CFF',
    padding: 10,
    borderRadius: 10,
    marginBottom: 15,
  },
  headerTitle: {
    flex: 1,
    textAlign: 'center',
    fontSize: 16,
    color: '#FFF',
    fontWeight: 'bold',
  },
  placeholderIcon: {
    width: 24,
    height: 24,
  },
  quizHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
    marginHorizontal:25,
    top:30
  },
  quizTitle: {
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
  startButton: {
    backgroundColor: '#008CFF',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 'auto',
    marginBottom:20
  },
  startButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default QuizDetail;
