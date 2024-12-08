import { Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import BackArrow from 'src/assets/images/back-arrow.svg';
import styles from './styles';

interface BackButtonProps {
  label: string; // The string prop for the button label
}

export default function BackButton({ label }: BackButtonProps) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={styles.backContainer}
    >
      <BackArrow />
      <Text style={styles.backText}>{label}</Text>
    </TouchableOpacity>
  );
}
