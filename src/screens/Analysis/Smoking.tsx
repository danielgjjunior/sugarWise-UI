import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Slider,
  TouchableOpacity,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import LottieView from 'lottie-react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { ParamListBase } from '@react-navigation/routers';

interface ageProps {
  navigation: StackNavigationProp<ParamListBase>;
  route: RouteProp<ParamListBase, 'Smoking'>;
}

interface userData {
  gender: number;
  age: number;
  hasHypertension: number;
  hasHeartDisease: number;
}
const Smoking = ({ navigation, route }: ageProps) => {
  const { gender, age, hasHypertension, hasHeartDisease } =
    route.params as userData;
  const [smokingStatus, setSmokingStatus] = useState(6);

  const handleOptionSelection = (option: number) => {
    setSmokingStatus(option);
   
  };

  const handleSubmit = () => {
    if (smokingStatus === 6) {
      alert('Por favor, selecione uma opção');
      return;
    }
    navigation.navigate('Bmi', {
      age: age,
      gender: gender,
      hasHypertension: hasHypertension,
      hasHeartDisease: hasHeartDisease,
      smokingStatus: smokingStatus,
    });
  };
    return (
    <View style={styles.container}>
      <View style={styles.progress}>
        <View style={[styles.bullet, styles.bulletFilled]} />
        <View style={[styles.bullet, styles.bulletFilled]} />
        <View style={[styles.bullet, styles.bulletFilled]} />
        <View style={[styles.bullet, styles.bulletFilled]} />
        <View style={[styles.bullet, styles.bulletUnfilled]} />
        <View style={[styles.bullet, styles.bulletUnfilled]} />
        <View style={[styles.bullet, styles.bulletUnfilled]} />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.text}>Histórico de Fumante</Text>
      </View>
        <View style={styles.content}>
        <View style={styles.genderImagesContainer}>
          <LottieView
            source={require('../../assets/animations/smoking/cigarrete.json')}
            autoPlay
            loop
            style={{ width: 200 }}
          />
          </View>
        <View style={styles.optionContainer}>
            <View style={{marginBottom:10}}>
            <Text style={styles.text}>
                Escolha uma opção: 
            </Text>
            </View>

            <TouchableOpacity
              style={[
                styles.optionButton,
                smokingStatus === 0 && styles.optionSelected,
              ]}
              onPress={() => handleOptionSelection(0)}
            >
              <Text style={styles.optionText}>Nunca fumei</Text>
            </TouchableOpacity>

              <TouchableOpacity
              style={[
                styles.optionButton,
                smokingStatus === 1 && styles.optionSelected,
              ]}
              onPress={() => handleOptionSelection(1)}
            >
              <Text style={styles.optionText}>Fumo atualmente</Text>
            </TouchableOpacity>

            <TouchableOpacity
            style={[
              styles.optionButton,
              smokingStatus === 2 && styles.optionSelected,
            ]}
            onPress={() => handleOptionSelection(2)}
          >
            <Text style={styles.optionText}>Já fumei algumas vezes</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.optionButton,
              smokingStatus === 3 && styles.optionSelected,
            ]}
            onPress={() => handleOptionSelection(3)}
          >
            <Text style={styles.optionText}>Fumava muito tempo atrás, mas não fumo mais</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.optionButton,
              smokingStatus === 4 && styles.optionSelected,
            ]}
            onPress={() => handleOptionSelection(4)}
          >
            <Text style={styles.optionText}>Não desejo responder</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.optionButton,
              smokingStatus === 5 && styles.optionSelected,
            ]}
            onPress={() => handleOptionSelection(5)}
          >
            <Text style={styles.optionText}>Já fumei mas parei recentemente</Text>
          </TouchableOpacity>


        </View>
        
        
            <View style={styles.next}>
                <TouchableOpacity style={styles.nextButton}>
                    <FontAwesome name="arrow-right" size={60
                    } color="#FFFFFF" onPress={handleSubmit}/>
                </TouchableOpacity>
            </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
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
        marginBottom: 30,
      },
      text: {
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 24,
        color: '#404040',
      },
      content: {
        flex: 1,
        alignItems: 'center',
        
      },

      genderImagesContainer:{
        marginLeft:20,
        marginBottom:10,
        flexDirection: 'row',
        justifyContent:'space-around',
        width:'80%',
        height:200,
      },

      optionContainer: {
        marginBottom: 20,
        width:'90%'
        },
        optionButton: {
        backgroundColor: '#f5f5f5',
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
        },
        optionSelected: {
        backgroundColor: '#6CC3ED',
        },
        optionText: {
        fontSize: 16,
        color: '#333',
        },
      next: {
        width:'100%',
        height:100,
        alignItems:'center',
      },
      nextButton: {
        backgroundColor: '#008BFF',
        borderRadius: 20,
        padding: 10,
      },
    });

export default Smoking;
