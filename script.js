var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ol");
var deleteBtns = document.getElementsByClassName("delete");

//add event listener to first 6 btns in HTML file
for(var i = 0; i < deleteBtns.length; i++){
	deleteBtns[i].addEventListener("click", removeParent, false);
} 

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var btn = document.createElement("button");
	btn.innerHTML = "Delete";
	btn.onclick = removeParent;

	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));

	li.innerHTML = li.innerHTML + " ";
	li.appendChild(btn);

	ul.appendChild(li);
	input.value = "";
}
//someone's code 
function removeParent(evt) {
  evt.target.removeEventListener("click", removeParent, false);
  evt.target.parentNode.remove();
}


function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}
//toggling the list items
function toggleList() {
	var list = document.querySelectorAll("li");
    if(list.classList.contains("done")) {
    	list.classList.remove("done");
    }
    else {
    	list.classList.toggle("done");
    }
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

list.addEventListener("click", toggleList);