import React, { useEffect, useState } from 'react';
import { Button, Text, View } from 'react-native';
import supabase from '../supabase/createClient';

interface Resource {
  summary: string;
  [key: string]: any;
}

export default function SeekHelp() {
  const [summaries, setSummaries] = useState<Resource[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const { data, error } = await supabase
        .from('state_resources')
        .select('*')
        .in('state', ['California', 'National']);

      if (error) {
        console.error('Error fetching resources:', error);
        return;
      }

      setSummaries(data as Resource[]);
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
