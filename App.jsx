/* eslint-disable prettier/prettier */
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import React from 'react';
import FaltCards from './components/FaltCards';


const App = () => {
  function handleClick() {
    console.log('fucntion calling');
  }
  const DarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.container}>
      <Text style={DarkMode ? styles.darkText : styles.whiteText}>
        Hello Moto
      </Text>
      <Button style={styles.text} title="Click on me" onPress={handleClick} />
      <FaltCards />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
     flex:2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 50,
  },
  whiteText: {
    color: '#36e617',
  },
  darkText: {
    color: '#000000',
  },
});
