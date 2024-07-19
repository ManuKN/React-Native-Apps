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
import FancyCard from './components/FancyCard';
import ActionCard from './components/ActionCard';


const App = () => {
 
  return (
    <SafeAreaView>
      <ScrollView>
        <FaltCards />
        <ElevatedCards />
        <FancyCard image="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/2018_Ford_Mustang_5.0_coupe.jpg/640px-2018_Ford_Mustang_5.0_coupe.jpg" />
        <FancyCard image="https://toyotacanada.scene7.com/is/image/toyotacanada/MY24_GR_Supra_45th_Anniv_Ed_006?ts=1689628506181&dpr=off" />
        <ActionCard />
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
