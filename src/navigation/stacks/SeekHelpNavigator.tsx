import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SeekHelp from '@/screens/SeekHelp';
import ResourceList from '@/screens/SeekHelp/ResourceList';
import { SeekHelpParams } from '../types';

const SeekHelpStack = createNativeStackNavigator<SeekHelpParams>();

export default function SeekHelpNavigator() {
  return (
    <SeekHelpStack.Navigator>
      <SeekHelpStack.Screen name="SeekHelp" component={SeekHelp} />
      <SeekHelpStack.Screen name="ResourceList" component={ResourceList} />
    </SeekHelpStack.Navigator>
  );
}
