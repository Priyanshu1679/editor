let output = document.querySelector("#output");
let allinput = document.querySelectorAll(".leftpart textarea");

let htmlCode,cssCode,jsCode = '';
allinput.forEach((eL,index)=>{
eL.addEventListener("keyup",()=>{
  if(index == 0){
    htmlCode= eL.value;
  }
  if(index == 1){
    cssCode= eL.value;
  }
  if(index == 2){
    jsCode= eL.value;
  }

output.contentDocument.body.innerHTML=htmlCode;
output.contentDocument.head.innerHTML= `<style>${cssCode}</style>`;
output.contentWindow.eval(jsCode);

})
})
