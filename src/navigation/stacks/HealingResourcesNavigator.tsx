import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HealingResources from '@/screens/HealingResources';
import HealingCatalogue from '@/screens/HealingResources/HealingCatalogue';
import HFHGuide from '@/screens/HealingResources/HFHGuide';
import { HealingStackParams } from '../types';

const HealingStack = createNativeStackNavigator<HealingStackParams>();

export default function HealingResourcesNavigator() {
  return (
    <HealingStack.Navigator>
      <HealingStack.Screen
        name="HealingResources"
        component={HealingResources}
      />
      <HealingStack.Screen
        name="HealingCatalogue"
        component={HealingCatalogue}
      />
      <HealingStack.Screen name="HopeForHealingGuide" component={HFHGuide} />
    </HealingStack.Navigator>
  );
}
