import React, { useState } from 'react';
import { View, Text, StyleSheet, Slider, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import LottieView from 'lottie-react-native';

import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { ParamListBase } from '@react-navigation/routers';

interface ageProps {
    navigation: StackNavigationProp<ParamListBase>;
    route: RouteProp<ParamListBase, "Age">;
  }


const Age = ({ navigation, route }: ageProps) => {
    const  gender  = route.params;
  

  const [age, setAge] = useState(18);
  const handleSubmit = () => {
    if (age === null) {
      alert('Por favor, selecione uma idade');
      return;
    }

    navigation.navigate('Diseases', { gender, age });

  };


  return (
    <View style={styles.container}>
      <View style={styles.progress}>
        <View style={[styles.bullet, styles.bulletFilled]} />
        <View style={[styles.bullet, styles.bulletFilled]} />
        <View style={[styles.bullet, styles.bulletUnfilled]} />
        <View style={[styles.bullet, styles.bulletUnfilled]} />
        <View style={[styles.bullet, styles.bulletUnfilled]} />
        <View style={[styles.bullet, styles.bulletUnfilled]} />
        <View style={[styles.bullet, styles.bulletUnfilled]} />
        
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.text}>Idade</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.genderImagesContainer}>
        <LottieView
            source={require('../../assets/animations/age/baby.json')}
            autoPlay
            loop
            style={{ width: 150 }}
          />
          <LottieView
            source={require('../../assets/animations/age/young.json')}
            autoPlay
            loop
            style={{ width: 200, marginLeft:20}}
          />
          <LottieView
            source={require('../../assets/animations/age/man.json')}
            autoPlay
            loop
            style={{ width: 200 }}
          />
        </View>

        <Text style={styles.text}>
            Preencha sua idade:
        </Text>
        <View style={styles.sliderContainer}>
          <Text style={styles.sliderText}>{age}</Text>
          <Slider
            style={styles.slider}
            minimumValue={1}
            maximumValue={120}
            step={1}
            value={age}
            onValueChange={(value) => setAge(value)}
            minimumTrackTintColor="#000000"
            maximumTrackTintColor="#8F8F8F"
            thumbTintColor="#000000"
          />
        </View>
        <View style={styles.iconsContainer}>
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
        flexDirection: 'row',
        justifyContent:'space-around',
        width:'80%',
        height:200,
      },

      sliderContainer: {
        alignItems: 'stretch',
        justifyContent: 'center',
        width: '100%',
        paddingHorizontal: 20,
        
      },
      sliderText: {
        fontFamily: 'Poppins_600SemiBold',
        fontSize: 36,
        color: '#404040',
        marginBottom: 20,
        alignSelf: 'center',
        
      },
      slider: {
        width: '100%',
        height: 40,
        
      },
      iconsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '80%',
        marginTop: 30,
        marginBottom: 50,
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

export default Age;
