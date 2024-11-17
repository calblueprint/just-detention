import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HealingResources from '@/screens/HealingResources';
import Home from '@/screens/Home';
import LegalRights from '@/screens/LegalRights/LegalRightsScreen';
import SeekHelp from '@/screens/SeekHelp';

const Tab = createBottomTabNavigator();

export default function MainTabNav() {
  return (
    <>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Legal Rights" component={LegalRights} />
        <Tab.Screen name="Healing Resources" component={HealingResources} />
        <Tab.Screen name="Seek Help" component={SeekHelp} />
      </Tab.Navigator>
    </>
  );
}
