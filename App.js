import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Feed from './src/reelsPlayer/Feed';
import { SafeAreaProvider } from 'react-native-safe-area-context';



export default function App() {
  return (
    <SafeAreaProvider>
    <Feed />
    </SafeAreaProvider>
  )
}

