/* eslint-disable prettier/prettier */
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ElevatedCards = () => {
  return (
    <View>
      <Text style={styles.headingText}>ElevatedCards</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card, styles.ElevatedCard]}>
          <Text>scroll here</Text>
        </View>
        <View style={[styles.card, styles.ElevatedCard]}>
          <Text>scroll here</Text>
        </View>
        <View style={[styles.card, styles.ElevatedCard]}>
          <Text>scroll here</Text>
        </View>
        <View style={[styles.card, styles.ElevatedCard]}>
          <Text>scroll here</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default ElevatedCards;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 12,
    padding: 12,
  },
  card: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 125,
    width: 125,
    borderRadius: 4,
    margin: 12,
  },
  ElevatedCard: {
    backgroundColor: '#f14207',
    elevation: 4,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowColor: '#124457',
    shadowOpacity: 0.4,
    shadowRadius: 2,
  },
});
