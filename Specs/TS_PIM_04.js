/**
 * E2E_Test Script for adding employee
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
	
	it('should click on pim and add employee',function() {
    Signin.signinmethod();
	browser.sleep(5000);
	
		//click on admin menu
	HomePage.pim.click();
	HomePage.addemployee.click();
	HomePage.firstname.sendKeys("Barack");
	browser.sleep(3000);
	HomePage.lastname.sendKeys("Obama");
	
	HomePage.employeesave.click();
	browser.sleep(3000);
	});
});