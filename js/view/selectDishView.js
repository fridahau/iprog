//ExampleView Object constructor
var SelectDishView = function (container, model) {

	// Get all the relevant elements of the view (ones that show data
	// and/or ones that responed to interaction)
	this.searchField = container.find("#searchField");
	this.searchButton = container.find("#searchButton");
	this.dropDown = container.find("#dropDown");
	this.displayDishes = container.find("#displayDishes");
	this.activeFilterLabel = container.find("#activeFilter");
	this.filters = container.find("#filterGroup");
	
	//Go to the dish view.
	this.goViewDish = function() {
		container.hide();
		$("#dishView").show();
	}

	this.update = function() {
		//test
	}

	//Math.ceil(x) round to the next whole number
	//Filter dishes on filter. Skip the inputText if not given.
	this.filterDishes = function(filter, inputText){
		var dishes = model.getAllDishes(filter, inputText);
		var result = "";
		var dishImage ="";
		var dishName = "";
		var dishDescription ="";

		if(dishes.length == 0) {
			alert("No dishes found.");
			return;
		}

		if(dishes.length <= 4) {
			//displayDishes.append('<div class=\"row text-center\">');
			result += '<div class=\"row text-center\">';

			$.each(dishes, function(i, o){
				dishName = o.name;
				dishId = o.id;
				dishImage = o.image;
				dishDescription = o.description;
				//displayDishes.append('<div class="col-sm-3"><img src="'+dishImage+'"><h3>'+dishName+'</h3><p>'+dishDescription+'</p></div>');
				//result += '<div class="col-sm-3"><img src="images/'+dishImage+'" class="img-thumbnail"><h3>'+dishName+'</h3><p>'+dishDescription+'</p></div>';

				result += '<div class="col-sm-3"><a class="thumbnail" value="'+dishId+'"><img src="images/'+dishImage+'"><h4>'+dishName+'</h4><p>'+dishDescription+'</p></div></a>';
				
			});

			//displayDishes.append('</div>');
			result += '</div>';
		} else {
			var counter = 0;
			var rest = dishes.length;

			for(var i = 0; i < Math.ceil(dishes.length/4); i++){
				result += '<div class=\"row text-center\">';

				for(var j = 0; j < Math.min(4, rest); j++){
					dishName = dishes[counter].name;
					dishId = dishes[counter].id;
					dishImage = dishes[counter].image;
					dishDescription = dishes[counter].description;

					result += '<div class="col-sm-3"><a class="thumbnail" value="'+dishId+'"><img src="images/'+dishImage+'"><h4>'+dishName+'</h4><p>'+dishDescription+'</p></div></a>';
					counter++;				
				}

				rest -= 4;
				result += '</div>';
			}
		}
		
		this.displayDishes.html(result);
		model.setFilter(filter);
		this.updateFilterLabel();
	}

	//Update the string in the filter drop down.
	this.updateFilterLabel = function() {
		if(model.getFilter() == "starter") {
			this.activeFilterLabel.html("Starter");
		} else if (model.getFilter() == "main dish"){
			this.activeFilterLabel.html("Main Dish");
		} else if (model.getFilter() == "dessert") {
			this.activeFilterLabel.html("Dessert");
		}
	}


	//this.filterDishes(model.getFilter());
	this.filterDishes(model.getFilter());
	model.addObserver(this);

}

