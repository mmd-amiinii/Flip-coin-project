const coin = document.querySelector(".coin");
const flip_button = document.querySelector(".flip-btn");
const result = document.querySelector(".result")
const coin_head_main = document.querySelector(".coin-head")
const coin_head = document.querySelector(".coin-head-2")
const coin_tail = document.querySelector(".coin-tail-2")
let turn = 720;
flip_button.addEventListener('click', ()=> {
    const random = Math.round(Math.random());
    coin.style.transform = `rotateY(${turn}deg)`;
    turn += 720;
    if(random){
        result.textContent = '...'
        setTimeout(()=> {
            coin_tail.style.transform = 'rotateY(0deg)';
            coin_head_main.style.transform = 'rotateY(180deg)';
            coin_head_main.style.zIndex = 2;
            result.textContent = 'Tail';
            coin_tail.classList.remove('hidden');
            coin_head.classList.add('hidden');
        }, 900)
    }
    else {
        result.textContent = '...'
        setTimeout(()=> {
            coin_head_main.style.zIndex = 0;
            result.textContent = 'Head';
            coin_tail.classList.add('hidden');
            coin_head.classList.remove('hidden');
        }, 900)
    }
})