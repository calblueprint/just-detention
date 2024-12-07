import React from 'react';
import { Image, Pressable, Text } from 'react-native';
import placeholderPoster from '@/assets/images/placeholder.png';
import { getPosterLink } from '@/supabase/queries/storageQueries';
import { VideoSectionItemProps } from '@/types/types';
import { styles } from './styles';

export default function LegalRightsItem({
  section,
  onPress,
}: VideoSectionItemProps) {
  const language = section.spanish ? 'spanish' : 'english';

  return (
    <Pressable
      style={styles.preaModule}
      onPress={() => onPress(section.page_number, language)}
    >
      <Image
        style={styles.modulePoster}
        source={
          getPosterLink(language, section.video_id)
            ? { uri: getPosterLink(language, section.video_id)! }
            : placeholderPoster
        }
      />
      <Text style={styles.moduleTitle}>{section.title}</Text>
    </Pressable>
  );
}
