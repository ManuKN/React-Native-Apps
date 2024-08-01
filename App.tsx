/* eslint-disable semi */
/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import * as Yup from 'yup';

const PasswordSchema = Yup.object().shape({
  passwordLength:Yup.number().min(4 , 'Should be min of 4 charecters').max(16,'Should be max of 16 charecters').required('Length is required')
});

const App = () => {
  const[passowrd , setPassword] = useState('');
  const[isPasswordGenerated , setIsPasswordGenerated] = useState(false);
  const[lowerCase , setLowerCase] = useState(true);
  const[upperCase , setUpperCase] = useState(false);
  const[numbers , setNumbers] = useState(false);
  const[symbol , setSymbol] = useState(false);
 
  const generatePasswordString = (passwordLength:number) => {
     let characters = '';
     const upperAlpa = 'ABCDEFGHIJKLMNOPQRSTWXYZ'
     const lowerAlpa = 'abcdefghijklmnopqrstuvwxyz'
     const number = '123456789'
     const symbols = '!@#$%^&*()~'

     if(lowerCase){
      characters += lowerAlpa
     }
     else if(upperCase){
      characters += upperAlpa
     }
     else if(numbers){
      characters += number
     }
     else if (symbol) {
       characters += symbols;
     }

    const passwordResult =  createPassword(characters , passwordLength)
    setPassword(passwordResult)
    setIsPasswordGenerated(!isPasswordGenerated);
  };
  const createPassword = (characters:string , passwordLength:number) => {
      let result = '';
      for (let i = 0; i < passwordLength; i++) {
        const charecterIndex  = Math.round(Math.random() * characters.length)
        result += characters.charAt(charecterIndex);
      }
      return result;
  };

  const resetPassword = () => {
     setIsPasswordGenerated(!isPasswordGenerated);
     setLowerCase(true)
     setUpperCase(false)
     setNumbers(false)
     setSymbol(false)
  }

  return (
    <View>
      <Text>App</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({})