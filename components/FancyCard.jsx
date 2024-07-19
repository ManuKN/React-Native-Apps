/* eslint-disable prettier/prettier */
import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const FancyCard = ({image}) => {
  return (
    <View>
      <Text style={styles.headingText}>FancyCard</Text>
      <View style={[styles.card, styles.ElevatedCardOne]}>
        <Image
          source={{
            uri: image,
          }}
          style={styles.Image}
        />
        <View style={styles.cardBody}>
          <Text style={styles.Title}>Mustang</Text>
          <Text style={styles.Label}>Born to win🐎</Text>
          <Text style={styles.Description}>
            Mustangs are free-roaming horses of the western United States, known
            for their hardiness and spirit. They are descendants of horses
            brought to the Americas by Spanish explorers in the 16th century.
          </Text>
          <Text style={styles.Footer}>Born on April 17, 1964</Text>
        </View>
      </View>
    </View>
  );
};

export default FancyCard;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 12,
    padding: 12,
  },
  card: {
    width: 425,
    height: 360,
    borderRadius: 6,
    margin: 12,
  },
  cardBody: {
    paddingHorizontal: 12,
  },
  ElevatedCardOne: {
    backgroundColor: '#030303',
    elevation: 4,
    shadowOffset: {
      width: 2,
      height: 2,
    },
  },
  Image: {
    height: 180,
    borderTopRightRadius: 6,
  },
  Title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginVertical: 8,
  },
  Label: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  Description: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#01CBC6',
    marginVertical: 6,
  },
  Footer: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});
