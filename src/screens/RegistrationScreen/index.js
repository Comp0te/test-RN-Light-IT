import React, { useCallback, useState } from 'react';
import { connect } from 'react-redux';
import * as PropTypes from 'prop-types';
import { Actions } from '../../redux/requests/register/AC';
import { getIsLoading } from '../../redux/requests/register/selectors';
import RegistrationScreen from './RegistrationScreen';

const RegistrationScreenContainer = ({ submitRegister, isLoading }) => {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const onEnterUserName = useCallback((text) => {
    setUserName(text);
  }, []);

  const onEnterPassword = useCallback((text) => {
    setPassword(text);
  }, []);

  const onEnterConfirmPassword = useCallback((text) => {
    setConfirmPassword(text);
  }, []);

  const onBlurConfirmPassword = useCallback(() => {
    if (password !== confirmPassword) {
      setConfirmPasswordError('Passwords do not match');
    } else {
      setConfirmPasswordError('');
    }
  }, [password, confirmPassword]);

  const onSubmit = useCallback(() => {
    if (!confirmPasswordError) {
      submitRegister({
        username,
        password,
      });
    }
  }, [submitRegister, username, password]);


  return (
    <RegistrationScreen
      username={username}
      password={password}
      confirmPassword={confirmPassword}
      confirmPasswordError={confirmPasswordError}
      isLoading={isLoading}
      onEnterUserName={onEnterUserName}
      onEnterPassword={onEnterPassword}
      onEnterConfirmPassword={onEnterConfirmPassword}
      onBlurConfirmPassword={onBlurConfirmPassword}
      onSubmit={onSubmit}
    />
  );
};

RegistrationScreenContainer.propTypes = {
  submitRegister: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  isLoading: getIsLoading(state),
});

const mapDispatchToProps = dispatch => (
  {
    submitRegister: (input) => {
      dispatch(Actions.register(input));
    },
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationScreenContainer);
