var SelectDishController = function(view, model) { 
	view.displayDishes.find("a").click(function(){
		var value = this.getAttribute("value");
		if(value == "starter" || value == "main dish" || value == "dessert"){
			view.filerDishes(value);
		} else {
			model.setActiveDish(value);
			view.goViewDish();
		}
 	});
}