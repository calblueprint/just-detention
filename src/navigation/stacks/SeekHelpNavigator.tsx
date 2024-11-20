import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SeekHelp from '@/screens/SeekHelp';
import { SeekHelpStackParams } from '../types';

const SeekHelpStack = createNativeStackNavigator<SeekHelpStackParams>();

export default function SeekHelpNavigator() {
  return (
    <SeekHelpStack.Navigator>
      <SeekHelpStack.Screen name="SeekHelp" component={SeekHelp} />
    </SeekHelpStack.Navigator>
  );
}
