var wrapper = document.querySelector(".wrapper")
var krug = document.querySelector(".krug")

wrapper.addEventListener("click", function (event) {

    var x = event.clientX
    var y = event.clientY

    krug.style = `top:${y - 110}px; left: ${x - 110}px;`
})