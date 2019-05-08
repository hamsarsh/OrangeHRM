/*
sign in using data from json file
*
 * 
 */

var testdata= require('../TestData/testData.json');

var Signin = function() {
	
                      
		var username=element(by.id("txtUsername"));
		var password=element(by.id("txtPassword"));			
		var LoginButton=element(by.xpath('//*[@id="btnLogin"]'));	
		
			
		this.signinmethod = function() {
			
			//read data from json file
			username.sendKeys(testdata.User_name);     
		  
			password.sendKeys(testdata.User_password);  
			
			LoginButton.click();
		    browser.sleep(5000);
		  };

		}

module.exports = new Signin();