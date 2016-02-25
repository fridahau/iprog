var SelectDishController = function(view, model) { 

  //Make the dishes clickable. Go to the dish view of the selected dish.
	var addDishListener = function() {
		view.displayDishes.find("a").click(function(){
			var value = this.getAttribute("value");
			model.setActiveDish(value);
			view.goViewDish();	
	 	});
	}	

  //Make the filter choices clickable. Refresh the displayed dishes.
 	view.filters.find("a").click(function(){
 		var value = this.getAttribute("value");
 		view.filterDishes(value);
 		
 		addDishListener();
 	});

  //Make the searchbutton clickable. Search on the given word. 
 	view.searchButton.click(function(){
 		var inputText = view.searchField.val();
 		var filter = model.getFilter();

    view.filterDishes(filter, inputText);
    addDishListener();
 	});

 	addDishListener();
}