import React from 'react';
import styles from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
  return (
    <div className={styles.content}>
      <div>
        <img src='https://www.metoffice.gov.uk/binaries/content/gallery/metofficegovuk/hero-images/advice/maps-satellite-images/satellite-image-of-globe.jpg'></img>
      </div>
      <div className={styles.avatar}>
        <img src="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"></img>
        <div>ava+desc</div>
      </div>
      <MyPosts />
    </div>
  )
}
export default Profile;