$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	
	//HomeScreen
	var homeScreenView = new HomeScreenView($("#homeScreenView"), model);
	var homeScreenController = new HomeScreenController(homeScreenView, model);

	//var dinnerView = new DinnerView($("#dinnerView"), model);

	//Menu
	var menuView = new MenuView($("#menuView"), model);
	var menuController = new MenuController(menuView, model);
	
	//Select dish
	var selectDishView = new SelectDishView($("#selectDishView"), model);
	var selectDishController = new SelectDishController(selectDishView, model);

	//View dish
	var dishView = new DishView($("#dishView"), model);
	var dishController = new DishController(dishView, model);
	
	//Overview
	var overviewView = new OverviewView($("#overviewView"), model);
	var overviewController = new OverviewController(overviewView, model);

	//Instructions
	var instructionView = new InstructionView($("#instructionView"), model);
	var instructionController = new InstructionController(instructionView, model);
});