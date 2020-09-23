import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post.jsx';

const MyPosts = (props) => {

    let postsElements = props.postsData.map((post) => {
        return <Post message={post.message} likecount={post.likecount} />
    }
    );

    return (
        <div className={styles.myposts}>
            <div><h3>Myposts</h3></div>
            <div className={styles.postbox}>
                <div><textarea className={styles.textarea}>Введите новое сообщение</textarea></div>
                <div><button>Add Post</button></div>
            </div>
            <div className='post'>
                {postsElements}
            </div>
        </div>
    )
}
export default MyPosts;