export interface Resource {
  summary: string;
  [key: string]: any;
}

export type HealingResource = {
  id: number;
  video_id: number;
  text_content: string;
  is_video: boolean;
  topics: string[];
};
