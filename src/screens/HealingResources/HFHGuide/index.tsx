import React, { useEffect, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import RenderHTML from 'react-native-render-html';
import { useFonts } from 'expo-font';
import { gethfhHTML } from '@/supabase/queries/storageQueries';
import styles from './styles';

export default function HFHGuide() {
  const [htmlContent, setHtmlContent] = useState<string | null>(null);

  const [fontsLoaded] = useFonts({
    'Roboto Serif': require('src/assets/fonts/Roboto_Serif/RobotoSerif-Regular.ttf'),
    'Roboto Serif Bold': require('src/assets/fonts/Roboto_Serif/RobotoSerif-Bold.ttf'),
    'Roboto Serif Italic': require('src/assets/fonts/Roboto_Serif/RobotoSerif-Italic.ttf'),
  });

  useEffect(() => {
    const fetchHtml = async () => {
      const url = gethfhHTML('chapter1', 'sub2');
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
