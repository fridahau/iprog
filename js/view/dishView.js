//ExampleView Object constructor
var DishView = function (container, model) {
	this.dishName = container.find("#dishName");
	this.dishImage = container.find("#dishImage");
	this.dishDescription = container.find("#dishDescription");
	this.backBtn = container.find("#backButton");
	this.numberOfGuests = container.find("#numberOfGuests");
	var dishIngredients = container.find("#dishIngredients");
	this.totalPrice = container.find("#totalPrice");
	this.confirmBtn = container.find("#confirmButton");
	this.dishPreparation = container.find("#dishPreparation");

	//On update, reload the view with the active dish.
	this.update = function(){
		var activeDish = model.getActiveDish();
		this.loadDish(activeDish);
	}
	
	//Load the dish with it's name, image, description and preparation strings.
	this.loadDish = function(dish){
		this.dishName.html(dish.name);
		this.dishImage.html('<img src="images/'+dish.image+'" class="img-thumbnail">');
		this.dishDescription.html(dish.description);
		this.dishPreparation.html(dish.description);

		var dishIng = dish.ingredients;
		this.loadIngredients(dishIng);
		this.totalPrice.html(model.getDishCost(dish.id));
	}

	//Load a dish's igridients to the ingridients list.
	this.loadIngredients = function(ingList){
		this.numberOfGuests.html(model.getNumberOfGuests());
		dishIngredients.find('tbody').html(''); //clear
		$.each(ingList, function(i, o){
			var people = model.getNumberOfGuests();
			
			dishIngredients.find('tbody').append('<tr><td>'+o.quantity*people+' '+o.unit+'</td><td>'+o.name+'</td><td>SEK '+o.price*people+'</td></tr>');
		});
	}
	
	//Go back to the select view.
	this.goBack = function(){
		container.hide();
		$("#selectDishView").show();
	}

	container.hide();
	model.addObserver(this);
	//loadIngredients(test.ingredients);

	

}
 
