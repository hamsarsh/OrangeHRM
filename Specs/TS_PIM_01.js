/**
 * E2E_Test Script for logging in successfully
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
	
	it('should enter username and password',function() {
    Signin.signinmethod();
	browser.sleep(5000);
	console.log("signed in sucessfully");   
	});
});