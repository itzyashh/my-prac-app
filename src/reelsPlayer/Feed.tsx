import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Video, ResizeMode } from 'expo-av';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';

const post = {
  id:'1',
  video:'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/vertical-videos/2.mp4',
  caption: 'Beautiful View'
}

const Feed = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Video
        source={{ uri: post.video }}
        style={styles.video}
        resizeMode={ResizeMode.STRETCH}
      />
      <SafeAreaView style={styles.container}>
      <View style={styles.content}>
            <Text style={styles.caption}>{post.caption}</Text>
          <View style={styles.footer}>
            <Text style={styles.caption}>{post.caption}</Text>
            </View>
        </View>

      </SafeAreaView>
    </View>
  )
}

export default Feed

const styles = StyleSheet.create({
  container: { flex: 1

   },
  video: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'black',
  },
  content: {
    flex: 1,
    // backgroundColor: 'rgba(0,0,0,.5)',
  },
  footer: {
    marginTop:'auto'
  },
  caption: {
    color: 'white',
    fontSize: 45,
  },


})