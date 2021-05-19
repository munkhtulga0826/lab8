

// window.alert("Хариултаа Latin буюу Англиар бичнэ үү.")
let questions = ['Монгол улсын төв цэг хаана оршдог вэ?', 'Хүний биеийн хэдэн хувийг ус эзэлдэг вэ?', 'Монгол улс хэдэн аймагтай вэ?', 'Шилийг юунаас гаргаж авдаг вэ?', 'Дэлхий хэдэн градус хазайж эргэдэг вэ?'];
let answers = ['Өвөрхангай', '70', '21', 'Элс', '23.5'];
let timer = document.querySelector('.timer-text');
let questionDOM = document.querySelector('.question');
let answer = document.querySelector("#answer");
let body = document.querySelector('body');
let questionNum = 0;
let answerNum = 0;
let correct = 0;
let incorrect = 0;
let time = 11;
let interval;

function hangmanStart() {

    hangman.style.display = "block";
    main.style.display = "none";
    legLeft.style.display = "block";
    legRight.style.display = "block";
    armLeft.style.display = "block";
    armRight.style.display = "block";
    head.style.display = "block";
    questionNum = 0;
    questionDOM.innerText = questions[questionNum];
    incorrect = 0;
    window.alert("Хариугаа Монголоор болон тоогоор бичнэ үү.");
    Timer();
}

function hangmanValidate() {
    if ((answer.value).toLowerCase() == answers[questionNum]) {
        body.style.backgroundColor = 'green';
        answer.value = '';
        window.setTimeout(function () {
            body.style.backgroundColor = '#222831';
        }, 300)
        changeQuestion();
    }
}
function hangmanKeyValidate(e) {
    console.log(e);
    if (event.key === 'Enter') {
        if ((answer.value).toLowerCase() != answers[questionNum]) {
            body.style.backgroundColor = 'red';
            answer.value = '';
            window.setTimeout(function () {
                body.style.backgroundColor = '#222831';
            }, 300);
            incorrect++;
            changeQuestion();

        }
    }
}
function changeQuestion() {
    if (questionNum >= 4) {
        questionDOM.innerText = 'Тоглоом дууслаа.';
        setTimeout(function () { closeHangman(); }, 3000);
        questionNum = 0;
        if (incorrect < 4) {
            alert("Яллаа");
            correct = 0;
        }
        else{
            alert("Хожигдлоо.");
        }
    }
    switch (incorrect) {
        case 1:
            legLeft.style.display = "none";
            break;
        case 2:
            legRight.style.display = "none";
            break;
        case 3:
            armLeft.style.display = "none";
            break;
        case 4:
            armRight.style.display = "none";
            break;
    }
    questionNum++;
    questionDOM.innerText = questions[questionNum];
    clearInterval(interval);
    Timer();
}



function Timer() {
    time = 10;

    interval = setInterval(function () {
        if (time > 0) {
            time--;
            timer.innerText = `${time}`;
        }

        if (time == 0) {
            body.style.backgroundColor = 'red';
            answer.value = '';
            window.setTimeout(function () {
                body.style.backgroundColor = '#222831';
            }, 300);
            clearInterval(interval);
            incorrect++;
            changeQuestion();
        }


    }, 1000);
}

function closeHangman() {
    hangman.style.display = 'none';
    main.style.display = 'block';
    questionNum = 0;
    incorrect = 0;
    clearInterval(interval);
}
