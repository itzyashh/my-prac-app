import { View, Text, StyleSheet, Pressable, useWindowDimensions } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { Video, ResizeMode, AVPlaybackStatus } from 'expo-av';

import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

type VideoPostProps = {
    post: {
        id: string;
        video: string;
        caption: string;
    },
    activeVideoId: string | null
    }



const VideoPost = ({ post,activeVideoId }: VideoPostProps) => {

  const {height,width} = useWindowDimensions()
  const video = useRef<Video>(null)

  useEffect(() => {
    if (post.id === activeVideoId) {
      video.current?.playAsync()
    } else {
      video.current?.pauseAsync()
    }
  }
    , [activeVideoId,video.current])



  const [status, setStatus] = useState<AVPlaybackStatus>()

  const isVideoPlaying = status?.isLoaded && status?.isPlaying
//   console.log(status)

  const onFeedPress = () => {

    if (!isVideoPlaying) {

      if (!video.current) return

      video.current?.playAsync()
    } else {
      video.current?.pauseAsync()
    }
  }
  
  return (
    <View style={[styles.container, {height, width}]}>
      <Video
        ref={video}
        source={{ uri: post.video }}
        style={[StyleSheet.absoluteFill, styles.video]}
        resizeMode={ResizeMode.COVER}
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

export  default VideoPost

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  video: {
    backgroundColor: 'rgba(0,0,0,0.9)',
    // aspectRatio: 9 / 16,
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
  },
  playIcon: {
    color: 'rgba(255,255,255,0.5)',
    fontSize: 50,
    alignSelf: 'center',
    position: 'absolute',
    top: '50%'
  }


})