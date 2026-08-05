const button = document.getElementById("colorBtn");

let changed = false;

button.addEventListener("click", () => {

    if(changed){
        button.style.background = "#007bff";
    }
    else{
        button.style.background = "#28a745";
    }

    changed = !changed;

});