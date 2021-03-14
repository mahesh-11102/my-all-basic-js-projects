
/* <--- delete this to see uncommented lines
//1.) ways to print in js starting from here {
// Javascript console API
console.log("congo mahesh now u r writing in js");
//    alert("this is my first alert funct in js");
//document.write("this is doc.write");
// ending here }

//2.) javascript console API
console.log(2 + "nd time congo mahesh now u r writing in js");
console.warn("this is a warning");
console.error("oh hoo! this is an error");

    //these are my obs in console console.clear() console.assert(4==6) console.assert(4=(6-2))

//3.) js variables
// what are varaibles ?
//A- conatiner to store data values
delete this to get uncommented lines ---> */
/*
var number1 =34;
var number2 = 36;
console.log(number1 + number2);

//4.) datatypes in js 
var num1= 45;
var num2= 56.48;
var str1 = "hey dude! this is a string with \" ";
var str2 = 'hey dude! this is a string with \' .';
//objects 
var marks={
    manognya:40,
    syamala:40,
    mahesh :99.999
};
console.log(marks);

//booleans
var a = true;
var b = false;
console.log(a,b);

//undefined null
var und;
console.log(und);//this mean that if we don't even dec anything it is called und
var und= undefined;
console.log(und);

var n= null;; console.log(n);


at very high level ,, there are two type og\f data types in js
1.)  primitive data types : undefined ,null, number ,string , boolean, symbool
2.) reference data types: arrays and obj
*/

