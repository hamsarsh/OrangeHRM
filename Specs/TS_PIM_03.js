/**
 * E2E_Test Script edit and save general information
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
	
	it('edit and enter details',function() {
	   		
	   		browser.executeScript('window.scrollTo(10000,10000);');
	   		browser.sleep(5000);
	   		HomePage.edit.click();
	   		browser.sleep(5000);
	   	
	   		//select country as India
	   		var select = element(by.id("organization_country"));
	   		select.$('[value="US"]').click();
	   		
	   		HomePage.taxid.clear();
	   		HomePage.taxid.sendKeys("123456");
	   		
	   		browser.sleep(3000);
	   		
	   		HomePage.fax.clear();
	   		HomePage.fax.sendKeys("123+");
	   		
	   		browser.sleep(5000);
	   		
	   		HomePage.save.click();
	   		browser.sleep(5000);
	   		
	   		  		
	   		/*HomePage.streets2.clear();
	   		HomePage.streets2.sendKeys("streets2");
	   		browser.sleep(3000);
	   		HomePage.city.clear();
	   		HomePage.city.sendKeys("Bangalore");
	   		browser.sleep(3000);
	   		HomePage.province.clear();
	   		HomePage.province.sendKeys("Karnataka");
	   		browser.sleep(3000);
	   		HomePage.zipcode.clear();
	   		HomePage.zipcode.sendKeys("560079");
	   		browser.sleep(3000);   		

	   		HomePage.phone.clear();
	   		HomePage.phone.sendKeys("9999l");
	   		browser.sleep(3000);
	   		   
	   		HomePage.email.clear();
	   		HomePage.email.sendKeys("test123@gmail.com");
	   		browser.sleep(3000);
	   		*/
	});
	
});