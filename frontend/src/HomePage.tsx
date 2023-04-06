import React from 'react';
import TopBanner from './Banner';
export const HomePage = () => {
  React.useEffect(() => {
    console.log('first rendered');
  }, []);
  return (
    <div>
      <TopBanner saying="Welcome to a The Film Collection" />
      <br />
      <br />{' '}
      <h5>
        Joel Hilton is an avid movie watcher and has an extensive film
        collection. Because of his generosity and mission to education those
        less fortunate than himself, he wants to share his film finding with
        you!
      </h5>
      <br />{' '}
    </div>
  );
};
