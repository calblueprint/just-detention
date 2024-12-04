import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from 'src/screens/Home/';
import {colors} from 'src/styles/colors';
import HealingResourcesNavigator from './stacks/HealingResourcesNavigator';
import LegalRightsNavigator from './stacks/LegalRightsNavigator';
import SeekHelpNavigator from './stacks/SeekHelpNavigator';
import { BottomTabParams } from './types';
import OrangeHomeIcon from 'src/assets/images/home-orange.svg';
import GreyHomeIcon from 'src/assets/images/home-grey.svg';
import GreyHealingResourcesIcon from 'src/assets/images/healing-resources-grey.svg';
import OrangeHealingResourcesIcon from 'src/assets/images/healing-resources-orange.svg';
import OrangePREAIcon from 'src/assets/images/prea-orange.svg';
import GreyPREAIcon from 'src/assets/images/prea-grey.svg';
import OrangeHelpResourcesIcon from 'src/assets/images/help-resources-orange.svg';
import GreyHelpResourcesIcon from 'src/assets/images/help-resources-grey.svg';


const initialRouteName = 'Healing';

const Tab = createBottomTabNavigator<BottomTabParams>();

export default function NavigationBar() {
  return (
    
    <Tab.Navigator
      initialRouteName={initialRouteName}
      screenOptions={{
        tabBarActiveTintColor: colors.orange, 
        tabBarInactiveTintColor: colors.grey, 
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ focused }) =>
            focused ? <OrangeHomeIcon/> : <GreyHomeIcon />,
          
        }}
      />
      <Tab.Screen
        name="Healing"
        component={HealingResourcesNavigator}
        options={{
          tabBarLabel: 'Healing Resources',
           tabBarIcon: ({ focused }) =>
            focused ? <OrangeHealingResourcesIcon/> : <GreyHealingResourcesIcon/>,
        }}
      />
      <Tab.Screen
        name="Legal"
        component={LegalRightsNavigator}
        options={{
          tabBarLabel: 'Legal Rights',
          tabBarIcon: ({ focused }) =>
            focused ? <OrangePREAIcon/> : <GreyPREAIcon />,
        }}
      />
      <Tab.Screen
        name="Seek"
        component={SeekHelpNavigator}
        options={{
          tabBarLabel: 'Seek Help',
          tabBarIcon: ({ focused }) =>
          focused ? <OrangeHelpResourcesIcon/> : <GreyHelpResourcesIcon/>,
        }}
      />
    </Tab.Navigator>
    
  );
  
}
