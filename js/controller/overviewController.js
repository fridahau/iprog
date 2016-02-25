var OverviewController = function(view, model) { 
  //Add listener to the print recipe button
	view.printRecipeBtn.click(function(){
 		view.printFunc();
 	});

  //add listener to the edit dinner button
 	view.editDinnerBtn.click(function(){
 		view.goBack();
 	});


}