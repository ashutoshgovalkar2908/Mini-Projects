
const input = document.getElementById('colorInput');

const btn = document.getElementById('changeColorBtn');

const colorbox = document.querySelector(".color-box");

const checkValidColor = /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/;

// const webColors = [
//   "AliceBlue", "AntiqueWhite", "Aqua", "Aquamarine", "Azure", "Beige", "Bisque", 
//   "Black", "BlanchedAlmond", "Blue", "BlueViolet", "Brown", "BurlyWood", "CadetBlue", 
//   "Chartreuse", "Chocolate", "Coral", "CornflowerBlue", "Cornsilk", "Crimson", "Cyan", 
//   "DarkBlue", "DarkCyan", "DarkGoldenRod", "DarkGray", "DarkGrey", "DarkGreen", 
//   "DarkKhaki", "DarkMagenta", "DarkOliveGreen", "DarkOrange", "DarkOrchid", "DarkRed", 
//   "DarkSalmon", "DarkSeaGreen", "DarkSlateBlue", "DarkSlateGray", "DarkSlateGrey", 
//   "DarkTurquoise", "DarkViolet", "DeepPink", "DeepSkyBlue", "DimGray", "DimGrey", 
//   "DistrictGreen", "DodgerBlue", "FireBrick", "FloralWhite", "ForestGreen", "Fuchsia", 
//   "Gainsboro", "GhostWhite", "Gold", "GoldenRod", "Gray", "Grey", "Green", 
//   "GreenYellow", "HoneyDew", "HotPink", "IndianRed", "Indigo", "Ivory", "Khaki", 
//   "Lavender", "LavenderBlush", "LawnGreen", "LemonChiffon", "LightBlue", "LightCoral", 
//   "LightCyan", "LightGoldenRodYellow", "LightGray", "LightGrey", "LightGreen", 
//   "LightPink", "LightSalmon", "LightSeaGreen", "LightSkyBlue", "LightSlateGray", 
//   "LightSlateGrey", "LightSteelBlue", "LightYellow", "Lime", "LimeGreen", "Linen", 
//   "Magenta", "Maroon", "MediumAquaMarine", "MediumBlue", "MediumOrchid", "MediumPurple", 
//   "MediumSeaGreen", "MediumSlateBlue", "MediumSpringGreen", "MediumTurquoise", 
//   "MediumVioletRed", "MidnightBlue", "MintCream", "MistyRose", "Moccasin", "NavajoWhite", 
//   "Navy", "OldLace", "Olive", "OliveDrab", "Orange", "OrangeRed", "Orchid", 
//   "PaleGoldenRod", "PaleGreen", "PaleTurquoise", "PaleVioletRed", "PapayaWhip", 
//   "PeachPuff", "Peru", "Pink", "Plum", "PowderBlue", "Purple", "RebeccaPurple", 
//   "Red", "RosyBrown", "RoyalBlue", "SaddleBrown", "Salmon", "SandyBrown", "SeaGreen", 
//   "SeaShell", "Sienna", "Silver", "SkyBlue", "SlateBlue", "SlateGray", "SlateGrey", 
//   "Snow", "SpringGreen", "SteelBlue", "Tan", "Teal", "Thistle", "Tomato", 
//   "Turquoise", "Violet", "Wheat", "White", "WhiteSmoke", "Yellow", "YellowGreen"
// ];

const webColors =["red","blue"]

btn.addEventListener('click', () => {
    const color = input.value;

    webColors.forEach((colors)=>{
        if(checkValidColor.test(color) || color === colors){
            document.body.style.backgroundColor = `${color}`
           
        }else{
            alert("Please enter valid color");
        }
    })

    // const copyBtn = document.createElement("button");
    // copyBtn.classList.add("copybtn");
    // copyBtn.textContent = "CopyCode"

    // colorbox.appendChild(copyBtn)
    
})

btn.addEventListener('mouseover', ()=>{
    btn.style.backgroundColor = "#"+ Math.floor(Math.random()*16777215).toString(16).padStart(6,"0");
})