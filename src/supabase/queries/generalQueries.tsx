import { HealingResource, Resource } from '@/types/types';
import supabase from '../createClient';

export const getHealingResourceData = async (): Promise<HealingResource[]> => {
  const { data, error } = await supabase.from('healing_resources').select('*');
  if (error) {
    throw new Error(`Error fetching resources: ${error.message}`);
  }
  // Convert comma-separated list of strings from `topics` into an array of strings
  return data.map(resource => ({
    ...resource,
    topics: resource.topics
      ? resource.topics.split(',').map((topic: string) => topic.trim())
      : [],
  }));
};

export const getSeekHelpData = async (): Promise<Resource[]> => {
  const { data, error } = await supabase
    .from('state_resources')
    .select('*')
    .in('state', ['California', 'National']);

  if (error) {
    throw new Error(`Error fetching resources: ${error.message}`);
  }
  return data as Resource[];
};
