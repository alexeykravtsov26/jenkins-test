const logger = require('../../logger/logger');

class BaseForm {
    constructor(uniqueElement, formName) {
        this.uniqueElement = uniqueElement;
        this.formName = formName;
    }

    async isPageOpened() {
        logger.logInfo(`Waiting for ${this.formName} appearance`);
        await this.uniqueElement.waitForExist();
        logger.logInfo(`Is ${this.formName} displayed ?`);
        return this.uniqueElement.isDisplayed();
    }
    
} module.exports = BaseForm;