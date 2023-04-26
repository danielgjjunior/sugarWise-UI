import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity, TextInput, Alert } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { ParamListBase } from '@react-navigation/routers';
import { FontAwesome } from '@expo/vector-icons';
import LottieView from 'lottie-react-native';


interface diseasesProps {
  navigation: StackNavigationProp<ParamListBase>;
  route: RouteProp<ParamListBase, "Bmi">;
}

interface userData{
    gender:number,
    age:number
    hasHypertension: number,
    hasHeartDisease: number,
    smokingStatus: number
}        

const Bmi = ({ navigation, route }: diseasesProps) => {
const {gender,age,hasHypertension,hasHeartDisease,smokingStatus} = route.params as userData;
const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState('');
  const [calculationDone, setCalculationDone] = useState(false);


  const isValidHeight = (value: string) => {
    if (/^\d+$/.test(value)) {
      const heightNumber = Number(value);
      if (heightNumber >= 20 && heightNumber <= 300) {
        return true;
      }
    }
    Alert.alert('Erro', 'Por favor, insira uma altura válida em centímetros.');
    return false;
  };

  const isValidWeight = (value: string) => {
    const weightNumber = Number(value);
    if (weightNumber >= 10 && weightNumber <= 500) {
      return true;
    }
    Alert.alert('Erro', 'Por favor, insira um peso válido em kg.');
    return false;
  };
  

  const handleCalculateBMI = () => {
    if (isValidHeight(height) && isValidWeight(weight)) {
      const heightInMeters = Number(height) / 100;
      const bmi = Number(weight) / (heightInMeters * heightInMeters);
      setBmi(String(bmi));
      setCalculationDone(true);
      
    }
  };

  const handleSubmit = () => {
    navigation.navigate('HbA1cLevel', { 
        age: age,
        gender: gender,
        hasHypertension: hasHypertension,
        hasHeartDisease: hasHeartDisease,
        smokingStatus: smokingStatus,
        bmi: bmi,
      });   
      }

  return (
    <View style={styles.container}>
        <View style={styles.progress}>
        <View style={[styles.bullet, styles.bulletFilled]} />
        <View style={[styles.bullet, styles.bulletFilled]} />
        <View style={[styles.bullet, styles.bulletFilled]} />
        <View style={[styles.bullet, styles.bulletFilled]} />
        <View style={[styles.bullet, styles.bulletFilled]} />
        <View style={[styles.bullet, styles.bulletUnfilled]} />
        <View style={[styles.bullet, styles.bulletUnfilled]} />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.text}>IMC (Índice de massa corporal)</Text>
      </View>
      <View style={styles.content}>
      <Text style={styles.title}>Calcule seu IMC</Text>
        <View style={styles.ImageContainer}>
            <LottieView
                source={require('../../assets/animations/bmi/bmi.json')}
                autoPlay
                loop
                style={{ width: 200 }}
            />
            </View>
      </View>

      <View style={styles.inputContainer}>
      <Text style={styles.label}>Altura (cm):</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite sua altura"
        keyboardType="numeric"
        value={height}
        onChangeText={setHeight}
      />
    </View>
    <View style={styles.inputContainer}>
      <Text style={styles.label}>Peso (kg):</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu peso"
        keyboardType="numeric"
        value={weight}
        onChangeText={setWeight}
      />
    </View>
    <TouchableOpacity
      style={styles.calculateButton}
      onPress={handleCalculateBMI}
    >
      <Text style={styles.calculateButtonText}>Calcular</Text>
    </TouchableOpacity>
    {bmi ? (
      <Text style={styles.resultText}>Seu IMC é {Number(bmi).toFixed(2)}</Text>
    ) : null}
    <View style={styles.next}>
    {calculationDone ? (
        
        <TouchableOpacity
          style={styles.nextButton}
        >
        <FontAwesome name="arrow-right" size={60} color="#FFFFFF" onPress={handleSubmit}/>
        </TouchableOpacity>
      ) : null}
    </View>
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
  content: {
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
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  label: {
    fontSize: 16,
    color: '#32264D',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#FAFAFC',
    borderRadius: 8,
    height: 56,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#6A6180',
  },
  calculateButton: {
    backgroundColor: '#04D361',
    height: 56,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
  },
  calculateButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  resultText: {
    fontSize: 24,
    color: '#6A6180',
    marginTop: 16,
  },

});

export default Bmi;
