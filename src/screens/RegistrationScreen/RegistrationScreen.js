import React, { useCallback, useState } from 'react';
import style from './style';

import { SafeAreaView, KeyboardAvoidingView, ScrollView, View, Platform } from 'react-native';
import { TextField } from 'react-native-materialui-textfield';
import { Button } from 'react-native-material-ui';

const RegistrationScreen = ({submitRegister, isLoading}) => {
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
    <SafeAreaView style={style.safeArea}>
      <ScrollView contentContainerStyle={style.safeArea}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          style={style.root}
        >
          <View style={style.fieldWrapper}>
            <TextField
              label='User Name'
              value={username}
              onChangeText={onEnterUserName}
            />
            <TextField
              label='Password'
              value={password}
              onChangeText={onEnterPassword}
              secureTextEntry={true}
            />
            <TextField
              label='Confirm Password'
              value={confirmPassword}
              onChangeText={onEnterConfirmPassword}
              secureTextEntry={true}
              onBlur={onBlurConfirmPassword}
              error={confirmPasswordError}
            />
          </View>
          <View style={style.signInWrapper}>
            <Button
              primary={true}
              text="Submit"
              onPress={onSubmit}
              disabled={isLoading}
            />
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default React.memo(RegistrationScreen);