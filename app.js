let buttons=document.querySelectorAll('button');
let input=document.querySelector('input');
input.value=0

for (let button of buttons) {
    button.addEventListener("click", function (e) {
      let btnText = e.target.innerText;
      if (btnText === "C") {
        input.value = 0;
      } else if (btnText === "=") {
        try {
          input.value = eval(input.value);
        } catch (err) {
          input.value = "invalid operation";
        }
      } else {
        if(input.value==="0"){
            input.value=btnText
        }else{
            input.value += btnText;

        }
        
      }
    });
  }