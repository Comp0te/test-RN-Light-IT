import React from 'react';
import { useTranslation } from 'react-i18next';

import {
  SafeAreaView, KeyboardAvoidingView, ScrollView, View, Platform,
} from 'react-native';
import { TextField } from 'react-native-materialui-textfield';
import { Button } from 'react-native-material-ui';
import { ScreenRouteNames } from '../../utils/constants';
import style from './style';

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
  const { t } = useTranslation(ScreenRouteNames.REGISTRATION_SCREEN);

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
              secureTextEntry
            />
            <TextField
              label={t('Confirm Password')}
              value={confirmPassword}
              onChangeText={onEnterConfirmPassword}
              secureTextEntry
              onBlur={onBlurConfirmPassword}
              error={confirmPasswordError}
            />
          </View>
          <View style={style.signInWrapper}>
            <Button
              primary
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
