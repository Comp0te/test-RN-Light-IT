import React from 'react';
import { useTranslation } from 'react-i18next';

import {
  SafeAreaView, KeyboardAvoidingView, ScrollView, View, Platform, Text,
} from 'react-native';
import { GoogleSigninButton } from 'react-native-google-signin';
import { LoginButton } from 'react-native-fbsdk';
import { TextField } from 'react-native-materialui-textfield';
import { Button } from 'react-native-material-ui';
import TextLink from '../../components/TextLink';
import Toast from '../../components/Toast';
import { ScreenRouteNames } from '../../utils/constants';
import style from './style';

const LoginScreen = (
  {
    username,
    password,
    biometryType,
    error,
    isLoading,
    isTouchIdAuth,
    onEnterUserName,
    onEnterPassword,
    onSubmit,
    onPressSignInWithTouchID,
    toRegistrationScreen,
    onFBLoginFinished,
    onPressGoogleSingIn,
  },
) => {
  const { t } = useTranslation(ScreenRouteNames.LOGIN_SCREEN);

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
          </View>
          <View style={style.signInWrapper}>
            <Button
              primary
              text={t('Submit')}
              onPress={onSubmit}
              disabled={isLoading}
            />
          </View>
          <GoogleSigninButton
            style={style.googleSigninButton}
            size={GoogleSigninButton.Size.Standard}
            color={GoogleSigninButton.Color.Auto}
            onPress={onPressGoogleSingIn}
          />
          <LoginButton onLoginFinished={onFBLoginFinished} />
          {
            isTouchIdAuth && biometryType
            && (
            <View style={style.signInTouchIDWrapper}>
              <Button
                primary
                text={`Sign in with ${Platform.OS === 'android' ? 'TouchID' : biometryType}`}
                onPress={onPressSignInWithTouchID}
              />
            </View>
            )
          }
          <View style={style.singUpWrapper}>
            <Text style={style.text}>
              {t('Do not have an account').toUpperCase()}
            </Text>
            <TextLink
              toScreen={toRegistrationScreen}
              text={t('Sign up')}
            />
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
      <Toast
        type="error"
        message={error}
      />
    </SafeAreaView>
  );
};

export default React.memo(LoginScreen);
