import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import { store } from './src/store';
import { MaterialIcons } from '@expo/vector-icons'; // Usamos MaterialIcons

import Dashboard from './src/screens/Dashboard';
import PetProfile from './src/screens/PetProfile';
import Calendar from './src/screens/Calendar';
import Community from './src/screens/Community';
import AIBitacora from './src/screens/AIBitacora';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const MainTabs = () => (
  <Tab.Navigator>
    <Tab.Screen 
      name="Dashboard" 
      component={Dashboard} 
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialIcons name="dashboard" color={color} size={size} />  // Icono de dashboard
        ),
        headerShown: false, // Ocultar header
      }}
    />
    <Tab.Screen 
      name="Calendar" 
      component={Calendar}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialIcons name="calendar-today" color={color} size={size} />  // Icono de calendario
        ),
        headerShown: false, // Ocultar header
      }}
    />
    <Tab.Screen 
      name="Community" 
      component={Community}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialIcons name="people" color={color} size={size} />  // Icono de comunidad
        ),
        headerShown: false, // Ocultar header
      }}
    />
    <Tab.Screen 
      name="AIBitacora" 
      component={AIBitacora}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialIcons name="smart-toy" color={color} size={size} />  // Icono de robot (IA)
        ),
        headerShown: false, // Ocultar header
      }}
    />
  </Tab.Navigator>
);

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name="Main" 
            component={MainTabs} 
            options={{ headerShown: false }}  // Ya está oculto correctamente
          />
          <Stack.Screen 
            name="PetProfile" 
            component={PetProfile}
            options={{ headerShown: false }}  // Asegurarse de que el header esté oculto también aquí
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
