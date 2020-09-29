import React from 'react'
import styles from './Users.module.css'

const Users = (props) => {

    if (props.users.length === 0) {

    props.setUsers([
        { id: 1, followed: true, avatar:{} , name: 'Dmitry K.', status: 'Hey yo', location: {contry: 'Belarus', city: 'Grodno'} },
        { id: 2, followed: false, avatar:{} , name: 'Svetlana D.', status: 'lovely', location: {contry: 'USA', city: 'Manhattan'} },
        { id: 3, followed: false, avatar:{} , name: 'Sergey S.', status: 'subscribe pls', location: {contry: 'Bulgaria', city: 'Bulg'} },
        { id: 4, followed: true, avatar:{} , name: 'Andrew T.', status: 'dunno', location: {contry: 'Russia', city: 'Moscow'} }
    ])
}
    return (
        <div>
            {props.users.map(u =>
                <div key={u.id}>
                    <span>
                        <div className={styles.userAvatar}>
                            <img src={u.avatar}></img>
                        </div>
                        <div>
                            {u.followed ?
                                <button onClick={() => { props.unfollowButton(u.id) }}>Unfollow</button>
                                : <button onClick={() => { props.followButton(u.id) }}>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <div>
                            {u.name}
                        </div>
                        <div>
                            {u.status}
                        </div>
                    </span>
                    <span>
                        <div>
                            {u.location.contry}
                        </div>
                        <div>
                            {u.location.city}
                        </div>
                    </span>
                </div>)}
            <div>
                <button>Show more</button>
            </div>
        </div >
    )
}

export default Users;