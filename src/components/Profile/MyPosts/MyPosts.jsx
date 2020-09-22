import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post.jsx';

const MyPosts = () => {
    return (
        <div>
            <div>Myposts</div>
            <textarea></textarea>
            <button>Add Post</button>
            <div className='post'>
                <Post message='first post'/>
                <Post message='second post'/>
            </div>
        </div>
    )
}
export default MyPosts;