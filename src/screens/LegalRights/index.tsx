import { useEffect, useState } from 'react';
import { Image, Pressable, ScrollView, Text, View } from 'react-native';
import placeholderPoster from '@/assets/images/placeholder.png';
import supabase from '@/supabase/createClient';
import { styles } from './styles';

export default function LegalRights({ navigation }: { navigation: any }) {
  const [englishPressed, setEnglishPressed] = useState(true); // english or spanish 🧍‍♂️

  // english pages var mhm
  const [englishModules, setEnglishModules] = useState([
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

  // spanish pages var mhm
  const [spanishModules, setSpanishModules] = useState([
    {
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
    const englishResponse = await supabase // grab all the not spanish pages from the supabase table
      .from('prea_page')
      .select()
      .eq('spanish', false);
    const { data: englishData, error: englishError } = englishResponse;
    if (englishError) {
      throw englishError;
    }
    const newEnglishModules = englishData;
    englishData.sort((a, b) => a.page_number - b.page_number); // sort the array based on pages' page_number yur

    const spanishResponse = await supabase // grab all the spanish pages from the supabase table yk
      .from('prea_page')
      .select()
      .eq('spanish', true);
    const { data: spanishData, error: spanishError } = spanishResponse;
    if (spanishError) {
      throw spanishError;
    }
    const newSpanishModules = spanishData;
    spanishData.sort((a, b) => a.page_number - b.page_number); // sort the array based on pages' page_number

    setEnglishModules(newEnglishModules); // update relative useStates
    setSpanishModules(newSpanishModules);
  }

  const currentModules = englishPressed ? englishModules : spanishModules; // pages actually being rendered; conditiioned on lanugage boolean

  // navigate to video player
  const goToVideo = (page_number: number, language: string) => {
    // pass to video player array of [pages, index of page pressed, language of pages]
    navigation.navigate('Video Page', [
      currentModules,
      page_number - 1,
      language,
    ]);
  };


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
              <Image style={styles.modulePoster} source={placeholderPoster} />
              <Text style={styles.moduleTitle}>{section.video_id}</Text>
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </>
  );
}
}
