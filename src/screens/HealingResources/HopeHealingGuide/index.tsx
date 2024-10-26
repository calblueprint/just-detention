import * as React from 'react';
import { Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

type RootDrawerParamList = {
  ChapterOne: undefined;
  ChapterTwo: undefined;
  ChapterThree: undefined;
  SectionOne: undefined;
  SectionTwo: undefined;
  Resource: undefined;
};

function ChapterOne() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Welcome to the Hope for Healing Guide!</Text>
    </View>
  );
}

function ChapterTwo() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Chapter 2</Text>
    </View>
  );
}

function ChapterThree() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Chapter 3</Text>
    </View>
  );
}

const Drawer = createDrawerNavigator<RootDrawerParamList>();

const Stack = createNativeStackNavigator();

function ChapterOneNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ChapterOneHome"
        component={ChapterOne}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="SectionOne" component={SectionOne} />
      <Stack.Screen name="SectionTwo" component={SectionTwo} />
    </Stack.Navigator>
  );
}

function SectionOne() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Subsection 1 of Chapter 1</Text>
    </View>
  );
}

function SectionTwo() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Subsection 2 of Chapter 1</Text>
    </View>
  );
}

export default function HopeHealingGuide() {
  return (
    <Drawer.Navigator
      initialRouteName="ChapterOne"
      screenOptions={{
        drawerType: 'front',
        overlayColor: 'transparent',
        headerTitle: '',
      }}
    >
      <Drawer.Screen
        name="ChapterOne"
        component={ChapterOne}
        options={{ drawerLabel: 'Chapter 1' }}
      />
      <Drawer.Screen
        name="SectionOne"
        component={SectionOne}
        options={{ drawerLabel: 'Subsection 1' }}
      />
      <Drawer.Screen
        name="SectionTwo"
        component={SectionTwo}
        options={{ drawerLabel: 'Subsection 2' }}
      />
      <Drawer.Screen
        name="ChapterTwo"
        component={ChapterTwo}
        options={{ drawerLabel: 'Chapter 2' }}
      />
      <Drawer.Screen
        name="ChapterThree"
        component={ChapterThree}
        options={{ drawerLabel: 'Chapter 3' }}
      />
    </Drawer.Navigator>
  );
}
