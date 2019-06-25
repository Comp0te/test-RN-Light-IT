class I18nService {
  _i18n;

  set i18n(value) {
    this._i18n = value;
  }

  changeLanguage(language) {
    if (this._i18n.isInitialized) {
      this._i18n.changeLanguage(language);
    }
  }
}

export default new I18nService();
