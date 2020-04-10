console.log(window.location.pathname.replace("/index.html",''));
for(let book of literature["Программа"]) {
	var li = document.createElement('li');
	li.innerHTML = `<a href="ЭП/Программа дисциплины/${book}.pdf">${book}</a>`;
	document.getElementById('programm-content-list').append(li);
}
for(let book of literature["Теория"]){
	var li = document.createElement('li');
	li.innerHTML = `<a href="ЭП/Теория по курсу/${book}.pdf">${book}</a>`;
	document.getElementById('theory-content-list').append(li);
}
for(let presentation of literature["Теория"]){
	var li = document.createElement('li');
	li.innerHTML = `<a href="ЭП/Теория по курсу/Презентации лекций/${presentation}.ppt">${presentation}</a>`;
	document.getElementById('theory-content-list').append(li);
}
for(let book of literature["Практика"]){
	var li = document.createElement('li');
	li.innerHTML = `<a href="ЭП/Практика/${book}.pdf">${book}</a>`;
	li.innerHTML = `<a href="ЭП/Практика/Цепи смещения МОП-транзисторов/${book}.pdf">${book}</a>`;
	li.innerHTML = `<a href="ЭП/Практика/Усилительный каскад на МОП-транзисторе, включенном по схеме с общим исходом/${book}.pdf">${book}</a>`;
	document.getElementById('practic-content-list').append(li);
}
for(let book of literature["Методическая литература"]){
	var li = document.createElement('li');
	li.innerHTML = `<a href="ЭП/Методическая литература/Лабораторный практикум/${book}.pdf">${book}</a>`;
	li.innerHTML = `<a href="ЭП/Методическая литература/Лабораторный практикум/Шаблоны отчетов по лабораторным работам/${book}.pdf">${book}</a>`;
	li.innerHTML = `<a href="ЭП/Методическая литература/Практикум/${book}.pdf">${book}</a>`;
	li.innerHTML = `<a href="ЭП/Методическая литература/Учебные пособия/${book}.pdf">${book}</a>`;
	document.getElementById('methodical-content-list').append(li);
}
for(let book of literature["Контроль знаний"]){
	var li = document.createElement('li');
	li.innerHTML = `<a href="ЭП/Контроль знаний/${book}.pdf">${book}</a>`;
	document.getElementById('control-content-list').append(li);
}