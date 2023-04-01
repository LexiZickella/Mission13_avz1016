import React from 'react';
import styles from './Banner.module.css';

function TopBanner(props: any) {
  return (
    <>
      <div className="row">
        <div className="col-3">
          <img
            src="./JoelHiltonHeadshot.jpg"
            alt="joel-hilton-headshot"
            width="70%"
          />
        </div>
        <div className="col align-self-center text-start">
          <h1 className={styles.h1}>{props.saying}</h1>
        </div>
      </div>
    </>
  );
}
export default TopBanner;
