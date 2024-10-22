import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

export default function SeekHelp({ navigation }: { navigation: any }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Resource List')}
      >
        <Text style={styles.buttonText}>California</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Resource List')}
      >
        <Text style={styles.buttonText}>National</Text>
      </TouchableOpacity>
    </View>
  );
}
