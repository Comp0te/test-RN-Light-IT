import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import * as PropTypes from 'prop-types';
import { Languages } from '../../utils/constants';
import { Actions as authActions } from '../../redux/auth/AC';
import { Actions as settingsActions } from '../../redux/settings/AC';
import { getLanguage, getIsTouchIdAuth } from '../../redux/settings/selector';
import SettingsScreen from './SettingsScreen';

const SettingsScreenContainer = (
  {
    language,
    isTouchIDAuth,
    logout,
    setLanguage,
    setIsTouchIDAuth,
  },
) => {
  const languagesArray = Object.values(Languages);

  const handleLanguageChange = useCallback((index) => {
    setLanguage(languagesArray[index]);
  }, []);

  const handleIsTouchIDAuthChange = useCallback((value) => {
    setIsTouchIDAuth(value);
  }, []);

  const onPressLogOut = useCallback(() => {
    logout();
  }, []);

  return (
    <SettingsScreen
      languagesArray={languagesArray}
      language={language}
      isTouchIDAuth={isTouchIDAuth}
      handleLanguageChange={handleLanguageChange}
      handleIsTouchIDAuthChange={handleIsTouchIDAuthChange}
      onPressLogOut={onPressLogOut}
    />
  );
};

SettingsScreenContainer.propTypes = {
  language: PropTypes.string.isRequired,
  isTouchIDAuth: PropTypes.bool,
  logout: PropTypes.func.isRequired,
  setLanguage: PropTypes.func.isRequired,
  setIsTouchIDAuth: PropTypes.func.isRequired,
};

SettingsScreenContainer.defaultProps = {
  isTouchIDAuth: true,
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
