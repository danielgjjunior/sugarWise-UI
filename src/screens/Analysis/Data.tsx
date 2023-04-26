import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { ParamListBase } from '@react-navigation/routers';
import { sendPredictionRequest } from '../../services/backendService';
import { PieChart } from 'react-native-chart-kit';
import LottieView from 'lottie-react-native';
import { FontAwesome } from '@expo/vector-icons';

interface resultProps {
  navigation: StackNavigationProp<ParamListBase>;
  route: RouteProp<ParamListBase, 'Data'>;
}

interface UserData {
  gender: number;
  age: number;
  hasHypertension: number;
  hasHeartDisease: number;
  smokingStatus: number;
  bmi: number;
  hba1cLevel: number;
  blood_glucose_level: number;
}

interface PredictionResult {
  predicted_diabetes: string;
  probability_0: number;
  probability_1: number;
  probability: number;
}

const ResultsScreen = ({ navigation, route }: resultProps) => {
  const { gender, age, hasHypertension, hasHeartDisease, smokingStatus, bmi, hba1cLevel, blood_glucose_level } =
    route.params as UserData & { hba1cLevel: number };

  const [predictionResult, setPredictionResult] = useState<PredictionResult | null>(null);
  
  const handleSubmit = () => {
    navigation.navigate('Home');   
}
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
    const result = JSON.parse(predictionResult.result.replace(/'/g, '"'));
    console.log(result)
    setPredictionResult(result);
  };

  return (
    <View style={styles.container}>
      
      {!predictionResult && (
        <View>
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
      )}
      
      {predictionResult && (
        <View>
        <View style={styles.prediction}>
          <Text style={styles.titleprediction}>Resultado da previsão:</Text>
          {predictionResult.predicted_diabetes === '1' ? (
            <Text style={styles.resultText}>De acordo com os cálculos de previsão da nossa inteligência artificial, esses dados indicam uma grande chance de possuir diabetes</Text>
          ) : (
            <Text style={styles.resultText}>De acordo com os cálculos de previsão da nossa inteligência artificial, este usuário não possui grandes riscos de possuir diabetes.</Text>
          )}
        </View>
        <View>
          <View style={styles.graph}>
          <Text style={styles.graphTitle}>
              Grafico de probabilidades
          </Text>
          </View>  
          

        <PieChart
          data={[      {name: 'Prediction 0',        population: predictionResult.probability_0 * 100,        color: '#008080',        legendFontColor: '#7F7F7F',        legendFontSize: 15,    },      {        name: 'Prediction 1',        population: predictionResult.probability_1 * 100,        color: '#C71585',        legendFontColor: '#7F7F7F',        legendFontSize: 15,      },    ]}
          width={300}
          height={200}
          chartConfig={{
            backgroundColor: '#e2e2e2',
            backgroundGradientFrom: '#fb8c00',
            backgroundGradientTo: '#ffa726',
            decimalPlaces: 2,
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
          accessor={'population'}
          backgroundColor={'transparent'}
          paddingLeft={'15'}
          absolute
        />
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={{height: 10, width: 10, borderRadius: 5, backgroundColor: '#008080', marginRight: 10}} />
          <Text>Probabilidade de possuir diabetes</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
          <View style={{height: 10, width: 10, borderRadius: 5, backgroundColor: '#C71585', marginRight: 10}} />
          <Text>Probabilidade de não possuir diabetes</Text>
        </View>
        <View>
        <LottieView
            source={require('../../assets/animations/graph/graph.json')}
            autoPlay
            loop
            style={{ width: 300, marginLeft:10}}
          />
          </View>
          <TouchableOpacity style={styles.nextButton} onPress={handleSubmit}>
            <Text style={styles.nextButtonText}>Voltar a tela Inicial</Text>
          </TouchableOpacity>
      </View>
    </View>
      )}
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
  resultText:{
    fontSize: 18,
  },
  prediction:{
    fontSize:18,
    marginTop:20,
    marginBottom:20
  },
  titleprediction:{
    fontSize:24,
    fontWeight:'bold',
    marginBottom:10
  },
  graphTitle:{
    fontSize: 20,
    fontWeight:'bold'
  },
  graph:{
    alignItems:'center',
    justifyContent:'space-around',
    
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
    borderRadius: 10, 
    padding: 10, 
  },
  next: {
    width:'100%',
    alignItems:'center',
  },
  nextButtonText: {
    color: 'white', 
    fontSize: 16, 
    fontWeight: 'bold', 
    textAlign: 'center', 
  },

});

export default ResultsScreen;
