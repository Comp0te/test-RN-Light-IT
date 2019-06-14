import React, { useCallback, useState } from 'react';
import style from './style';

import { SafeAreaView, KeyboardAvoidingView, ScrollView, View, Platform, Text } from 'react-native';
import { TextField } from 'react-native-materialui-textfield';
import Link from '../../components/Link'
import { Button } from 'react-native-material-ui';

import navService from '../../services/nav.service';

const LoginScreen = ({submitLogin, isLoading}) => {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const onEnterUserName = useCallback((text) => {
    setUserName(text);
  }, []);

  const onEnterPassword = useCallback((text) => {
    setPassword(text);
  }, []);

  const onSubmit = useCallback(() => {
    submitLogin({
      username,
      password,
    });
  }, [submitLogin]);

  const toRegistrationScreen = () => {
    navService.navigate('RegistrationScreen');
  };

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