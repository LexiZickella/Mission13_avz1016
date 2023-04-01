import React from 'react';
import { Link } from 'react-router-dom';
export const Podcast = () => (
  <div className="jumbotron jumbotron-fluid">
    <div className="container">
      <h1 className="display-4">Podcast</h1>
      <p className="lead">
        This is a great podcast, loved by many. <br /> Click the button below to
        experience the greatness.
      </p>
      <a
        className="btn btn-outline-info btn-sm"
        href="https://baconsale.com/"
        role="button"
      >
        Podcast
      </a>
    </div>
  </div>
);
