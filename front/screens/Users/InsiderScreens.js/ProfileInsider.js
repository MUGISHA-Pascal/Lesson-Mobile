import React, { useContext } from 'react'
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../Home';
import Quiz from '../Major/Quiz';
import Cat from '../Major/Cat';
import Popular from '../Major/Popular';
import Online from '../Major/Online';
import Search from '../Major/Search';
import Account from '../Account';
import NotificationSettings from '../Major/Notification';
import Edit from '../Major/Edit';
import Terms from '../Major/Terms';
import Security from '../Major/Security';
import Friends from '../Major/Friends';
import Book from '../Major/Book';
import HelpCenter from '../Major/Help';
import PaymentOption from '../Major/Payment';
import LanguageSelector from '../Major/Lang';
import AddCourse from '../Major/AddCourse';
const ProfileInsider = ({navigation, route}) => {
  const Stack = createNativeStackNavigator();
  React.useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (routeName === `Quiz`){
        navigation.setOptions({tabBarStyle: {display: 'none'}});
    }else if (routeName === `Cat`){
      navigation.setOptions({tabBarStyle: {display: 'none'}});
  
}else if (routeName === `Terms`){
  navigation.setOptions({tabBarStyle: {display: 'none'}});
}
else if (routeName === `NotificationSettings`){
  navigation.setOptions({tabBarStyle: {display: 'none'}});
}
else if (routeName === `Friends`){
  navigation.setOptions({tabBarStyle: {display: 'none'}});
}
else if (routeName === `Book`){
  navigation.setOptions({tabBarStyle: {display: 'none'}});
}
else if (routeName === `Security`){
  navigation.setOptions({tabBarStyle: {display: 'none'}});
}
else if (routeName === `Help`){
  navigation.setOptions({tabBarStyle: {display: 'none'}});
}
else if (routeName === `Payment`){
  navigation.setOptions({tabBarStyle: {display: 'none'}});
}
else if (routeName === `Lang`){
  navigation.setOptions({tabBarStyle: {display: 'none'}});
}
else if (routeName === `Edit`){
  navigation.setOptions({tabBarStyle: {display: 'none'}});
}
else if (routeName === `Search`){
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
   
      <Stack.Screen name="Account" component={Account} />
       <Stack.Screen name='NotificationSettings' component={NotificationSettings} />
       <Stack.Screen name='Book' component={Book} />
       <Stack.Screen name='Edit' component={Edit} />
       <Stack.Screen name='Terms' component={Terms} />
       <Stack.Screen name='Security' component={Security} />
       <Stack.Screen name='Friends' component={Friends} />
       <Stack.Screen name='Help' component={HelpCenter} />
       <Stack.Screen name='Payment' component={PaymentOption} />
       <Stack.Screen name='Lang' component={LanguageSelector} />
       <Stack.Screen name='add' component={AddCourse} />
    </Stack.Navigator>
      </>
  )
}

export default ProfileInsider