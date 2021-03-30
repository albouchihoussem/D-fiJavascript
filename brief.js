//exo1
function Inverser(a,b) {   
    tmp = a; 
    a = b; 
    b = tmp; 
    console.log(1,2) }; 
    Inverser(); 
//exo2
function myAffich(){ 
    Nom='tuto';
    Age=30;
    Homme=true;
    return  Nom+" "+Age+" "+Homme;  
}

    console.log(myAffich());  
    // Ex 3
    function power(a){
        return a*a;

    }
console.log(power(8))
//Ex 4
function som(a,b){
    return a+b;
}
console.log(som(2,8))
//Ex 5
function minToSec(mints){
    return mints*60;
}
console.log(minToSec(3))
// ex 6

function increment(a){
    return a=a+1;
}
console.log(increment(2))
//Ex 7
function triangle(b, h){
    return b*h/2;
}
console.log(triangle(2,8))
//Ex 8

//Ex 9
function position(tab){
return tab[0];
}
console.log(position([8,7,5,6]))
// Ex 11
function rest(a,b){
    return a%b;
}
console.log(rest(9,7))