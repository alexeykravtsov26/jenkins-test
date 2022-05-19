const BaseForm = require('./baseForm');
const Button = require('../elements/buttonElement');

class LoginPage extends BaseForm {
    constructor() {
        super(new Button("//button[contains(@class, 'VkIdForm__signInButton')]", "Sign in Button"), "Login Page");
    }

    get signInButton() {
        return this.uniqueElement;
    }

    async signInButtonClick() {
        await this.signInButton.click();
    }

} module.exports = new LoginPage();