import React, { useEffect, useState } from 'react';
import { Button, Text, View } from 'react-native';
import { getStateResourceData } from '@/supabase/queries/generalQueries';
import { Resource } from '@/types/types';

export default function SeekHelp() {
  const [summaries, setSummaries] = useState<Resource[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await getStateResourceData();
      setSummaries(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <View>
      <Button title="Fetch Data" onPress={fetchData} />
      {summaries.length > 0 ? (
        summaries.map((resource, index) => (
          <Text key={index}>{resource.summary}</Text>
        ))
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
}
