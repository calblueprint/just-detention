import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SeekHelpScreenProps } from '@/navigation/types';
import { styles } from './styles';

export default function SeekHelp({
  navigation,
}: SeekHelpScreenProps<'SeekHelp'>) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.pagebutton}
        onPress={() => navigation.navigate('ResourceList')}
      >
        <Text style={styles.buttonText}>California</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.pagebutton}
        onPress={() => navigation.navigate('ResourceList')}
      >
        <Text style={styles.buttonText}>National</Text>
      </TouchableOpacity>
    </View>
  );
}
