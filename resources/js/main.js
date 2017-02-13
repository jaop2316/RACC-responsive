function myFunction() {
    var x = document.getElementById("myMainNav");
    if (x.className === "main-navbar") {
        x.className += " responsive";

    } else {
        x.className = "main-navbar";

    }
    console.log("funciona");
}