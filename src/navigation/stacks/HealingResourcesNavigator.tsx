import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import index from '../../screens/HealingResources/index';
import { HealingStackParams } from '../types';

const HealingStack = createNativeStackNavigator<HealingStackParams>();

export default function HealingResourcesNavigator() {
  return (
    <HealingStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <HealingStack.Screen name="Name" component={index} />
    </HealingStack.Navigator>
  );
}
