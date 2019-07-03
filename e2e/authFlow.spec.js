const username = `compote${Math.floor((Math.random() * 10000))}`
const password = 'Q1'

describe('Auth Flow', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have login screen', async () => {
    await expect(element(by.id('loginUserName'))).toBeVisible();
  });

  it('should register successfully', async () => {
    await element(by.id('textLink')).tap();

    await element(by.id('RegisterUserName')).typeText(username);
    await element(by.id('RegisterPassword')).typeText(password);
    await element(by.id('RegisterPasswordConfirm')).typeText(password);
    await element(by.id('RegisterButton')).tap();
    await element(by.id('RegisterButton')).tap();

    await expect(element(by.id('productsScreen'))).toBeVisible();
    await expect(element(by.id('RegisterUserName'))).toNotExist();
  });

  it('should login successfully', async () => {
    await device.reloadReactNative();

    await element(by.id('loginUserName')).typeText(username);
    await element(by.id('loginPassword')).typeText(password);
    await element(by.id('loginButton')).tap();

    await expect(element(by.id('productsScreen'))).toBeVisible();
    await expect(element(by.id('loginUserName'))).toNotExist();
  });
});
