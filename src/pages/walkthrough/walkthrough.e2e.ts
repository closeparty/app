import { browser, by, element } from 'protractor';

describe('App', () => {

    beforeEach(() => {
        browser.get('/');
    });

    it('should have a title', () => {
        var title = element(by.className('main-title'));
        expect((title).isDisplayed()).toBeTruthy();
    });
    
});
