import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import { store } from './src/store';
import Icon from 'react-native-vector-icons/FontAwesome';

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
          <Icon name="home" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen 
      name="Calendar" 
      component={Calendar}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Icon name="calendar" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen 
      name="Community" 
      component={Community}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Icon name="users" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen 
      name="AIBitacora" 
      component={AIBitacora}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Icon name="robot" color={color} size={size} />
        ),
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
            options={{ headerShown: false }}
          />
          <Stack.Screen name="PetProfile" component={PetProfile} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;