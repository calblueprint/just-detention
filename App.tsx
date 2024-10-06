import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
<<<<<<< HEAD
<<<<<<< HEAD
import NavigationBar from '@/navigation/BottomTabNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <NavigationBar />
=======
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HealingResources from '@/screens/HealingResources';
import HealingCatalogue from '@/screens/HealingResources/HealingCatalogue';
import HFHGuide from '@/screens/HealingResources/HFHGuide';
=======
import HealingResources from '@/HealingResources';
>>>>>>> ba36e02 (navigation)
import Home from '@/screens/Home';
import LegalRights from '@/screens/LegalRights';
import SeekHelp from '@/screens/SeekHelp';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer independent={true}>
<<<<<<< HEAD
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Healing Resources" component={HealingResources} />
        <Stack.Screen name="Legal Rights" component={LegalRights} />
        <Stack.Screen name="Seek Help" component={SeekHelp} />
        <Stack.Screen
          name="Themed Healing Resources"
          component={HealingCatalogue}
        />
        <Stack.Screen name="Hope for Healing Guide" component={HFHGuide} />
        <Stack.Screen name="Resource List" component={resourceList} />
        <Stack.Screen name="Video Page" component={VideoPage} />
      </Stack.Navigator>
>>>>>>> 0181d8b (8-healing-resource-pages (#19))
=======
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Legal Rights" component={LegalRights} />
        <Tab.Screen name="Healing Resources" component={HealingResources} />
        <Tab.Screen name="Seek Help" component={SeekHelp} />
      </Tab.Navigator>
>>>>>>> ba36e02 (navigation)
    </NavigationContainer>
  );
}
