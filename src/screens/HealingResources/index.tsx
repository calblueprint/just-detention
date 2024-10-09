import React, { useEffect, useState } from 'react';
import { Button, View } from 'react-native';
import { getHealingResourceData } from '@/supabase/queries/generalQueries';
import { Resource } from '@/types/types';

export default function HealingResources() {
  const [, setSummaries] = useState<Resource[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await getHealingResourceData();
      setSummaries(data);
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
