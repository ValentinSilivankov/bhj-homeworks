const ModalMain = document.getElementById('modal_main');
const ModalSuccess = document.getElementById('modal_success');
const ShowSuccessButton = document.querySelector('.show-success');
const CloseButton = Array.from(document.querySelectorAll('.modal__close_times'));


window.onload = function(){
    ModalMain.classList.add('modal_active');
}

ShowSuccessButton.onclick=function(){
    ModalMain.classList.remove('modal_active');
    ModalSuccess.classList.add('modal_active');
}

CloseButton[0].onclick = function(){
    ModalMain.classList.remove('modal_active');
};

CloseButton[1].onclick = function(){
    ModalSuccess.classList.remove('modal_active');
};