const BaseElement = require('./baseElement');
const logger = require('../../logger/logger');

class Checkbox extends BaseElement {
    constructor(locator, elementName) {
        super(locator, elementName);
    }

    async isEnabled() {
        logger.logInfo(`Is ${this.elementName} enabled ?`);
        const el = await this.getElement();
        return el.isEnabled();
    }
    
} module.exports = Checkbox;