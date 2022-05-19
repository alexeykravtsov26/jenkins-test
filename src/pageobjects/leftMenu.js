const BaseForm = require("./baseForm");
const Label = require('../elements/labelElement');
const Link = require('../elements/linkElement');

class LeftMenu extends BaseForm {
    constructor() {
        super(new Label("#side_bar", "Left Menu is displayed indicator"), "Left Menu");
    }

    get myPageLink() {
        return new Link("//li[@id='l_pr']//span[contains(@class, 'left_label') and contains(@class, 'inl_bl')]", "My Page link");
    }

    async myPageLinkClick() {
        return this.myPageLink.click();
    }

} module.exports = new LeftMenu();