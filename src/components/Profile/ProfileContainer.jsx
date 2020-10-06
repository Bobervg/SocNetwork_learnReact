import React from 'react';
import Profile from './Profile'
import { connect } from 'react-redux'
import {getUserProfileTC} from './../../Redux/profilePageData-Reducer'
import { withRouter } from 'react-router-dom';




class ProfileContainer extends React.Component {

  

  componentDidMount = () => {
    let userId = this.props.match.params.userId
    if (!userId) {
      userId = '2'
    }
    this.props.setUserProfile(userId)
}


  render() {
    return (
      <Profile {...this.props} userProfile={this.props.userProfile} />
    )
  }

}

let mapStatetoProps = (state) => ({
    userProfile: state.profilePageData.userProfile
  })



let withRouterDataProfileContainer = withRouter(ProfileContainer)
export default connect(mapStatetoProps, {setUserProfile:getUserProfileTC,}) (withRouterDataProfileContainer);