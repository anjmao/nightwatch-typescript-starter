import { NightwatchBrowser } from 'nightwatch';

module.exports = {
    'Open Google': (browser: NightwatchBrowser) => {
        browser
            .url('http://www.google.lt')
            .waitForElementVisible('body', 1000)
            .end();
    }
};