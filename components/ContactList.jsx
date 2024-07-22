/* eslint-disable prettier/prettier */
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const ContactList = () => {
const contact = [
  {
    uid: 1,
    name: 'Manu',
    role: 'working at Nxtgen',
    image:
      'https://cdn.pixabay.com/photo/2017/05/23/20/06/mustang-2338351_640.jpg',
  },
  {
    uid: 2,
    name: 'Chethan',
    role: 'Working',
    image:
      'https://www.shutterstock.com/image-photo/marysville-victoria-australia-12th-aug-260nw-2346193907.jpg',
  },
  {
    uid: 3,
    name: 'Balon',
    role: 'SDE1',
    image:
      'https://media.istockphoto.com/id/458122229/photo/red-ford-mustang-logo-on-front-car.jpg?s=2048x2048&w=is&k=20&c=7h4jVJ6BXrYg1NBaPZYQcIuAy6XviVqMTycNv0pJYGk=',
  },
  {
    uid: 4,
    name: 'Jaswanth',
    role: 'SDE1',
    image:
      'https://media.istockphoto.com/id/820863404/photo/ford-mustang.jpg?s=2048x2048&w=is&k=20&c=8EC6rh3zMqXisKwIRlodSNMkSp9DoxvXPpiE5oxfH8o=',
  },
];

  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView style={styles.contactScroller} >
        {contact.map((item) => (
            <View style={styles.contactCard}>
                <Image style={styles.userImage} source={{uri:item.image}} />
                <View>
                   <Text style={styles.userName}>{item.name}</Text>
                   <Text style={styles.userRole}>{item.role}</Text>
                </View>
            </View> 
        ))}
      </ScrollView>
    </View>
  );
}

export default ContactList;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 12,
    padding: 12,
  },
  contactScroller: {},
  contactCard: { flex:1,flexDirection:'row', padding:12 ,backgroundColor:'#5fdfbd', margin:12 , paddingHorizontal:12, borderRadius:6},
  userImage: {width:60, height:60 , borderRadius:60 / 2 , marginRight:20},
  userName:{ fontSize:24, color:'#4113e7'},
  userRole:{ fontSize:18, color:'#000000'},
});