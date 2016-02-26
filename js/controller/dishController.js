var DishController = function(view, view2, model) { 
  //Go back to the select dish view.
	view.backBtn.click(function(){
 		view.goBack();
 	});

  //Checks if a specific dish type is already on the menu. Else add the dish to the menu.
	view.confirmBtn.click(function(){
 		var activeDish = model.getActiveDish();
    var dish = model.getSelectedDish(activeDish.type);
    if(dish != "-1") {
      alert('You have already added a '+dish.type+' to the menu.');
    } else {
      model.addDishToMenu(activeDish.id);
      addMenuItemListener();
      addRemoveListener();
      view.goBack();
    }	
 	});

  //Make the menu items clickable.
  var addMenuItemListener = function() {
    view2.menuItems.find("a").click(function(){
      var dishId = this.getAttribute("value");
      model.setActiveDish(dishId);
      view2.viewDish();
      addRemoveListener();
      addMenuItemListener();
    });
  }

  //Make the remove icons clickable
  var addRemoveListener = function () {
    view2.menuItems.find(".glyphicon-remove").click(function(){
      var id = this.getAttribute("value");
      model.removeDishFromMenu(id);
      addRemoveListener();
      addMenuItemListener();
    });
  }

}