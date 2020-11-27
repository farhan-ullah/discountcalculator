import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';

export default function StartScreen ({navigation}) {
  return (
    <View style={styles.container}>
    <TextInput style = {styles.input}
    underlineColorAndroid = "transparent"
    placeholder = "Budget"
    placeholderTextColor = "#9a73ef"
    autoCapitalize = "none"
    onChangeText = {this.handleEmail}/>
 
 <TextInput style = {styles.input}
    underlineColorAndroid = "transparent"
    placeholder = "Discount"
    placeholderTextColor = "#9a73ef"
    autoCapitalize = "none"
    onChangeText = {this.handlePassword}/>
 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 23,
    backgroundColor: '#fff',
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: '#7a42f4',
    borderWidth: 1
 },
 
});
