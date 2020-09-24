import React from 'react';
import styles from './FriendsBar.module.css';
import Friend from './Friends/Friend';

const FriendsBar = (props) => {
    let bestFriends = props.bestFriendsData.map((friend) => {
        return (
            <Friend name={friend.name} id={friend.id} />
        )
    }
    );
    return (
        <div className={styles.content}>
            <h2>Friends</h2>
            <div className={styles.bestFriendsitem}>
                {bestFriends}
            </div>
        </div>
    )
}

export default FriendsBar;