// Selecting popup box, popup overlay, button
var popupBox = document.querySelector(".popup-overlay")
var popupoverlay = document.querySelector(".popup-box")
var addpopupbutton = document.querySelector(".add-button")


addpopupbutton.addEventListener("click",function(){
    booktitle.value = '';
    bookauthorinput.value = '';
    bookdescriptioninput.value = '';
    popupBox.style.display = "block"
    popupoverlay.style.display = "block"


//selecting cancel button,popup button , popup overlay
var cancelbutton = document.getElementById("cancel-book")

cancelbutton.addEventListener("click",function(event){
    event.preventDefault()
    popupBox.style.display = "none"
    popupoverlay.style.display = "none"
})



})

//select container ,add-book,book-title-input,book-author-input,book-description-input
var container = document.querySelector(".container")
var addbookbutton = document.getElementById("add-book")
var booktitle = document.getElementById("book-title-input")
var bookauthorinput = document.getElementById("book-author-input")
var bookdescriptioninput = document.getElementById("book-description-input")

addbookbutton.addEventListener("click",function(event){
        event.preventDefault()    
        var div = document.createElement("div")
        div.className = "book-container"
        div.innerHTML=`  <h2>${booktitle.value}</h2>
        <h5> ${"By   " + bookauthorinput.value}</h5>
        <p>${bookdescriptioninput.value}</p>
        <center> <button onclick="deletebook(event)">Delete</button> </center>`
        container.append(div)
        popupBox.style.display = "none"
        popupoverlay.style.display = "none"
})



function deletebook(event) {
    event.target.closest('.book-container').remove();
}