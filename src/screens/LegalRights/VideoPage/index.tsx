import { Button, Image, Text, View } from 'react-native';
// import PreaVideo from '@/assets/videos/da_link.mp4';
import Video from 'react-native-video';
import { styles } from './styles';

export default function VideoPage() {
  return (
    <>
      <Text>this is video yup</Text>
      {/* <Video
        source={require(PreaVideo)}
        style={styles.video}
        controls={true} // Show playback controls
        resizeMode="contain" // Adjusts how the video scales within the player
        paused={false} // Autoplay video
      /> */}
    </>
  );
}
