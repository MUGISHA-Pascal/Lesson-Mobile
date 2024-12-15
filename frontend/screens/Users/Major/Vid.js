import React, { useRef, useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions,StatusBar } from 'react-native';
import { Video } from 'expo-av';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons,AntDesign } from '@expo/vector-icons';
import Slider from '@react-native-community/slider';
import * as ScreenOrientation from 'expo-screen-orientation';

export default function VideoScreen({navigation}) {
  const videoRef = useRef(null);
  const [status, setStatus] = useState({});
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [controlsVisible, setControlsVisible] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const hideControlsTimeout = useRef(null);

  useEffect(() => {
    resetHideControlsTimer();
    return () => clearTimeout(hideControlsTimeout.current);
  }, [status.isPlaying]);

  // Reset hide controls timer
  const resetHideControlsTimer = () => {
    if (hideControlsTimeout.current) clearTimeout(hideControlsTimeout.current);
    hideControlsTimeout.current = setTimeout(() => setControlsVisible(false), 3000); // 3 seconds
  };

  const showControls = () => {
    setControlsVisible(true);
    resetHideControlsTimer();
  };

  const handleBookmark = async () => {
    try {
      await AsyncStorage.setItem('@bookmarkedVideo', 'https://www.w3schools.com/html/mov_bbb.mp4');
      setIsBookmarked(true);
      alert('Video bookmarked!');
    } catch (error) {
      console.error("Error saving bookmark", error);
    }
  };

  const handlePlayPause = () => {
    status.isPlaying ? videoRef.current.pauseAsync() : videoRef.current.playAsync();
    showControls();
  };

  const handleRewind = () => {
    videoRef.current.setPositionAsync(Math.max(status.positionMillis - 5000, 0));
    showControls();
  };

  const handleForward = () => {
    videoRef.current.setPositionAsync(Math.min(status.positionMillis + 5000, status.durationMillis));
    showControls();
  };

  const handleSliderValueChange = (value) => {
    videoRef.current.setPositionAsync(value);
    showControls();
  };

  // Convert milliseconds to time format (mm:ss)
  const formatTime = (millis) => {
    const minutes = Math.floor(millis / 60000);
    const seconds = ((millis % 60000) / 1000).toFixed(0);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  // Toggle fullscreen and change orientation
  const toggleFullscreen = async () => {
    if (isFullscreen) {
      await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
    } else {
      await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
    }
    setIsFullscreen(!isFullscreen);
  };

  return (
    <View style={styles.container} onTouchStart={showControls}>
      <View style={{flexDirection:"row",alignItems:"center",gap:10,}}>

<TouchableOpacity onPress={()=>navigation.goBack()}>
  <AntDesign style={{fontSize:30}} name='arrowleft' />
</TouchableOpacity>
<StatusBar
          backgroundColor="#1e90ff"
          barStyle="white-content"
          hidden={false}
          translucent={false}
          networkActivityIndicatorVisible={false}
        />
   {/* Video Description */}
   <Text style={styles.description}>
       How to drive a car safely
      </Text>

      </View>
      <View style={[styles.videoContainer, isFullscreen && styles.fullscreenVideo]}>
        <Video
          ref={videoRef}
          source={{ uri: 'https://www.w3schools.com/html/mov_bbb.mp4' }} // Replace with your video URL
          rate={1.0}
          volume={1.0}
          isMuted={false}
          resizeMode="cover"
          shouldPlay={false}
          onPlaybackStatusUpdate={(status) => setStatus(() => status)}
          style={styles.video}
        />

        {/* Controls */}
        {controlsVisible && (
          <View style={styles.controlsContainer}>
            <View style={styles.timeContainer}>
              <Text style={styles.timeText}>{formatTime(status.positionMillis)}</Text>
              <Slider
                style={styles.slider}
                minimumValue={0}
                maximumValue={status.durationMillis || 0}
                value={status.positionMillis || 0}
                onSlidingComplete={handleSliderValueChange}
                minimumTrackTintColor="#FFF"
                maximumTrackTintColor="#888"
                thumbTintColor="#FFF"
              />
              <Text style={styles.timeText}>{formatTime(status.durationMillis)}</Text>
            </View>
            <View style={styles.controls}>
              <TouchableOpacity onPress={handleRewind}>
                <Ionicons name="play-back" size={32} color="white" />
              </TouchableOpacity>
              <TouchableOpacity onPress={handlePlayPause}>
                <Ionicons name={status.isPlaying ? "pause" : "play"} size={32} color="white" />
              </TouchableOpacity>
              <TouchableOpacity onPress={handleForward}>
                <Ionicons name="play-forward" size={32} color="white" />
              </TouchableOpacity>
              <TouchableOpacity onPress={toggleFullscreen}>
                <Ionicons name={isFullscreen ? "contract" : "expand"} size={32} color="white" />
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>

     <View style={{flexDirection:"row", gap:5,justifyContent:"space-between",marginVertical:10,alignItems:"center"}}>
       <View style={{flexDirection:"row",alignItems:"center", gap:10}}>
       <View style={{width:50,height:50,backgroundColor:"black",borderRadius:50}}>

</View>
<View>
  <Text>Mu Baptiste</Text>
  <Text>7hrs ago</Text>
</View>
       </View>

       <TouchableOpacity style={styles.bookmarkButton} onPress={handleBookmark} disabled={isBookmarked}>
        <Ionicons name={isBookmarked ? "bookmark" : "bookmark-outline"} size={24} color="black" />
        <Text style={styles.bookmarkText}>{isBookmarked ? 'Bookmarked' : 'Save to Bookmarks'}</Text>
      </TouchableOpacity>


     </View>
     <View style={{backgroundColor:"white", padding:10,borderRadius:10}}>
       <Text style={styles.longDescription}>
        This is a sample video for demonstration purposes. This video illustrates a variety of topics related to video streaming, custom controllers, and application interface design. It’s a great example to show how a user might interact with a video through custom-built controls, including the play, pause, rewind, and forward functionalities. The description can contain even more detailed information regarding the content or purpose of the video, similar to how descriptions are used on platforms like YouTube. This area is scrollable and supports a long text.
      </Text>
     </View>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8F1FF',
    paddingHorizontal: 16,
  },
  videoContainer: {
    width: '100%',
    aspectRatio: 16 / 9,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#000',
  },
  fullscreenVideo: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 10,
    width:Dimensions.get("screen").width-30,
    
  },
  video: {
    width: '100%',
    height: '100%',
  },
  controlsContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  slider: {
    flex: 1,
    marginHorizontal: 8,
  },
  timeText: {
    color: '#FFF',
    fontSize: 12,
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 10,
  },
  bookmarkButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
  },
  bookmarkText: {
    marginLeft: 8,
    fontSize: 16,
  },
  description: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  longDescription: {
    fontSize: 16,
    color: '#333',
  },
});
