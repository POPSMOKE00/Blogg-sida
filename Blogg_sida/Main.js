
window.onload = (event) => {
    modeButton = document.getElementById("mode")
    console.log(modeButton)
}

function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    if (element.classList.contains("dark-mode")) {
        modeButton.src = "./Images/Light-mode.png"

    }
    else {
        modeButton.src = "./Images/Dark-mode.png"
    }
    console.log(modeButton.src)
}
