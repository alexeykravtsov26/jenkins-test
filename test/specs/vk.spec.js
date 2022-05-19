const assert = require('chai').assert;
require('./hooks');
const loginpage = require('../../src/pageobjects/loginPage');
const authorizationform = require('../../src/pageobjects/authorizationForm');
const testUser = require('../../resources/testUser.json');
const feedpage = require('../../src/pageobjects/feedPage');
const leftmenu = require('../../src/pageobjects/leftMenu');

describe('Smart VK API', () => {
    it('Should run test scenarios', async () => {
        assert.isTrue(await loginpage.isPageOpened(), 'Login page should be opened');
        await loginpage.signInButtonClick();
        assert.isTrue(await authorizationform.isPageOpened(), 'Sign in form should be opened');
        await authorizationform.setValueIntoLoginTextField(testUser.login);
        await authorizationform.continueButtonClick();
        await authorizationform.setPasswordIntoPasswordTextField(testUser.password);
        await authorizationform.continueButtonClick();
        assert.isTrue(await feedpage.isPageOpened(), 'Feed Page should be opened');
        await leftmenu.myPageLinkClick();
    });
});