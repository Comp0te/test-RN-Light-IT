import React, { useEffect, useState, useCallback } from 'react';
import { connect } from 'react-redux';

import { Actions } from '../../redux/requests/login/AC';
import { getIsLoading } from '../../redux/requests/login/selectors';
import { getIsTouchIdAuth } from '../../redux/settings/selector';

import touchIDService from '../../services/touchID.service';
import navService from '../../services/nav.service';

import LoginScreen from './LoginScreen';

const mapStateToProps = state => ({
  isLoading: getIsLoading(state),
  isTouchIdAuth: getIsTouchIdAuth(state),
});

const mapDispatchToProps = dispatch => (
  {
    submitLogin: (input) => {
      dispatch(Actions.login(input));
    },
  }
);

const LoginScreenContainer = (
  {
    isLoading,
    isTouchIdAuth,
    submitLogin,
  },
) => {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [biometryType, setBiometryType] = useState(null);

  useEffect(() => {
    touchIDService.isSupported()
      .then(biometry => setBiometryType(biometry));
  }, []);

  const onEnterUserName = useCallback((text) => {
    setUserName(text);
  }, []);

  const onEnterPassword = useCallback((text) => {
    setPassword(text);
  }, []);

  const onSubmit = useCallback(() => {
    submitLogin({
      username,
      password,
    });
  }, [submitLogin, username, password]);

  const onPressSignInWithTouchID = useCallback(() => {
    touchIDService.authenticate(
      'For sign in to application',
      () => navService.navigate(navService.ScreenRouteNames.PRODUCTS_SCREEN),
    );
  }, []);

  const toRegistrationScreen = useCallback(() => {
    navService.navigate(navService.ScreenRouteNames.REGISTRATION_SCREEN);
  }, []);

  return (
    <LoginScreen
      username={username}
      password={password}
      biometryType={biometryType}
      isLoading={isLoading}
      isTouchIdAuth={isTouchIdAuth}
      onEnterUserName={onEnterUserName}
      onEnterPassword={onEnterPassword}
      onSubmit={onSubmit}
      onPressSignInWithTouchID={onPressSignInWithTouchID}
      toRegistrationScreen={toRegistrationScreen}
    />
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreenContainer);
