var InstructionController = function(view, model) { 
  //Make the edit dinner button clickable
	view.editDinnerBtn.click(function(){
 		view.goBack();
 	});
}