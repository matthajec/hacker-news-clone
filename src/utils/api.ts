import axios from 'axios';
import { BASE_API_URL } from './constants';
import { StoryData } from '../types/StoryData';

// get one story by ID
const getStory = async (id: Number) => {
  try {
    const story = await axios.get(`${BASE_API_URL}/item/${id}.json`);
    return story.data;
  } catch {
    console.log('error while fetching a story');
  }
};

// get multiple stories by type
export const getStories = async (type: string) => {
  try {
    const { data: storyIds } = await axios.get(`${BASE_API_URL}/${type}stories.json`);
    const stories: StoryData[] = await Promise.all(storyIds.slice(0, 30).map(getStory)); // get the first 30 story ids and then fetch the actual story for them, simultaneously
    return stories;
  } catch {
    console.log('error while fetching a list of stories');
  }
};