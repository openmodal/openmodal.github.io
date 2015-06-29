$(document).ready(function(){
	$("fieldset").find("a").click(function(e){
		 e.preventDefault();

	})

    $(".header1").find("a").click(function(e){
		 e.preventDefault();

	})

	$("input").on("mouseenter", function(){
		$(this).css({
		background: "rgba(178,178,178,0.6)"
		})
	})
	$("input").on("mouseleave", function(){
		$(this).css({
		background: "transparent"
		})
	})
	
    //adding and removing class for inputs.

	$("fieldset").on("focusin","input", function(){
	var form = $("fieldset").children();
	[].slice.call(form).forEach(function(item){
		if($(item).hasClass("temp")) {
			$(item).removeClass("temp");
		}
	})
	$(this).addClass("temp");

  })
	$("fieldset").on("click", "a", function(){
	var form = $("fieldset").children();
	[].slice.call(form).forEach(function(item){
		if($(item).hasClass("temp")) {
			$(item).removeClass("temp");
		}
	})	
  })
	$("fieldset").on("click", "select", function(){
	var form = $("fieldset").children();
	[].slice.call(form).forEach(function(item){
		if($(item).hasClass("temp")) {
			$(item).removeClass("temp");
		}
	})	
  })
  
   
})	

