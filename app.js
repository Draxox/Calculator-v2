var num=""; var input="+"; var lastinput="+";
var result=0; var store=0;
document.querySelector("#displaypanel").addEventListener("click",function() {
    document.querySelector("#displaypanel").innerHTML = "Hello Everyone!";
    num="";  input="+";  lastinput="+";
    result=0; store=0;
})
function build(a)
{
  num=num+a;
  document.getElementById("displaypanel").innerHTML=num;
}

function operator(op)
{
  
      lastinput=input;
      input=op;
      //document.getElementById("displaypanel").innerHTML=input;
  if(input=="=")
  {
    calc(lastinput);
    document.getElementById("displaypanel").innerHTML=store;
    
  }
  else
  {
      calc(lastinput);
     
  }
}
function calc(lastinput)
{
  result=store;
  if(lastinput=="+")
  {
    store=result+parseInt(num);
  }
  else if(lastinput=="-")
  {
    store=result-parseInt(num);
  }
  else if(lastinput=="*")
  {
    store=result*parseInt(num);
  }
  else if(lastinput == "/")
  {
    store=result/parseInt(num);
  }
  num="";
}
