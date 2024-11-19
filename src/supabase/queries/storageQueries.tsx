import supabase from '../createClient';

export const getVideoLink = (language: string, videoName: string): string => {
  let { data } = supabase.storage
    .from('PREA_videos')
    .getPublicUrl(`${language}/${videoName}.mp4`);

  return data.publicUrl;
};

export const gethfhHTML = (link: string): string => {
  let { data } = supabase.storage.from('HFH_guide').getPublicUrl(link);
  return data.publicUrl;
};
