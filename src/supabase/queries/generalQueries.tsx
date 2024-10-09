import supabase from '../createClient';

interface Resource {
  summary: string;
  [key: string]: any;
}

export const getHealingResourceData = async (): Promise<Resource[]> => {
  const { data, error } = await supabase.from('healing_resources').select('*');
  if (error) {
    throw new Error(`Error fetching resources: ${error.message}`);
  }

  return data as Resource[];
};

export const getStateResourceData = async (): Promise<Resource[]> => {
  const { data, error } = await supabase
    .from('state_resources')
    .select('*')
    .in('state', ['California', 'National']);

  if (error) {
    throw new Error(`Error fetching resources: ${error.message}`);
  }
  return data as Resource[];
};
