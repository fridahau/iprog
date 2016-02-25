var DishController = function(view, model) { 
  //Go back to the select dish view.
	view.backBtn.click(function(){
 		view.goBack();
 	});

  //Checks if a specific dish type is already on the menu. Else add the dish to the menu.
	view.confirmBtn.click(function(){
 		var activeDish = model.getActiveDish();
    var dish = model.getSelectedDish(activeDish.type);
    if(dish != "-1") {
      alert('You have already added a '+dish.type+' to the menu.');
    } else {
      model.addDishToMenu(activeDish.id);
      view.goBack();
    }	
 	});
}