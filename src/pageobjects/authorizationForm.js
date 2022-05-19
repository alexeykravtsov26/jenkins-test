const BaseForm = require("./baseForm");
const Input = require('../elements/inputElement');
const Button = require('../elements/buttonElement');

class AuthorizationForm extends BaseForm {
    constructor() {
        super(new Input("//input[@name='login']", "Login input"), "Authorization Form");
    }

    get loginTextField() {
        return this.uniqueElement;
    }

    get continueButton() {
        return new Button("//button[@type='submit']", "Continue submit button");
    }

    get passwordTextField() {
        return new Input("//input[@type='password']", "Password input");
    }

    async setValueIntoLoginTextField(value) {
        return this.loginTextField.setValue(value);
    }

    async continueButtonClick() {
        return this.continueButton.click();
    }

    async setPasswordIntoPasswordTextField(password) {
        return this.passwordTextField.setValue(password);
    }

} module.exports = new AuthorizationForm();