var arr = [1, 2,"we can include string also in js "+ 3 + " where 3 is a numb",4];
/*
console.log(arr);
console.log(arr[0]);
console.log(arr[2]);

//operators in js
console.log(" the value of num1 +num2 is",number1+number2);
console.log(num1>num2);

//functions is js
// DRY - do not repeat yourself

console.log("above the funct "+ add(num1,num2)); // when we use "+" in console.log it will pass the inner arguments as string thats the reasion why u will get all text in black 
// in js strings are identified as black in colour
function add(a,b){
return a+b;
};
console.log("below the funct ",add(num1,num2)); // when we use "," in console.log it will pass it each argument as  indi vari thats the reason y u got blue in colour

//conditionals in js if , else if and  else
if(num1<36.00){
    console.log('num1 is greater than 36.00');
}
else if(num1>35.00){
    console.log('num1 is greater than 36.00 this is with {} bracket');
}

//loops in js
console.log("printing the elements using for loop");
for(var i=0;i<arr.length;i++)
    console.log(arr[i])

    console.log("printing the elements of an array using do while loop");
let j=0;
do{
    console.log(arr[j]);
    j++
}while(j<arr.length);
//js also contains break and continue

let myarr= [" fan", "camera", 34, null,true];
console.log("initial array ",myarr);

//lenth of an array
console.log(myarr.length);

//to remove the last elembnt we use pop
console.log("mahesh is removing the last elemnet of an array using pop ")
console.log(myarr.pop());// dont forget to put "()" after pop 

// to add some element int the array we use push
myarr.push("mahesh is adding me at the last of an array using push")
console.log(myarr);

//to remove first element from the array we use shift method
myarr.shift();
console.log(myarr);

//to add elements in the first index we use unshift
myarr.unshift("mahesh is adding me at the first of an array using unshift");
console.log(myarr);

//TO CONVERT all the elemnts prent in an ARRAY INTO STRING WE USE .toString()
//TO sort the array we use .sort()  here the sort funct does not sorts the numbers
// instead it convert the numb into string and sort in dict way like how words are sort in dictionary

// to explore more on array methods go to mdn methods

// string method in js
let sample_string = "mahesh is the most intelligrnt person in the world"; 
console.log(sample_string.length);
console.log(sample_string.indexOf(" ")); //since index starts with 0 index of space is given as 6
console.log(sample_string.lastIndexOf(" "));

// to make a substring we use slice 
console.log(sample_string.slice(7,25));// substring from 7th indexto 25th index
console.log(sample_string.slice(7,85)); // if we exlude more than length then it will make a substring till the last one i.e length-1
console.log(sample_string.slice(7)); // if we dont specify the last index then it will assume last index as length-1

// to replace a world/element in a string we use .replace()
console.log(sample_string.replace("intelligrnt","intelligent"));



// now let us move on to date :)
let mydate= new Date(); //this reminds me java
console.log(mydate);

// inorder to print time in sec we use .getTime()
console.log(mydate.getTime());

//inorder to get only date we use .getFullYear()
console.log(mydate.getFullYear());

//to get the day note:- here the ans is in numb
//sund=0,mon=1, tue=2 , wed=3, thur = 4, fri= 5, sat=6
console.log(mydate.getDay());


//DOM manupilation
let elem =document.getElementById('click');
console.log(elem);

let elemcls =document.getElementsByClassName('container');
console.log(elemcls);

//elemcls[0].style.background="green";
elemcls[0].classList.add("lol");

//adding another class to the container
elemcls[0].classList.add("loltext");

//removing the class
//elemcls[0].classList.remove("loltext")

//to get teh inner text 
console.log("inner text in the elemcls is \n", elemcls[0].innerText);

//to get inner HTML
console.log(console.log("inner HTML in elemcls is \n", elemcls[0].innerHTML));
/*
//elements by tag name
tn= document.getElementsByTagName('button');
console.log(tn);

createdElement = document.createElement('h2' );
createdElement.innerText ="this a heading which is being added by js";
tn[0].appendChild(createdElement);

cE= document.createElement('p');
cE.innerText="this is a para which beign replace by h2 via js";
tn[0].replaceChild(cE,createdElement);


 //selecting using query
 sel= document.querySelector('.conatainer');
 console.log(sel);

 sel= document.querySelectorAll('.conatainer');
 console.log(sel);



 //events in js
 function clicked(){
     console.log('the button was clicked');
 };

 window.onload= function(){
     console.log('the page is loaded'); 
     for(var i=0;i<5;i++)
        console.log(i);
 };

 first_container.addEventListener('click',function(){
     console.log("you have clicked on the button which is present in the first_container ");
 });

 first_container.addEventListener('mouseover',function(){
    console.log("now you have hover your cursor inside the first_container ");
});

first_container.addEventListener('mouseout',function(){
    console.log("now you have hoveryour cursor outside the first_container ");
});

first_container.addEventListener('mouseup',function(){
    console.log("mouse up when you have clicked on the first_container ");
});

first_container.addEventListener('mousedown',function(){
    console.log("mouse down when you have clicked on the first_container ");
});

let prevhtml=document.querySelectorAll('.container')[1].innerHTML;
first_container.addEventListener('mouseup',function(){
    document.querySelectorAll('.container')[1].innerHTML=prevhtml;
    console.log("mouse up  when you have clicked on the first_container ");
});

first_container.addEventListener('mousedown',function(){
    document.querySelectorAll('.container')[1].innerHTML =  "<b> we have clicked </b>"; 
    console.log("you have clicked on the button which is present in the first_container ");
});

here when you r clicking the mouse the click goes down and hence 
239 is called and hence what you have written on 240 is being displayed
 when u release 233 is called hence hence at 235 it beign replace to 
same line (as u have alreafdy stored the line in the preHTML)



//setTimeout and setinterval 
// arrow function 

function sum1(){
    return 5;
}
// above code and be resolved into
sum2=(a,b)=>{
    return a+b;
};

logchei=()=>{
    document.querySelectorAll('.container')[1].innerHTML="<b>hey you! yeah you fcuk off!</b>"
    console.log("u have logged into the doc"); 
}
//setTimeout 1st arg funct 2nd arg how many millisec u wanna run 
//setTimeout(logchei,3000);

//setinterval is used when u wanna use repeatedly
clr=setInterval(logchei,3000);

stop_inteval= ()=>{
    clearInterval(clr);
}
setTimeout(stop_inteval,10000);// this will stop the inerval ig :)

//use clearInterval(clr) /clearTimeout(clr) to cancel setinterval/setTimeout
*/

//js localstorage
 