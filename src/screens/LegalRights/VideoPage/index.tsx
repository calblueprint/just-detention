import { useEffect, useState } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { Video } from 'expo-av';
import supabase from '@/supabase/createClient';
import { styles } from './styles';

export default function VideoPage(testProp: any) {
  const [preaData, setPreaData] = useState([
    {
      id: 'string',
      is_short_answer: true,
      page_number: 0,
      parent_id: 'string',
      short_answer: 'string',
      spanish: false,
      survey: 'string',
      video_id: 'Section Title 1',
    },
  ]);
  const [index, setIndex] = useState(0);
  const [language, setLanguage] = useState('english');
  const [videoLink, setVideoLink] = useState(
    'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
  );

  useEffect(() => {
    setPreaData(testProp['route']['params'][0]);
    setIndex(testProp['route']['params'][1]);
    setLanguage(testProp['route']['params'][2]);
  }, []);

  useEffect(() => {
    let response = supabase.storage
      .from('PREA_videos')
      .getPublicUrl(language + '/' + preaData[index]['video_id'] + '.mp4');
    let { data } = response;
    setVideoLink(data['publicUrl']);
    console.log(videoLink);
  }, [preaData, index, language]);

  return (
    <ScrollView style={styles.container}>
      {/* <Video
        source={require('@/assets/videos/da_link.mp4')}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        shouldPlay
        isLooping
        style={styles.video}
      /> */}
      <Video
        source={{ uri: videoLink }}
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
