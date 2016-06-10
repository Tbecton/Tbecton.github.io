$(document).ready(function(){
  $("#top").click(function(){
     alert("The border was clicked.");
     $(this).css("border", "3px solid green");
  });
});
