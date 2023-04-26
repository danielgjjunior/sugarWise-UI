import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { ParamListBase } from '@react-navigation/routers';
import { FontAwesome } from '@expo/vector-icons';
import LottieView from 'lottie-react-native';


interface diseasesProps {
  navigation: StackNavigationProp<ParamListBase>;
  route: RouteProp<ParamListBase, "Diseases">;
}

interface userData{
    gender:number,
    age:number
}

const Diseases = ({ navigation, route }: diseasesProps) => {
  const {gender,age} = route.params as userData;
 
  const [hasHypertension, setHasHypertension] = useState(0);
  const [hasHeartDisease, setHasHeartDisease] = useState(0);

  const handleSubmit = () => {
    navigation.navigate('Smoking', { 
        age: age,
        gender: gender,
        hasHypertension: hasHypertension,
        hasHeartDisease: hasHeartDisease
      });   
}

  return (
    <View style={styles.container}>
        <View style={styles.progress}>
        <View style={[styles.bullet, styles.bulletFilled]} />
        <View style={[styles.bullet, styles.bulletFilled]} />
        <View style={[styles.bullet, styles.bulletFilled]} />
        <View style={[styles.bullet, styles.bulletUnfilled]} />
        <View style={[styles.bullet, styles.bulletUnfilled]} />
        <View style={[styles.bullet, styles.bulletUnfilled]} />
        <View style={[styles.bullet, styles.bulletUnfilled]} />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.text}>Histórico</Text>
      </View>
      <View style={styles.ImageContainer}>
        <LottieView
            source={require('../../assets/animations/diseases/diseases.json')}
            autoPlay
            loop
            style={{ width: 300, marginLeft:10}}
          />
          </View>

      <Text style={styles.title}>Você possui hipertensão?</Text>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={hasHypertension ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={(value) => setHasHypertension(value ? 1 : 0)} // convert boolean to number
        value={hasHypertension === 1} // compare with 1 instead of true
      />
      <Text style={styles.title}>Você possui doença de coração?</Text>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={hasHeartDisease ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={(value) => setHasHeartDisease(value ? 1 : 0)}
        value={hasHeartDisease === 1}
      />
       <TouchableOpacity style={styles.nextButton}>
        <FontAwesome name="arrow-right" size={50} color="#FFFFFF" onPress={handleSubmit}/>
          </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  progress: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 20,
  },
  bullet: {
    width: 10,
    height: 10,
    borderRadius: 5,
    margin: 5,
  },
  bulletFilled: {
    backgroundColor: '#61C049',
  },
  bulletUnfilled: {
    backgroundColor: '#BDBDBD',
  },
      text: {
        fontSize: 24,
        fontWeight: 'bold',
      },
      titleContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
      },
  container: {
    flex: 1,
    alignItems: 'center',
    
  },
  ImageContainer:{
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent:'space-around',
    width:'100%',
    height:300,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#0066cc',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  nextButton: {
    backgroundColor: '#008BFF',
    borderRadius: 24,
    padding: 8,
  },
  next: {
    width:'100%',
    alignItems:'center',
  },
});

export default Diseases;
