var MenuController = function(view, model) { 
 view.plusButton.click(function(){
 	model.setNumberOfGuests(model.getNumberOfGuests() + 1);
 });
 
 view.minusButton.click(function(){
 	model.setNumberOfGuests(model.getNumberOfGuests() - 1);
 });

 view.confirmButton.click(function(){
 	view.confirmFunc();
 });

}