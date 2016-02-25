//ExampleView Object constructor
var OverviewView = function (container, model) {
	this.numberOfGuests = container.find("#numberOfGuests");
	this.editDinnerBtn = container.find("#editDinner");
	var menuList = container.find("#menuList");
	var totalPrice = container.find("#totalPrice");
	this.printRecipeBtn = container.find("#printRecipe");

	//container.html('');
	var loadMenu = function (){
		var menu = model.getFullMenu();
		menuList.find('tbody').html(''); //clear;
		$.each(menu, function(i, o){
			var dishImage = o.image;
			var dishName = o.name;
			var dishPrice = model.getDishCost(o.id);
			menuList.find('tbody').append('<td><img src="images/'+dishImage+'" class="img-thumbnail"><h3>'+dishName+'</h3><p>SEK '+dishPrice+'</p></td>');
		});

		totalPrice.html(model.getTotalMenuPrice());
	}

	//Update the view by reloading the menu and number of guests.
	this.update = function() {
		loadMenu();
		this.numberOfGuests.html(model.getNumberOfGuests());
	}

	//Go to the instruction view.
	this.printFunc = function(){
		container.hide();
		$("#instructionView").show();
	}

	//Go back to the select dish view.
	this.goBack = function(){
		container.hide();
		$("#wrapper").show();
		$("#selectDishView").show();
		$("#dishView").hide();
	}


	loadMenu();
	this.numberOfGuests.html(model.getNumberOfGuests());
	model.addObserver(this);
	container.hide();

}
 
