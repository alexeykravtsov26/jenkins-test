beforeEach(async () => {

    await browser.reloadSession();

    await browser.url('https://vk.com/');
    await browser.maximizeWindow();

});