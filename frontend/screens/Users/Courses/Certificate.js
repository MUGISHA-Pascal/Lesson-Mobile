import React, { useRef } from 'react';
import { View, Text, StyleSheet, Button, Alert, ImageBackground ,StatusBar} from 'react-native';
import ViewShot from 'react-native-view-shot';
import * as FileSystem from 'expo-file-system';
import * as MediaLibrary from 'expo-media-library';
import * as Sharing from 'expo-sharing';
import { TouchableOpacity } from 'react-native';
import Feather from "react-native-vector-icons/Feather";
import Toast from 'react-native-toast-message';
export default function CertificateScreen() {
  const viewShotRef = useRef();

  const saveCertificateToGallery = async () => {
    try {
      const uri = await viewShotRef.current.capture();

      const { status } = await MediaLibrary.requestPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert("Permission Denied", "Permission to access the gallery is required.");
        return;
      }

      const asset = await MediaLibrary.createAssetAsync(uri);
      await MediaLibrary.createAlbumAsync('Certificates', asset, false);

      Toast.show({
        type: 'success',
        text1: 'Hello',
        text2: 'Saved to Gallery", "Your certificate image has been saved to your gallery.'
      },)
    
    } catch (error) {
      console.error("Error saving image to gallery:", error);
      Toast.show({
        type: 'error',
        text1: 'Hello',
        text2: 'Failed", " Failed to save certificate image. Please try again..'
      },)
    }
  };


  const shareCertificateImage = async () => {
    try {
      const uri = await viewShotRef.current.capture();
      const fileUri = `${FileSystem.cacheDirectory}certificate.png`;

      await FileSystem.moveAsync({
        from: uri,
        to: fileUri,
      });

      await Sharing.shareAsync(fileUri, {
        mimeType: 'image/png',
        dialogTitle: 'Share Certificate',
      });
    } catch (error) {
      console.error("Error sharing certificate:", error);
      Alert.alert("Error", "Failed to share certificate. Please try again.");
    }
  };

  return (
    <View style={styles.container}>
           <StatusBar
  backgroundColor="#1e90ff"
  barStyle="white-content"
  hidden={false}
  translucent={false}
  networkActivityIndicatorVisible={false}
/>
      <ViewShot ref={viewShotRef} options={{ format: 'png', quality: 1.0 }}>
        <View style={styles.certificateContainer}>
          <ImageBackground source={require('../../../assets/certificate-bg.png')} style={styles.certificateBackground}>
         
        
            <Text style={styles.nameText}>MU BAPTISTE</Text>
            <Text style={styles.bodyText}>
           Date: 34/22/2024
            </Text>
            <View style={styles.signatureContainer}>
        
            </View>
          </ImageBackground>
        </View>
      </ViewShot>


<View style={{flexDirection:"row", justifyContent:"center",alignItems:"center",gap:40,marginVertical:15}}>
<TouchableOpacity style={{backgroundColor:"#4C935E",paddingHorizontal:20, borderRadius:10,justifyContent:"center",alignItems:"center", flexDirection:"column"}}  onPress={saveCertificateToGallery}>
    <Feather name='download' style={{fontSize:30, color:"white"}} />
    <Text style={{color:"white"}}>Save</Text>
</TouchableOpacity>
<TouchableOpacity style={{backgroundColor:"#E8F1FF",paddingHorizontal:20, borderRadius:10,justifyContent:"center",alignItems:"center", flexDirection:"column",borderColor:"#202244", borderWidth:1}} onPress={shareCertificateImage}>
<Feather name='share' style={{fontSize:30, color:"#202244"}} />
    <Text style={{color:"#202244"}}>Share</Text>
</TouchableOpacity>
   
</View>
<Toast />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
 
    padding: 20 ,
    backgroundColor:"#F5F9FF"
  },
  certificateContainer: { 
    width: 320, 
    aspectRatio: 1.414, 
    padding: 20, 
    backgroundColor: '#ffffff', 
    borderRadius: 10, 
    overflow: 'hidden',
    elevation: 5,
  },
  certificateBackground: { 
    flex: 1, 
    padding: 25, 
    alignItems: 'center', 
    justifyContent: 'center' 
  },
  headerText: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    color: '#333', 
    textAlign: 'center', 
    marginBottom: 10 
  },
  subText: { 
    fontSize: 16, 
    color: '#555', 
    textAlign: 'center', 
    marginBottom: 10 
  },
  nameText: { 
    fontSize: 18, 
    fontWeight: 'bold', 
    color: '#3f51b5', 
    marginVertical: 10 ,
    marginTop:30
  },
  bodyText: { 
    fontSize: 5, 
    color: '#666', 
    right:30,
    lineHeight: 24, 
    marginVertical: 15, 
    paddingHorizontal: 10 ,
    position:"absolute",
    bottom:0
  },
  signatureContainer: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    width: '100%', 
    paddingHorizontal: 30, 
    marginTop: 20 
  },
  signatureText: {
    fontSize: 16,
    color: '#333',
    fontStyle: 'italic',
  }
});
