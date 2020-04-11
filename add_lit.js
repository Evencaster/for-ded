console.log(window.location.pathname.replace("/index.html",''));

const getBookName = path => path.split('/').pop();

for(let book of literature["Программа"]) {
	var li = document.createElement('li');
	li.innerHTML = `<a href="${book}">${getBookName(book)}</a>`;
	document.getElementById('programm-content-list').append(li);
}
for(let book of literature["Теория"]){
	var li = document.createElement('li');
	li.innerHTML = `<a href="${book}">${getBookName(book)}</a>`;;
	document.getElementById('theory-content-list').append(li);
}
for(let book of literature["Практика"]){
	var li = document.createElement('li');
	li.innerHTML = `<a href="${book}">${getBookName(book)}</a>`;;
	document.getElementById('practic-content-list').append(li);
}
for(let book of literature["Методическая литература"]){
	var li = document.createElement('li');
	li.innerHTML = `<a href="${book}">${getBookName(book)}</a>`;;
	document.getElementById('methodical-content-list').append(li);
}
for(let book of literature["Контроль знаний"]){
	var li = document.createElement('li');
	li.innerHTML = `<a href="${book}">${getBookName(book)}</a>`;;
	document.getElementById('control-content-list').append(li);
}