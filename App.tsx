import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainTabNav from '@/navigation/BottomTabNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <MainTabNav />
    </NavigationContainer>
  );
}
