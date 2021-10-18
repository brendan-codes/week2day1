function myFunction(element){
    // alert("You clicked my function!");

    console.log(Math.floor(Math.random() * 10));

    console.log(element);

    element.innerText = "This button was totally clicked!"
}

function remove(element){
    element.remove();
}

// ALWAYS SANATIZE A USER'S STRINGS
function changeBox(element){
    element.innerHTML = element.innerHTML += "<button onclick='otherEvent()'>This is a button that does stuff</button>";
}

function otherEvent(){
    console.log("You have clicked a dynamically created button! ")
}