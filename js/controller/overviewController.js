var OverviewController = function(view, model) { 
	view.printRecipeBtn.click(function(){
 		view.printFunc();
 	});

 	view.editDinnerBtn.click(function(){
 		view.goBack();
 	});


}