var MenuController = function(view, model) { 
  //Add listener to the plus button
 	view.plusButton.click(function(){
 		model.setNumberOfGuests(model.getNumberOfGuests() + 1);
 	});
 
  //Add listener to the minus button
 	view.minusButton.click(function(){
 		model.setNumberOfGuests(model.getNumberOfGuests() - 1);
 	});

  //Add listener to the confirm button
  view.confirmButton.click(function(){
    view.confirmFunc();
  });

  //Make the menu items clickable.
  var addMenuItemListener = function() {
    view.menuItems.find("a").click(function(){
      var dishId = this.getAttribute("value");
      model.setActiveDish(dishId);
      view.viewDish();
      addRemoveListener();
      addMenuItemListener();
    });
  }

  //Make the remove icons clickable
  var addRemoveListener = function () {
    view.menuItems.find(".glyphicon-remove").click(function(){
      var id = this.getAttribute("value");
      model.removeDishFromMenu(id);
      addRemoveListener();
      addMenuItemListener();
    });
  }

  addRemoveListener();
  addMenuItemListener();
}