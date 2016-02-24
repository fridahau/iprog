var SelectDishController = function(view, model) { 
	view.displayDishes.find("a").click(function(){
		var value = this.getAttribute("value");
		model.setActiveDish(value);
		view.goViewDish();
		
 	});

 	view.filters.find("a").click(function(){
 		var value = this.getAttribute("value");
 		view.filterDishes(value);
 		view.displayDishes.find("a").click(function(){
		var value = this.getAttribute("value");
		model.setActiveDish(value);
		view.goViewDish();
		
 	});
 	});
}