//Set initial count
let count = 0;

// Select Value and  Buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
   btn.addEventListener('click', function(e){
       const style = e.currentTarget.classList;
       if (style.contains('decrease')){
            count--;
       } else if (style.contains('reset')){
           count = 0;
       }else {
           count++;
       }
       value.textContent = count;
   }) 
});
