$(document).ready(function(){

	//validate first name

 $(".firstName").blur(function(){
 	var val = $(".firstName").val();
 	 if(val.match('^[a-zA-Zа-яА-я ]{3,24}$')) {
    $(".firstNameHelp").fadeOut(300);
  }
  else {
    $(".firstNameHelp").fadeIn(300);
  } 
 })

 // validate last name

 $(".lastName").blur(function(){
 	var val = $(".lastName").val();
 	 if(val.match('^[a-zA-Zа-яА-я ]{3,24}$')) {
    $(".lastNameHelp").fadeOut(300);
  }
  else {
    $(".lastNameHelp").fadeIn(300);
  } 
 })

 // validate email

  $(".email").blur(function(){
 	var val = $(".email").val();
 	 if(val.match('^[A-Za-z0-9_]+@[A-Za-z0-9]+[.]+[A-Za-z]{2,4}$')) {
    $(".emailHelp").fadeOut(300);
  }
  else {
    $(".emailHelp").fadeIn(300);
  } 
 })

  // validate phone

  $(".phone").blur(function(){
  var val = $(".phone").val();
   if(!val.match('^[+][0]|[0]{1,20}$')) {
     
      if(val.match('^([+]+)*[0-9\x20\x28\x29-]{5,20}$')) {
       $(".phoneHelp").fadeOut(300);
      }
      else {
        $(".phoneHelp").fadeIn(300);
      }
    }
   else {
     $(".phoneHelp").fadeIn(300);
   } 
  })

   $("select").change(function(){
    var form = $("select").children();
    var prot = [].slice.call(form);
    if($(prot[0]).is(":selected")) {
      $(".selectHelp").fadeIn(300);
    }
    else {
      $(".selectHelp").fadeOut(300);
    }
    })




})