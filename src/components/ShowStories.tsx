import React from 'react';
import Story from './Story';
import useDataFetcher from '../hooks/dataFetcher';
import Loader from './Loader';

type ShowStoriesProps = {
  type: string;
};

const ShowStories: React.FC<ShowStoriesProps> = ({ type }) => {
  const { isLoading, stories } = useDataFetcher(type);

  return (
    <>
      <Loader show={isLoading}>Loading</Loader>
      {stories && stories.map(story => (
        <Story key={story.id} {...story} />
      ))}
    </>
  );
};

export default ShowStories;