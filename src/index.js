console.log('Hello');
let header = document.createElement('div');
header.innerHTML = 'Привет, текст и див создан в JS';
document.body.append(header);
header.classList.add('addClass')
document.body.append(`<h1>Hello</h1>`);
let paragh = document.createElement('p');
paragh.innerHTML = 'Webpack';
paragh.style.backgroundColor = 'green';
paragh.style.color = 'white';
header.append(paragh);

function addElem (elem, text='Напиши что-нибудь', newClass){
    let newElem = document.createElement(elem);
    newElem.innerHTML = text;
    newElem.classList.add(newClass);
    document.body.append(newElem);
};
addElem('h1', 'Заголовок', 'ty');
addElem('p');
