var num1Element=document.getElementById('num1') as HTMLInputElement
var num2Element=document.getElementById('num2') as HTMLInputElement;

var btnElement=document.querySelector('button') as HTMLButtonElement;
var numResult :number[]=[];
var textResult:string[]=[];

type numStr=number|string;

type objvalue={val:number, timeStamp:Date};

interface OBJVALUE{
    val:number,
     timeStamp:Date
    }

function sum(num1 :numStr,num2:numStr){
    if(typeof num1==='number' && typeof num2==='number'){
    return num1+num2;}

    if(typeof num1==='string' && typeof num2==='string'){
        return num1 +' '+ num2;}
        else
        return +num1 + +num2;
}

function  printresObject(resObj:OBJVALUE){
    console.log(resObj.val)
    console.log(resObj.timeStamp)
}

btnElement.addEventListener('click',()=>{
    var num1=num1Element.value;
    var num2=num2Element.value;
    const res=sum(+num1,+num2)
    const data=sum(num1,num2)
numResult.push(res as number);

textResult.push(data as string);
printresObject({val:res as number,timeStamp:new Date()});
console.log(numResult,textResult);
})

const promise=new Promise<string>((res,rej)=>{
    setTimeout(()=>{
        res('it worked')
    },1000)
});

promise.then((res)=>{
    console.log(res.split('w'));
})