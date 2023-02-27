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

const prev = document.querySelector('.next');
const next = document.querySelector('.prev');

next.addEventListener('click', ()=>{
    item[active].classList.remove('show');
    if(active < item.length - 1){
        active = active + 1;
    }else {
        active = 0;
    }
    item[active].classList.add('show');
});


prev.addEventListener('click', ()=>{
    item[active].classList.remove('show');
    if(active > 0){
        active = active - 1;
    }else {
        active = item.length - 1;
    }
    item[active].classList.add('show');
});



