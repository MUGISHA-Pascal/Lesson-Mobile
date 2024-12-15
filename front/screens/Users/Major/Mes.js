import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  TextInput,
  FlatList,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
  Modal,
  StatusBar
} from 'react-native';
import { Ionicons, MaterialIcons,AntDesign } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { useRoute, useNavigation } from '@react-navigation/native';

const screen = Dimensions.get("window");

const sampleMessages = [
  { id: '1', sender: 'John', message: 'Hello!', timestamp: '10:00 AM', type: 'text' },
  { id: '2', sender: 'Jane', message: 'Hi there!', timestamp: '10:01 AM', type: 'text' },
  { id: '3', sender: 'John', message: 'How are you?', timestamp: '10:02 AM', type: 'text' },
  { id: '4', sender: 'Jane', message: 'I am good, thanks!', timestamp: '10:03 AM', type: 'text' },
  { id: '5', sender: 'John', message: 'Great to hear!', timestamp: '10:04 AM', type: 'text' },
];

const ChatScreen = () => {
  const [message, setMessage] = useState('');
  const [image, setImage] = useState(null);
  const [data, setData] = useState(sampleMessages);
  const [isImageModalVisible, setIsImageModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  
  const scrollViewRef = useRef();
  const navigation = useNavigation();
  const route = useRoute();


  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessage = {
        id: (data.length + 1).toString(),
        sender: 'You',
        message: message,
        timestamp: new Date().toLocaleTimeString(),
        type: 'text',
      };
      setData(prevData => [...prevData, newMessage]);
      setMessage('');
    }

    if (image) {
      const newImageMessage = {
        id: (data.length + 2).toString(),
        sender: 'You',
        image: image,
        timestamp: new Date().toLocaleTimeString(),
        type: 'image',
      };
      setData(prevData => [...prevData, newImageMessage]);
      setImage(null);
    }
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.uri);
    }
  };

  const handleImagePress = (imageUri) => {
    setSelectedImage(imageUri);
    setIsImageModalVisible(true);
  };

  const closeImageModal = () => {
    setIsImageModalVisible(false);
    setSelectedImage(null);
  };

  useEffect(() => {
    scrollViewRef.current?.scrollToEnd({ animated: true });
  }, [data]);


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10,
      backgroundColor: '#1e90ff',
    },
    backArrow: {
      fontSize: 24,
      color: '#fff',
    },
    profileImage: {
      width: 40,
      height: 40,
      borderRadius: 20,
      marginHorizontal: 10,
    },
    chatName: {
      fontSize: 18,
      color: '#fff',
      fontWeight: 'bold',
    },
    chatContainer: {
      flex: 1,
      padding: 10,
    },
    myMessage: {
      alignSelf: 'flex-end',
      backgroundColor: '#E8F1FF',
      borderRadius: 10,
      padding: 10,
      marginVertical: 5,
      maxWidth: '80%',
    },
    otherMessage: {
      alignSelf: 'flex-start',
      backgroundColor: '#4C935E',
      borderRadius: 10,
      padding: 10,
      marginVertical: 5,
      maxWidth: '80%',
    },
    messageText: {
      fontSize: 16,
      color: 'white',
    },
    messageImage: {
      width: screen.width * 0.4,
      height: screen.width * 0.4,
      borderRadius: 10,
    },
    timestamp: {
      fontSize: 10,
      color: '#F5F5F5',
      alignSelf: 'flex-end',
    },
    timestamp2: {
      fontSize: 10,
      color: 'gray',
      alignSelf: 'flex-end',
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10,
      borderTopWidth: 1,
      borderColor: '#ECECEC',
    },
    input: {
      flex: 1,
      padding: 10,
      backgroundColor: '#F0F0F0',
      borderRadius: 10,
      marginHorizontal: 10,
      height:60
    },
    addImageText: {
      fontSize: 24,
      color: '#007AFF',
    },
    sendText: {
      backgroundColor: message ? '#0961F5' : 'gray',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        color:"white"
    },
    previewImage: {
      width: screen.width / 2,
      height: screen.width / 2,
      alignSelf: 'center',
      marginVertical: 10,
      borderRadius: 10,
    },
    modalBackground: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalCloseButton: {
      position: 'absolute',
      top: 20,
      right: 20,
    },
    modalCloseText: {
      fontSize: 18,
      color: '#fff',
    },
    modalImage: {
      width: screen.width * 0.9,
      height: screen.width * 0.9,
      borderRadius: 10,
    },
  });
  

  return (
    <View style={styles.container}>
        <StatusBar
  backgroundColor="#1e90ff"
  barStyle="white-content"
  hidden={false}
  translucent={false}
  networkActivityIndicatorVisible={false}
/>
        
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
        <AntDesign style={{ fontSize: 30, color: "#FFFFFF" }} name='arrowleft' />

        </TouchableOpacity>
        <Image
          source={{ uri: `${route.params.pro}` }} 
          style={styles.profileImage}
        />
    <Text style={styles.chatName}>Chat with {route.params.name}</Text>
      </View>

      <ScrollView ref={scrollViewRef} style={styles.chatContainer}>
        {data.map((item) => (
          <View
            key={item.id}
            style={item.sender === 'You' ? styles.myMessage : styles.otherMessage}
          >
            {item.type === 'text' ? (
              <Text  style={item.sender === 'You' ? styles.messageText2 : styles.messageText}>{item.message}</Text>
            ) : (
              <TouchableOpacity onPress={() => handleImagePress(item.image)}>
                <Image source={{ uri: item.image }} style={styles.messageImage} />
              </TouchableOpacity>
            )}
            <Text  style={item.sender === 'You' ? styles.timestamp2 : styles.timestamp}>{item.timestamp}</Text>
          </View>
        ))}
      </ScrollView>

      {image && <Image source={{ uri: image }} style={styles.previewImage} />}

      <View style={styles.inputContainer}>
        <TouchableOpacity onPress={pickImage}>
          <Text style={styles.addImageText}>+</Text>
        </TouchableOpacity>
        <TextInput
          value={message}
          onChangeText={setMessage}
          placeholder="Type your message..."
          style={styles.input}
        />
        <TouchableOpacity onPress={handleSendMessage}>
          <Text style={styles.sendText}>Send</Text>
        </TouchableOpacity>
      </View>

      
      {isImageModalVisible && (
        <Modal
          transparent={true}
          visible={isImageModalVisible}
          animationType="fade"
          onRequestClose={closeImageModal}
        >
          <View style={styles.modalBackground}>
            <TouchableOpacity onPress={closeImageModal} style={styles.modalCloseButton}>
              <Text style={styles.modalCloseText}>Close</Text>
            </TouchableOpacity>
            <Image source={{ uri: selectedImage }} style={styles.modalImage} />
          </View>
        </Modal>
      )}
    </View>
  );
};


export default ChatScreen;
