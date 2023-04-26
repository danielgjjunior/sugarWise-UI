import { LogBox } from 'react-native';
import WelcomeScreen from './src/screens/WelcomeScreen/WelcomeScreen';
import Home from './src/screens/Home/home';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Gender from './src/screens/Analysis/Gender';
import Age from './src/screens/Analysis/Age';
import Diseases from './src/screens/Analysis/Diseases';
import Smoking from './src/screens/Analysis/Smoking';
import Bmi from './src/screens/Analysis/Bmi';
import HbA1cLevel from './src/screens/Analysis/HbA1cLevel';
import BloodGlucoseLevel from './src/screens/Analysis/BloodGlucoseLevel';
import Data from './src/screens/Analysis/Data';


LogBox.ignoreAllLogs(true);

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
        <Stack.Screen name="Gender" component={Gender} options={{ headerShown: false }}/>
        <Stack.Screen name="Age" component={Age} options={{ headerShown: false }}/>
        <Stack.Screen name="Diseases" component={Diseases} options={{ headerShown: false }}/>
        <Stack.Screen name="Smoking" component={Smoking} options={{ headerShown: false }}/>
        <Stack.Screen name="Bmi" component={Bmi} options={{ headerShown: false }}/>
        <Stack.Screen name="HbA1cLevel" component={HbA1cLevel} options={{ headerShown: false }}/>
        <Stack.Screen name="BloodGlucoseLevel" component={BloodGlucoseLevel} options={{ headerShown: false }}/>
        <Stack.Screen name="Data" component={Data} options={{ headerShown: false }}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
