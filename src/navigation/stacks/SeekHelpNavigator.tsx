import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import index from '../../screens/SeekHelp/index';
import { SeekHelpParams } from '../types';

const SeekHelpStack = createNativeStackNavigator<SeekHelpParams>();

export default function SeekHelpNavigator() {
  return (
    <SeekHelpStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <SeekHelpStack.Screen name="Name" component={index} />
    </SeekHelpStack.Navigator>
  );
}
