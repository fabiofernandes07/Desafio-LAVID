import React from 'react';
import { View, Text,StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderStyleInterpolators } from '@react-navigation/stack';

import Main from './src/pages/Main';
import Profile from './src/pages/Profile';
import Conta from './src/pages/Conta';
import reConta from './src/pages/reConta';



const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name="Main" 
        component={Main}
        options={{
          title: 'Login',
          headerStyle: {
            backgroundColor: '#483D8B',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight:'bold',
            
          }
        }} 
        />
        <Stack.Screen 
        name="Home" 
        component={Profile}
        options={{
          title: 'Home',
          headerStyle: {
            backgroundColor: '#483D8B',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight:'bold',
            
          }
        }}
        />
        <Stack.Screen 
        name="Cadastro" 
        component={Conta}
        options={{
          title: 'Cadastro',
          headerStyle: {
            backgroundColor: '#483D8B',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight:'bold',
            
          }
        }}
        />

        <Stack.Screen 
        name="Senha" 
        component={reConta}
        options={{
          title: 'Mudar a Senha',
          headerStyle: {
            backgroundColor: '#483D8B',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight:'bold',
            
          }
        }}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;