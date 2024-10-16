import React, { useEffect, useState } from 'react';
import { Button, View } from 'react-native';
import supabase from '../supabase/createClient';

interface Resource {
  summary: string;
  [key: string]: any;
}

export default function HealingResources() {
  const [, setSummaries] = useState<Resource[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const { data, error } = await supabase
        .from('healing_resources')
        .select('*');

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
      <Button
        title="Hope Healing Guide"
        onPress={() => console.log('does this work')}
      />
      <Button
        title="Theme Healing Resources"
        onPress={() => console.log('does this work')}
      />
    </View>
  );
}
