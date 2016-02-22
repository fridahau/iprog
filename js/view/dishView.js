//ExampleView Object constructor
var DishView = function (container, model) {
	var dishName = container.find("#dishName");
	var dishImage = container.find("#dishImage");
	var dishDescription = container.find("#dishDescription");
	this.backBtn = container.find("#backButton");
	this.numberOfGuests = container.find("#numberOfGuests");
	var dishIngredients = container.find("#dishIngredients");
	var totalPrice = container.find("#totalPrice");
	this.confirmBtn = container.find("#confirmButton");
	var dishPreparation = container.find("#dishPreparation");

	this.numberOfGuests.html(model.getNumberOfGuests());

	this.update = function(){
		var activeDish = model.getActiveDish();
		this.loadDish(activeDish);
	}
	
	this.loadDish = function(dish){
		dishName.html(dish.name);
		dishImage.html('<img src="images/'+dish.image+'" class="img-thumbnail">');
		dishDescription.html(dish.description);
		dishPreparation.html(dish.description);

		var dishIng = dish.ingredients;
		this.loadIngredients(dishIng);
		totalPrice.html(model.getDishCost(dish.id));
	}

	this.loadIngredients = function(ingList){
		$.each(ingList, function(i, o){
			var people = model.getNumberOfGuests();
			
			dishIngredients.find('tbody').append('<tr><td>'+o.quantity*people+' '+o.unit+'</td><td>'+o.name+'</td><td>SEK '+o.price*people+'</td></tr>');
		});
	}
	
	var test = {
		'id':1,
		'name':'French toast',
		'type':'starter',
		'image':'toast.jpg',
		'description':"In a large mixing bowl, beat the eggs. Add the milk, brown sugar and nutmeg; stir well to combine. Soak bread slices in the egg mixture until saturated. Heat a lightly oiled griddle or frying pan over medium high heat. Brown slices on both sides, sprinkle with cinnamon and serve hot.",
		'ingredients':[{ 
			'name':'eggs',
			'quantity':0.5,
			'unit':'',
			'price':10
			},{
			'name':'milk',
			'quantity':30,
			'unit':'ml',
			'price':6
			},{
			'name':'brown sugar',
			'quantity':7,
			'unit':'g',
			'price':1
			},{
			'name':'ground nutmeg',
			'quantity':0.5,
			'unit':'g',
			'price':12
			},{
			'name':'white bread',
			'quantity':2,
			'unit':'slices',
			'price':2
			}]
		};


	container.hide();
	model.addObserver(this);
	//loadIngredients(test.ingredients);

	

}
 
