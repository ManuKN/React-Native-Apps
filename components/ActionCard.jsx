/* eslint-disable prettier/prettier */
import { Image, StyleSheet, Text, TouchableOpacity, View, Linking } from 'react-native';
import React from 'react';

const ActionCard = () => {
    const openWebsite = (url) => {
        Linking.openURL(url).catch((err) => console.error("Cannot open url", err));
    };
  return (
    <View>
      <Text style={styles.headingText}>ActionCard</Text>
      <View style={styles.container}>
        <View style={styles.headingCard}>
          <Text>Blog Card</Text>
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
        <View>
          <TouchableOpacity
            onPress={() => openWebsite('https://www.google.com/')}>
            <Text style={styles.footertext}>Read more...</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default ActionCard

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 12,
    padding: 12,
  },
  container: {paddingHorizontal: 0},
  headingCard: {},
  imageStyle: {
    height: 180,
  },
  descriptionCard: {marginVertical:12},
  descriptionStyles: {fontSize: 16, fontWeight: 'semibold'},
  footertext: {fontSize: 17, fontWeight: 'bold' , color:'#000000'},
});