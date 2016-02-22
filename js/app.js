$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	
	//HomeScreen
	var homeScreenView = new HomeScreenView($("#homeScreenView"), model);
	var homeScreenController = new HomeScreenController(homeScreenView, model);

	//Menu
	var menuView = new MenuView($("#menuView"), model);
	var menuController = new MenuController(menuView, model);
	
	var selectDishView = new SelectDishView($("#selectDishView"), model);

	//var dishView = new DishView($("#dishView"), model);
	//var instructionView = new InstructionView($("#instructionView"), model);
	//var overviewView = new OverviewView($("#overviewView"), model);
	
});