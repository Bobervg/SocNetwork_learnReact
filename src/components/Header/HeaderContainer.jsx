import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { setAuthData } from '../../Redux/auth-Reducer';
import * as Axios from 'axios';


class HeaderContainer extends React.Component {

  componentDidMount = () => {
    Axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,{
      withCredentials:true
    }).then(response => {
        this.props.setAuthData(response.data)
    })
}



  render () {
    return (
      <Header {...this.props}/>
    )
  }
}

let mapStateToProps = (state) => ({
  userdata: state.authData.data,
  message: state.authData.messages,
  isLogged: state.authData.isLogged

})

export default connect(mapStateToProps,{setAuthData}) (HeaderContainer);