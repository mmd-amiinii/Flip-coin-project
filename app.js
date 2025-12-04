const coin = document.querySelector(".coin");
const flip_button = document.querySelector(".flip-btn");
const result = document.querySelector(".result")

let turn = 0;
flip_button.addEventListener('click', ()=> {
    const random = Math.round(Math.random())
    if(random) {
        result.textContent = "Tail";
        coin.style.transform = `rotateY(${turn + 180}deg)`;
    }
    else {
        result.textContent = "Head";
        coin.style.transform = `rotateY(${turn + 360}deg)`;
    }
})