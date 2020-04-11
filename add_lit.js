console.log(window.location.pathname.replace("/index.html",''));

var bookObjects = [];

const getBookObj = path => {
	let bookObj = {};
	bookObj.path = path;
	bookObj.name = path.split('/').pop().replace(/\.(docx?|pdf|html?|ppt)/, '');
	console.log(path);
	bookObj.subfolders = path.split('/');
	console.log(bookObj.subfolders);
	bookObj.subfolders.pop();
	bookObj.subfolders.splice(0,2);
	return bookObj;
}

const createContent = (folder, contentList) => {
	let contentElement = document.getElementById(contentList);
	for(let bookPath of literature[folder]) {
		let book = getBookObj(bookPath);
		let bookRef = document.createElement('li');
		bookRef.innerHTML = `<a href="${book.path}" style="margin-top: 10px">${book.name}</a>`;
		if(book.subfolders) {
			let subsectionList, subsectionHeader;
			if(!contentElement.querySelector(`ul[subsection="${book.subfolders[0]}"`)) {
				subsectionHeader = document.createElement('h2');
				subsectionHeader.textContent = book.subfolders[0];
				subsectionList = document.createElement('ul');
				subsectionList.setAttribute('subsection', book.subfolders[0]);
				contentElement.append(subsectionHeader);
				contentElement.append(subsectionList);
			} else {
				subsectionList = contentElement.querySelector(`ul[subsection="${book.subfolders[0]}"`)
			}
			if(book.subfolders[1]) {
				let subSubsectionList, subSubsectionHeader;
				if(!subsectionList.querySelector(`ul[subsection="${book.subfolders[1]}"`)) {
					subSubsectionHeader = document.createElement('h3');
					subSubsectionHeader.textContent = book.subfolders[1];
					subSubsectionList = document.createElement('ul');
					subSubsectionList.setAttribute('subsection', book.subfolders[1]);
					subsectionList.append(subSubsectionHeader);
					subsectionList.append(subSubsectionList);
				} 
				else subSubsectionList = subsectionList.querySelector(`ul[subsection="${book.subfolders[1]}"`);
				subSubsectionList.append(bookRef);
			} 
			else subsectionList.append(bookRef);
		} 
		else contentElement.append(bookRef);
	}
}

// for(let book of literature["Программа"]) {
// 	let bookObj = getBookObj(book);
// 	if(book.subfolders) {
// 		if(document.querySelector(`ul[subsection="${book.subfolders[0]}"`)) {
// 			let subsectionHeader = document.createElement('h2');
// 			subsectionList.textContent = book.subfolders[0];
// 			let subsectionList = document.createElement('ul');
// 			subsectionList.setAttr('subsection', book.subfolders[0]);
// 			document.getElementById('programm-content-list').append(subsectionHeader);
// 			document.getElementById('programm-content-list').append(subsectionList);
// 		} else {
// 			let subsectionList = document.querySelector(`ul[subsection="${book.subfolders[0]}"`)
// 		}

// 		let bookRef = document.createElement('li');
// 		bookRef.innerHTML = `<a href="${book}" style="margin-top: 10px">${bookObj.name}</a>`;
// 		subsectionList.append(bookRef);
// 	} else {
// 		var bookRef = document.createElement('li');
// 		bookRef.innerHTML = `<a href="${book}" style="margin-top: 10px">${bookObj.name}</a>`;;
// 		document.getElementById('programm-content-list').append(bookRef);
// 	}
// }

createContent('Программа', 'programm-content-list');
createContent('Теория', 'theory-content-list');
createContent('Практика', 'practic-content-list');
createContent('Методическая литература', 'methodical-content-list');
createContent('Контроль знаний', 'control-content-list');

// for(let book of literature["Теория"]){
// 	var li = document.createElement('li');
// 	li.innerHTML = `<a href="${book}" style="margin-top: 10px">${getBookObj(book).name}</a>`;;
// 	document.getElementById('theory-content-list').append(li);
// }

// for(let book of literature["Практика"]){
// 	var li = document.createElement('li');
// 	li.innerHTML = `<a href="${book}" style="margin-top: 10px">${getBookObj(book).name}</a>`;;
// 	document.getElementById('practic-content-list').append(li);
// }

// for(let book of literature["Методическая литература"]){
// 	var li = document.createElement('li');
// 	li.innerHTML = `<a href="${book}" style="margin-top: 10px">${getBookObj(book).name}</a>`;;
// 	document.getElementById('methodical-content-list').append(li);
// }

// for(let book of literature["Контроль знаний"]){
// 	var li = document.createElement('li');
// 	li.innerHTML = `<a href="${book}" style="margin-top: 10px">${getBookObj(book).name}</a>`;;
// 	document.getElementById('control-content-list').append(li);
// }