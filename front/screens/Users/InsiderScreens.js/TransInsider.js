import React, { useContext } from 'react'
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../Home';
import Quiz from '../Major/Quiz';
import Cat from '../Major/Cat';
import Popular from '../Major/Popular';
import Online from '../Major/Online';
import Search from '../Major/Search';
import Noti from '../Major/Noti';
import CertificateScreen from '../Courses/Certificate';
import Trans from '../Trans';
const TransInsider = ({navigation, route}) => {
  const Stack = createNativeStackNavigator();
  React.useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (routeName === `Quiz`){
        navigation.setOptions({tabBarStyle: {display: 'none'}});
    }else if (routeName === `Cat`){
      navigation.setOptions({tabBarStyle: {display: 'none'}});
  
}else if (routeName === `Popular`){
  navigation.setOptions({tabBarStyle: {display: 'none'}});
}
else if (routeName === `Online`){
  navigation.setOptions({tabBarStyle: {display: 'none'}});
}
else if (routeName === `Search`){
  navigation.setOptions({tabBarStyle: {display: 'none'}});
}
else if (routeName === `Noti`){
  navigation.setOptions({tabBarStyle: {display: 'none'}});
}
else if (routeName === `Cer`){
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
   
      <Stack.Screen name="Trans" component={Trans} />
       <Stack.Screen name='Quiz' component={Quiz} />
       <Stack.Screen name='Cat' component={Cat} />
       <Stack.Screen name='Popular' component={Popular} />
       <Stack.Screen name='Online' component={Online} />
       <Stack.Screen name='Search' component={Search} />
       <Stack.Screen name='Noti' component={Noti} />
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

export default TransInsider