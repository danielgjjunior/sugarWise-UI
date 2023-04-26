import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { ParamListBase } from '@react-navigation/routers';
import { sendPredictionRequest } from '../../services/backendService';

interface resultProps {
    navigation: StackNavigationProp<ParamListBase>;
    route: RouteProp<ParamListBase, "Data">;
  }


interface UserData {
    gender: number;
    age: number;
    hasHypertension: number;
    hasHeartDisease: number;
    smokingStatus: number;
    bmi: number;
    hba1cLevel:number;
    blood_glucose_level:number;
  }

const ResultsScreen = ({ navigation, route }: resultProps) => {
    const { gender, age, hasHypertension, hasHeartDisease, smokingStatus, bmi, hba1cLevel,blood_glucose_level } =
    route.params as UserData & { hba1cLevel: number }

    const handlePredictionRequest = async () => {
      const requestData = {
        gender,
        age,
        hasHypertension,
        hasHeartDisease,
        smokingStatus,
        bmi,
        hba1cLevel,
        blood_glucose_level,
      };
      console.log(requestData);

      const predictionResult = await sendPredictionRequest(requestData);
    // Exibe o resultado em um alerta
    alert(predictionResult);
  };

  return (
    <View style={styles.container}>
      <View>  
      <Text style={styles.title}>Dados digitados:</Text>
      <Text style={styles.label}>Gênero: {gender}</Text>
      <Text style={styles.label}>Idade: {age}</Text>
      <Text style={styles.label}>Hipertensão: {hasHypertension ? 'Sim' : 'Não'}</Text>
      <Text style={styles.label}>Doença cardíaca: {hasHeartDisease ? 'Sim' : 'Não'}</Text>
      <Text style={styles.label}>Status de fumante: {smokingStatus}</Text>
      <Text style={styles.label}>IMC: {bmi}</Text>
      <Text style={styles.label}>Nível de HbA1c: {hba1cLevel}</Text>
      <Text style={styles.label}>Nível de glicose no sangue: {blood_glucose_level}</Text>
      </View>
      <View>
      {/* Adiciona o botão */}
      <Button title="Previsão" onPress={handlePredictionRequest} />
    </View>
    
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
    marginTop:30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
});

export default ResultsScreen;
