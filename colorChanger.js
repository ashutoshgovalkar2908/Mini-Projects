
const input = document.getElementById('colorInput');

const btn = document.getElementById('changeColorBtn');

const colorbox = document.querySelector(".color-box");

const checkValidColor = /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/;

btn.addEventListener('click', () => {
    const color = input.value;
    if(color == '' || !checkValidColor.test(color)){
        alert("Please enter valid color");
        return;
    }
    document.body.style.backgroundColor = `${color}`

    // const copyBtn = document.createElement("button");
    // copyBtn.classList.add("copybtn");
    // copyBtn.textContent = "CopyCode"

    // colorbox.appendChild(copyBtn)
    
})

btn.addEventListener('mouseover', ()=>{
    btn.style.backgroundColor = "#"+ Math.floor(Math.random()*16777215).toString(16).padStart(6,"0");
})