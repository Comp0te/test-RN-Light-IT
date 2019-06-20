import React from 'react';
import { connect } from 'react-redux';
import { Actions as authActions } from '../../redux/auth/AC';
import { Actions as settingsActions } from '../../redux/settings/AC';
import { getLanguage, getIsTouchIdAuth } from '../../redux/settings/selector';
import SettingsScreen from './SettingsScreen'

const SettingsScreenContainer = (
  {
    language,
    isTouchIDAuth,
    logout,
    setLanguage,
    setIsTouchIDAuth,
  },
) => {

  return (
    <SettingsScreen
      language={language}
      isTouchIDAuth={isTouchIDAuth}
      logout={logout}
      setLanguage={setLanguage}
      setIsTouchIDAuth={setIsTouchIDAuth}
    />
  );
};

const mapStateToProps = state => ({
  language: getLanguage(state),
  isTouchIDAuth: getIsTouchIdAuth(state),
});

const mapDispatchToProps = dispatch => (
  {
    logout: () => {
      dispatch(authActions.logout());
    },
    setLanguage: (language) => {
      dispatch(settingsActions.setLanguage(language));
    },
    setIsTouchIDAuth: (isEnabled) => {
      dispatch(settingsActions.setIsTouchIDAuth(isEnabled));
    },
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(SettingsScreenContainer);