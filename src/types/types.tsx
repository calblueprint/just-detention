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

export interface SeekHelpProps {
  org_name: string;
  summary: string;
  address: string;
  phone_number: string;
  hotline_number: string;
  office_hours: string;
  tags: string;
}
