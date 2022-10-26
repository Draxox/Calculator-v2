var num="";var n="";var input="+"; var lastinput="+";
var result=0; var store=0;
document.querySelector("#displaypanel").addEventListener("click",function() {
    document.querySelector("#displaypanel").innerHTML = "0";
    num="";  input="+";  lastinput="+";
    result=0; store=0;n="";
})
function build(a)
{
  n=n+a;
  num=num+a;
  document.getElementById("displaypanel").innerHTML=n;
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
    n=store;
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
