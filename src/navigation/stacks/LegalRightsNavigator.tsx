import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import index from '../../screens/LegalRights/LegalRightsScreen';
import { LegalStackParams } from '../types';

const LegalStack = createNativeStackNavigator<LegalStackParams>();

export default function LegalRightsNavigator() {
  return (
    <LegalStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <LegalStack.Screen name="Name" component={index} />
    </LegalStack.Navigator>
  );
}
