import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post.jsx';

const MyPosts = () => {
    return (
        <div className={styles.myposts}>
            <div>Myposts</div>
            <div className={styles.postbox}>
                <div><textarea className={styles.textarea}>Введите новое сообщение</textarea></div>
                <div><button>Add Post</button></div>
            </div>
            <div className='post'>
                <Post message='first post' likecount='15' />
                <Post message='second post' likecount='20' />
            </div>
        </div>
    )
}
export default MyPosts;