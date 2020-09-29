import React from 'react'
import Users from './Users'
import { connect } from 'react-redux'
import { unFollowActionCreator, followActionCreator, setUsersActionCreator } from '../../Redux/usersPageData-Reducer'

let mapStatetoProps = (state) => {
    return {
        users: state.usersPageData.usersData
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        followButton: (userId) => {
            dispatch(followActionCreator(userId))
        },
        unfollowButton: (userId) => {
            dispatch(unFollowActionCreator(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersActionCreator(users))
        }
    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(Users);