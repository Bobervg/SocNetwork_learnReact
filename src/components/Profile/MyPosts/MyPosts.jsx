import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post.jsx';



const MyPosts = (props) => {
    let postsElements = props.postsPageData.profilePageData.map((post) => {
        return <Post message={post.message} likecount={post.likecount} key={post.id} />
    }
    );
    
    const addPost = () => {
        props.addPost()
    }
    const changeNewPost = (event) => {
        let text = event.target.value
        props.changeNewPost(text)
    }

    return (
        <div className={styles.myposts}>
            <div><h3>Myposts</h3></div>
            <div className={styles.postbox}>
                <div>
                    <textarea onChange={changeNewPost} className={styles.textarea} value={props.postsPageData.newpostProfilePageData} placeholder='Введите сообщение'/>
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