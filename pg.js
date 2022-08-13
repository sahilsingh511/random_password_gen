/* This Javascript App supports only some generally used specific conditions for keeping or creating a password which are-
1. only capital letters
2. only small letters
3. only numbers
4. capital and small letters together
5. small letters and numbers together
6. small letters and symbols together
7. capital, small letters and numbers together
8. small letters, numbers and symbols together
9. capital, small letters, numbers and symbols together
*/

let cap_letters=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
let small_letters=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let numbers=[1,2,3,4,5,6,7,8,9,0];
let symbols=['!','&','#','+','%','$','@','?','*'];

let passwordLength=document.querySelector('.pw_length');
let showPW=document.querySelector('.showpassword');
let upperLettersCheck=document.querySelector('.checkforuppercase');
let lowerLettersCheck=document.querySelector('.checkforlowercase');
let numbersCheck=document.querySelector('.checkfornumbers');
let symbolsCheck=document.querySelector('.checkforsymbols');
let button = document.querySelector('.generate_pw');
let clipboard=document.querySelector('.clipboard');
let passWord;

clipboard.addEventListener('click', (str) => {
  str=showPW.value;
  const el = document.createElement('textarea');
  el.value = str;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
  //str = "";
  passWord = ""; 
  });

button.addEventListener('click', generatePW);

function generatePW()  {
    passWord = "";
    // only one condition
    if(upperLettersCheck.checked && !lowerLettersCheck.checked && !numbersCheck.checked && !symbolsCheck.checked) {
        if(upperLettersCheck.checked) {
            for(let i= 0;i<passwordLength.value;i++) {
                let random = parseInt(Math.random() * cap_letters.length);
                let x = cap_letters[random];
                passWord += x;
            }
            showPW.value = passWord;
        }
    }

    if(!upperLettersCheck.checked && lowerLettersCheck.checked && !numbersCheck.checked && !symbolsCheck.checked) {    
        if(lowerLettersCheck.checked) {
            for(let i= 0;i<passwordLength.value;i++) {
                let random = parseInt(Math.random() * small_letters.length);
                let x = small_letters[random];
                passWord += x;
            }
            showPW.value = passWord;
        }
    }

    if(!upperLettersCheck.checked && !lowerLettersCheck.checked && numbersCheck.checked && !symbolsCheck.checked) {    
        if(numbersCheck.checked) {
            for(let i= 0;i<passwordLength.value;i++) {
                let random = parseInt(Math.random() * numbers.length);
                let x = numbers[random];
                passWord += x;
            }
            showPW.value = passWord;
        }
    }

    /*if(!upperLettersCheck.checked && !lowerLettersCheck.checked && !numbersCheck.checked && symbolsCheck.checked) {    
        if(symbolsCheck.checked) {
            for(let i= 0;i<passwordLength.value;i++) {
                let random = parseInt(Math.random() * symbols.length);
                let x = symbols[random];
                passWord += x;
            }
            showPW.value = passWord;
        }
    }*/

    // two conditions together
    if(upperLettersCheck.checked && lowerLettersCheck.checked && !numbersCheck.checked && !symbolsCheck.checked) {
        let alphabets=[cap_letters,small_letters];
        for(let i= 0;i<passwordLength.value;i++) {
            let random1 = parseInt(Math.random() * alphabets.length);
            let random2 = parseInt(Math.random() * 26);
            let y = alphabets[random1][random2];
            passWord += y;
        }
        showPW.value = passWord;
    }

    if(!upperLettersCheck.checked && lowerLettersCheck.checked && numbersCheck.checked && !symbolsCheck.checked) {
        let mix_pw=[small_letters,numbers];
        for(let i= 0;i<passwordLength.value;i++) {
            let random1 = parseInt(Math.random() * mix_pw.length);
            let y = mix_pw[random1];
            if (y == small_letters) {
                let random2 = parseInt(Math.random() * small_letters.length);
                y = y[random2];
            }
            else if (y == numbers) {
                let random2 = parseInt(Math.random() * numbers.length);
                y = y[random2];
            }
            passWord += y;
        }
        showPW.value = passWord;
    }

    if(!upperLettersCheck.checked && lowerLettersCheck.checked && !numbersCheck.checked && symbolsCheck.checked) {
        let mix_pw=[small_letters,symbols];
        for(let i= 0;i<passwordLength.value;i++) {
            let random1 = parseInt(Math.random() * mix_pw.length);
            let y = mix_pw[random1];
            if (y == small_letters) {
                let random2 = parseInt(Math.random() * small_letters.length);
                y = y[random2];
            }
            else if (y == symbols) {
                let random2 = parseInt(Math.random() * symbols.length);
                y = y[random2];
            }
            passWord += y;
        }
        showPW.value = passWord;
    }

    // three conditions together
    if(upperLettersCheck.checked && lowerLettersCheck.checked && numbersCheck.checked && !symbolsCheck.checked) {
        let mix_pw=[cap_letters,small_letters,numbers];
        for(let i= 0;i<passwordLength.value;i++) {
            let random1 = parseInt(Math.random() * mix_pw.length);
            let y = mix_pw[random1];
            if (y == cap_letters) {
                let random2 = parseInt(Math.random() * cap_letters.length);
                y = y[random2];
            }
            else if (y == small_letters) {
                let random2 = parseInt(Math.random() * small_letters.length);
                y = y[random2];
            }
            else if (y == numbers) {
                let random2 = parseInt(Math.random() * numbers.length);
                y = y[random2];
            }
            passWord += y;
        }
        showPW.value = passWord;
    }

    if(!upperLettersCheck.checked && lowerLettersCheck.checked && numbersCheck.checked && symbolsCheck.checked) {  
        let mix_pw=[small_letters,numbers,symbols];
        for(let i= 0;i<passwordLength.value;i++) {
            let random1 = parseInt(Math.random() * mix_pw.length);
            let y = mix_pw[random1];
            if (y == small_letters) {
                let random2 = parseInt(Math.random() * small_letters.length);
                y = y[random2];
            }
            else if (y == numbers) {
                let random2 = parseInt(Math.random() * numbers.length);
                y = y[random2];
            }
            else if (y == symbols) {
                let random2 = parseInt(Math.random() * symbols.length);
                y = y[random2];
            }
            passWord += y;
        }
        showPW.value = passWord;
    }

    // four conditions together
    if(upperLettersCheck.checked && lowerLettersCheck.checked && numbersCheck.checked && symbolsCheck.checked) {
        let mix_pw=[cap_letters,small_letters,numbers,symbols];
        for(let i= 0;i<passwordLength.value;i++) {
            let random1 = parseInt(Math.random() * mix_pw.length);
            let y = mix_pw[random1];
            if (y == cap_letters) {
                let random2 = parseInt(Math.random() * cap_letters.length);
                y = y[random2];
            }
            else if (y == small_letters) {
                let random2 = parseInt(Math.random() * small_letters.length);
                y = y[random2];
            }
            else if (y == numbers) {
                let random2 = parseInt(Math.random() * numbers.length);
                y = y[random2];
            }
            else if (y == symbols) {
                let random2 = parseInt(Math.random() * symbols.length);
                y = y[random2];
            }
            passWord += y;
        }
        showPW.value = passWord;
    }
}
