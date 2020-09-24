import React from 'react';
import styles from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = (props) => {
  
  return (
    <div>
        <ProfileInfo />
        <MyPosts postsPageData = {props.postsPageData} addPost={props.addPost} updateNewPost={props.updateNewPost}/>
    </div>
  )
}
export default Profile;