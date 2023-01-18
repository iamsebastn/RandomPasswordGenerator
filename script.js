const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

document.querySelector(".pw-btn").addEventListener("click", randomPassword)

function randomPassword() {
    let inputLeft = document.querySelector("#input-left")
    let inputRight = document.querySelector("#input-right")

    inputLeft.textContent = ""
    inputRight.textContent = ""

    for(let i = 0; i < 10; i++) {
        let randomLeft = Math.floor(Math.random() * characters.length)
        let randomRight = Math.floor(Math.random() * characters.length)
        inputLeft.textContent += characters[randomLeft]
        inputRight.textContent += characters[randomRight]
    }
}

