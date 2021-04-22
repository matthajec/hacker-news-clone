import { useState, useEffect } from 'react';
import { getStories } from '../utils/api';
import { StoryData } from '../types/StoryData';

const useDataFetcher = (type: string) => {
  const [stories, setStories] = useState<StoryData[] | undefined>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getStories(type)
      .then(stories => {
        setStories(stories);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  }, [type]);

  return { isLoading, stories };
};

export default useDataFetcher;