//ExampleView Object constructor
var InstructionView = function (container, model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.numberOfGuests = container.find("#numberOfGuests");
	this.editDinnerBtn = container.find("#editDinner");
	var menuList = container.find("#menuList");

	//load the menu.
	var loadMenu = function(){
		menuList.html(''); //clear
		var menu = model.getFullMenu();

		$.each(menu, function(i, o){
			var dishName = o.name;
			var dishImage = o.image;
			var dishPreparation = o.description;
			menuList.append('<div class="row"><div class="col-sm-6"><img src="images/'+dishImage+'" align="left" class="img-thumbnail img-margin"><h3>'
				+dishName+'</h3><p>'+dishPreparation+'</p></div><div class="col-sm-6"><h3>Preparation</h3><p>'+dishPreparation+'</p></div></div>');

		});
	}

	//Update/refresh the menu and the number of guests.
	this.update = function(){
		loadMenu();
		this.numberOfGuests.html(model.getNumberOfGuests());
	}

	//Go back to select dish view.
	this.goBack = function(){
		container.hide();
		$("#wrapper").show();
		$("#selectDishView").show();
		$("#dishView").hide();
	}

	container.hide();
	loadMenu();
	this.numberOfGuests.html(model.getNumberOfGuests());
	model.addObserver(this);
	
}
 
