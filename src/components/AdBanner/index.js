import React from 'react';
import { Platform } from 'react-native';
import firebase from 'react-native-firebase';
import { AdUnitID } from "../../utils/constants";

export const AdBanner = () => {
  const Banner = firebase.admob.Banner;
  const AdRequest = firebase.admob.AdRequest;
  const request = new AdRequest();
  request.addTestDevice();

  return (
    <Banner
      unitId={
        Platform.OS === 'android' ?
          AdUnitID.ANDROID :
          AdUnitID.IOS
      }
      size='SMART_BANNER'
      request={request.build()}
    />
  );
};

export default React.memo(AdBanner);
