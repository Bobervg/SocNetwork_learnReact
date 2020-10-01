import React from 'react'
import Users from './Users'
import { connect } from 'react-redux'
import { unFollowActionCreator, followActionCreator, setUsersActionCreator, setCurrentPageActionCreator, setTotalUsersCountActionCreator } from '../../Redux/usersPageData-Reducer'

let mapStatetoProps = (state) => {
    return {
        users: state.usersPageData.usersData,
        pageSize: state.usersPageData.pageSize,
        totalUsersCount: state.usersPageData.totalUsersCount,
        currentPage: state.usersPageData.currentPage
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
        },
        setPage: (currentPage) => {
            dispatch(setCurrentPageActionCreator(currentPage))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountActionCreator(totalCount))
        }
    }
}

export default connect(mapStatetoProps, mapDispatchToProps)(Users);