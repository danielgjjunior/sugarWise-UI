import React, { useState } from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import LottieView from 'lottie-react-native';

interface genderProps {
    navigation: any;
  }


const Gender = ({ navigation }: genderProps) => {
  const [gender, setGender] = useState(3); // adicionando o estado para armazenar o gênero selecionado
  const handleSubmit = () => {
    console.log(gender)
    if (gender === 3) {
      alert('Por favor, selecione um gênero!');
      return;
    }
    navigation.navigate('Age', gender)
  };
  

  return (
    <View style={styles.container}>
      <View style={styles.progress}>
        <View style={[styles.bullet, styles.bulletFilled]} />
        <View style={[styles.bullet, styles.bulletUnfilled]} />
        <View style={[styles.bullet, styles.bulletUnfilled]} />
        <View style={[styles.bullet, styles.bulletUnfilled]} />
        <View style={[styles.bullet, styles.bulletUnfilled]} />
        <View style={[styles.bullet, styles.bulletUnfilled]} />
        <View style={[styles.bullet, styles.bulletUnfilled]} />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.text}>Seleção de Gênero</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.genderImagesContainer}>
          <LottieView
            source={require('../../assets/animations/gender/female.json')}
            autoPlay
            loop
            style={{ width: 200 }}
          />
          <LottieView
            source={require('../../assets/animations/gender/male.json')}
            autoPlay
            loop
            style={{ width: 200 }}
          />
        </View>
        <View style={styles.genderContainer}>
          <TouchableOpacity
            style={[
              styles.genderButton,
              gender === 1 && styles.genderButtonSelectedFemale, // estilo condicional para o botão female
            ]}
            onPress={() => setGender(1)}
          >
            <FontAwesome name="female" size={36} color={gender === 0 ? '#FFF' : '#8F8F8F'} />
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.genderButton,
              gender === 0 && styles.genderButtonSelected, // estilo condicional para o botão male
            ]}
            onPress={() => setGender(0)}
          >
            <FontAwesome name="male" size={36} color={gender === 0 ? '#FFF' : '#8F8F8F'} />
          </TouchableOpacity>
        </View>
        <View style={styles.next}>
          <TouchableOpacity style={styles.nextButton}>
            <FontAwesome name="arrow-right" size={50} color="#FFFFFF" onPress={handleSubmit}/>
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
    next: {
      width:'100%',
      alignItems:'center',
    },
    gender: {
      width:400,
      height:20
    },
    genderImagesContainer:{
      flexDirection: 'row',
      justifyContent:'space-around',
      width:'100%',
      height:150,
    },
    nextButton: {
      backgroundColor: '#008BFF',
      borderRadius: 24,
      padding: 8,
    },
    content: {
      flex: 1,
      paddingHorizontal: 16,
      justifyContent: 'center',
      flexGrow: 1,
    },
    genderContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginVertical: 16,
    },
    genderButton: {
      backgroundColor: '#F3F3F3',
      borderRadius: 10,
      paddingVertical: 16,
      paddingHorizontal: 32,
      alignItems: 'center',
      justifyContent: 'center',
    },
    genderButtonSelected: {
        backgroundColor: 'blue',
        borderRadius: 10,
        paddingVertical: 16,
        paddingHorizontal: 32,
        alignItems: 'center',
        justifyContent: 'center',
      },
      genderButtonSelectedFemale: {
        backgroundColor: '#FF1493',
        borderRadius: 10,
        paddingVertical: 16,
        paddingHorizontal: 32,
        alignItems: 'center',
        justifyContent: 'center',
      },
      
    genderImage: {
      width: 96,
      height: 96,
      marginBottom: 16,
    },
  });
  
export default Gender;
