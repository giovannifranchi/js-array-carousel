const pictures = ['01.webp', '02.webp', '03.webp', '04.webp', '05.webp'];
const slider = document.querySelector('.slider');
const sideSlider = document.querySelector('.side-slider');
let active = 0;
let content;

for(let i = 0; i < pictures.length; i++){
    let item = document.createElement('div');
    let sideItem = document.createElement('div');
    item.classList.add('item');
    sideItem.classList.add('side-item');
    slider.append(item);
    sideSlider.append(sideItem);
    let picture = document.createElement('img');
    let sidePicture = document.createElement('img');
    picture.classList.add('img-fluid');
    sidePicture.classList.add('img-fluid');
    picture.src = `img/${pictures[i]}`;
    sidePicture.src = `img/${pictures[i]}`;
    item.append(picture);
    sideItem.append(sidePicture);
}

const item = document.querySelectorAll('.item');
const sideItem = document.querySelectorAll('.side-item');

item[active].classList.add('show');
sideItem[active].classList.add('show');

const prev = document.querySelector('.next');
const next = document.querySelector('.prev');

prev.addEventListener('click', ()=>{
    item[active].classList.remove('show');
    sideItem[active].classList.remove('show');
    if(active < item.length - 1){
        active = active + 1;
    }else { //never ending carousel
        active = 0;
    }
    item[active].classList.add('show');
    sideItem[active].classList.add('show');
});


next.addEventListener('click', ()=>{
    item[active].classList.remove('show');
    sideItem[active].classList.remove('show');
    if(active > 0){
        active = active - 1;
    }else { //never ending carousel
        active = item.length - 1;
    }
    item[active].classList.add('show');
    sideItem[active].classList.add('show');
});



