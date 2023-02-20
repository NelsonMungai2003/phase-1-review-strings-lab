let age=20
let isAdult,canWork,canDrink,canEnlist
switch(true){
    case age>=21:
        canDrink=true;
    case age>=18:
        isAdult=true;
        canEnlist=true;
    case age>=16:
        canWork=true;
}
console.log(isAdult)
console.log(canDrink)
console.log(canWork)
