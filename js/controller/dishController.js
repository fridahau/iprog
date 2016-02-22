var DishController = function(view, model) { 
	view.backBtn.click(function(){
 		view.goBack();
 	});

	view.confirmBtn.click(function(){
 		var activeDish = model.getActiveDish();
 		model.addDishToMenu(activeDish.id);
 		view.goBack();
 	});

}