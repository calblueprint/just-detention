import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from 'src/screens/Home/';
import HealingResourcesNavigator from './stacks/HealingResourcesNavigator';
import LegalRightsNavigator from './stacks/LegalRightsNavigator';
import SeekHelpNavigator from './stacks/SeekHelpNavigator';
import { BottomTabParams } from './types';

const initialRouteName = 'Healing';

const Tab = createBottomTabNavigator<BottomTabParams>();

export default function NavigationBar() {
  return (
    <Tab.Navigator
      initialRouteName={initialRouteName}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
        }}
      />
      <Tab.Screen
        name="Healing"
        component={HealingResourcesNavigator}
        options={{
          tabBarLabel: 'Healing Resources',
        }}
      />
      <Tab.Screen
        name="Legal"
        component={LegalRightsNavigator}
        options={{
          tabBarLabel: 'Legal Rights',
        }}
      />
      <Tab.Screen
        name="Seek"
        component={SeekHelpNavigator}
        options={{
          tabBarLabel: 'Seek Help',
        }}
      />
    </Tab.Navigator>
  );
}
