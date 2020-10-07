import React from 'react';
import Profile from './Profile'
import { connect } from 'react-redux'
import {getUserProfileTC, getProfileStatusTC, updateProfileStatusTC} from './../../Redux/profilePageData-Reducer'
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from './../../hoc/withAuthRedirect';
import { compose } from 'redux';




class ProfileContainer extends React.Component {

  

  componentDidMount = () => {
    let userId = this.props.match.params.userId
    if (!userId) {
      userId = '11789'
    }
    this.props.setUserProfile(userId)
    this.props.getStatus(userId)
}
  render () {
    return (
      <Profile {...this.props} userProfile={this.props.userProfile} status={this.props.status}/>
    )
  }
}


let mapStatetoProps = (state) => ({
    userProfile: state.profilePageData.userProfile,
    status: state.profilePageData.status
  })

export default compose (
  connect(mapStatetoProps, {setUserProfile:getUserProfileTC, getStatus:getProfileStatusTC, updateStatus:updateProfileStatusTC}),
  withRouter,
  withAuthRedirect
) ( ProfileContainer )
