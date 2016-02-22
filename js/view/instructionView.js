//ExampleView Object constructor
var InstructionView = function (container, model) {
	
	// Get all the relevant elements of the view (ones that show data
  // and/or ones that responed to interaction)
	this.numberOfGuests = container.find("#numberOfGuests");
	this.editDinnerBtn = container.find("#editDinner");
	var menuList = container.find("#menuList");

	this.numberOfGuests.html(model.getNumberOfGuests());
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

	this.update = function(){
		loadMenu();
	}

	this.goBack = function(){
		container.hide();
		$("#wrapper").show();
	}

	container.hide();
	loadMenu();

	model.addObserver(this);
	
}
 
