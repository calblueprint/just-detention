import { HealingResource, Resource, VideoResource } from '@/types/types';
import supabase from '../createClient';

export const getHealingResourceData = async (): Promise<HealingResource[]> => {
  const { data, error } = await supabase.from('healing_resources').select('*');
  if (error) {
    throw new Error(`Error fetching resources: ${error.message}`);
  }
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

export const getPreaByLanguage = async (
  languageBool: boolean,
): Promise<VideoResource[]> => {
  const { data, error } = await supabase // grab all the not spanish pages from the supabase table
    .from('prea_page')
    .select()
    .eq('spanish', languageBool);
  if (error) {
    throw error;
  }
  data.sort((a, b) => a.page_number - b.page_number); // sort the array based on pages' page_number yur
  return data;
};
