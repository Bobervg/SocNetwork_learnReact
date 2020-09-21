import React from 'react';
import styles from './Profile.module.css';

const Profile = () => {
    return (
      <div className={styles.content}>
      <div>
      <img src='https://www.metoffice.gov.uk/binaries/content/gallery/metofficegovuk/hero-images/advice/maps-satellite-images/satellite-image-of-globe.jpg'></img>
      </div>
      <div className={styles.avatar}>
        ava+desc
        <img src="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"></img>
      </div>
      <div >
        Myposts
        <div > 
          New post
        </div>
        <div className='posts'>
          <div className={styles.item}>
            post 1
          </div>
          <div className={`${styles.item} ${styles.gold}`}>
            post 2
          </div>
        </div>
      </div>
      Main content
  </div>
    )
}
export default Profile;