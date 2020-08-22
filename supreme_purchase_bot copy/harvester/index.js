const puppeteer = require('puppeteer');
const request = require('request-promise-native');
const poll = require('promise-poller').default;

const config = {
    sitekey: '6LeWwRkUAAAAAOBsau7KpuC9AV-6J8mhw4AjC3Xz',
    pageurl:  'https://www.supremenewyork.com/checkout',
    apiKey: require('./api-key'),
    apiSubmitUrl: 'http://2captcha.com/in.php',
    apiRetrieveUrl: 'http://2captcha.com/res.php'
}

const