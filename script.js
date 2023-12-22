// selecting popupbox

var popupbox = document.querySelector(".popup-box")
var popupoverlay = document.querySelector(".popup-overlay")
var addbutton = document.getElementById("plusbutton")

addbutton.addEventListener("click",function(event){
    event.preventDefault()
    popupbox.style.display = "block"
    popupoverlay.style.display = "block"
})

//selecting cancel pop

var cancelpop = document.getElementById("cancel-button")

cancelpop.addEventListener("click", function(event){

    event.preventDefault(event)
    popupbox.style.display = "none"
    popupoverlay.style.display = "none"
})

//selecting overall inputs

var container = document.querySelector(".container")
var add = document.getElementById("add-button")
var bookname = document.getElementById("bname")
var bookauthor = document.getElementById("bauthor")
var description = document.getElementById("bdescription")

add.addEventListener("click",function(event){
    event.preventDefault()
    var div = document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML = `<h1>${bookname.value}</h1>
                    <h5>${bookauthor.value}</h5>
                    <p>${description.value}</p>
                    <button onclick = "deletebutton(event)">Delete</button>`
    container.append(div)
    popupbox.style.display = "none"
    popupoverlay.style.display = "none"

})

function deletebutton(event){
    event.target.parentElement.remove()
}
