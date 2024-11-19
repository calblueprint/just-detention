import supabase from '../createClient';

export const getVideoLink = (language: string, videoName: string): string => {
  let { data } = supabase.storage
    .from('PREA_videos')
    .getPublicUrl(`${language}/${videoName}.mp4`);

  return data.publicUrl;
};

export const getPosterLink = (
  language: string,
  videoName: string,
): string | null => {
  let { data } = supabase.storage
    .from('PREA_videos')
    .getPublicUrl(`${language}/${videoName}.png`);

  return data.publicUrl;
};
