
const input = document.getElementById('colorInput');

const btn = document.getElementById('changeColorBtn');

btn.addEventListener('click', () => {
    const color = input.value;
    if(input.value == ''){
        alert("Please enter color");
    }
    document.body.style.backgroundColor = `${color}`
})
