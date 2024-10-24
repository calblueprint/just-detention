import { useEffect, useState } from 'react';
import { Image, Pressable, ScrollView, Text, View } from 'react-native';
import placeholderPoster from '@/assets/images/placeholder.png';
import supabase from '@/supabase/createClient';
import { styles } from './styles';

export default function LegalRights({ navigation }: { navigation: any }) {
  const [englishPressed, setEnglishPressed] = useState(true);

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

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const englishResponse = await supabase
      .from('prea_page')
      .select()
      .eq('spanish', false);
    const { data: englishData, error: englishError } = englishResponse;
    if (englishError) {
      throw englishError;
    }
    const newEnglishModules = englishData;
    englishData.sort((a, b) => a.page_number - b.page_number);

    const spanishResponse = await supabase
      .from('prea_page')
      .select()
      .eq('spanish', true);
    const { data: spanishData, error: spanishError } = spanishResponse;
    if (spanishError) {
      throw spanishError;
    }
    const newSpanishModules = spanishData;
    spanishData.sort((a, b) => a.page_number - b.page_number);

    setEnglishModules(newEnglishModules);
    setSpanishModules(newSpanishModules);
    // return data;
  }

  const currentModules = englishPressed ? englishModules : spanishModules;

  const goToVideo = (page_number: number, language: string) => {
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
          {currentModules.map(section => (
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
              <Text style={styles.moduleTitle}>{section['video_id']}</Text>
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </>
  );
}
