import { useState } from 'react';
import { Image, Pressable, ScrollView, Text, View } from 'react-native';
import placeholderPoster from '@/assets/images/placeholder.png';
import { styles } from './styles';

export default function LegalRights({ navigation }: { navigation: any }) {
  const rickRolls = () => {
    navigation.navigate('Video Page');
  };

  const placeholderModulesEnglish = [
    {
      title: 'Section Title 1',
      poster_url: placeholderPoster,
      onClickFunction: rickRolls,
    },
    {
      title: 'Section Title 2',
      poster_url: placeholderPoster,
      onClickFunction: rickRolls,
    },
    {
      title: 'Section Title 3',
      poster_url: placeholderPoster,
      onClickFunction: rickRolls,
    },
    {
      title: 'Section Title 4',
      poster_url: placeholderPoster,
      onClickFunction: rickRolls,
    },
    {
      title: 'Section Title 5',
      poster_url: placeholderPoster,
      onClickFunction: rickRolls,
    },
    {
      title: 'Section Title 6',
      poster_url: placeholderPoster,
      onClickFunction: rickRolls,
    },
    {
      title: 'Section Title 7',
      poster_url: placeholderPoster,
      onClickFunction: rickRolls,
    },
    {
      title: 'Section Title 8',
      poster_url: placeholderPoster,
      onClickFunction: rickRolls,
    },
    {
      title: 'Section Title 9',
      poster_url: placeholderPoster,
      onClickFunction: rickRolls,
    },
  ];

  const placeholderModulesSpanish = [
    {
      title: 'Título de la Sección 1',
      poster_url: placeholderPoster,
      onClickFunction: rickRolls,
    },
    {
      title: 'Título de la Sección 2',
      poster_url: placeholderPoster,
      onClickFunction: rickRolls,
    },
    {
      title: 'Título de la Sección 3',
      poster_url: placeholderPoster,
      onClickFunction: rickRolls,
    },
    {
      title: 'Título de la Sección 4',
      poster_url: placeholderPoster,
      onClickFunction: rickRolls,
    },
    {
      title: 'Título de la Sección 5',
      poster_url: placeholderPoster,
      onClickFunction: rickRolls,
    },
    {
      title: 'Título de la Sección 6',
      poster_url: placeholderPoster,
      onClickFunction: rickRolls,
    },
    {
      title: 'Título de la Sección 7',
      poster_url: placeholderPoster,
      onClickFunction: rickRolls,
    },
    {
      title: 'Título de la Sección 8',
      poster_url: placeholderPoster,
      onClickFunction: rickRolls,
    },
    {
      title: 'Título de la Sección 9',
      poster_url: placeholderPoster,
      onClickFunction: rickRolls,
    },
  ];

  const [spanishPressed, setSpanishPressed] = useState(false);

  const currentModules = spanishPressed
    ? placeholderModulesEnglish
    : placeholderModulesSpanish;

  return (
    <>
      <Text style={styles.title}>Legal Rights</Text>
      <View style={styles.buttonContainer}>
        <Pressable
          style={[
            styles.captionButtons,
            spanishPressed && styles.captionButtonsPressed,
          ]}
          onPress={() => {
            if (!spanishPressed) {
              setSpanishPressed(!spanishPressed);
            }
          }}
        >
          <Text style={styles.buttonText}>English CC</Text>
        </Pressable>
        <Pressable
          style={[
            styles.captionButtons,
            !spanishPressed && styles.captionButtonsPressed,
          ]}
          onPress={() => {
            if (spanishPressed) {
              setSpanishPressed(!spanishPressed);
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
              onPress={section['onClickFunction']}
            >
              <Image
                style={styles.modulePoster}
                source={section['poster_url']}
              />
              <Text style={styles.moduleTitle}>{section['title']}</Text>
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </>
  );
}
