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

