
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
const App = () => {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/profile.png')} style={styles.image}/>
      <View style={styles.textDetails}>
        <Text style={styles.label}>School</Text>
        <Text style={styles.textInfo}>Liberty Preparratory School</Text>
      </View>
      
      <View style={styles.textDetails}>
        <Text style={styles.label}>Email Address</Text>
        <Text style={styles.textInfo}>Williamaziza37@gmail.com</Text>
      </View>

      <View style={styles.textDetails}>
        <Text style={styles.labelBlue}>Name</Text>
        <Text style={styles.textInfo}>William Aziza</Text>
      </View>

      <View style={styles.textDetails}>
        <Text style={styles.labelBlue}>NickName</Text>
        <Text style={styles.textInfo}>Azey</Text>
      </View>

      <View style={styles.textDetails}>
        <Text style={styles.labelBlue}>Emergency Contact</Text>
        <Text style={styles.textInfo}>+233 56 711 4455 </Text>
      </View>
        
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}> 
        UPDATE PROFILE
      </Text>
      
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    marginHorizontal: 10
  },
  image:{
    width: 120,
    height: 120,
    alignSelf: "center",
    borderRadius: 60,
    marginTop: 50,
    marginBottom: 30
  },
  label:{
    color: 'grey',
    marginBottom: 5
  },
  textDetails:{
    marginHorizontal: 50
  },
  textInfo:{
    marginBottom: 20
  },
  labelBlue:{
    color: 'blue'
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
})


export default App;
;