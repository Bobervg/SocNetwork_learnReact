import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { getAuthDataTC } from '../../Redux/auth-Reducer';
import { API } from './../../api/api';


class HeaderContainer extends React.Component {

  componentDidMount = () => {
    this.props.getAuthData()
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

export default connect(mapStateToProps,{getAuthData:getAuthDataTC}) (HeaderContainer);