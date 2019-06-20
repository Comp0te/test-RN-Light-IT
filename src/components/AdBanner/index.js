import React from 'react';
import { Platform } from 'react-native';
import { AdMobBanner } from "react-native-admob";
import { AdUnitID } from "../../utils/constants";

export const AdBanner = () => {
  return (
    <AdMobBanner
      adSize='banner'
      adUnitID={
        Platform.OS === 'android' ?
          AdUnitID.ANDROID :
          AdUnitID.IOS
      }
      testDevices={[AdMobBanner.simulatorId]}
      onAdFailedToLoad={error => console.log(error)}
    />
  );
};

export default React.memo(AdBanner);