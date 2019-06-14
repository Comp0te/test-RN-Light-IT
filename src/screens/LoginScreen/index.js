import React from 'react';
import { connect } from 'react-redux';
import { Actions } from '../../redux/requests/login/AC';
import { getIsLoading } from '../../redux/requests/login/selectors';
import LoginScreen from './LoginScreen'

const LoginScreenContainer = ({submitLogin, isLoading}) => {

  return (
    <LoginScreen
      isLoading={isLoading}
      submitLogin={submitLogin}
    />
  );
};

const mapStateToProps = state => ({
  isLoading: getIsLoading(state),
});

const mapDispatchToProps = dispatch => (
  {
    submitLogin: (input) => {
      dispatch(Actions.login(input));
    },
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreenContainer);