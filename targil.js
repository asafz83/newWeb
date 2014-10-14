function enterPressed(){
	var screenValue = document.getElementById("screen").value;
	var historyList = document.querySelector("#history ul");
	newLi = document.createElement("li");
	newLi.innerHTML = screenValue;
	historyList.appendChild(newLi);
}


