
document.getElementById("Joke1").style.display = "none" ;
document.getElementById("Joke11").style.display = "none" ;
document.getElementById("Joke12").style.display = "none" ;
document.getElementById("Joke13").style.display = "none" ;
document.getElementById("korzinka1").style.display = "none" ;
document.getElementById("korzinka2").style.display = "none" ;
document.getElementById("korzinka3").style.display = "none" ;
document.getElementById("korzinka4").style.display = "none" ;
function myFunc() {
    document.getElementById("Joke").style.display = "none" ;
    document.getElementById("Joke1").style.display = "block" ;
    document.getElementById("Number").innerHTML++;
    document.getElementById("Number11").innerHTML++;
    document.getElementById("korzinka1").style.display = "block" ;


}


function Num1() {
    document.getElementById("Number").innerHTML++;
    document.getElementById("Number11").innerHTML++;
    document.getElementById("korzinka1").style.display = "block" ;
}
function Num2() {
    if ( 0<document.getElementById("Number").innerHTML) {
        document.getElementById("Number").innerHTML--;
        document.getElementById("Number11").innerHTML--;
     
    }
    else {
        document.getElementById("Joke").style.display = "block" ;
        document.getElementById("Joke1").style.display = "none" ;
        document.getElementById("korzinka1").style.display = "none" ;
        
    }
}




function myFunc1() {
    document.getElementById("Joke9").style.display = "none" ;
    document.getElementById("Joke11").style.display = "block" ;
    document.getElementById("Number1").innerHTML++
    document.getElementById("Number12").innerHTML++;
    document.getElementById("korzinka2").style.display = "block" ;
}


function Num3() {
    document.getElementById("Number1").innerHTML++;
    document.getElementById("korzinka2").style.display = "block" ;
    document.getElementById("Number12").innerHTML++;
}
function Num4() {
    if ( 0<document.getElementById("Number1").innerHTML) {
        document.getElementById("Number1").innerHTML--;
        document.getElementById("Number12").innerHTML--;
    }
    else {
        document.getElementById("Joke9").style.display = "block" ;
        document.getElementById("Joke11").style.display = "none" ;
        document.getElementById("korzinka2").style.display = "none" ;
    }
}





function myFunc2() {
    document.getElementById("Joke8").style.display = "none" ;
    document.getElementById("Joke12").style.display = "block" ;
    document.getElementById("Number2").innerHTML++;
    document.getElementById("Number21").innerHTML++;
    document.getElementById("korzinka3").style.display = "block" ;
}


function Num5() {
    document.getElementById("Number2").innerHTML++;
    document.getElementById("Number21").innerHTML++;
    document.getElementById("korzinka3").style.display = "block" ;
}
function Num6() {
    if ( 0<document.getElementById("Number2").innerHTML) {
        document.getElementById("Number2").innerHTML--;
        document.getElementById("Number21").innerHTML--;
        
    }
    else {
        document.getElementById("Joke8").style.display = "block" ;
        document.getElementById("Joke12").style.display = "none" ;
        document.getElementById("korzinka3").style.display = "none" ;
    }
}






function myFunc3() {
    document.getElementById("Joke7").style.display = "none" ;
    document.getElementById("Joke13").style.display = "block" ;
    document.getElementById("Number3").innerHTML++;
    document.getElementById("Number31").innerHTML++;
    document.getElementById("korzinka4").style.display = "block" ;
}


function Num7() {
    document.getElementById("Number3").innerHTML++;
    document.getElementById("Number31").innerHTML++;
    document.getElementById("korzinka4").style.display = "block" ;
}
function Num8() {
    if ( 0<document.getElementById("Number3").innerHTML) {
        document.getElementById("Number3").innerHTML--;
        document.getElementById("Number31").innerHTML--;
    }
    else {
        document.getElementById("Joke7").style.display = "block" ;
        document.getElementById("Joke13").style.display = "none" ;
        document.getElementById("korzinka4").style.display = "none" ;
    }
}


