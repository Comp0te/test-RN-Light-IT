import React from 'react';
import style from './style';

import { SafeAreaView, KeyboardAvoidingView, ScrollView, View, Platform } from 'react-native';
import { TextField } from 'react-native-materialui-textfield';
import { Button } from 'react-native-material-ui';

const RegistrationScreen = (
  {
    username,
    password,
    confirmPassword,
    confirmPasswordError,
    isLoading,
    onEnterUserName,
    onEnterPassword,
    onEnterConfirmPassword,
    onBlurConfirmPassword,
    onSubmit,
  },
) => {

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