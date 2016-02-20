//ExampleView Object constructor
var MenuView = function (container, model) {
	
	// Get all the relevant elements of the view (ones that show data
  // and/or ones that responed to interaction)
	this.numberOfGuests = container.find("#numberOfGuests");
	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");
	this.confirmButton = container.find("#confirmButton");
	var menuTable = container.find("#menuTable");
	this.totalCost = container.find("#totalCost");

	
	var loadMenu = function() {
		menuTable.find('tbody').html(''); //clear menu
		var menu = model.getFullMenu();
		$.each(menu, function(i, o){
			var name = o.name;
			var id = o.id;
			var price = model.getDishCost(id);

			menuTable.find('tbody').prepend('<tr><td>'+name+'</td><td>'+price+'</td></tr>');
		});
	}
	

	// The observer update function, triggered by the model when there are changes
	this.update = function(){
		this.totalCost.html(model.getTotalMenuPrice());
		loadMenu();

		this.numberOfGuests.val(model.getNumberOfGuests());
	}

	this.numberOfGuests.val(model.getNumberOfGuests());
	loadMenu();
	this.totalCost.html(model.getTotalMenuPrice());
	
	model.addObserver(this);

}
 
