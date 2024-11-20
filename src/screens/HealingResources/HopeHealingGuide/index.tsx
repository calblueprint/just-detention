import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import styles from './styles';

type RootDrawerParamList = {
  Welcome: undefined;
  ChapterTwo: undefined;
  ChapterThree: undefined;
  WelcomeSectionOne: undefined;
  WelcomeSectionTwo: undefined;
  SectionOne: undefined;
  SectionTwo: undefined;
  Resource: undefined;
};

function Welcome() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Main Welcome Screen</Text>
    </View>
  );
}

function ChapterTwo() {
  return (
    <View style={styles.drawerItem}>
      <Text>Chapter 2</Text>
    </View>
  );
}

function ChapterThree() {
  return (
    <View style={styles.drawerItem}>
      <Text>Chapter 3</Text>
    </View>
  );
}

function WelcomeSectionOne() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>A Few Words on Language</Text>
    </View>
  );
}

function WelcomeSectionTwo() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>How to Use This Booklet</Text>
    </View>
  );
}

function SectionOne() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Section One of Chapter One</Text>
    </View>
  );
}

function SectionTwo() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Section Two of Chapter One</Text>
    </View>
  );
}

const Drawer = createDrawerNavigator<RootDrawerParamList>();

export default function HopeHealingGuide() {
  const [isWelcomeOpen, setIsWelcomeOpen] = useState(true);
  const [isChapterOneOpen, setIsChapterOneOpen] = useState(false);

  return (
    <Drawer.Navigator
      initialRouteName="Welcome"
      screenOptions={{
        drawerType: 'front',
        overlayColor: 'transparent',
        headerTitle: '',
      }}
    >
      <Drawer.Screen
        name="Welcome"
        options={{
          drawerLabel: () => (
            <TouchableOpacity onPress={() => setIsWelcomeOpen(!isWelcomeOpen)}>
              <Text style={isWelcomeOpen ? styles.drawerLabelText : null}>
                Welcome
              </Text>
            </TouchableOpacity>
          ),
        }}
        component={Welcome}
      />
      {isWelcomeOpen && (
        <>
          <Drawer.Screen
            name="WelcomeSectionOne"
            options={{
              drawerLabel: () => (
                <Text style={styles.subsectionLabelText}>
                  A Few Words on Language
                </Text>
              ),
            }}
            component={WelcomeSectionOne}
          />
          <Drawer.Screen
            name="WelcomeSectionTwo"
            component={WelcomeSectionTwo}
            options={{
              drawerLabel: () => (
                <Text style={styles.subsectionLabelText}>
                  How to Use This Booklet
                </Text>
              ),
            }}
          />
        </>
      )}
      <Drawer.Screen
        name="ChapterTwo"
        component={ChapterTwo}
        options={{
          drawerLabel: () => (
            <TouchableOpacity
              onPress={() => setIsChapterOneOpen(!isChapterOneOpen)}
            >
              <Text style={isChapterOneOpen ? styles.drawerLabelText : null}>
                Chapter 2
              </Text>
            </TouchableOpacity>
          ),
        }}
      />
      {isChapterOneOpen && (
        <>
          <Drawer.Screen
            name="SectionOne"
            component={SectionOne}
            options={{
              drawerLabel: () => (
                <Text style={styles.subsectionLabelText}>Section One</Text>
              ),
            }}
          />
          <Drawer.Screen
            name="SectionTwo"
            component={SectionTwo}
            options={{
              drawerLabel: () => (
                <Text style={styles.subsectionLabelText}>Section Two</Text>
              ),
            }}
          />
        </>
      )}
      <Drawer.Screen
        name="ChapterThree"
        component={ChapterThree}
        options={{ drawerLabel: 'Chapter 3' }}
      />
    </Drawer.Navigator>
  );
}
