/* eslint-disable prettier/prettier */
import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const FaltCards = () => {
  return (
    <View>
      <Text style={styles.headingText}>Flatcards</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
          <Text>Red</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <Text>Red</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text>Red</Text>
        </View>
        <View style={[styles.card, styles.cardFour]}>
          <Text>Purpel</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 12,
    padding: 12,
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 125,
    width: 125,
    borderRadius: 4,
    margin: 12,
  },
  cardOne: {
    backgroundColor: '#e30e0e',
  },
  cardTwo: {
    backgroundColor: '#91e30e',
  },
  cardThree: {
    backgroundColor: '#0ee3ca',
  },
  cardFour: {
    backgroundColor: '#910ee3',
  },
});

export default FaltCards;
