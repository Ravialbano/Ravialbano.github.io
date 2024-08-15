function typeWriter(elemento){
    const textoArray = elemento.innerHTML.split("");
    elemento.innerHTML = "";
    textoArray.forEach((letra, i) => {
        setTimeout(function(){
            elemento.innerHTML += letra

        },75 * i)
    }
)
}
const titulo = document.querySelector("h1")
typeWriter(writeJs) 



const display = document.getElementById("display");

//adiciona os numneros no display
function appendNumber(number){
    display.value += number;
}

//adciona um operador ao display

function appendOperator(operator){
    //verifica se o ultimo valor digitado no display e um operador, se sun ele substitui o operador antigo pelo novo para nao haver um erro
    const last_caracter = display.value.slice(-1);
    if (['+','-','*','/'].includes(last_caracter)){
        display.value = display.value.slice(0,-1) + operator;

    }else {
        display.value += operator;
    }
}
//limpa o display
function clearDisplay() {
    display.value = '';
}

function calcularResultado(){
    let ex = display.value;
    if (ex){
        display.value = filtrar(ex)

    }
}
function filtrar(ex){
    ex = ex.replace(/\s+/g, '');
    try{
        //utilizei o eval para pegar o valor dado em string e executar o codigo contido nela
        //tenho ciencia de que e uma expressao perigosa, por tanto eu poderia substituir ela por uma biblioteca ex: expr-eval
        return eval(ex)
    }catch{
        return error;
    }
    
}
