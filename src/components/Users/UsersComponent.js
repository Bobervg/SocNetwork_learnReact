import React from 'react'
import { connect } from 'react-redux'
import { unFollow, follow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching } from '../../Redux/usersPageData-Reducer'
import * as axios from 'axios'
import Users from './Users'
import Preloader from './../common/Preloader'



class UsersComponent extends React.Component {

    componentDidMount = () => {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
            this.props.toggleIsFetching(false)
        })
    }
    onClickPage = (pageNumber) => {
        this.props.toggleIsFetching(true)
        this.props.setPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.toggleIsFetching(false)
        })
    }

    render() {

        return (<>
            { this.props.isFetching == true? <Preloader  />:null }
            <Users totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                users={this.props.users}
                unfollowButton={this.props.unfollowButton}
                followButton={this.props.followButton}
                onClickPage={this.onClickPage}
            />
            </>
        )
    }
}


let mapStatetoProps = (state) => {
    return {
        users: state.usersPageData.usersData,
        pageSize: state.usersPageData.pageSize,
        totalUsersCount: state.usersPageData.totalUsersCount,
        currentPage: state.usersPageData.currentPage,
        isFetching: state.usersPageData.isFetching
    }
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         followButton: (userId) => {
//             dispatch(followActionCreator(userId))
//         },
//         unfollowButton: (userId) => {
//             dispatch(unFollowActionCreator(userId))
//         },
//         setUsers: (users) => {
//             dispatch(setUsersActionCreator(users))
//         },
//         setPage: (currentPage) => {
//             dispatch(setCurrentPageActionCreator(currentPage))
//         },
//         setTotalUsersCount: (totalCount) => {
//             dispatch(setTotalUsersCountActionCreator(totalCount))
//         },
//         toggleIsFetching: (isFetching) => {
//             dispatch(toggleIsFetching(isFetching))
//         }
//     }
// }

export default connect(mapStatetoProps, {
    followButton: follow,
    unfollowButton: unFollow,
    setUsers: setUsers,
    setPage: setCurrentPage,
    setTotalUsersCount: setTotalUsersCount,
    toggleIsFetching: toggleIsFetching
    })(UsersComponent);