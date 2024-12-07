import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LegalRights from '@/screens/LegalRights';
import VideoPage from '@/screens/LegalRights/VideoPage';
import { LegalStackParams } from '../types';

const LegalStack = createNativeStackNavigator<LegalStackParams>();

export default function LegalRightsNavigator() {
  return (
    <LegalStack.Navigator>
      <LegalStack.Screen 
      name="LegalRights" 
      component={LegalRights}
      
      />
      
      <LegalStack.Screen 
      name="VideoPage" 
      component={VideoPage} 
      
      />
    </LegalStack.Navigator>
  );
}
