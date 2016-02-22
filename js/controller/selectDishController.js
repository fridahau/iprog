var SelectDishController = function(view, model) { 
	$("a").click(function(){
		var value = this.getAttribute("value");
		if(value == "starter" || value == "main dish" || value == "dessert"){
			view.filerDishes(value);
		} else {
			model.setActiveDish(value);
		}
 	});
}