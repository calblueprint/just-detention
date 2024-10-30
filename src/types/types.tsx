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

export type VideoResource = {
  id: string;
  is_short_answer: boolean;
  page_number: number;
  parent_id: string;
  short_answer: string;
  spanish: boolean;
  survey: string;
  video_id: string;
};
