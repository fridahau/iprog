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
	this.activeFilter = "starter";

	this.update = function () {
		//this.filterDishes(this.activeFilter);
	}

	this.goViewDish = function() {
		container.hide();
		$("#dishView").show();
	}

	//Math.ceil(x) round to the next whole number
	this.filterDishes = function(filter){
		var dishes = model.getAllDishes(filter);
		var counter = 0;
		var result = "";
		var dishImage ="";
		var dishName = "";
		var dishDescription ="";

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
			for(var i = 0; i < Math.ceil(dishes.length/4); i++){
				result += '<div class=\"row text-center\">';
				for(var j = 0; j < 4; j++){
					dishName = dishes[counter].name;
					dishImage = dishes[counter].image;
					dishDescription = dishes[counter].description;
					result += '<div class="col-sm-3"><img src="images/'+dishImage+'" class="img-thumbnail><h3>'+dishName+'</h3><p>'+dishDescription+'</p></div>';
					counter++;
				}
				result += '</div>';
			}
		}
		
		this.displayDishes.html(result);
		this.activeFilter = filter;
		this.activeFilterLabel.html(this.activeFilter);
	}

	this.filterDishes(this.activeFilter);
	model.addObserver(this);

}

