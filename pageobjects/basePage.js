
var BasePage = function() {
	
	//to access home page
	this.get = function() {
	    browser.get('https://opensource-demo.orangehrmlive.com/');
	  };
   
    this.switchToWindow = function(windowHandleIndex, targetPage) {
        var that = this;
        // wait for new page to open...
        var handle = browser.wait(function() {
            return browser.getAllWindowHandles().then(function(handles) {
                // make sure window we're switching to exists...
                if(handles.length > windowHandleIndex) {
                    return handles[windowHandleIndex];
                } else {
                    throw new Error('window index ' + windowHandleIndex + ' does not exist');
                }
            });
        }, this.timeout.xxl);
        console.log('switching to window ' + windowHandleIndex);
        browser.switchTo().window(handle);
        // test that we're at the new page...
        targetPage.at();
        
    };
    
};
    
   module.exports = new BasePage();
