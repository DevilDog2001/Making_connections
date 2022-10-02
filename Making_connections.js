var x = document.getElementById("Proname")

var y =  document.getElementById("user-lineT")

var z =  document.getElementById("user-lineB")

var a = document.getElementById("connections1")

var b = document.getElementById("connections2")

var count1 = 0

var count2 = 0

function newname(){
    x.innerText = "Juliette"
}

function cr1(){
    count1++;
    count2--;
    a.innerText = 2+count2
    b.innerText = 500+count1+"+" 
    y.remove()
}

function cr2(){
    count1++;
    count2--;
    a.innerText = 2+count2
    b.innerText = 500+count1+"+"
    z.remove()
}


function cr3(){
    count2--;
    a.innerText = 2+count2
    y.remove()
}


function cr4(){
    count2--;
    a.innerText = 2+count2
    z.remove()
}