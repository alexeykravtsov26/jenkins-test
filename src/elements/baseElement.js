const logger = require('../../logger/logger');

class BaseElement {
    constructor(locator, elementName) {
        this.locator = locator;
        this.elementName = elementName;
    }

    async getElement() { return $(this.locator) }

    async getElements() { return $$(this.locator) }

    async isDisplayed() { 
        logger.logInfo(`Is ${this.elementName} displayed?`);
        const el = await this.getElements();
        return el.length > 0;
    }

    async click() {
        logger.logInfo(`Clicking on ${this.elementName}`);
        const el = await this.getElement();
        return el.click();
    }

    async waitForExist() {
        const el = await this.getElement();
        return el.waitForExist();
    }

} module.exports = BaseElement;