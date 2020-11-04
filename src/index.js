const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
];

const startBtn = document.querySelector('button[data-action="start"]');
const stopBtn = document.querySelector('button[data-action="stop"]');
const body = document.querySelector('body');

let timeIntervalId = null;


startBtn.addEventListener('click', startСhangesBodyColor);
stopBtn.addEventListener('click', stopСhangesBodyColor);



function startСhangesBodyColor() {

    timeIntervalId = setInterval(() => {

        const randomIntegerFromInterval = (min, max) => {
            return Math.floor(Math.random() * (max - min + 1) + min);
        };
        let i = randomIntegerFromInterval(0, colors.length - 1);

        body.style.backgroundColor = colors[i];

        startBtn.setAttribute("disabled", "true");


    }, 1000);

};

function stopСhangesBodyColor() {
    clearInterval(timeIntervalId);
    startBtn.removeAttribute("disabled");
}