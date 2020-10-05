import React from 'react';
import Profile from './Profile'
import { connect } from 'react-redux'
import {setUserProfile} from './../../Redux/profilePageData-Reducer'
import * as axios from 'axios'
import { withRouter } from 'react-router-dom';




class ProfileContainer extends React.Component {

  

  componentDidMount = () => {
    let userId = this.props.match.params.userId
    if (!userId) {
      userId = '2'
    }
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+userId)
    .then(response => {
      debugger
        this.props.setUserProfile(response.data)
    })
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
export default connect(mapStatetoProps, {setUserProfile:setUserProfile}) (withRouterDataProfileContainer);