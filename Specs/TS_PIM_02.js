/**
 * E2E_Test Script for checking general information
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
	
	it('should login and check for general information',function() {
    Signin.signinmethod();
	browser.sleep(5000);
	
	//click on admin menu
	HomePage.admin_menu.click();

	HomePage.organization_menu.click();

	//click on generl information
	HomePage.generalinformation.click();
	
	browser.driver.manage().window().maximize();
	
	browser.sleep(5000);
	
	
	});
});