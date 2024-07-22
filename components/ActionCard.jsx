/* eslint-disable prettier/prettier */
import { Image, StyleSheet, Text, TouchableOpacity, View, Linking } from 'react-native';
import React from 'react';

const ActionCard = () => {
    const openWebsite = (url) => {
        console.log('funtion executing');
        Linking.openURL(url).catch((err) => console.error("Cannot open url", err));
    };
  return (
    <View>
      <Text style={styles.headingText}>Blog card</Text>
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.titlestyles}>Volkswagan - Dus Auto</Text>
        </View>
        <Image
          source={{
            uri: 'https://c8.alamy.com/comp/AWGGHX/toyota-car-showroom-at-night-AWGGHX.jpg',
          }}
          style={styles.imageStyle}
        />
        <View style={styles.descriptionCard}>
          <Text style={styles.descriptionStyles}>
            Founded: August 28, 1937 Founder: Kiichiro Toyoda Headquarters:
            Toyota City, Aichi Prefecture, Japan Origins: Toyota originated as a
            division of Toyoda Automatic Loom Works, founded by Sakichi Toyoda.
            His son, Kiichiro Toyoda, transitioned the company into the
            automotive industry, leading to the establishment of Toyota Motor
            Corporation.
          </Text>
        </View>
        <View style={styles.navigating}>
          <TouchableOpacity
            onPress={() => openWebsite('https://www.google.com/')}>
            <Text style={styles.footertext1}>Read more</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => openWebsite('https://www.google.com/')}> 
            <Text style={styles.footertext1}>Follow me</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default ActionCard;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 12,
    padding: 12,
  },
  title: {justifyContent: 'center', alignItems: 'center'},
  titlestyles: {color: '#faf9f9', fontSize: 18, paddingVertical: 12},
  container: {
    marginHorizontal: 12,
    backgroundColor: '#1a1a1a',
    borderRadius: 6,
  },
  headingCard: {},
  imageStyle: {
    height: 180,
  },
  descriptionCard: {marginVertical: 12, paddingHorizontal: 12},
  navigating: {
    padding: 12,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
  },
  descriptionStyles: {fontSize: 16, fontWeight: 'semibold', color: '#FFFFFF'},
  footertext1: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#f10a0a',
    backgroundColor: '#FFFFFF',
    padding: 6,
    borderRadius: 4,
  },
  footertext2: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#f10a0a',
    backgroundColor: '#FFFFFF',
    padding: 6,
    borderRadius: 4,
  },
});