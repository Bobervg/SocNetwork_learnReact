import React from 'react';
import styles from './ProfileInfo.module.css';
import Preloader from './../../common/Preloader'
import ProfileStatusHooks from './ProfileStatusHooks.jsx'
import vkLogo from './../../../assets/ProfilePage/vkLogo.png'
import facebookLogo from './../../../assets/ProfilePage/facebookLogo.png'
import twitterLogo from './../../../assets/ProfilePage/twitterLogo.png'
import githubLogo from './../../../assets/ProfilePage/githubLogo.png'
import instLogo from './../../../assets/ProfilePage/instLogo.png'
import wwwLogo from './../../../assets/ProfilePage/wwwLogo.png'
import youtubeLogo from './../../../assets/ProfilePage/youtubeLogo.svg'



const ProfileInfo = (props) => {

  if (!props.userProfile) {
    return <Preloader />
  }

  return (
    <div>
      <div>
        <img className={styles.wallpaper} alt={''} src='https://www.metoffice.gov.uk/binaries/content/gallery/metofficegovuk/hero-images/advice/maps-satellite-images/satellite-image-of-globe.jpg'></img>
      </div>
      <div>
        <img className={styles.avatar} alt={''} src="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"></img>
        <div>
          ava+desc
      <div>
            {props.userProfile.fullName}
          </div>
          <div>
            <ProfileStatusHooks status={props.status} updateStatus={props.updateStatus}/>
          </div>
          <div>
            <img src={props.userProfile.photos.large} alt={''}></img>
          </div>
          <div>
            {props.userProfile.aboutMe}
          </div>
          <div>
            <div>
              {'В поиске работы? -'}{props.userProfile.lookingForAJob === true ? ' Да' : ' Нет'}
            </div>
            <div>
              {props.userProfile.lookingForAJobDescription}
            </div>
          </div>
          <div className={styles.contacts}>
            <span><img src={facebookLogo} alt={''}></img>{props.userProfile.contacts.facebook}
            </span>
            <span><img src={wwwLogo} alt={''}></img>{props.userProfile.contacts.website}
            </span>
            <span><img src={vkLogo} alt={''}></img>{props.userProfile.contacts.vk}
            </span>
            <span><img src={twitterLogo} alt={''}></img>{props.userProfile.contacts.twitter}
            </span>
            <span><img src={instLogo} alt={''}></img>{props.userProfile.contacts.instagram}
            </span>
            <span><img src={youtubeLogo} alt={''}></img> {props.userProfile.contacts.youtube}
            </span>
            <span><img src={githubLogo} alt={''}></img>{props.userProfile.contacts.github}
            </span>
            <span><img src={'mainLink logo'} alt={''}></img>{props.userProfile.contacts.mainLink}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileInfo;
