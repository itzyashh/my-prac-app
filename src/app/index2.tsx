import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FontAwesome6 } from '@expo/vector-icons';
import { Stack, Link } from 'expo-router';
const Onboarding = () => {

  return (
    <View style={styles.container}>
      <Stack.Screen options={{headerShown:false}} />
      <FontAwesome6 name="arrows-turn-to-dots"  style={styles.icon} />
      <View style={styles.footer}>
      <Text style={styles.title}>Onboarding</Text>
      <Text style={styles.description}>Keep your information synchronized in real-time across all your devices for seamless access anywhere.</Text>
      <View style={styles.buttonGroup}>
      <Pressable onPress={()=>{}} style={styles.button2}>
        <Text style={styles.buttonText}>Skip</Text>
      </Pressable>

      <Pressable  style={styles.button}>
        <Text style={styles.buttonText}>Continue</Text>
      </Pressable>
      </View>
      </View>
    </View>
  )
}

export default Onboarding

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#181B20',
    padding:20,
  },
  icon:{
    color:'#7489A6',
    fontSize:100,
    marginBottom:60,
  },
  footer:{
    justifyContent:'center',
    position:'absolute',
    bottom:100,

  },
  title:{
    fontSize:44,
    fontWeight:'bold',
    color:'white',
    letterSpacing:1.2,
  },
  description:{
    color:'gray',
    fontSize:20,
  },
  buttonGroup:{
    flexDirection:'row',
    gap:10,
  },
  button:{
    backgroundColor:'#2b4260',
    padding:15,
    borderRadius:60,
    marginTop:20,
    flex:1,
  },
  button2:{
    padding:15,
    borderRadius:60,
    marginTop:20,
  },
  buttonText:{
    color:'white',
    fontSize:18,
    textAlign:'center',
    fontWeight:'bold',
  }

})