//ExampleView Object constructor
var DinnerView = function (container, model) {
	this.numberOfGuests = container.find("#numberOfGuests");
	this.editDinnerBtn = container.find("#editDinner");
	var menuList = container.find("#menuList");
	var totalPrice = container.find("#totalPrice");
	var printRecipeBtn = container.find("#printRecipe");

	//container.html('');
	this.numberOfGuests.html(model.getNumberOfGuests());

	var loadMenu = function (){
		var menu = model.getFullMenu();
		$.each(menu, function(i, o){
			var dishImage = o.image;
			var dishName = o.name;
			var dishPrice = model.getDishCost(o.id);
			menuList.find('tbody').append('<td><img src="images/'+dishImage+'" class="img-thumbnail"><h3>'+dishName+'</h3><p>SEK '+dishPrice+'</p></td>');
		});

		totalPrice.html(model.getTotalMenuPrice());
	}

	loadMenu();
	

}
 
