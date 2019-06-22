import { call, takeEvery } from 'redux-saga/effects';
import * as fromActions from '../settings/AC';

import i18nService from '../../services/i18n.service';

export function* changeI18nLanguageSaga({payload}) {
  yield call([i18nService, i18nService.changeLanguage], payload.language);
}

export function* settingsRootSaga() {
  yield takeEvery([
    fromActions.ActionTypes.SET_LANGUAGE,
  ], changeI18nLanguageSaga);
}
