import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import AntD from 'react-native-vector-icons/AntDesign';

const HelpCenter = ({ navigation }) => {
  return (
    <View style={{ backgroundColor: "#F5F9FF", flex: 1 }}>
      <View style={{ backgroundColor: "#F5F9FF", paddingVertical: 20, flexDirection: "row", justifyContent: "space-between" }}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={{ flexDirection: "row", alignItems: "center", paddingHorizontal: 20 }}>
          <AntD style={{ fontSize: 25, marginRight: 6 }} name='arrowleft' />
          <Text style={{ fontSize: 21, fontWeight: 600, color: "#202244" }}>Help Center</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.goBack()} style={{ flexDirection: "row", alignItems: "center", paddingHorizontal: 20 }}>
          {/* Optional search icon */}
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.container}>
        <Text style={styles.heading}>How Can We Help You?</Text>

        <Text style={styles.subHeading}>Account Management</Text>
        <Text style={styles.text}>
          If you're having trouble with your account, check our guidelines for resetting your password or updating your account details.
        </Text>

        <Text style={styles.subHeading}>Order Issues</Text>
        <Text style={styles.text}>
          Need help with an order? You can view your order history, track your shipments, or contact support for further assistance.
        </Text>

        <Text style={styles.subHeading}>Payment & Billing</Text>
        <Text style={styles.text}>
          For any issues regarding payments or billing, we offer resources for updating your payment method, reviewing billing history, and resolving payment errors.
        </Text>

        <Text style={styles.subHeading}>Technical Support</Text>
        <Text style={styles.text}>
          Facing technical problems? Our support team is here to guide you through any issues with the app or other technical difficulties.
        </Text>

        <Text style={styles.subHeading}>Frequently Asked Questions (FAQs)</Text>
        <Text style={styles.text}>
          We’ve compiled a list of the most common questions. If you can't find an answer, feel free to contact us.
        </Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#F5F9FF',
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#202244',
  },
  subHeading: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
    color: '#202244',
  },
  text: {
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 20,
    color: '#202244',
  },
});

export default HelpCenter;
