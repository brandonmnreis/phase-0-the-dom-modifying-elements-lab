const main = document.getElementById("main")
console.log(main)
main.remove()

const newHeader = document.createElement("h1")

newHeader.id = "victory"

newHeader.textContent = "Brandon is the champion"