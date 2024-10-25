import { Pressable, ScrollView, Text, View } from 'react-native';
import { Video } from 'expo-av';
import { styles } from './styles';

export default function VideoPage() {
  return (
    <ScrollView style={styles.container}>
      <Video
        source={require('@/assets/videos/da_link.mp4')}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        shouldPlay
        isLooping
        style={styles.video}
      />

      <View style={styles.buttonContainer}>
        <Pressable style={[styles.captionButtons]}>
          <Text style={styles.buttonText}>{'<   Previous Section'}</Text>
        </Pressable>
        <Pressable style={[styles.captionButtons]}>
          <Text style={styles.buttonText}>{'Next Section   >'}</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}
