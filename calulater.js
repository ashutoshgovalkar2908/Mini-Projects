let val1;
let val2;
let val3;
let val4;
let val5;
let val6;
let val7;
let val8;
let val9;
let val0;
function getValue(event){
   console.log(event.value)
    /* val1 = document.getElementById('value1').value;
     val2 = document.getElementById('value2').value;
     val3 = document.getElementById('value3').value;
      val4 = document.getElementById('value4').value;
      val5 = document.getElementById('value5').value;
       val6 = document.getElementById('value6').value; 
       val7 = document.getElementById('value7').value;
        val8 = document.getElementById('value8').value; 
        val9 = document.getElementById('value9').value;
         val0 = document.getElementById('value0').value */;
}
// console.log(val2);
function sum(){
     let operandPlus = document.getElementById('plus').value;
     let operandDiff =  document.getElementById('diff').value;
     let operandMult = document.getElementById('mult').value;
     let operandDiv =  document.getElementById('div').value;
     if(operandPlus == '+'){
        let output = document.getElementById('output');
        output.value = parseInt(val1)+parseInt(val2);
     }
     if(operandDiff == '-'){
        let output = document.getElementById('output');
        output.value = parseInt(val1)-parseInt(val2);
     }
     if(operandMult == '*'){
        let output = document.getElementById('output');
        output.value = parseInt(val1)*parseInt(val2);
     }
     if(operandDiv == '÷'){
        let output = document.getElementById('output');
        output.value = parseInt(val1)/parseInt(val2);
     }

}
/*this kyeword is use to get cuurent object of current event*/