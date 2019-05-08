/**
 * all element locators 
 */

var HomePage = function() {
	
	
	this.admin_menu=element(by.xpath('//*[@id="menu_admin_viewAdminModule"]/b'));		
	this.organization_menu=element(by.xpath('//*[@id="menu_admin_Organization"]'));
	this.generalinformation=element(by.xpath('//*[@id="menu_admin_viewOrganizationGeneralInformation"]'));
		
	this.edit=element(by.id("btnSaveGenInfo"));
	
	this.country=element(by.id('//*[@id="organization_country"]'));
	this.streets1=element(by.id('//*[@id="organization_street1"]'));
	this.streets2=element(by.id('//*[@id="organization_street2"]'));
	this.city=element(by.id('//*[@id="organization_city"]'));
	this.zipcode=element(by.id('//*[@id="organization_zipCode"]'));	
	this.province=element(by.id('//*[@id="organization_province"]'));	
	//*[@id="organization_province"]
	this.taxid=element(by.id("organization_taxId"));		
	this.fax=element(by.id("organization_fax"));	
	this.phone=element(by.id("organization_phone"));
	this.email=element(by.id('//*[@id="organization_email"]'));
		
	this.save=element(by.id("btnSaveGenInfo"));
	
	//testcase4 elements
	this.pim=element(by.id('menu_pim_viewPimModule'));
	this.addemployee=element(by.id('menu_pim_addEmployee'));
	this.firstname=element(by.id('firstName'));
	this.lastname=element(by.id('lastName'));
	this.employeesave=element(by.id('btnSave'));

	//testcase6 element
	this.dashboard=element(by.id('menu_dashboard_index'));
		
	
	}

module.exports = new HomePage();