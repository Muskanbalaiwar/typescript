"use strict";
var num1Element = document.getElementById('num1');
var num2Element = document.getElementById('num2');
var btnElement = document.querySelector('button');
var numResult = [];
var textResult = [];
function sum(num1, num2) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2;
    }
    if (typeof num1 === 'string' && typeof num2 === 'string') {
        return num1 + ' ' + num2;
    }
    else
        return +num1 + +num2;
}
function printresObject(resObj) {
    console.log(resObj.val);
    console.log(resObj.timeStamp);
}
btnElement.addEventListener('click', () => {
    var num1 = num1Element.value;
    var num2 = num2Element.value;
    const res = sum(+num1, +num2);
    const data = sum(num1, num2);
    numResult.push(res);
    textResult.push(data);
    printresObject({ val: res, timeStamp: new Date() });
    console.log(numResult, textResult);
});
const promise = new Promise((res, rej) => {
    setTimeout(() => {
        res('it worked');
    }, 1000);
});
promise.then((res) => {
    console.log(res.split('w'));
});
