var interval = setInterval(function(){ colorChange() }, 500);

function updateTitle(e){
    clearInterval(interval);
}

function rand(){
    return Math.floor(Math.random() * 256);
}

function colorChange(){
    var x = document.querySelector("#title");
    var y = document.querySelector("#window");
    x.style.backgroundColor = `rgb(${rand()},${rand()},${rand()})`;
    y.style.backgroundColor = `rgb(${rand()},${rand()},${rand()})`;
    // string interpolation
}

function submitName(){
    var x = document.querySelector("#nameField");
    console.log(x.value);

    var y = document.querySelector("#window");
    y.style.backgroundColor = x.value;
}

function checkCheckbox(){
    var x = document.querySelector("#checkbox");
    console.log(x.checked);
}


function over(){
    var x = document.querySelector("#cat");
    x.src = "http://placekitten.com/g/300/300";
}

function leave(){
    var x = document.querySelector("#cat");
    x.src = "http://placekitten.com/300/300";
}