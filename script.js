var securePwd = document.querySelector("#securePwd");

var specCharArray = [];
var lCaseAlphaArray = [];
var uCaseAlphaArray = [];
var numbersArray = [];

var specChars = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
specCharArray = specChars.split('');
var lCaseAlphas = "abcdefghijklmnopqrstuvwxyz";
lCaseAlphaArray = lCaseAlphas.split('');
var uCaseAlphas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
uCaseAlphaArray = uCaseAlphas.split('');
var numbers = "0123456789";
numbersArray = numbers.split('');



console.log(specCharArray[0]);

var numOfSpecChar = 0;
var numOfNumbers = 0;
var numOfUpperCase = 0;
var numOfLowerCase = 0;

var pwdlength = prompt("Specify the length of the password:");
console.log(pwdlength);
var needSpecChar = confirm("Do you need special characters?");
console.log(needSpecChar);
var needUpperCase = confirm("Do you need Upper Case alphabets?");
console.log(needUpperCase);
var needLowerCase = confirm("Do you need Lower Case alphabets?");
console.log(needLowerCase);
var needNumbers = confirm("Do you need Numbers?");
console.log(needNumbers);
var specificationsArray = [];

if(needSpecChar){
    specificationsArray.push("needSpecCharA");
}
if(needUpperCase){
    specificationsArray.push("needUpperCaseA");
}
if(needLowerCase){
    specificationsArray.push("needLowerCaseA");
}
if(needNumbers){
    specificationsArray.push("needNumbersA");
}






function generatePassword(){
    var newPassword = [];
    var selectChar;
    var j = 0;
    var finalPassword = "";
    console.log(specificationsArray.length);
    if(pwdlength >= 8){
    if(specificationsArray.length > 0){
        console.log(pwdlength);
        for(var i=0; i < pwdlength; i++){
            console.log("Inside loop 1");
            if(j === specificationsArray.length - 1){
                j = 0;
            }
            else{
                j++;
            }
            while(i < pwdlength){
            
                console.log(specificationsArray[j]);
                if(specificationsArray[j] === "needSpecCharA"){
                    selectChar = specCharArray[Math.floor(Math.random()*specCharArray.length)];
                    newPassword.push(selectChar);
                    console.log(selectChar);
                    break;
                }
                else if(specificationsArray[j] === "needUpperCaseA"){
                    selectChar = uCaseAlphaArray[Math.floor(Math.random()*uCaseAlphaArray.length)];
                    newPassword.push(selectChar);
                    console.log(selectChar);
                    break;
                }
                else if(specificationsArray[j] === "needLowerCaseA"){
                    selectChar = lCaseAlphaArray[Math.floor(Math.random()*lCaseAlphaArray.length)];
                    newPassword.push(selectChar);
                    console.log(selectChar);
                    break;
                }
                else if(specificationsArray[j] === "needNumbersA"){
                    selectChar = numbersArray[Math.floor(Math.random()*numbersArray.length)];
                    newPassword.push(selectChar);
                    console.log(selectChar);
                    break;
                }
                
                
                
            }
                
        }
        console.log(newPassword);
        finalPassword = newPassword.join("");
        console.log(finalPassword);
        securePwd.textContent = finalPassword;
    }
    else{
        alert("No Specified Characters are selected.");
    }
}
else{
    alert("Password length should be greater than 8");
}
}