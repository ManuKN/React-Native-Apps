/* eslint-disable prettier/prettier */
import {
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import React from 'react';
import FaltCards from './components/FaltCards';
import ElevatedCards from './components/ElevatedCards';


const App = () => {
 
  return (
   <SafeAreaView>
    <ScrollView>
      <FaltCards />
      <ElevatedCards />
    </ScrollView>
   </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
     flex:1,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
});
