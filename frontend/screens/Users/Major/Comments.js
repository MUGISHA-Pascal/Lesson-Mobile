import React, { useState, useEffect, useRef, useContext } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity, ActivityIndicator, Image ,StatusBar} from 'react-native';
import Feather from "react-native-vector-icons/Feather";
import { useRoute } from '@react-navigation/native';

const Comments = () => {
  const route = useRoute();
  const [message, setMessage] = useState('');
  const [comments, setComments] = useState([]);
  const [noComments, setNoComments] = useState(false);

  const scrollViewRef = useRef();

  
  const initialComments = [
    { id: '1', username: 'John Doe', profile_pic: 'https://i0.wp.com/picjumbo.com/wp-content/uploads/woman-with-sun-glasses-in-flower-field-summer-free-photo.jpg', comment: 'Great post!', date: '2024-11-01' },
    { id: '2', username: 'Jane Smith', profile_pic: 'https://i0.wp.com/picjumbo.com/wp-content/uploads/woman-with-sun-glasses-in-flower-field-summer-free-photo.jpg', comment: 'Very informative.', date: '2024-11-02' },
  ];

  useEffect(() => {
    setComments(initialComments);
    setNoComments(initialComments.length === 0);
  }, []);

  const Nothin = () => (
    <View style={{ marginHorizontal: 20, justifyContent: "center", alignItems: "center", flex: 1 }}>
      <Text style={{ fontSize: 20, color: "rgba(0,0,0,0.5)", textAlign: "center" }}>No comment yet, be the first to comment.</Text>
      <Feather name="toggle-right" style={{ fontSize: 90, color: "rgba(0,0,0,0.5)" }} />
    </View>
  );

  const renderItem = ({ item }) => (
    <View style={{ flexDirection: "row", marginStart: 10, marginTop: 10 }}>
      {item.profile_pic ?
        <Image source={{ uri: item.profile_pic }} style={{ width: 40, height: 40, borderRadius: 10 }} />
        :
        <Image source={{ uri: 'https://i0.wp.com/picjumbo.com/wp-content/uploads/woman-with-sun-glasses-in-flower-field-summer-free-photo.jpg' }} style={{ width: 30, height: 30, borderRadius: 100 }} />
      }
      <View style={{ marginLeft: 20 }}>
        <Text style={{ fontWeight: 'bold', color: '#202244', opacity: 0.8 ,marginTop:-7}}>{item.username}</Text>
        <Text style={{ backgroundColor: '#1e90ff', padding: 10, borderRadius: 6, color: 'white' }}>{item.comment}</Text>
        <Text style={{ color: "gray" }}>{item.date}</Text>
      </View>
    </View>
  );

  const scrollToBottom = () => {
    scrollViewRef.current?.scrollToEnd({ animated: true });
  };

  const send = () => {
    if (message.trim()) {
      const newComment = {
        id: (comments.length + 1).toString(),
        username:  "Anonymous",
        profile_pic: 'https://i0.wp.com/picjumbo.com/wp-content/uploads/woman-with-sun-glasses-in-flower-field-summer-free-photo.jpg',
        comment: message,
        date: new Date().toLocaleDateString(),
      };

      setComments([...comments, newComment]);
      setMessage("");
      scrollToBottom();
    }
  };

  const styles = {
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 20,
      paddingVertical: 10,
      borderTopWidth: 1,
      borderTopColor: '#ddd',
      backgroundColor: '#F5F9FF',
    },
    input: {
      flex: 1,
      height: 60,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 10,
      paddingHorizontal: 15,
      marginRight: 10,
      color: '#202244',
   
    },
    sendButton: {
      backgroundColor: message ? '#0961F5' : 'gray',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 10,
    },
    sendButtonText: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 16,
    },
  };

  return (
    <>
      <View style={{ flex: 1, backgroundColor: '#F5F9FF' }}>
      <StatusBar
  backgroundColor="#1e90ff"
  barStyle="white-content"
  hidden={false}
  translucent={false}
  networkActivityIndicatorVisible={false}
/>
        {Array.isArray(comments) && comments.length > 0 ?
          <FlatList
            ref={scrollViewRef}
            onContentSizeChange={scrollToBottom}
            data={comments}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
          />
          :
          <>
            {!noComments && <View style={{ marginHorizontal: 20, justifyContent: "center", alignItems: "center", flex: 1 }}>
              <ActivityIndicator style={{ height: 900 }} size="large" color="#0961F5" />
            </View>}
            {noComments && <Nothin />}
          </>
        }
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type your message here..."
          value={message}
          onChangeText={text => setMessage(text)}
          placeholderTextColor={"gray"}
        />
        <TouchableOpacity onPress={send} style={styles.sendButton} disabled={!message}>
          <Text style={styles.sendButtonText}>SEND</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Comments;
