import React, { useCallback, useState } from 'react';
import style from './style';
import { Color } from '../../Themes/colors'

import { Button } from 'react-native-material-ui';
import { SafeAreaView, View, Text, Switch } from 'react-native';
import SegmentedControlTab from "react-native-segmented-control-tab";

const SettingsScreen = (
  {
    language,
    isTouchIDAuth,
    logout,
    setLanguage,
    setIsTouchIDAuth,
  }
  ) => {
  const languagesArray = ["en", "ru"];

  const handleIndexChange = useCallback((index) => {
    setLanguage(languagesArray[index]);
  }, []);

  const handleSwitchChange = useCallback((value) => {
    setIsTouchIDAuth(value);
  }, []);

  const onPressLogOut = useCallback(() => {
    logout();
  }, []);

  return (
    <SafeAreaView style={style.safeArea}>
      <View style={style.root}>
        <View style={style.settingWrapper}>
          <Text style={style.text}>Application language</Text>
          <SegmentedControlTab
            activeTabStyle={style.activeTab}
            values={languagesArray}
            selectedIndex={languagesArray.indexOf(language)}
            onTabPress={handleIndexChange}
          />
        </View>
        <View style={style.settingWrapper}>
          <Text style={style.text}>Touch ID authorization</Text>
          <Switch
            thumbColor={Color.MAIN}
            trackColor={Color.WHITE}
            ios_backgroundColor={Color.WHITE}
            onValueChange={handleSwitchChange}
            value={isTouchIDAuth}
          />
        </View>
        <View style={style.settingWrapper}>
          <Button
            primary={true}
            onPress={onPressLogOut}
            text='Log out'
            upperCase={true}
            style={{text: style.logoutText}}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default React.memo(SettingsScreen);