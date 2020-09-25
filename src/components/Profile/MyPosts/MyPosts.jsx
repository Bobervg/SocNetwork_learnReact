import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post.jsx';
import { cleanup } from '@testing-library/react';
import { addPostActionCreator, onChangeNewPostActionCreator } from './../../../Redux/State'



const MyPosts = (props) => {

    let postsElements = props.postsPageData.postPageData.map((post) => {
        return <Post message={post.message} likecount={post.likecount} />
    }
    );
    

    
    const addPost = () => {
        props.dispatch (addPostActionCreator ())
    }
    const onChangeNewPost = (event) => {
        let text = event.target.value
        props.dispatch (onChangeNewPostActionCreator(text))
    }

    return (
        <div className={styles.myposts}>
            <div><h3>Myposts</h3></div>
            <div className={styles.postbox}>
                <div>
                    <textarea onChange={onChangeNewPost} className={styles.textarea} value={props.postsPageData.newpostPageData} placeholder='Введите сообщение'/>
                </div>
                <div>
                    <button onClick={addPost}>Add Post</button>
                </div>
            </div>
            <div className={styles.post}>
                {postsElements}
            </div>
        </div>
    )
}
export default MyPosts;