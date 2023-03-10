const pictures = ['01.webp', '02.webp', '03.webp', '04.webp', '05.webp'];
const slider = document.querySelector('.slider');
const sideSlider = document.querySelector('.side-slider');
const sideCounters = document.querySelector('.side-counters');
let active = 0;


for(let i = 0; i < pictures.length; i++){
    let item = document.createElement('div');
    let sideItem = document.createElement('div');
    let counter = document.createElement('div');
    item.classList.add('item');
    sideItem.classList.add('side-item');
    counter.classList.add('counter');
    slider.append(item);
    sideSlider.append(sideItem);
    sideCounters.append(counter);
    let picture = document.createElement('img');
    let sidePicture = document.createElement('img');
    picture.classList.add('img-fluid');
    sidePicture.classList.add('img-fluid');
    picture.src = `img/${pictures[i]}`;
    sidePicture.src = `img/${pictures[i]}`;
    item.append(picture);
    sideItem.append(sidePicture);
}

const items = document.querySelectorAll('.item');
const sideItems = document.querySelectorAll('.side-item');
const counters = document.querySelectorAll('.counter');

items[active].classList.add('show');
sideItems[active].classList.add('show');
counters[active].classList.add('active');

const prev = document.querySelector('.next');
const next = document.querySelector('.prev');

prev.addEventListener('click', ()=>{
    items[active].classList.remove('show');
    sideItems[active].classList.remove('show');
    counters[active].classList.remove('active');
    if(active < items.length - 1){
        active = active + 1;
    }else { //never ending carousel
        active = 0;
    }
    items[active].classList.add('show');
    sideItems[active].classList.add('show');
    counters[active].classList.add('active');
});


next.addEventListener('click', ()=>{
    items[active].classList.remove('show');
    sideItems[active].classList.remove('show');
    counters[active].classList.remove('active');
    if(active > 0){
        active = active - 1;
    }else { //never ending carousel
        active = items.length - 1;
    }
    items[active].classList.add('show');
    sideItems[active].classList.add('show');
    counters[active].classList.add('active');
});

// Bonus3: at click on sidePictures set active on that i of pictures and sidePictures array

// For Each method solution

// sideItems.forEach((sideItem, index)=>{
//     sideItem.addEventListener('click', ()=>{
//         items[active].classList.remove('show');
//         sideItems[active].classList.remove('show');
//         active = index;
//         items[active].classList.add('show');
//         sideItems[active].classList.add('show');
//     });
// });

// Regular For Loop solution 

for(let i = 0; i < sideItems.length; i++){
    sideItems[i].addEventListener('click', ()=>{
        items[active].classList.remove('show');
        sideItems[active].classList.remove('show');
        counters[active].classList.remove('active');
        active = i;
        items[active].classList.add('show');
        sideItems[active].classList.add('show');
        counters[active].classList.add('active');
    });
}


// Bonus4: at click on sideCounters set active on that i

// ForEach solution

counters.forEach((counter, index)=>{
    counter.addEventListener('click', ()=>{
        items[active].classList.remove('show');
        sideItems[active].classList.remove('show');
        counters[active].classList.remove('active');
        active = index;
        items[active].classList.add('show');
        sideItems[active].classList.add('show');
        counters[active].classList.add('active');
    });
});



