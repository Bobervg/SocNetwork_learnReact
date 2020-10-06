import React from 'react'
import { connect } from 'react-redux'
import { unFollow, follow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching, buttonDisable } from '../../Redux/usersPageData-Reducer'
import Users from './Users'
import Preloader from './../common/Preloader'
import { setUsersThunkCreator, followTC, unFollowTC } from './../../Redux/usersPageData-Reducer';


class UsersComponent extends React.Component {

    componentDidMount = () => {
        this.props.setUsers(this.props.currentPage, this.props.pageSize)
    }
    onClickPage = (pageNumber) => {
        this.props.setUsers(pageNumber, this.props.pageSize)

        // this.props.toggleIsFetching(true)
        // this.props.setPage(pageNumber)
        // API.getUsers(pageNumber, this.props.pageSize).then(response => {
        //     this.props.setUsers(response.items)
        //     this.props.toggleIsFetching(false)
        // })
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
                isButtonDisabled = {this.props.isButtonDisabled}
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
        isFetching: state.usersPageData.isFetching,
        isButtonDisabled: state.usersPageData.isButtonDisabled
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
    followButton: followTC,
    unfollowButton: unFollowTC,
    setPage: setCurrentPage,
    buttonDisable: buttonDisable,
    setUsers: setUsersThunkCreator
    })(UsersComponent);