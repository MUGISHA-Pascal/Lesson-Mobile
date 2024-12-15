import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';

const notificationsData = [
  {
    id: '1',
    title: 'New Category Course!',
    message: 'New the 3D Design Course is Available.',
    icon: 'grid-outline',
    backgroundColor: '#EAF3FF',
    date: 'Today',
  },
  {
    id: '2',
    title: 'New Category Course!',
    message: 'New the 3D Design Course is Available.',
    icon: 'school-outline',
    backgroundColor: '#D4E6FF',
    date: 'Today',
  },
  {
    id: '3',
    title: 'Today’s Special Offers',
    message: 'You have made a Course Payment.',
    icon: 'pricetag-outline',
    backgroundColor: '#EAF3FF',
    date: 'Today',
  },
  {
    id: '4',
    title: 'Credit Card Connected!',
    message: 'Credit Card has been Linked!',
    icon: 'credit-card',
    backgroundColor: '#EAF3FF',
    date: 'Yesterday',
  },
  {
    id: '5',
    title: 'Account Setup Successful!',
    message: 'Your Account has been Created.',
    icon: 'user-check',
    backgroundColor: '#EAF3FF',
    date: 'Nov 20, 2022',
  },
];

const Noti = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#1A1A1A" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Notifications</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {/* Date Sections */}
        {['Today', 'Yesterday', 'Nov 20, 2022'].map((date) => (
          <View key={date}>
            <Text style={styles.dateTitle}>{date}</Text>
            {notificationsData
              .filter((notification) => notification.date === date)
              .map((notification) => (
                <View
                  key={notification.id}
                  style={[styles.notificationCard, { backgroundColor: notification.backgroundColor }]}
                >
                  <View style={styles.iconContainer}>
                    {notification.icon === 'grid-outline' && (
                      <Ionicons name={notification.icon} size={24} color="#3B82F6" />
                    )}
                    {notification.icon === 'school-outline' && (
                      <Ionicons name={notification.icon} size={24} color="#3B82F6" />
                    )}
                    {notification.icon === 'pricetag-outline' && (
                      <Ionicons name={notification.icon} size={24} color="#3B82F6" />
                    )}
                    {notification.icon === 'credit-card' && (
                      <FontAwesome5 name={notification.icon} size={24} color="#3B82F6" />
                    )}
                    {notification.icon === 'user-check' && (
                      <FontAwesome5 name={notification.icon} size={24} color="#3B82F6" />
                    )}
                  </View>
                  <View style={styles.textContainer}>
                    <Text style={styles.notificationTitle}>{notification.title}</Text>
                    <Text style={styles.notificationMessage}>{notification.message}</Text>
                  </View>
                </View>
              ))}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F9FF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 10,
    backgroundColor: '#F5F9FF',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1A1A1A',
    marginLeft: 10,
  },
  content: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  dateTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1A1A1A',
    marginTop: 20,
    marginBottom: 10,
  },
  notificationCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#D4E6FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1A1A1A',
  },
  notificationMessage: {
    fontSize: 13,
    color: '#6E6E6E',
  },
});

export default Noti;
