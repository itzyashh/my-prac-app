import { View, StyleSheet, FlatList } from 'react-native';
import React, { useCallback, useRef, useState } from 'react';
import { Video, AVPlaybackStatus } from 'expo-av';
import { StatusBar } from 'expo-status-bar';
import VideoPost from './VideoPost';

const posts = [{
  id: '1',
  video: 'https://videos.pexels.com/video-files/15465878/15465878-hd_1080_1920_30fps.mp4',
  caption: 'Hearts in the sky'
},
{
  id: '2',
  video: 'https://videos.pexels.com/video-files/17687288/17687288-sd_540_960_30fps.mp4',
  caption: 'Beautiful Mountain'
},
{
  id: '3',
  video: 'https://videos.pexels.com/video-files/5244400/5244400-sd_540_960_25fps.mp4',
  caption: 'Balance'
},
{
  id: '4',
  video: 'https://videos.pexels.com/video-files/8203060/8203060-sd_540_960_25fps.mp4',
  caption: 'Food for the soul'
}
]


const Feed = () => {

  const [activeVideoId, setActiveVideoId] = useState<string | null>(posts[0].id)

  const onViewableItemsChanged = useCallback(({ viewableItems }) => {
    console.log(viewableItems)
    if (viewableItems.length > 0 && viewableItems[0].isViewable) {
      setActiveVideoId(viewableItems[0].item.id)
    }
  }
    , [])
    

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <FlatList
        data={posts}
        renderItem={({ item }) => 
        <VideoPost post={item}
        activeVideoId={activeVideoId}
        />}
        showsVerticalScrollIndicator={false}
        pagingEnabled
        viewabilityConfig={
          {
            itemVisiblePercentThreshold: 80
          }}
        onViewableItemsChanged={onViewableItemsChanged}
          />
    </View>
  )
}

export default Feed

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  },
 


})