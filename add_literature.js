console.log(window.location.pathname.replace("/index.html",''));
for(let book of literature["Программа"]) {
	var li = document.createElement('li');
	li.innerHTML = `<a href="https://docs.google.com/gview?url='file://${window.location.pathname.replace("/index.html",'')}/${book}'">${book}</a>`;
	document.getElementById('programm-content-list').append(li);
}
for(let book of literature["Теория"]){
	var li = document.createElement('li');
	li.innerHTML = book;
	document.getElementById('theory-content-list').append(li);
}
for(let book of literature["Практика"]){
	var li = document.createElement('li');
	li.innerHTML = book;
	document.getElementById('practic-content-list').append(li);
}
for(let book of literature["Контроль знаний"]){
	var li = document.createElement('li');
	li.innerHTML = book;
	document.getElementById('control-content-list').append(li);
}