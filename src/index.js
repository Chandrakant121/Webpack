import "./index.css"
//===============================Heading===================================

var header = document.getElementById("header");
let heading = document.createElement("h1");
heading.innerHTML = "TODO LIST";
heading.classList.add("clr", "align", "bgclr");
header.append(heading);

//=====================================LOGO=================================
let logo = document.createElement("img");
logo.src =
    "https://play-lh.googleusercontent.com/HUuQc4Zpl6x7fUyX-jFMmcuUbW77REw4UKl5rfhHfP4VY6ctBU1w1I_RZWsXaojFgIo=s360-rw";
header.append(logo);
logo.setAttribute("id", "logos");

//=====================================INPUT BTN=========================

var TodoData = document.getElementById("TodoData");

let addTodo = document.createElement("div");
addTodo.setAttribute("id", "addTodo");

let input = document.createElement("input");
input.setAttribute("id", "input");

let btn = document.createElement("button");
btn.innerHTML = "Add";
btn.setAttribute("id", "btn")

btn.addEventListener("click", () => {
    let val = document.getElementById("input").value;
    let data = JSON.parse(localStorage.getItem("data")) || [];
    data.push(val);
    localStorage.setItem("data", JSON.stringify(data));
    display(data);
});
TodoData.append(input, btn, addTodo);


//=================================DISPLAY=================================

let data = JSON.parse(localStorage.getItem("data")) || [];
function display(data) {
    let display = document.getElementById("display");
    display.innerHTML = "";
    data.map((ele) => {
        let title = document.createElement("p");
        title.innerHTML = ele;
        display.append(title);
    });
}
display(data);