

//test script for upload image


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
	
	it('should upload image',function() {
    Signin.signinmethod();
	browser.sleep(5000);
	
	//click on pim menu
	HomePage.pim.click();
	HomePage.addemployee.click();
	HomePage.firstname.sendKeys("Barack1");
	browser.sleep(3000);
	HomePage.lastname.sendKeys("Obama1");
	
	//image upload	
	browser.sleep(5000);	
	var path = require('path');
	element(by.id('photofile')).click();
	
	  var fileToUpload = '..//3G Logo.jpg';
	  var absolutePath = path.resolve(__dirname, fileToUpload);
	  $('input[type="file"]').sendKeys(absolutePath);

	HomePage.employeesave.click();
	browser.sleep(3000);
	});
});