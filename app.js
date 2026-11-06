const characters = [
  // Uppercase (A-Z)
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 
  'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
  
  // Lowercase (a-z)
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 
  'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
  
  // Numbers (0-9)
  '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
  
  // Symbols
  '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 
  '-', '=', '[', ']', '{', '}', ';', ':', '\'', '"', ',', '.', 
  '<', '>', '/', '?', '\\', '|', '`', '~'
];

const genBtn=document.getElementById("gen-btn")
const Password1=document.querySelector(".passwordone")
const Password2=document.querySelector(".passwordtwo")

genBtn.addEventListener("click",()=>{
      Password1.textContent=''
    Password2.textContent=''
    for (let i = 0; i < 6; i++) {
   
    let randomIndex1 = Math.floor(Math.random() * characters.length);
    let randomIndex2 = Math.floor(Math.random() * characters.length);

   
    Password1.textContent += characters[randomIndex1];
    Password2.textContent += characters[randomIndex2];
  }
})

