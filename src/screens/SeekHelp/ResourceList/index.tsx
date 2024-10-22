import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { getSeekHelpData } from '@/supabase/queries/generalQueries';
import { Resource } from '@/types/types';
import { styles } from './styles';

export default function ResourceList() {
  const filters = [
    'General Resources',
    'Health Organizations',
    'LGBT Organizations',
    'Legal Services',
    'Government Resources',
  ];
  const [summaries, setSummaries] = useState<Resource[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await getSeekHelpData();
      setSummaries(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.leftPanel}>
        {filters.map((filter, index) => (
          <TouchableOpacity key={index} style={styles.filterButton}>
            <Text>{filter}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.rightPanel}>
        <View>
          {summaries.length > 0 ? (
            summaries.map((resource, index) => (
              <Text key={index}>{resource.summary}</Text>
            ))
          ) : (
            <Text>Loading...</Text>
          )}
        </View>
      </View>
    </View>
  );
}
