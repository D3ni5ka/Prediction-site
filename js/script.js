let objPrediction = {
    1: 'Вам сегодня крупно повезет',
    2: 'сегодня лучше остаться дома',
    3: 'сегодня Вас жду неприятности',
    4: 'сегодня лучше заняться спортом',
    5: 'сегодня лучше Вас позаботиться о родных',
    6: 'сегодня лучше Вас позаботиться о своем здоровье',
    7: 'сегодня Вам необходимо подумать о своем поведении',
    8: 'в этот день займитесь собой',
    9: 'утром будет дождь, незабудьте зонт',
    0: 'Вам сегодня улыбнеться фортуна',
}


let count = 0;

let start = document.querySelector('#start');
let stop = document.querySelector('#stop');
let timer = document.querySelector('#timer');
let text = document.querySelector('#text');


start.addEventListener('click', getNumber);

function getNumber() {
    let goTimer = setInterval(() => {
        count++;
        timer.innerHTML = count;
        if (count >= 9) {
            count = 0;
        }
    }, 100);

    start.removeAttribute('class');
    stop.setAttribute('class', 'active');

    stop.addEventListener('click', function () {
        clearInterval(goTimer);
        stop.removeAttribute('class');

        for (let elem in objPrediction) {
            if (count == +elem) {
                text.innerHTML = objPrediction[elem];
                if (elem % 2 == 0) {
                    text.style.background = 'red';
                } else {
                    text.style.background = 'green';
                }
            }
        }
    })
}