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
import Messages from '../Messages';
import ChatScreen from '../Major/Mes';
const MessageInsider = ({navigation, route}) => {
  const Stack = createNativeStackNavigator();
  React.useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (routeName === ``){
        navigation.setOptions({tabBarStyle: {display: 'none'}});
    }else if (routeName === `ChatScreen`){
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
    else{
      navigation.setOptions({tabBarStyle: {display: 'block'}});
    }
}, [navigation, route]);
  return (
    <>
    <Stack.Navigator
    screenOptions={{headerShown:false}}
    >  
   
      <Stack.Screen name="Mess" component={Messages} />
       <Stack.Screen name='ChatScreen' component={ChatScreen} />
       <Stack.Screen name='Cat' component={Cat} />
       <Stack.Screen name='Online' component={Online} />
       <Stack.Screen name='Search' component={Search} />
    
    </Stack.Navigator>
      </>
  )
}

export default MessageInsider