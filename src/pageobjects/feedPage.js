const BaseForm = require("./baseForm");
const Label = require('../elements/labelElement');

class FeedPage extends BaseForm {
    constructor() {
        super(new Label("#submit_post_box", "Feed Page is opened indicator"), "Feed Page");
    }

    


} module.exports = new FeedPage();