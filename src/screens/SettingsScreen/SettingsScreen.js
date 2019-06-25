import React from 'react';
import { useTranslation } from 'react-i18next';

import { Button } from 'react-native-material-ui';
import {
  SafeAreaView, View, Text, Switch,
} from 'react-native';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import { ScreenRouteNames } from '../../utils/constants';
import Color from '../../Themes/colors';
import style from './style';

const SettingsScreen = (
  {
    languagesArray,
    language,
    isTouchIDAuth,
    handleLanguageChange,
    handleIsTouchIDAuthChange,
    onPressLogOut,
  },
) => {
  const { t } = useTranslation(ScreenRouteNames.SETTINGS_SCREEN);

  return (
    <SafeAreaView style={style.safeArea}>
      <View style={style.root}>
        <View style={style.settingWrapper}>
          <Text style={style.text}>{t('Application language')}</Text>
          <SegmentedControlTab
            activeTabStyle={style.activeTab}
            values={languagesArray}
            selectedIndex={languagesArray.indexOf(language)}
            onTabPress={handleLanguageChange}
          />
        </View>
        <View style={style.settingWrapper}>
          <Text style={style.text}>{t('Touch ID')}</Text>
          <Switch
            thumbColor={Color.MAIN}
            trackColor={Color.WHITE}
            ios_backgroundColor={Color.WHITE}
            onValueChange={handleIsTouchIDAuthChange}
            value={isTouchIDAuth}
          />
        </View>
        <View style={style.settingWrapper}>
          <Button
            primary
            onPress={onPressLogOut}
            text={t('Log out')}
            upperCase
            style={{ text: style.logoutText }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default React.memo(SettingsScreen);
