import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';

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
      <Text>Content of Chapter 1</Text>
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

const Drawer = createDrawerNavigator<RootDrawerParamList>();

export default function HopeHealingGuide() {
  const [isChapterOneOpen, setIsChapterOneOpen] = useState(false);

  return (
    <Drawer.Navigator
      initialRouteName="SectionOne"
      screenOptions={{
        drawerType: 'front',
        overlayColor: 'transparent',
        headerTitle: '',
      }}
    >
      <Drawer.Screen
        name="ChapterOne"
        options={{
          drawerLabel: () => (
            <TouchableOpacity
              onPress={() => setIsChapterOneOpen(!isChapterOneOpen)}
            >
              <Text style={styles.drawerLabelText}>Chapter 1</Text>
            </TouchableOpacity>
          ),
        }}
        component={SectionOne}
      />
      {isChapterOneOpen && (
        <>
          <Drawer.Screen
            name="SectionOne"
            options={{
              drawerLabel: () => (
                <Text style={styles.subsectionLabelText}>Subsection 1</Text>
              ),
            }}
            component={SectionOne}
          />
          <Drawer.Screen
            name="SectionTwo"
            component={SectionTwo}
            options={{
              drawerLabel: () => (
                <Text style={styles.subsectionLabelText}>Subsection 2</Text>
              ),
            }}
          />
        </>
      )}
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

const styles = StyleSheet.create({
  drawerLabelText: {
    fontWeight: 'bold',
  },
  subsectionLabelText: {
    color: '#666',
    paddingLeft: 30,
  },
});
