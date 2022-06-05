/*
let display = document.getElementsByClassName('screen');
let buttons = Array.from(document.getElementsByTagName('button'))


buttons.map(button => {
    button.addEventListener('click', (e) =>{
        switch(e.target.innerText){
            case 'c':
                display.innerText = '';
                break;
            case '=':
                try{
                    display.innerText = eval(display.innerText)
                }catch{
                    display.innerText = 'Error!';
                }
                break;
            default:
                display.innerText += e.target.innerText
        }
    })
})
*/

function getInputValue(){
    let input = event.target.innerText
    console.log(input)
}
let buttons = document.getElementsByTagName('button');
for(var i=0 ; i<=buttons.length ; i++){
    buttons[i].setAttribute('onclick', 'getInputValue()');
}