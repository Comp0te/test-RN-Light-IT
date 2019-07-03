import React, { useEffect, useState, useCallback } from 'react';
import { connect } from 'react-redux';

import { AccessToken } from 'react-native-fbsdk';
import { GoogleSignin, statusCodes } from 'react-native-google-signin';
import { Alert } from 'react-native';
import * as PropTypes from 'prop-types';
import { Actions } from '../../redux/requests/login/AC';
import { getIsLoading, getErrors } from '../../redux/requests/login/selectors';
import { getIsTouchIdAuth } from '../../redux/settings/selector';

import touchIDService from '../../services/touchID.service';
import navService from '../../services/nav.service';

import LoginScreen from './LoginScreen';

const mapStateToProps = state => ({
  isLoading: getIsLoading(state),
  isTouchIdAuth: getIsTouchIdAuth(state),
  error: getErrors(state),
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
    error,
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

  const onFBLoginFinished = useCallback((err, result) => {
    if (err) {
      console.log(`login has error: ${result.error}`);
    } else if (result.isCancelled) {
      console.log('login is cancelled.');
    } else {
      AccessToken.getCurrentAccessToken()
        .then((data) => {
          Alert.alert('token - ', data.accessToken.toString());
          navService.navigate(navService.ScreenRouteNames.PRODUCTS_SCREEN);
        });
    }
  }, []);

  const onPressGoogleSingIn = useCallback(async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      navService.navigate(navService.ScreenRouteNames.PRODUCTS_SCREEN);
    } catch (err) {
      if (err.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (err.code === statusCodes.IN_PROGRESS) {
        // operation (f.e. sign in) is in progress already
      } else if (err.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
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
      onFBLoginFinished={onFBLoginFinished}
      onPressGoogleSingIn={onPressGoogleSingIn}
      error={error}
    />
  );
};

LoginScreenContainer.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  isTouchIdAuth: PropTypes.bool.isRequired,
  submitLogin: PropTypes.func.isRequired,
};

LoginScreenContainer.defaultProps = {
  error: null,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreenContainer);
