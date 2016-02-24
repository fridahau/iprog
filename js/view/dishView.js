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


	this.update = function(){
		var activeDish = model.getActiveDish();
		this.loadDish(activeDish);
	}
	
	this.loadDish = function(dish){
		this.dishName.html(dish.name);
		this.dishImage.html('<img src="images/'+dish.image+'" class="img-thumbnail">');
		this.dishDescription.html(dish.description);
		this.dishPreparation.html(dish.description);

		var dishIng = dish.ingredients;
		this.loadIngredients(dishIng);
		this.totalPrice.html(model.getDishCost(dish.id));
	}

	this.loadIngredients = function(ingList){
		this.numberOfGuests.html(model.getNumberOfGuests());
		dishIngredients.find('tbody').html(''); //clear
		$.each(ingList, function(i, o){
			var people = model.getNumberOfGuests();
			
			dishIngredients.find('tbody').append('<tr><td>'+o.quantity*people+' '+o.unit+'</td><td>'+o.name+'</td><td>SEK '+o.price*people+'</td></tr>');
		});
	}
	
	this.goBack = function(){
		container.hide();
		$("#selectDishView").show();
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
 
