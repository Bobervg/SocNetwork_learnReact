import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post.jsx';
import { cleanup } from '@testing-library/react';

const MyPosts = (props) => {

    let postsElements = props.postsPageData.postPageData.map((post) => {
        return <Post message={post.message} likecount={post.likecount} />
    }
    );
    
    let clearTextArea = () => {
        newPost.current.value = '';
    }
    
    let newPost = React.createRef();
    
    const addPost = () => {
        props.addPost()
    }
    const onChangeNewPost = () => {
        let text = newPost.current.value
        props.updateNewPost(text)
    }

    return (
        <div className={styles.myposts}>
            <div><h3>Myposts</h3></div>
            <div className={styles.postbox}>
                <div>
                    <textarea onChange={onChangeNewPost} onClick={clearTextArea} ref={newPost} className={styles.textarea} value={props.postsPageData.newpostPageData}/>
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