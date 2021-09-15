var popup = document.getElementById("myPopup");
var pop1 = document.getElementById("myPopup1");
var pop2 = document.getElementById("myPopup2");
var pop3 = document.getElementById("myPopup3");
var pop4 = document.getElementById("myPopup4");
var pop5 = document.getElementById("myPopup5");
var pop6 = document.getElementById("myPopup6");
var pop7 = document.getElementById("myPopup7");
var pop8 = document.getElementById("myPopup8");
var pop9 = document.getElementById("myPopup9");
var pop10 = document.getElementById("myPopup10");
var blur = document.getElementById("table");
var head = document.getElementById("blurr-head");
var foot = document.getElementById("foot");
var html = document.querySelector("body");
function count(){
  var c=0;
  var l=["myPopup","myPopup1","myPopup2","myPopup3","myPopup4","myPopup5","myPopup6","myPopup7","myPopup8","myPopup9","myPopup10"];
  for(var i=0;i<11;i++){
    var p=document.getElementById(l[i]);
    if(p.classList.contains("show")){
      c=c+1;
    }
  }
  return c;
}
function button(){
  popup.classList.remove("show");
  pop1.classList.remove("show");
  pop2.classList.remove("show");
  pop3.classList.remove("show");
  pop4.classList.remove("show");
  pop5.classList.remove("show");
  pop6.classList.remove("show");
  pop7.classList.remove("show");
  pop8.classList.remove("show");
  pop9.classList.remove("show");
  pop10.classList.remove("show");
  blur.classList.toggle("blurr");
  head.classList.remove("blurr");
  foot.classList.remove("blurr");
  html.classList.remove("html-static");
}
function myFunction() {
  if(count()==0){
    popup.classList.toggle("show");
    blur.classList.toggle("blurr");
    head.classList.toggle("blurr");
    foot.classList.toggle("blurr");
    html.classList.toggle("html-static");
   }
  }
  function myFunction1() {
    if(count()==0){
    pop1.classList.toggle("show");
    blur.classList.toggle("blurr");
    head.classList.toggle("blurr");
    foot.classList.toggle("blurr");
    html.classList.toggle("html-static");
    }
  }
  function myFunction2() {
    if(count()==0){
    pop2.classList.toggle("show");
    blur.classList.toggle("blurr");
    head.classList.toggle("blurr");
    foot.classList.toggle("blurr");
    html.classList.toggle("html-static");
    }
  }
  function myFunction3(){
    if(count()==0){
    pop3.classList.toggle("show");
    blur.classList.toggle("blurr");
    head.classList.toggle("blurr");
    foot.classList.toggle("blurr");
    html.classList.toggle("html-static");
    }
  }
  function myFunction4(){
    if(count()==0){
    pop4.classList.toggle("show");
    blur.classList.toggle("blurr");
    head.classList.toggle("blurr");
    foot.classList.toggle("blurr");
    html.classList.toggle("html-static");
    }
  }
  function myFunction5(){
    if(count()==0){
    pop5.classList.toggle("show");
    blur.classList.toggle("blurr");
    head.classList.toggle("blurr");
    foot.classList.toggle("blurr");
    html.classList.toggle("html-static");
    }
  }
  function myFunction6(){
    if(count()==0){
    pop6.classList.toggle("show");
    blur.classList.toggle("blurr");
    head.classList.toggle("blurr");
    foot.classList.toggle("blurr");
    html.classList.toggle("html-static");
    }
  }
  function myFunction7(){
    if(count()==0){
    pop7.classList.toggle("show");
    blur.classList.toggle("blurr");
    head.classList.toggle("blurr");
    foot.classList.toggle("blurr");
    html.classList.toggle("html-static");
    }
  }
  function myFunction8(){
    if(count()==0){
    pop8.classList.toggle("show");
    blur.classList.toggle("blurr");
    head.classList.toggle("blurr");
    foot.classList.toggle("blurr");
    html.classList.toggle("html-static");
    }
  }
  function myFunction9(){
    if(count()==0){
    pop9.classList.toggle("show");
    blur.classList.toggle("blurr");
    head.classList.toggle("blurr");
    foot.classList.toggle("blurr");
    html.classList.toggle("html-static");
    }
  }
  function myFunction10(){
    if(count()==0){
    pop10.classList.toggle("show");
    blur.classList.toggle("blurr");
    head.classList.toggle("blurr");
    foot.classList.toggle("blurr");
    html.classList.toggle("html-static");
    }
  }