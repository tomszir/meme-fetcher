import { AxiosResponse } from 'axios';

export type Meme = {
  url: string;
  title: string;
  postLink: string;
  subreddit: string;
  nsfw: boolean;
  spoiler: boolean;
};

export type MemeAxiosResponse = AxiosResponse & {
  data: Meme;
};
