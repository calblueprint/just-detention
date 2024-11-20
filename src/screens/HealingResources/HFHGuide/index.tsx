import React, { useEffect, useState } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import RenderHTML from 'react-native-render-html';
import { useFonts } from 'expo-font';
import { HealingScreenProps } from '@/navigation/types';
import {
  getNextSubheadingId,
  getSubheadingById,
} from '@/supabase/queries/generalQueries';
import styles from './styles';

export default function HFHGuide({
  navigation,
  route,
}: HealingScreenProps<'HopeForHealingGuide'>) {
  const [htmlContent, setHtmlContent] = useState<string | null>(null);
  const [nextId, setNextId] = useState<string>(
    '7012e24a-894e-4972-9dcc-612666bff21e',
  );
  const { id } = route.params;

  const [fontsLoaded] = useFonts({
    'Roboto Serif': require('src/assets/fonts/Roboto_Serif/RobotoSerif-Regular.ttf'),
    'Roboto Serif Bold': require('src/assets/fonts/Roboto_Serif/RobotoSerif-Bold.ttf'),
    'Roboto Serif Italic': require('src/assets/fonts/Roboto_Serif/RobotoSerif-Italic.ttf'),
  });

  useEffect(() => {
    const fetchHtml = async () => {
      const nextId = await getNextSubheadingId(id);
      setNextId(nextId);
      const url = await getSubheadingById(id);
      if (url) {
        const response = await fetch(url);
        const html = await response.text();
        setHtmlContent(html);
      }
    };
    fetchHtml();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        {fontsLoaded ? ( // Check if fonts are loaded
          htmlContent ? (
            <RenderHTML
              contentWidth={300}
              source={{ html: htmlContent }}
              tagsStyles={htmlStyles}
              defaultTextProps={{
                style: {
                  fontFamily: 'Roboto Serif',
                  color: '#444',
                },
              }}
            />
          ) : (
            <Text>Loading content...</Text>
          )
        ) : (
          <Text>Loading content...</Text>
        )}
      </ScrollView>
      <View style={styles.nextButtonContainer}></View>
    </View>
  );
}

const htmlStyles = {
  p: {
    fontFamily: 'Roboto Serif',
    fontSize: 20,
    fontWeight: '200',
    color: '#444',
    lineHeight: 30,
    marginVertical: 6,
    letterSpacing: -0.308,
  },
  h3: {
    fontFamily: 'Roboto Serif Bold',
    // fontWeight: 'bold',
    fontSize: 30,
    color: '#444',
    lineHeight: 30,
    marginVertical: 6,
    letterSpacing: -0.308,
  },
  li: {
    fontSize: 25,
    lineHeight: 24,
    color: '#444',
  },
  c6: {
    fontSize: 25,
    lineHeight: 24,
    color: '#444',
  },
};
