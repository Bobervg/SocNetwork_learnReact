import React from 'react';
import styles from './ProfileInfo.module.css';


const ProfileInfo = (props) => {
  return (
    <div>
      <div>
        <img className={styles.wallpaper} src='https://www.metoffice.gov.uk/binaries/content/gallery/metofficegovuk/hero-images/advice/maps-satellite-images/satellite-image-of-globe.jpg'></img>
      </div>
      <div>
        <img className={styles.avatar} src="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"></img>
        <div>ava+desc</div>
      </div>
    </div>
  )
}

export default ProfileInfo;