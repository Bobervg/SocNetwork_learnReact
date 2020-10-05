import React from 'react';
import styles from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import Preloader from '../common/Preloader';


const Profile = (props) => {

 
  return (
    <div>
        <ProfileInfo userProfile={props.userProfile}/>
        <MyPostsContainer store = {props.store}/>
    </div>
  )
}
export default Profile;