const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

document.querySelector(".pw-btn").addEventListener("click", randomPassword)
document.querySelector("#copy-left_btn").addEventListener("click", copyLeftPassword)
document.querySelector("#copy-right_btn").addEventListener("click", copyRightPassword)

const lengthSlider = document.getElementById("pw-length")
const outputValue = document.getElementById("value-length")

outputValue.textContent = lengthSlider.value
lengthSlider.addEventListener("input", (e) => {
    outputValue.textContent = e.target.value
})

function randomPassword() {
    let inputLeft = document.querySelector("#input-left")
    let inputRight = document.querySelector("#input-right")

    inputLeft.textContent = ""
    inputRight.textContent = ""

    for(let i = 0; i < lengthSlider.value; i++) {
        let randomLeft = Math.floor(Math.random() * characters.length)
        let randomRight = Math.floor(Math.random() * characters.length)

        inputLeft.textContent += characters[randomLeft]
        inputRight.textContent += characters[randomRight]
    }
}

function copyLeftPassword() {
    let toCopy = document.querySelector("#input-left").textContent
    let inputElement = document.createElement("input")

    document.body.appendChild(inputElement)
    inputElement.setAttribute("value", toCopy)
    inputElement.select()
    document.execCommand("copy")
    
    inputElement.parentNode.removeChild(inputElement)
    alert("The left password has been copied")
}

function copyRightPassword() {
    let toCopy = document.querySelector("#input-right").textContent
    let inputElement = document.createElement("input")

    document.body.appendChild(inputElement)
    inputElement.setAttribute("value", toCopy)
    inputElement.select()
    document.execCommand("copy")

    inputElement.parentNode.removeChild(inputElement)
    alert("The right password has been copied")
}

// document.addEventListener("click", (e) => {
//     if(e.target.dataset.side === "left") {
//         console.log("left Test")
//     } else if (e.target.dataset.side === "right") {
//         console.log("Right test")
//     } else {
//         console.log("Nothing to click")
//     }
// })

const hideBtn = document.getElementById("hide-pw")
hideBtn.addEventListener("click", () => {
    document.querySelectorAll(".op-txt").style.webkitFilter = "blur(10px)"
})

