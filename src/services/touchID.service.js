import React from 'react';
import TouchID from 'react-native-touch-id'

class TouchIDService {
  _biometryType;
  _error;

  async isSupported() {
    try {
      this._biometryType = await TouchID.isSupported({
        unifiedErrors: true,
        passcodeFallback: true,
      });

      return this._biometryType;
    } catch (e) {
      this._error = e;
    }
  }

  get biometryType() {
    return this._biometryType;
  }

  get error() {
    return this._error;
  }

  async authenticate(reason, successCallback = () => {}) {
    try {
      await TouchID.authenticate(reason, {
        unifiedErrors: true,
        title: 'Authentication Required',
        imageColor: '#e00606',
        imageErrorColor: '#ff0000',
        sensorDescription: 'Touch sensor',
        sensorErrorDescription: 'Failed',
        cancelText: 'Cancel',
      });

      successCallback();
    } catch (e) {
      this._error = e;
    }
  }
}

export default new TouchIDService();