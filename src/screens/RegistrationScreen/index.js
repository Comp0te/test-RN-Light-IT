import React from 'react';
import { connect } from 'react-redux';
import { Actions } from '../../redux/requests/register/AC';
import { getIsLoading } from '../../redux/requests/register/selectors';
import RegistrationScreen from './RegistrationScreen'

const RegistrationScreenContainer = ({submitRegister, isLoading}) => {

  return (
    <RegistrationScreen
      isLoading={isLoading}
      submitRegister={submitRegister}
    />
  );
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