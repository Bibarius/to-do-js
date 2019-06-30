//инициализируем дату
var now = new Date();
var year = now.getFullYear();
var month = now.getMonth();
var date = now.getDate();
var day = now.getDay();
switch(day){
	case 0: day = "ВОСКРЕСЕНЬЕ"; break;
	case 1: day = "ПОНЕДЕЛЬНИК"; break;
	case 2: day = "ВТОРНИК"; break;
	case 3: day = "СРЕДА"; break;
	case 4: day = "ЧЕТВЕРГ"; break;
	case 5: day = "ПЯТНИЦА"; break;
	case 6: day = "СУББОТА"; break;
}
switch(month){
	case 0: month = "ЯНВ"; break; 
	case 1: month = "ФЕВ"; break;
	case 2: month = "МАР"; break;
	case 3: month = "АПР"; break;
	case 4: month = "МАЙ"; break;
	case 5: month = "ИЮН"; break;
	case 6: month = "ИЮЛ"; break;
	case 7: month = "АВГ"; break;
	case 8: month = "СЕН"; break;
	case 9: month = "ОКТ"; break;
	case 10: month = "НОЯ"; break;
	case 11: month = "ДЕК"; break;
}

//вставка даты в HTML
document.getElementById("date").innerHTML = date;
document.getElementById("month").innerHTML = month;
document.getElementById("year").innerHTML = year;
document.getElementById("day").innerHTML = day;
/////////////////////////////////////////////////////////////////////////////////


//удаление задания 
var remove, i;
function setRemoveListeners(){
	remove = document.getElementsByClassName("delete");
	for(i = 0; i < remove.length; i++){
		remove[i].addEventListener("click", toRemove);
	}
}
function toRemove(event){
	var path = event.path[2];
	console.log(path);
	path.remove();

}

/////////////////////////////////////////////////////////////////////////

//зачеркивание выполненных
var node, parent, span;
function setCheckbox(){
	checkbox = document.getElementsByClassName("checkbox");
	for(i = 0; i < checkbox.length; i++){
		checkbox[i].addEventListener("change", clicked);
	}
}

function clicked(event){
	node = event.path[0];
	parent = node.parentNode;
	span = parent.children[0];
	style = span.style;
	if(node.checked){
		style.color = "rgb(90, 94, 109)";
		style.textDecoration = 'line-through';
	}
	else{
		style.color = "black";
		style.textDecoration = "none";
	}	
}

///////////////////////////////////////////////////////////////////////
//добавление задания 
var input = document.getElementsByClassName("input")[0];
var divInput = document.getElementsByClassName("hidden")[0];
var plus = document.getElementsByClassName("icon")[0];
var opacity = document.getElementsByClassName("main_block")[0];
var text, div, before, parentDiv, label, newSpan, newCheckbox, newImg, del;
input.addEventListener("keydown", enter);

function cross(){
	divInput.style.display = "block";
}

function enter(event){
	if(event.keyCode == 13){
		text = input.value;		
		divInput.style.display = "none";
		if(document.getElementsByClassName("element").length == 1){
			div = document.createElement("div");
			div.setAttribute("class", "element clearfix");
			document.getElementsByClassName("mainList")[0].appendChild(div);
			label = document.createElement("label");
			label.setAttribute("class", "clearfix");

			newSpan = document.createElement("span");
			label.appendChild(newSpan);
			newSpan.setAttribute("class", "item");

			newCheckbox = document.createElement("input")
			newCheckbox.setAttribute("class", "checkbox");
			newCheckbox.setAttribute("type", "checkbox");
			newCheckbox.setAttribute("name", "element");

			newImg = document.createElement("img");
			newImg.setAttribute("class", "close");
			newImg.setAttribute("src", "close.png");

			del = document.createElement("div");
			newImg.setAttribute("class", "delete");


			div.appendChild(label);
			div.appendChild(del);
			label.appendChild(newSpan);
			label.appendChild(newCheckbox);
			del.appendChild(newImg);



			newSpan.innerHTML = text;
			input.value = "";

			setRemoveListeners();
			setCheckbox();
		}
		else{
			div = document.createElement("div");
			before = document.getElementsByClassName("element")[1];
			parentDiv = before.parentNode;
			parentDiv.insertBefore(div, before);
			div.setAttribute("class", "element clearfix");

			//заполняем новый div
			label = document.createElement("label");
			label.setAttribute("class", "clearfix");

			newSpan = document.createElement("span");
			label.appendChild(newSpan);
			newSpan.setAttribute("class", "item");

			newCheckbox = document.createElement("input")
			newCheckbox.setAttribute("class", "checkbox");
			newCheckbox.setAttribute("type", "checkbox");
			newCheckbox.setAttribute("name", "element");

			newImg = document.createElement("img");
			newImg.setAttribute("class", "close");
			newImg.setAttribute("src", "close.png");

			del = document.createElement("div");
			newImg.setAttribute("class", "delete");


			div.appendChild(label);
			div.appendChild(del);
			label.appendChild(newSpan);
			label.appendChild(newCheckbox);
			del.appendChild(newImg);



			newSpan.innerHTML = text;
			input.value = "";

			setRemoveListeners();
			setCheckbox();
			}		
	}
}