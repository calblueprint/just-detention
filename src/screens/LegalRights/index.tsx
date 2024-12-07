import { useEffect, useState } from 'react';
import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  Text,
  View,
} from 'react-native';
import placeholderPoster from '@/assets/images/placeholder.png';
import { LegalScreenProps } from '@/navigation/types';
import { getPreaByLanguage } from '@/supabase/queries/generalQueries';
import { getPosterLink } from '@/supabase/queries/storageQueries';
import { VideoResource } from '@/types/types';
import { styles } from './styles';

// import { FlatList } from 'react-native-gesture-handler';

export default function LegalRights({
  navigation,
}: LegalScreenProps<'LegalRights'>) {
  const [englishPressed, setEnglishPressed] = useState(true); // english or spanish 🧍‍♂️

  // english pages var mhm
  const [englishModules, setEnglishModules] = useState<VideoResource[]>([
    {
      title: 'string',
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

  // spanish pages var mhm
  const [spanishModules, setSpanishModules] = useState<VideoResource[]>([
    {
      title: 'string',
      id: 'string',
      is_short_answer: true,
      page_number: 0,
      parent_id: 'string',
      short_answer: 'string',
      spanish: true,
      survey: 'string',
      video_id: 'Título de la Sección 1',
    },
  ]);

  // get data from supabase on render; only once fr
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    setEnglishModules(await getPreaByLanguage(false)); // update relative useStates
    setSpanishModules(await getPreaByLanguage(true));
  }

  const currentModules = englishPressed ? englishModules : spanishModules; // pages actually being rendered; conditiioned on lanugage boolean

  // navigate to video player
  const goToVideo = (pageNumber: number, language: string) => {
    navigation.navigate('VideoPage', {
      currentModules: currentModules,
      pageNumber: pageNumber - 1,
      language: language,
    });
  };

  const Item = (module: VideoResource) => (
    <Pressable
      style={styles.preaModule}
      onPress={() =>
        goToVideo(
          module['page_number'],
          module['spanish'] ? 'spanish' : 'english',
        )
      }
    >
      <Image
        style={styles.modulePoster}
        source={
          getPosterLink(
            module['spanish'] ? 'spanish' : 'english',
            module['video_id'],
          )
            ? {
                uri: getPosterLink(
                  module['spanish'] ? 'spanish' : 'english',
                  module['video_id'],
                )!,
              }
            : placeholderPoster
        }
      />
      <Text style={styles.moduleTitle}>{module['title']}</Text>
    </Pressable>
  );

  return (
    <>
      <Text style={styles.title}>Legal Rights</Text>
      <View style={styles.buttonContainer}>
        <Pressable
          style={[
            styles.captionButtons,
            englishPressed && styles.captionButtonsPressed,
          ]}
          onPress={() => {
            if (!englishPressed) {
              setEnglishPressed(!englishPressed);
            }
          }}
        >
          <Text style={styles.buttonText}>English CC</Text>
        </Pressable>
        <Pressable
          style={[
            styles.captionButtons,
            !englishPressed && styles.captionButtonsPressed,
          ]}
          onPress={() => {
            if (englishPressed) {
              setEnglishPressed(!englishPressed);
            }
          }}
        >
          <Text style={styles.buttonText}>Spanish CC</Text>
        </Pressable>
      </View>

      <ScrollView>
        <View style={styles.preaModulesView}>
          {/* <FlatList
            data={currentModules}
            renderItem={({item}) => <Item page_number={item.page_number} spanish={item.spanish} video_id={item.video_id} title={item.title} id={item.id} is_short_answer={item.is_short_answer} parent_id={item.parent_id} short_answer={item.short_answer} survey={item.survey} />}
            numColumns={3}
          /> */}
          {currentModules.map((section, index) => (
            <Pressable
              style={styles.preaModule}
              onPress={() =>
                goToVideo(
                  section['page_number'],
                  section['spanish'] ? 'spanish' : 'english',
                )
              }
            >
              <Image
                style={styles.modulePoster}
                source={
                  getPosterLink(
                    section['spanish'] ? 'spanish' : 'english',
                    section['video_id'],
                  )
                    ? {
                        uri: getPosterLink(
                          section['spanish'] ? 'spanish' : 'english',
                          section['video_id'],
                        )!,
                      }
                    : placeholderPoster
                }
              />
              <Text style={styles.moduleTitle}>{section['title']}</Text>
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </>
  );
}
