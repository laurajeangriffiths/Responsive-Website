//nav toggle
function classToggle() {
  const navs = document.querySelectorAll('.navbar-items')
  
  navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));
}

document.querySelector('.Navbar__Link-toggle').addEventListener('click', classToggle);

//cake calculator function
function costCalc() {
	var layers = document.getElementById("layers").value;
	var layerTotal = parseInt(layers) * 20;
	var topper = document.getElementById("topper").value;
	var topperValue = parseInt(topper) * 2;
	var finalTotal = layerTotal + topperValue;

	document.getElementById("estimateResult").innerHTML = "Your estimated cost is " + "£" + finalTotal;	
}  
 


