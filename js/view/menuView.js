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
	this.menuItems = container.find("#menuItems");

	//load the menu with it's dishes.
	var loadMenu = function() {
		menuTable.find('tbody').html(''); //clear menu
		var menu = model.getFullMenu();
		$.each(menu, function(i, o){
			var name = o.name;
			var id = o.id;
			var price = model.getDishCost(id);

			menuTable.find('tbody').prepend('<tr><td><a value="'+id+'">'+name+'</a></td><td>'+price+'</td><td><span class="glyphicon glyphicon-remove" value="'+id+'"></span></td></tr>');
			//menuTable.append('<a class="list-group-item clearfix" value="'+id+'">'+name+'<span class="pull-right">'+price+' <span class="glyphicon glyphicon-remove"></span></span></a>');
		});
	}
	

	// The observer update function, triggered by the model when there are changes
	this.update = function(){
		this.totalCost.html(model.getTotalMenuPrice());
		loadMenu();
		this.numberOfGuests.val(model.getNumberOfGuests());
		
		if(model.getFullMenu().length == 0) {
			this.confirmButton.addClass("disabled");
		} else {
			this.confirmButton.removeClass("disabled");
		}
	}

	//Go to the overview
	this.confirmFunc = function(){
		$("#wrapper").hide();
		$("#overviewView").show();
	}

	//View the selected dish.
	this.viewDish = function(){
		$("#selectDishView").hide();
		$("#dishView").show();		
	}

	this.numberOfGuests.val(model.getNumberOfGuests());
	loadMenu();
	this.totalCost.html(model.getTotalMenuPrice());
	model.addObserver(this);

}
 
