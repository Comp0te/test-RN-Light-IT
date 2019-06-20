import React from 'react';
import style from './style';

import { SafeAreaView, KeyboardAvoidingView, ScrollView, View, Platform, Text } from 'react-native';
import { TextField } from 'react-native-materialui-textfield';
import Link from '../../components/Link'
import { Button } from 'react-native-material-ui';

const LoginScreen = (
  {
    username,
    password,
    biometryType,
    isLoading,
    isTouchIdAuth,
    onEnterUserName,
    onEnterPassword,
    onSubmit,
    onPressSignInWithTouchID,
    toRegistrationScreen,
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
          </View>
          <View style={style.signInWrapper}>
            <Button
              primary={true}
              text="Submit"
              onPress={onSubmit}
              disabled={isLoading}
            />
          </View>
          {
            isTouchIdAuth && biometryType &&
            <View style={style.signInTouchIDWrapper}>
              <Button
                primary={true}
                text={`Sign in with ${Platform.OS === 'android' ? 'Touch' : biometryType}`}
                onPress={onPressSignInWithTouchID}
              />
            </View>
          }
          <View style={style.singUpWrapper}>
            <Text style={style.text}>
              {'Do not have an account? '.toUpperCase()}
            </Text>
            <Link
              toScreen={toRegistrationScreen}
              text='SIGN UP'
            />
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default React.memo(LoginScreen);