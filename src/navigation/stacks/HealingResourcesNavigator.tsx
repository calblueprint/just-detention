import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HealingStackParams } from 'src/navigation/types';
import HealingResources from '@/screens/HealingResources';
import HealingCatalogue from '@/screens/HealingResources/HealingCatalogue';
import HopeHealingGuide from '@/screens/HealingResources/HopeHealingGuide/';

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
      <HealingStack.Screen
        name="HopeForHealingGuide"
        component={HopeHealingGuide}
      />
    </HealingStack.Navigator>
  );
}
