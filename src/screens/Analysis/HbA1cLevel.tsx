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
  route: RouteProp<ParamListBase, 'HbA1cLevel'>;
}

interface UserData {
  gender: number;
  age: number;
  hasHypertension: number;
  hasHeartDisease: number;
  smokingStatus: number;
  bmi: number;
}

const HbA1cLevel = ({ navigation, route }: DiseasesProps) => {
  const { gender, age, hasHypertension, hasHeartDisease, smokingStatus, bmi } =
    route.params as UserData;
  const [hba1cLevel, setHba1cLevel] = useState(0);

  const handleNext = () => {
    navigation.navigate('BloodGlucoseLevel', {
      gender,
      age,
      hasHypertension,
      hasHeartDisease,
      smokingStatus,
      bmi,
      hba1cLevel,
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
        <View style={[styles.bullet, styles.bulletUnfilled]} />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.text}>Nível de HbA1c</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>
          Informe o seu nível de HbA1c (opcional)
        </Text>
        <Text style={styles.subtitle}>
          Preencha somente se tiver feito o exame de hemoglobina glicada 
        </Text>
        <View style={styles.ImageContainer}>
        <LottieView
            source={require('../../assets/animations/hbac/glicose.json')}
            autoPlay
            loop
            style={{ width: 200 }}
          />
        </View>
      </View>
      <View style={styles.sliderContainer}>
        <Text style={styles.label}>Nível de HbA1c:</Text>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={10}
          step={0.1}
          value={hba1cLevel}
          onValueChange={setHba1cLevel}
        />
        <Text style={styles.sliderValue}>{hba1cLevel.toFixed(1)}</Text>
      </View>
      <View style={styles.next}>
        <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
          <FontAwesome name="arrow-right" size={60} color="#FFFFFF" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
        container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        padding: 20,
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
    sliderContainer: {
        marginVertical: 20,
      },
      slider: {
        width: '100%',
        height: 40,
      },
      sliderValue: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 10,
      },
        titleContainer: {
        alignItems: 'center',
        marginBottom: 20,
        },
        text: {
        fontSize: 24,
        fontWeight: 'bold',
        },
        subtitle: {
            fontSize: 18,
            marginBottom:20
            },
        content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        },
        title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        },
        ImageContainer: {
        width: 200,
        height: 200,
        backgroundColor: '#DADADA',
        borderRadius: 100,
        marginBottom: 20,
        },
        inputContainer: {
        marginBottom: 20,
        },
        label: {
        fontSize: 18,
        marginBottom: 10,
        },
        input: {
        backgroundColor: '#F5F5F5',
        padding: 10,
        borderRadius: 5,
        fontSize: 16,
        },
        next: {
        alignItems: 'flex-end',
        },
        nextButton: {
        backgroundColor: '#1DDCAF',
        width: 80,
        height: 80,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
        },
        });

export default HbA1cLevel;