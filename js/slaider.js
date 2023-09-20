let boxslaider = document.getElementById("boxslaider");
let iconchevronleft = document.getElementById("iconchevronleft");
let iconchevronright = document.getElementById("iconchevronright");

iconchevronright.addEventListener("click", function(){
    if(boxslaider.classList.contains("box-slaider1")){
    boxslaider.classList.remove("box-slaider1")
    boxslaider.classList.add("box-slaider2")
    }
    else if( boxslaider.classList.contains("box-slaider2")){
        boxslaider.classList.remove("box-slaider2")
        boxslaider.classList.add("box-slaider3")
    }
    else if( boxslaider.classList.contains("box-slaider3")){
        boxslaider.classList.remove("box-slaider3")
        boxslaider.classList.add("box-slaider4")
    }
    else if( boxslaider.classList.contains("box-slaider4")){
        boxslaider.classList.remove("box-slaider4")
        boxslaider.classList.add("box-slaider5")
    }
    else if( boxslaider.classList.contains("box-slaider5")){
        boxslaider.classList.remove("box-slaider5")
        boxslaider.classList.add("box-slaider1")
    }
});

iconchevronleft.addEventListener("click", function(){
    if(boxslaider.classList.contains("box-slaider5")){
    boxslaider.classList.remove("box-slaider5")
    boxslaider.classList.add("box-slaider4")
    }
    else if( boxslaider.classList.contains("box-slaider4")){
        boxslaider.classList.remove("box-slaider4")
        boxslaider.classList.add("box-slaider3")
    }
    else if( boxslaider.classList.contains("box-slaider3")){
        boxslaider.classList.remove("box-slaider3")
        boxslaider.classList.add("box-slaider2")
    }
    else if( boxslaider.classList.contains("box-slaider2")){
        boxslaider.classList.remove("box-slaider2")
        boxslaider.classList.add("box-slaider1")
    }
    else if( boxslaider.classList.contains("box-slaider1")){
        boxslaider.classList.remove("box-slaider1")
        boxslaider.classList.add("box-slaider5")
    }
})