$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	
	//And create the needed controllers and views
	//var menuView = new MenuView($("#menuView"), model);
	//var selectDishView = new SelectDishView($("#selectDishView"), model);
	//var dishView = new DishView($("#dishView"), model);
	var instructionView = new InstructionView($("#instructionView"), model);

	//var dinnerView = new DinnerView($("#dinnerView"), model);
	
});