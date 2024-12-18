import React, { useContext } from 'react'
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../Home';
import Quiz from '../Major/Quiz';
import Cat from '../Major/Cat';
import Popular from '../Major/Popular';
import Online from '../Major/Online';
import Search from '../Major/Search';
import Course from '../Course';
import QuizList from '../Major/StartCourse';
import QuizDetail from '../Major/QuizDe';
import LessonScreen from '../Courses/LessonScreen';
import Comments from '../Major/Comments';
import VideoScreen from '../Major/Vid';
import CertificateScreen from '../Courses/Certificate';
import Courseinside from '../Major/Course';
import Completed from '../Major/Comp';
import CourseDe from '../Major/CourseDe';
import AddQuiz from '../Major/AddQuiz';
import ViewQuizzes from '../Major/GetQuizzes';
import AddQuestions from '../Major/AddQuestions';
import PerformQuiz from '../Major/DoQuiz';
import CertificatePage from '../Major/CertificatePage';
import PDFViewer from '../Major/CoursePdfViewer';
const CourseInside = ({navigation, route}) => {
  const Stack = createNativeStackNavigator();
  React.useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (routeName === `Quiz`){
        navigation.setOptions({tabBarStyle: {display: 'none'}});
    }else if (routeName === `Start`){
      navigation.setOptions({tabBarStyle: {display: 'none'}});
  
}else if (routeName === `Quizde`){
  navigation.setOptions({tabBarStyle: {display: 'none'}});
}
else if (routeName === `Online`){
  navigation.setOptions({tabBarStyle: {display: 'none'}});
}
else if (routeName === `Search`){
  navigation.setOptions({tabBarStyle: {display: 'none'}});
}
else if (routeName === `Vid`){
  navigation.setOptions({tabBarStyle: {display: 'none'}});
}
else if (routeName === `Lesson`){
  navigation.setOptions({tabBarStyle: {display: 'none'}});
}else if (routeName === `Comments`){
  navigation.setOptions({tabBarStyle: {display: 'none'}});
}
else if (routeName === `Search`){
  navigation.setOptions({tabBarStyle: {display: 'none'}});
}
else if (routeName === `Cer`){
  navigation.setOptions({tabBarStyle: {display: 'none'}});
}
else if (routeName === `Completed`){
  navigation.setOptions({tabBarStyle: {display: 'none'}});
}
else if (routeName === `Courseinside`){
  navigation.setOptions({tabBarStyle: {display: 'none'}});
}
else if (routeName === `Cdescri`){
  navigation.setOptions({tabBarStyle: {display: 'none'}});
}
else if (routeName === `addQuiz`){
  navigation.setOptions({tabBarStyle: {display: 'none'}});
}
else if (routeName === `viewQuizzes`){
  navigation.setOptions({tabBarStyle: {display: 'none'}});
}
else if (routeName === `addQuestions`){
  navigation.setOptions({tabBarStyle: {display: 'none'}});
}
else if (routeName === `doQuiz`){
  navigation.setOptions({tabBarStyle: {display: 'none'}});
}
else if (routeName === `Cert`){
  navigation.setOptions({tabBarStyle: {display: 'none'}});
}
else if (routeName === `PDFViewer`){
  navigation.setOptions({tabBarStyle: {display: 'none'}});
}
    else{
      navigation.setOptions({tabBarStyle: {display: 'block'}});
    }
}, [navigation, route]);
  return (
    <>
    <Stack.Navigator
    screenOptions={{headerShown:false}}
    >  
   
      <Stack.Screen name="Course" component={Course} />
       <Stack.Screen name='Quiz' component={Quiz} />
       <Stack.Screen name='Completed' component={Completed} />
       <Stack.Screen name='Start' component={QuizList} />
       <Stack.Screen name='Quizde' component={QuizDetail} />
       <Stack.Screen name='Online' component={Online} />
       <Stack.Screen name='Cdescri' component={CourseDe} />
       <Stack.Screen name='Vid' component={VideoScreen} />
       <Stack.Screen name='Search' component={Search} />
       <Stack.Screen name='Courseinside' component={Courseinside} />
       <Stack.Screen name='Lesson' component={LessonScreen} />
       <Stack.Screen name='addQuiz' component={AddQuiz}/>
       <Stack.Screen name='viewQuizzes' component={ViewQuizzes}/>
       <Stack.Screen name='addQuestions' component={AddQuestions}/>
       <Stack.Screen name='doQuiz' component={PerformQuiz}/>
       <Stack.Screen name='Cert' component={CertificatePage}/>
       <Stack.Screen name='PDFViewer' component={PDFViewer}/>

       <Stack.Screen options={{headerShown:true, headerStyle:{backgroundColor:"#1e90ff"}, headerTintColor:"white"}} name='Comments' component={Comments} />
       <Stack.Screen 
  name='Cer' 
  component={CertificateScreen} 
  options={{
    headerShown: true,
    headerStyle: { backgroundColor: "#1e90ff" },
    headerTintColor: "white",
    title: "Certificate of Achievement"
  }} 
/>

   
    </Stack.Navigator>
      </>
  )
}

export default CourseInside