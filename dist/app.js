class Calculator {
    constructor (x, y){
        this.x = x,
        this.y = y,
        this.add = ()=> this.x + this.y
        this.sub = ()=> this.x - this.y
        this.mul = ()=> this.x * this.y
        this.div = ()=> this.x / this.y
    }
}
///////////////////////////////////////
 /// COUNTER ///

var count  = 3;
let counter = () =>{
    let end = false;
    if(count > 0){
        document.getElementById("counterOut").innerText = count;
        console.log(count);
        count--;
    }
    else{
        clearInterval(countInterval);
        main();
    }
}
let countInterval = setInterval(counter, 1000);



///////////////////////////////////////
///
const main =  () => {
    document.getElementById("counterOut").style.display = "none";


    setTimeout(()=>{
        /* Ovde sam morao da stavim timeout jer drugačije nisam mogao
        da sakrijem ispis brojača pre funkcije (uvek bi mi osato ispis 1
        i pokrenuo bi se modalni prozor) da li postoji drugo rešenje ili je ovo ok ?*/
        const X = parseInt(prompt("Please enter X value."));
        // AO >> Arithmetic Operator
        const AO = prompt("Please define arithmetic operator.");
        const Y = parseInt(prompt("Please enter Y value."));
        // SC >> Simple Calculator
        const SC = new Calculator(X, Y);
        
        switch(AO){
            case "+":
                alert(`Result is: ${SC.x} + ${SC.y} = ${SC.add()}`);
                break;
            case "-":
                alert(`Result is: ${SC.x} - ${SC.y} = ${SC.sub()}`);
                break;
            case "*":
                alert(`Result is: ${SC.x} * ${SC.y} = ${SC.mul()}`);
                break;
            case "/":
                alert(`Result is: ${SC.x} / ${SC.y} = ${SC.div()}`);
                break;
            default:
                alert("Unknown arithmetic operator");
            }

            if(confirm("Press OK to try again or Cancel to leave.")){
                main();
            }else{
                alert("Goodbye!");
                try_btn.style.display = "inline";
            }},100);
}
const try_btn = document.getElementById("tryAgain");
try_btn.addEventListener("click", () => main());