let clicks = 0;
let img = document.getElementById("cookie");


img.onclick = function (){
    clicks ++
    let a = document.getElementById("clicker__counter").innerHTML = clicks
    if (img.style.width == "300px") {
        img.style.width = "200px";
        img.style.height = "auto";
    } 
    else {
        img.style.width = "300px";
    }
}