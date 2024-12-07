import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { View, Text, Switch, StyleSheet, FlatList } from 'react-native';
import AntD from 'react-native-vector-icons/AntDesign';
const NotificationSettings = ({navigation}) => {
  const [settings, setSettings] = useState([
    { id: '1', title: 'Special Offers', enabled: true },
    { id: '2', title: 'Sound', enabled: true },
    { id: '3', title: 'Vibrate', enabled: false },
    { id: '4', title: 'General Notification', enabled: true },
    { id: '5', title: 'Promo & Discount', enabled: false },
    { id: '6', title: 'Payment Options', enabled: true },
    { id: '7', title: 'App Update', enabled: true },
    { id: '8', title: 'New Service Available', enabled: false },
    { id: '9', title: 'New Tips Available', enabled: false },
  ]);

  const toggleSwitch = (index) => {
    let updatedSettings = [...settings];
    updatedSettings[index].enabled = !updatedSettings[index].enabled;
    setSettings(updatedSettings);
  };

  const renderSetting = ({ item, index }) => (
    <View style={styles.settingRow}>
      <Text style={styles.settingTitle}>{item.title}</Text>
      <Switch
        value={item.enabled}
        onValueChange={() => toggleSwitch(index)}
        thumbColor={item.enabled ? '#007bff' : '#f4f3f4'}
        trackColor={{ false: '#767577', true: '#007bff' }}
      />
    </View>
  );

  return (
    <View style={{flex:1, backgroundColor:"#F5F9FF"}}>
    <View style={styles.container}>
  <View>
  <TouchableOpacity onPress={() => navigation.goBack()} style={{  flexDirection: "row", alignItems: "center", paddingHorizontal: 0 }}>
                <AntD style={{ fontSize: 25, marginRight: 6 }} name='arrowleft' />
                <Text style={{ fontSize: 21, fontWeight: 600, color: "#202244" }}>All Category</Text>
            </TouchableOpacity>
        </View>

   <View style={{marginTop:20,marginBottom:60}}>
   <FlatList
        data={settings}
        keyExtractor={(item) => item.id}
        renderItem={renderSetting}
        showsVerticalScrollIndicator={false}
      />
   </View>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    
    paddingHorizontal: 20,
    backgroundColor: '#F5F9FF',
    paddingTop:20
    
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  settingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 10,
    elevation: 1,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
  },
  settingTitle: {
    fontSize: 16,
    color: '#333',
  },
});

export default NotificationSettings;
