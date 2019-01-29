var lab = document.getElementsByClassName('inp-Login');
var slides = document.getElementsByClassName('card');
var inputs = document.getElementsByClassName('class-inputs');


window.onload = function () {
    input();
    buttonTransition();
    var colors = ['#01579B', '#6200EA','#1A237E','#D50000','#FF5722','#FFC107', '#9E9E9E', '#00C853', '#1B5E20', '#C51162'];
    var conta = Math.floor((Math.random() * colors.length) + 1);
    document.getElementById('word-name').style.backgroundColor = colors[conta];
};

function input() {
    for(var i = 0; i < lab.length; i++) {
        if (lab[i].value.length) {
            lab[i].setAttribute('valid','');
        }
        else {
            lab[i].removeAttribute('valid');
        }
        lab[i].oninput = function () {
            input();
        }
    }
    buttonTransition();
}

var btnsRipple = function (e) {
    var target = e.target;
    if (target.tagName.toLowerCase() !== 'button') return false;
    var rect = target.getBoundingClientRect();
    var ripple = target.querySelector('.ripple');
    if (!ripple) {
        ripple = document.createElement('span');
        ripple.className = 'ripple';
        ripple.style.height = ripple.style.width = Math.max(rect.width, rect.height) + 'px';
        target.appendChild(ripple);
    }
    ripple.classList.remove('show');
    var top = e.pageY - rect.top - ripple.offsetHeight / 2 - document.body.scrollTop;
    var left = e.pageX - rect.left - ripple.offsetWidth / 2 - document.body.scrollLeft;
    ripple.style.top = top + 'px';
    ripple.style.left = left + 'px';
    ripple.classList.add('show');
    return false;
};

function buttonTransition() {

    for (var i = 0; i < inputs.length; i++) {

        if (inputs[i].querySelectorAll('input')[0].hasAttribute('valid')) {
            inputs[i].querySelectorAll('button')[0].removeAttribute('disabled');
            inputs[i].querySelectorAll('button')[0].setAttribute('corChange', '');
            inputs[i].querySelectorAll('button')[0].setAttribute('buttonChange', '');
            inputs[i].querySelectorAll('button')[0].addEventListener('click', btnsRipple);
        }
        else if(!inputs[i].querySelectorAll('input')[0].hasAttribute('valid')){
            inputs[i].querySelectorAll('button')[0].setAttribute('disabled','');
            inputs[i].querySelectorAll('button')[0].removeAttribute('corChange');
            inputs[i].querySelectorAll('button')[0].removeAttribute('buttonChange');
        }
    }
}

function name() {
    var inputUSer = document.getElementById('inp-Email').value;
    document.getElementById('word-name').innerText = inputUSer.charAt(0);
    document.getElementById('label-name-user').innerHTML = 'Olá ' + inputUSer;
}

function slidesOne(){
        slides[0].setAttribute('guardaCardOne','');
        slides[0].removeAttribute('apareceCardOne');
        document.getElementById('container-card').setAttribute('aumenta','');
        document.getElementById('container-card').removeAttribute('diminui');
        slides[1].style.display = 'block';
        document.getElementById('message-Login').style.opacity = '0';
        document.getElementById('div-word-Name').style.display ='block';
        slides[1].setAttribute('apareceCardTwo','');
        slides[1].removeAttribute('guardaCardTwo');

        setTimeout(function () {
            slides[1].querySelector('input').focus();
        },100);

        setTimeout(function () {
            slides[0].style.display = 'none';
        },1);

        name();
}

function slidesTwo() {

        slides[0].setAttribute('apareceCardOne','');
        slides[0].removeAttribute('guardaCardOne');
        document.getElementById('container-card').setAttribute('diminui','');
        document.getElementById('container-card').removeAttribute('aumenta');
        slides[0].style.display = 'block';
        document.getElementById('message-Login').style.opacity = '1';
        document.getElementById('div-word-Name').style.display = 'none';
        slides[1].setAttribute('guardaCardTwo','');
        slides[1].removeAttribute('apareceCardTwo');
        setTimeout(function () {
            slides[1].style.display = 'none';
        },1);

        slides[0].querySelector('input').removeAttribute('error');
        document.getElementsByTagName('label')[0].style.color = '#767676';
        document.getElementById('div-errorEmail').style.display = 'none';
}

document.addEventListener('keypress', function(e){
    if (e.which === 13 && slides[0].querySelector('input').value === 'pedro' || e.which === 13 && slides[0].querySelector('input').value === '') {
            slides[0].querySelector('input').setAttribute('error', '');
            slides[0].querySelector('label').style.color = 'red';
            slides[0].querySelector('p').style.display = 'block';
            document.getElementsByClassName('btn-login')[0].setAttribute('disabled', '');
            slides[0].querySelector('span').style.background = 'none';
            slides[0].querySelector('input').select();
        }

        else if (e.which === 13) {
            slidesOne();
        }

        else if (lab[0].hasAttribute('valid')) {
            document.getElementById('inp-Email').removeAttribute('error');
            slides[0].querySelector('button').removeAttribute('disabled');
            document.getElementsByTagName('label')[0].style.color = '#767676';
            document.getElementById('errorEmail').style.display = 'none';
        }
    return false;
}, false);

document.addEventListener('keypress', function(e) {

    if (e.which === 13 && slides[1].querySelector('input').value === 'pedro'){
        slides[1].querySelector('input').setAttribute('error', '');
        slides[1].querySelector('label').style.color = 'red';
        slides[1].querySelector('button').setAttribute('disabled', '');
        slides[1].querySelector('span').style.background = 'none';
        document.getElementById('errorPassword').style.display = 'block';
        slides[1].querySelector('input').select();
    }

    else if (lab[1].hasAttribute('valid')){
        slides[1].querySelector('input').removeAttribute('error');
        slides[1].querySelector('button').removeAttribute('disabled');
        slides[1].querySelector('label').style.color = '#767676';
        document.getElementById('errorPassword').style.display = 'none';
    }

},false);