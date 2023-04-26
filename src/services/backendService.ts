import axios from 'axios';

interface PredictionData {
  gender: number;
  age: number;
  hasHypertension: number;
  hasHeartDisease: number;
  smokingStatus: number;
  bmi: number;
  blood_glucose_level: number;
  hba1cLevel: number;
}

const BACKEND_URL: string = 'https://fe8c-177-85-7-252.ngrok-free.app'; // Endereço do seu backend

export const sendPredictionRequest = async (data: PredictionData) => {
  try {
    const response = await axios.post(`${BACKEND_URL}`, {
      gender: data.gender,
      age: data.age,
      hypertension: data.hasHypertension,
      heart_disease: data.hasHeartDisease,
      smoking_history: data.smokingStatus,
      bmi: data.bmi,
      blood_glucose_level: data.blood_glucose_level,
      HbA1c_level: data.hba1cLevel,
    });
    console.log(response.data)
    return response.data;
    
  } catch (error) {
    console.log(error);
    throw new Error('Erro ao enviar requisição para o backend.');
  }
};
