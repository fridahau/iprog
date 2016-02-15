//ExampleView Object constructor
var MenuView = function (container, model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.numberOfGuests = container.find("#numberOfGuests");
	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");
	this.confirmButton = container.find("#confirmButton");
	this.menuTable = container.find("#menuTable");
	this.totalCost = container.find("#totalCost");

	
	this.numberOfGuests.html(model.getNumberOfGuests());
	this.totalCost.html(model.getTotalMenuPrice());


	var loadMenu = function(){
		// Gett the menu array
		var menu = model.getFullMenu();
		for (var i = 0; i < menu.length; i++){
			var dishName = menu[0].getDish
			menuTable.find('tbody').append('')
		}
	}

}
 
