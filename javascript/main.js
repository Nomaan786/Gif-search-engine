// Grab The Value
document.querySelector(".js-go").addEventListener("click", function() {
    var input = document.querySelector("input").value;
    pushToDOM(input);
});
document.querySelector(".js-userinput").addEventListener("keyup", function(e) {
    var input = document.querySelector("input").value;
    console.log(input);
    if (e.which === 13) {
        pushToDOM(input);
    }
});
// Connect With API

// Display The GIF

function pushToDOM(input) {
    var container = document.querySelector(".js-container");
    container.innerHTML = input;
}