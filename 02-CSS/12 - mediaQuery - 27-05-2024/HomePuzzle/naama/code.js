
function changeChevron() {
    var element = document.getElementById("chevron");
    if(element.classList.contains("fa-chevron-down")){
        element.classList.replace("fa-chevron-down", "fa-chevron-up");
    }
    else{
        element.classList.replace("fa-chevron-up", "fa-chevron-down");
    }
  }

function show() {
    var games = document.getElementById("games");
    if(!games.classList.contains("show")){
    games.classList.add("show");}
    else{
    games.classList.remove("show");
    }
}

function removeselected(){
    var element = document.getElementById("selected");
    switch(element.classList[1]){
        case 1:
            console.log("1");
            removeAttribute("id");
            break;
        case 2:
            console.log("2");
            removeAttribute("id");
            break;
        case 3:
            console.log("3");
            removeAttribute("id");
            break;
        case 4:
            console.log("4");
            removeAttribute("id");
            break;
    }
}

function addselected(){
    var element = document.getElementsByClassName("side-button");
    console.log(element.classList[1]);
}