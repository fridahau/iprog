var HomeScreenView = function (container, model) {
	
	// Get all the relevant elements of the view (ones that show data
  // and/or ones that responed to interaction)
	this.enterBtn = container.find("#enter");
	this.welcomeText = container.find("#welcomeText");

	$("#wrapper").hide();
	$("#header").hide();

	this.update = function(){
		$("#header2").hide();
		container.hide();
		$("#header").show();
		$("#wrapper").show();
		$("body").css({"background": "none"});
	}

	model.addObserver(this);

}
 
