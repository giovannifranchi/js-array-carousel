const pictures = ['01.webp', '02.webp', '03.webp', '04.webp', '05.webp'];
const slider = document.querySelector('.slider');
let active = 0;
let content;

for(let i = 0; i < pictures.length; i++){
    let item = document.createElement('div');
    item.classList.add('item');
    slider.append(item);
    let picture = document.createElement('img');
    picture.classList.add('img-fluid');
    picture.src = `img/${pictures[i]}`;
    item.append(picture);
}

const item = document.querySelectorAll('.item');

item[active].classList.add('show');



