// console.log("hello");


let arr=setInterval(()=>{
        console.log("hello world");
      
        
    },10);

    
let button =document.createElement('button');
button.textContent="disable";


document.body.appendChild(button);

button.addEventListener('click',()=>clearInterval(arr) );
button.addEventListener('click',()=> arr );








