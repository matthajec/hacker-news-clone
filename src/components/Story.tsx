import React from 'react';
import { StoryData } from '../types/StoryData';

type StoryLinkData = {
  url: string;
  title: string;
};

// keep in mind the Link component is not from react-router-dom, it's an actual anchor tag
const Link = ({ url, title }: StoryLinkData) => (
  <a href={url} target="_blank" rel="noreferrer">
    {title}
  </a>
);

const Story: React.FC<StoryData> = ({ id, by, title, kids, time, url }) => {
  return (
    <div className="story">
      <div className="story-title">
        <Link url={url} title={title} />
      </div>
      <div className="story-info">
        <span>
          by{' '}
          <Link
            url={`https://news.ycombinator.com/user?id=${by}`}
            title={by}
          />
        </span>

        <span>
          {new Date(time * 1000).toLocaleDateString('en-Us', {
            hour: 'numeric',
            minute: 'numeric'
          })}
        </span>

        <span>
          <Link
            url={`https://news.ycombinator.com/item?id=${id}`}
            title={`${kids && kids.length > 0 ? kids.length : 0} comments`}
          />
        </span>
      </div>
    </div>
  );
};

export default Story;