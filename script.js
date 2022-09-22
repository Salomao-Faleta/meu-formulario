const form = document.querySelector("#form");
const campos = document.querySelectorAll(".inputs");
const span_required = document.querySelectorAll(".span-required");
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const telefoneRegex = /^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}\-[0-9]{4}$/;
const cepRegex = /^[0-9]{5}[-][0-9]{3}$/;
const cpfRegex = /^[0-9]{3}[.][0-9]{3}[.][0-9]{3}[-][0-9]{2}$/;

form.addEventListener('submit', (event)=>{
    event.preventDefault();
    nameValidate();
    emailValidate();
    telefoneValidate();
    cepValidate();
    cpfValidate();
    senhaValidate();
    comparePassword();

});

function setError(index){
    campos[index].style.border = '2px solid red';
    span_required[index].style.display = 'block';
}

function removeError(index){
    campos[index].style.border = '';
    span_required[index].style.display = 'none';
}

function nameValidate(){
    if(campos[0].value.length < 3){
        setError(0);
    } else{
        removeError(0);
    }
}

function emailValidate(){
    if(!emailRegex.test(campos[1].value)){
        setError(1);
    } else{
        removeError(1);
    }
}

function telefoneValidate(){
    if(!telefoneRegex.test(campos[2].value)){
        setError(2);
    } else{
        removeError(2);
    }
}

function cepValidate(){
    if(!cepRegex.test(campos[3].value)){   
        setError(3);
    } else{
        removeError(3);
    }
}

function cpfValidate(){
    if(!cpfRegex.test(campos[4].value)){
        setError(4);
    } else{
        removeError(4);
    }
}

function senhaValidate(){
    if(campos[5].value.length < 8){
        setError(5);
    } else{
        removeError(5);
        comparePassword();
    }
}

function comparePassword(){
   if(campos[6].value == campos[5].value && campos[6].value.length >= 8){
        removeError(6);
   }  else{
        setError(6);
   }
}

