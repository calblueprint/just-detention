import { Text, TouchableOpacity, View } from 'react-native';
import { HealingScreenProps } from '@/navigation/types';
import styles from './styles';

export default function HealingResources({
  navigation,
}: HealingScreenProps<'HealingResources'>) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.pagebutton}
        onPress={() => navigation.navigate('HopeForHealingGuide')}
      >
        <Text style={styles.buttonText}>Hope for Healing Guide</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.pagebutton}
        onPress={() => navigation.navigate('HealingCatalogue')}
      >
        <Text style={styles.buttonText}>Resources Catalogue</Text>
      </TouchableOpacity>
    </View>
  );
}
