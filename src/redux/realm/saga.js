import {
  put, takeEvery, call, select, fork,
} from 'redux-saga/effects';
import SplashScreen from 'react-native-splash-screen';
import * as realmAC from './AC';
import * as authAC from '../auth/AC';
import * as settingsAC from '../settings/AC';
import { requestsAC } from '../requests/AC';
import { GoogleSignin } from 'react-native-google-signin';

import { getProductById } from '../products/selectors';
import { getReviewsByProductId } from '../reviews/selectors';
import { getUsersByProductIdAndReviews } from '../users/selectors';

import realmService from '../../services/realm.service';

export function* rehydrateStoreSaga() {
  yield call([GoogleSignin, GoogleSignin.configure]);
  yield call([realmService, realmService.initialize]);
  const auth = yield call([realmService, realmService.read], realmService.SchemaName.AUTH);
  const token = auth?.[0]?.token;

  if (token) {
    yield put(authAC.Actions.setToken(auth[0].token));
  }

  const settings = yield call([realmService, realmService.read], realmService.SchemaName.SETTINGS);
  const language = settings?.[0]?.language;
  const isTouchIDAuth = settings?.[0]?.isTouchIDAuth;

  if (language) {
    yield put(settingsAC.Actions.setLanguage(language));
  }

  if (isTouchIDAuth !== null) {
    yield put(settingsAC.Actions.setIsTouchIDAuth(isTouchIDAuth));
  }

  yield call([SplashScreen, SplashScreen.hide]);
}

export function* writeTokenToRealmSaga({ payload }) {
  yield call(
    [realmService, realmService.write],
    realmService.SchemaName.AUTH,
    {
      id: realmService.SchemaName.AUTH,
      token: payload.data.token,
    },
  );
}

export function* writeProductWithReviewsRealmSaga({ payload }) {
  const product = yield select(getProductById, payload.productId);
  const reviews = yield select(getReviewsByProductId, payload.productId);
  const users = yield select(getUsersByProductIdAndReviews, payload.productId, reviews);

  yield fork(
    [realmService, realmService.write],
    realmService.SchemaName.PRODUCT,
    product,
  );

  for (let i = 0; i < reviews.length; i += 1) {
    yield fork(
      [realmService, realmService.write],
      realmService.SchemaName.REVIEW,
      reviews[i],
    );
  }

  for (let i = 0; i < users.length; i += 1) {
    yield fork(
      [realmService, realmService.write],
      realmService.SchemaName.USER,
      users[i],
    );
  }
}

export function* writeLanguageRealmSaga({ payload }) {
  yield call(
    [realmService, realmService.write],
    realmService.SchemaName.SETTINGS,
    {
      id: realmService.SchemaName.SETTINGS,
      language: payload.language,
    },
  );
}

export function* writeIsTouchIDAuthRealmSaga({ payload }) {
  yield call(
    [realmService, realmService.write],
    realmService.SchemaName.SETTINGS,
    {
      id: realmService.SchemaName.SETTINGS,
      isTouchIDAuth: payload.isEnabled,
    },
  );
}

export function* deleteAllRealmDataSaga() {
  yield call(
    [realmService, realmService.deleteAll],
  );
}

export function* realmRootSaga() {
  yield takeEvery([
    realmAC.ActionTypes.REHYDRATE_STORE,
  ], rehydrateStoreSaga);

  yield takeEvery([
    requestsAC.login.ActionTypes.LOGIN_REQUEST_SUCCESS,
    requestsAC.register.ActionTypes.REGISTER_REQUEST_SUCCESS,
  ], writeTokenToRealmSaga);

  yield takeEvery([
    realmAC.ActionTypes.SAVE_PRODUCT_WITH_REVIEWS,
  ], writeProductWithReviewsRealmSaga);

  yield takeEvery([
    settingsAC.ActionTypes.SET_LANGUAGE,
  ], writeLanguageRealmSaga);

  yield takeEvery([
    settingsAC.ActionTypes.SET_IS_TOUCH_ID_AUTH,
  ], writeIsTouchIDAuthRealmSaga);

  yield takeEvery([
    authAC.ActionTypes.AUTH_LOGOUT,
  ], deleteAllRealmDataSaga);
}
