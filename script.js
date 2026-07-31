const password = "bachha";

const letter = `Happy Girlfriend's Day ❤️

Thank you for your love, care and support.

You make every day beautiful just by being you.

I'm really grateful to have you in my life.

Love You Forever ❤️`;

function checkPassword(){

const pass = document.getElementById("password").value;

if(pass===password){

document.getElementById("page1").classList.remove("active");

document.getElementById("page2").classList.add("active");

typeLetter();

}
else{

document.getElementById("error").innerHTML="❌ Wrong Password";

}

}

function nextPage(page){

document.querySelectorAll(".page").forEach(p=>{
p.classList.remove("active");
});

document.getElementById("page"+page).classList.add("active");

}

let i=0;

function typeLetter(){

const target=document.getElementById("typing");

target.innerHTML="";

i=0;

const interval=setInterval(()=>{

target.innerHTML+=letter.charAt(i);

i++;

if(i>=letter.length){

clearInterval(interval);

}

},35);

}
