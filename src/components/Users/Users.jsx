import React from 'react'
import styles from './Users.module.css'
import userAvatar from './../../assets/UsersPage/userAvatar.png'
import { NavLink } from 'react-router-dom'
import Axios from 'axios'


const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i + ' ')
    }
    return (
        <div>
            <div>
                {pages.map(p => {
                    return <span className={props.currentPage === p && styles.activePage} onClick={(e) => { props.onClickPage(p) }}>{p}</span>
                })}
            </div>
            {props.users.map(u =>
                <div key={u.id} className={styles.userInfo}>
                    <div className={styles.avbut}>
                        <div className={styles.avatar}>
                            <NavLink to={'/profile' + u.id}>
                                <img src={u.photos.small != null ? u.photos.small : userAvatar}></img>
                            </NavLink>
                        </div>
                        <div className={styles.followButton}>

                            {u.followed ?
                                <button onClick={() => {
                                    Axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                        withCredentials: true,
                                        headers: {
                                            'API-KEY': 'f2fbe505-fd97-4af2-841a-d777aed30b39'
                                        }})
                                    .then(response => {
                                        if (response.data.resultCode === 0) {props.unfollowButton(u.id)}
                                    })
                                }
                            }>Unfollow</button>
                                : <button onClick={() => {
                                    Axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                        withCredentials: true,
                                        headers: {
                                            'API-KEY': 'f2fbe505-fd97-4af2-841a-d777aed30b39'
                                        }})
                                    .then(response => {
                                        if (response.data.resultCode === 0) {props.followButton(u.id)}
                                    })
                                }}>Follow</button>}

                        </div>
                    </div>
                    <div className={styles.namestatus}>
                        <div className={styles.name}>
                            {u.name}
                        </div>
                        <div className={styles.status}>
                            {u.status}
                        </div>
                    </div>
                    <div className={styles.location}>
                        <div className={styles.contry}>
                            {'u.location.contry'}
                        </div>
                        <div className={styles.city}>
                            {'u.location.city'}
                        </div>
                    </div>
                </div>)}
            <div className={styles.moreUsersButton}>
                <button>Show more</button>
            </div>
        </div >
    )
}

export default Users