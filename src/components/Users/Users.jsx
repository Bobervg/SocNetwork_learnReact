import React from 'react'
import styles from './Users.module.css'
import userAvatar from './../../assets/UsersPage/userAvatar.png'
import { NavLink } from 'react-router-dom'


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
                                <button disabled={props.isButtonDisabled.some(id => id === u.id)} onClick={() => {
                                    props.unfollowButton(u.id)
                                
                                }}
                                >Unfollow</button>
                                : <button disabled={props.isButtonDisabled.some(id => id === u.id)} onClick={() => {
                                    props.followButton(u.id)
                            
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