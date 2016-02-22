var SelectDishController = function(view, model) { 
	$("a").click(function(){
		var value = this.getAttribute("value");
 		model.setActiveDish(value);
 	});
}