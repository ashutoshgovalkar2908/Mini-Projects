
const input = document.getElementById('colorInput');

const btn = document.getElementById('changeColorBtn');

const checkValidColor = /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/;

btn.addEventListener('click', () => {
    const color = input.value;
    if(input.value == '' || !checkValidColor.test(color)){
        alert("Please enter valid color");
    }
    document.body.style.backgroundColor = `${color}`
})

