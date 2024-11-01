import { useEffect, useRef, useState } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
// import MediaControls, { PLAYER_STATES } from 'react-native-media-controls';
import { Video } from 'expo-av';
import { LegalScreenProps } from '@/navigation/types';
import { getVideoLink } from '@/supabase/queries/storageQueries';
import { styles } from './styles';

export default function VideoPage({
  navigation,
  route,
}: LegalScreenProps<'VideoPage'>) {
  const { currentModules, pageNumber, language } = route.params;

  // const [currentTime, setCurrentTime] = useState(0);
  // const [duration, setDuration] = useState(0);
  // const [isFullScreen, setIsFullScreen] = useState(false);
  // const [isLoading, setIsLoading] = useState(true);
  // const [paused, setPaused] = useState(false);
  // const [playerState, setPlayerState] = useState(PLAYER_STATES.PLAYING);

  // var for array of all the pages for the current language
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
  // const [language, setLanguage] = useState('english'); // which language associated to array of pages

  const videoLinkRef = useRef(
    'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
  );

  //
  const [renderTrigger, setRenderTrigger] = useState(0);

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

  return (
    <ScrollView style={styles.container}>
      <Video
        key={renderTrigger} // changing the key forces re-mount and playback reset
        source={{ uri: videoLinkRef.current }}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        shouldPlay
        isLooping
        style={styles.video}
      />
      {/* <MediaControls
        isFullScreen={false}
        duration={duration}
        isLoading={isLoading}
        mainColor="orange"
        containerStyle={styles.videoContainer}
        // onFullScreen={noop}
        onPaused={() => console.log('paused')}
        onReplay={() => console.log('replay')}
        onSeek={() => setPlayerState(PLAYER_STATES.PLAYING)}
        onSeeking={() => console.log('seeking')}
        playerState={playerState}
        progress={currentTime}
      >
        <MediaControls.Toolbar>
          <View>
            <Text>I'm a custom toolbar </Text>
          </View>
        </MediaControls.Toolbar>
      </MediaControls> */}

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
