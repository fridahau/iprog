//ExampleView Object constructor
var InstructionView = function (container, model) {
	
	// Get all the relevant elements of the view (ones that show data
  // and/or ones that responed to interaction)
	this.numberOfGuests = container.find("#numberOfGuests");
	var editDinnerBtn = container.find("#editDinner");
	var menuList = container.find("#menuList");

	this.numberOfGuests.html(model.getNumberOfGuests());
	var loadMenu = function(){
		var menu = model.getFullMenu();
		menuList.html('test');

		$.each(menu, function(i, o){
			var dishName = o.name;
			var dishImage = o.image;
			var dishPreparation = o.description;
			menuList.append('<div class="row"><div class="col-sm-6"><img src="images/'+dishImage+'" align="left" class="img-thumbnail"><h3>'
				+dishName+'</h3><p>'+dishPreparation+'</p></div><div class="col-sm-6"><h3>Preparation</h3><p>'+dishPreparation+'</p></div></div>');

		});
	}

	loadMenu();
	
	
}
 
