import React from 'react';
import style from './style';
import { useTranslation } from 'react-i18next';
import { ScreenRouteNames } from '../../utils/constants';

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

  const {t} = useTranslation(ScreenRouteNames.REGISTRATION_SCREEN);

  return (
    <SafeAreaView style={style.safeArea}>
      <ScrollView contentContainerStyle={style.safeArea}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          style={style.root}
        >
          <View style={style.fieldWrapper}>
            <TextField
              label={t('User Name')}
              value={username}
              onChangeText={onEnterUserName}
            />
            <TextField
              label={t('Password')}
              value={password}
              onChangeText={onEnterPassword}
              secureTextEntry={true}
            />
            <TextField
              label={t('Confirm Password')}
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
              text={t('Submit')}
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