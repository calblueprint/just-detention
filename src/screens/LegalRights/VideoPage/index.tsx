import { useEffect, useRef, useState } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import Video from 'react-native-video';
import { LegalScreenProps } from '@/navigation/types';
import { getVideoLink } from '@/supabase/queries/storageQueries';
import { styles } from './styles';

export default function VideoPage({
  navigation,
  route,
}: LegalScreenProps<'VideoPage'>) {
  const { currentModules, pageNumber, language } = route.params;
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
  const [index, setIndex] = useState(10); // index of current page in full array of pages; have to set to infinite or else if the first page (actually index 0) is pressed, the videopage wont update

  const videoLinkRef = useRef(
    'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
  );

  //
  const [renderTrigger, setRenderTrigger] = useState(0);
  const [paused, setPaused] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const nextPage = () => {
    setIndex(prevIndex => Math.min(prevIndex + 1, preaData.length - 1)); // next index in array of pages
  };

  const prevPage = () => {
    setIndex(prevIndex => Math.max(prevIndex - 1, 0)); // previous index in array of pages
  };

  // read in all the variables passed in from legal rights page; only once when initally rendered
  useEffect(() => {
    setPreaData(currentModules);
    setIndex(pageNumber);
  }, []);

  useEffect(() => {
    const fetchVideoLink = async () => {
      videoLinkRef.current = getVideoLink(language, preaData[index].video_id); // Update the ref with the new video link
      setRenderTrigger(prev => prev + 1); // Trigger a re-render to apply the new link
    };

    fetchVideoLink();
  }, [index]); // run useEffect every time value of index changes

  const onLoad = (data: any) => {
    setDuration(data.duration);
  };

  const onProgress = (data: any) => {
    setCurrentTime(data.currentTime);
  };

  return (
    <ScrollView style={styles.container}>
      <Video
        key={renderTrigger}
        source={{ uri: videoLinkRef.current }}
        rate={1.0}
        volume={1.0}
        paused={paused}
        muted={false}
        resizeMode="contain"
        onLoad={onLoad}
        onProgress={onProgress}
        onEnd={() => console.log('Video finished')}
        repeat
        style={styles.video}
      />

      <View style={styles.buttonContainer}>
        <Pressable style={[styles.captionButtons]} onPress={prevPage}>
          <Text style={styles.buttonText}>{'<   Previous Section'}</Text>
        </Pressable>
        <Pressable style={[styles.captionButtons]} onPress={nextPage}>
          <Text style={styles.buttonText}>{'Next Section   >'}</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}
