import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HealingResources from '@/HealingResources';
import Home from '@/screens/Home';
import LegalRights from '@/screens/LegalRights';
import SeekHelp from '@/screens/SeekHelp';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Legal Rights" component={LegalRights} />
        <Tab.Screen name="Healing Resources" component={HealingResources} />
        <Tab.Screen name="Seek Help" component={SeekHelp} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
