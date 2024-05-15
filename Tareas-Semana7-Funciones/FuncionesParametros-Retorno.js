'use strict'

//Sin parámetros, sin valor de retorno.
function ShowText() {
    alert('Hello');
}
ShowText('Hello');

//Con parámetros, sin valor retorno.
function ShowName(name) {
    alert(name);
}
ShowName('Alice');

//Sin parámetros, con valor retorno.
function Show() {
    return (result);
}
let result = ('Welcome!');
alert(result);

//Con parámetros, con valor retorno.
function ShowFullText(text, name) {
    return text + name;
}
let result2 = ShowFullText('Welcome ', 'Alice');
alert(result2);