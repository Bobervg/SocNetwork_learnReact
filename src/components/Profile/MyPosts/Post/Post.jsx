import React from 'react';
import styles from './Post.module.css';

const Post = (props) => {
  return (
    <div>
      <div className='posts'>
        <div className={`${styles.item} ${styles.gold}`}>
        <img src='https://html5css.ru/howto/img_avatar.png'></img>
        {props.message}
        <br></br>
          <button>Like</button>
          <button>Dislike</button>
        </div>
      </div>
    </div>
  )
}
export default Post;