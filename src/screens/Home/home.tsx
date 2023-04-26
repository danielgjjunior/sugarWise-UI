import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import { Image } from 'react-native';

//icons 
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

import { faAddressBook, faSquarePlus } from '@fortawesome/free-solid-svg-icons';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';

interface HomeProps {
  navigation: any;
}

const images = [
  require('../../assets/img/carousel/img1.png'),
  require('../../assets/img/carousel/img2.png'),
  require('../../assets/img/carousel/img3.png'),
];


const HomeScreen = ({ navigation }: HomeProps) => {
  
  
  const handleSubmit = () => {
    navigation.navigate('Gender');
 
  };
  

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.userName}>Bem Vindo</Text>
          <View style={styles.logoContainer}>
          <Image
            source={require('../../assets/img/logo/SugarWISE.png')}
            style={styles.logo}
          />
          </View>
        </View>
        <View style={styles.carouselContainer}>
            <Carousel
            data={images}
            renderItem={({ item }) => (
              <Image source={item} style={styles.carouselItem} key={item} />
            )}
            sliderWidth={400}
            itemWidth={360}
            loop
            autoplay
            autoplayInterval={5000}
            inactiveSlideScale={0.8}
            inactiveSlideOpacity={0.7}
            layout={'default'}
          />
        </View>
        <View style={styles.footer}>
          <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handleSubmit}>
            <View style={styles.button} >
            <FontAwesomeIcon icon={faSquarePlus} size={40} color="#289" />
                <Text style={styles.buttonText} onPress={handleSubmit}>Nova Análise</Text>
            </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleSubmit}>
            <View style={styles.button}>
            <FontAwesomeIcon icon={faQuestion} size={40} color="#289" />
                <Text style={styles.buttonText}>Sobre o app</Text>
            </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleSubmit}>
            <View style={styles.button}>
            <FontAwesomeIcon icon={faAddressBook} size={40} color="#289"/>
            <Text style={styles.buttonText}>Contato</Text>
            </View>
            </TouchableOpacity>
            
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    
    flex: 1,
    backgroundColor:'#FAF0E6',
  },
  container: {
    flex: 1,

  },
  header: {
    fontFamily:'Kodchasan',
    height: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderBottomColor: '#ddd',
  },
  userName: {
    fontFamily:'Kodchasan',
    fontWeight: 'bold',
    fontSize: 20,
  },
  logoContainer: {
    width: 200,
    height: 50,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  logo: {
    width:150,
    height:50
  
  },
  carouselContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:10,

  },
  carouselItem: {
    width: '100%',
    height: '100%',
    borderRadius: 40,
    backgroundColor: '#ddd',
    resizeMode:'contain'
  },
  footer:{
    
    width:'100%',
    height: 180,
    justifyContent: 'space-around',
    alignItems: 'center',
   

  },

  buttonContainer: {
    width: '90%',
    height: '80%',
    borderRadius:30,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor:'white',
    padding:15,    
  },
  button: {
    flexDirection:'column',
    width:90,
    height:90,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#F8F8FF',
    borderRadius:15,
    padding:3,

  },
  buttonText: {
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
