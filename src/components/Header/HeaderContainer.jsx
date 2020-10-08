import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { getAuthDataTC } from '../../Redux/auth-Reducer';


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
  id: state.authData.id,
  email: state.authData.email,
  login: state.authData.login,
  isLogged: state.authData.isLogged

})

export default connect(mapStateToProps,{getAuthData:getAuthDataTC}) (HeaderContainer);