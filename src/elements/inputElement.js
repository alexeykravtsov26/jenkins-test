const BaseElement = require('./baseElement');
const logger = require('../../logger/logger');

class Input extends BaseElement {
    constructor(locator, elementName) {
        super(locator, elementName);
    }

    async setValue(value) {
        logger.logInfo(`Setting ${value} in ${this.elementName} element`);
        const el = await this.getElement();
        return el.setValue(value);
    }

} module.exports = Input;