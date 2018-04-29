//Show hidden menu
function toggleMenu(){
  var showDiv = document.getElementById("dropdownContent");
  if(showDiv.style.display === "none"){
    showDiv.style.display = "block";
  }
  else{
    showDiv.style.display = "none";
  }
}
