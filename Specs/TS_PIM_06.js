/**
 * for mouse hover graph 
 */
var testdata= require('../TestData/testData.json');
var Signin= require('../PageObjects/SigninObject.js');
var BasePage=require('../pageobjects/basePage.js');
var HomePage=require('../pageobjects/homePageObjects.js')

describe ('Login  to application', function() {
	it('Enter the url', function() {		
	browser.ignoreSynchronization=true;
	BasePage.get();
    browser.sleep(5000);
	});
	
	it('should click on graph',function() {
    Signin.signinmethod();
	browser.sleep(5000);
	
	
	HomePage.dashboard.click();
	browser.sleep(5000);
	
	element(by.xpath('//*[@id="pieLabel2"]/div')).click();
	browser.sleep(3000);
	
	});
});