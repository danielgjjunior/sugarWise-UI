import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Slider,
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { ParamListBase } from '@react-navigation/routers';
import { FontAwesome } from '@expo/vector-icons';
import LottieView from 'lottie-react-native';

interface DiseasesProps {
  navigation: StackNavigationProp<ParamListBase>;
  route: RouteProp<ParamListBase, 'BloodGlucoseLevel'>;
}

interface UserData {
  gender: number;
  age: number;
  hasHypertension: number;
  hasHeartDisease: number;
  smokingStatus: number;
  bmi: number;
}

const BloodGlucoseLevel = ({ navigation, route }: DiseasesProps) => {
  const { gender, age, hasHypertension, hasHeartDisease, smokingStatus, bmi, hba1cLevel } =
    route.params as UserData & { hba1cLevel: number };
  const [blood_glucose_level, setblood_glucose_level] = useState(0);

  const handleSubmit = () => {
    if(blood_glucose_level===0){
      alert('Por favor, selecione um valor');
      return;
    }
    navigation.navigate('Data', {
      gender,
      age,
      hasHypertension,
      hasHeartDisease,
      smokingStatus,
      bmi,
      hba1cLevel,
      blood_glucose_level,
    });
 
  };
  


  return (
    <View style={styles.container}>
      <View style={styles.progress}>
        <View style={[styles.bullet, styles.bulletFilled]} />
        <View style={[styles.bullet, styles.bulletFilled]} />
        <View style={[styles.bullet, styles.bulletFilled]} />
        <View style={[styles.bullet, styles.bulletFilled]} />
        <View style={[styles.bullet, styles.bulletFilled]} />
        <View style={[styles.bullet, styles.bulletFilled]} />
        <View style={[styles.bullet, styles.bulletFilled]} />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.text}>Nível de glicemia</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>
          Informe o seu nível de glicemia em jejum
        </Text>
        <Text style={styles.subtitle}>
          Meça sua glicemia em jejum pela manhã, antes de comer ou beber qualquer coisa
        </Text>
        <View style={styles.ImageContainer}>
          <LottieView
            source={require('../../assets/animations/blood/blood.json')}
            autoPlay
            loop
            style={{ width: 200 }}
          />
        </View>
      </View>
      <View style={styles.sliderContainer}>
        <Text style={styles.label}>Nível de glicemia em jejum:</Text>
        <Slider
          style={styles.slider}
          minimumValue={1}
          maximumValue={300}
          step={1}
          value={blood_glucose_level}
          onValueChange={setblood_glucose_level}
        />
        <Text style={styles.sliderValue}>{blood_glucose_level}</Text>
      </View>
      <View style={styles.next}>
          <TouchableOpacity style={styles.nextButton}>
            <FontAwesome name="arrow-right" size={50} color="#FFFFFF" onPress={handleSubmit}/>
          </TouchableOpacity>
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
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
    titleContainer: {
      alignItems: 'center',
    },
    text: {
      fontSize: 25,
      fontWeight: 'bold',
    },
    content: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginHorizontal: 20,
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    subtitle: {
      fontSize: 16,
      textAlign: 'center',
      marginBottom: 20,
    },
    ImageContainer: {
      width: '100%',
      height: 200,
      marginBottom: 20,
      alignItems:'center',
      
    },
    sliderContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 20,
    },
    label: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    slider: {
      width: '80%',
      height: 30,
      marginVertical: 10,
    },
    sliderValue: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    next: {
      alignItems: 'flex-end',
      marginRight: 20,
    },
    nextButton: {
      backgroundColor: '#61C049',
      borderRadius: 50,
      width: 70,
      height: 70,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  export default BloodGlucoseLevel;