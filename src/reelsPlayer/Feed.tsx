import { View, Text, StyleSheet, Pressable } from 'react-native'
import React, { useRef, useState } from 'react'
import { Video, ResizeMode, AVPlaybackStatus } from 'expo-av';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const post = {
  id: '1',
  video: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/vertical-videos/2.mp4',
  caption: 'Beautiful View'
}

const Feed = () => {

  const video = useRef<Video>(null)
  const [status, setStatus] = useState<AVPlaybackStatus>()

  const isVideoPlaying = status?.isLoaded && status?.isPlaying
  console.log(status)

  const onFeedPress = () => {

    if (!isVideoPlaying) {

      if (!video.current) return

      video.current?.playAsync()
    } else {
      video.current?.pauseAsync()
    }
  }
  
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Video
        ref={video}
        source={{ uri: post.video }}
        style={[StyleSheet.absoluteFill, styles.video]}
        resizeMode={ResizeMode.STRETCH}
        onPlaybackStatusUpdate={setStatus}
        isLooping
      />
      <Pressable 
      onPress={onFeedPress}
      style={styles.content}>
    { !isVideoPlaying && 
       <FontAwesome5 name="play" style={styles.playIcon} />}
        <LinearGradient
          style={styles.overlay}
          colors={['transparent', 'rgba(0,0,0,0.8)']}
        />
        <SafeAreaView style={{ flex: 1 }}>
          <View style={styles.footer}>
            <View style={styles.leftColumn}>
              <Text style={styles.caption}>{post.caption}</Text>
            </View>
            <View style={styles.rightColumn}>
              <Ionicons name="heart" style={styles.icon} />
              <FontAwesome name="comment" style={styles.icon} />
              <Feather name="share" style={styles.icon} />
              <FontAwesome name="bookmark" style={styles.icon} />
            </View>
          </View>
        </SafeAreaView>
      </Pressable>
    </View>
  )
}

export default Feed

const styles = StyleSheet.create({
  container: {
    flex: 1

  },
  video: {
    backgroundColor: 'rgba(0,0,0,0.9)',
  },
  content: {
    padding: 10,
    flex: 1,
  },
  footer: {
    marginTop: 'auto',
  },
  caption: {
    color: 'white',
    fontSize: 16,
  },
  leftColumn: {
  },
  rightColumn: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    right: 10,
    bottom: 10,
    gap: 20,
  },
  icon: {
    color: 'white',
    fontSize: 30,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    top: '70%',
    borderRadius: 10,
  },
  playIcon: {
    color: 'rgba(255,255,255,0.5)',
    fontSize: 50,
    alignSelf: 'center',
    position: 'absolute',
    top: '50%'
  }


})