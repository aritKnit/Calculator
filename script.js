let string='';
let count=0;
let buttons = document.querySelectorAll('.mybtn');

document.onkeydown=function(e){
  return false;
}
// let a=0;
function displayBracs(){
  // var x=document.getElementById('result').value
  // var l=x.length
  // console.log(l)
  // var s=x.charAt(l-1)
  // console.log(s)
  // console.log(count)

  // if(count>0 && s!=NaN ){
  //   document.getElementById('result').value+=')'
  //   count-=1
  // }
  // else{
    //   document.getElementById('result').value+='('
    //   count+=1
    // }
    // (count==0 || s!=')')
    
    
    
    let x = document.getElementById("result").value;

    
   
    if(x==''|| x[x.length-1]=='(' || x.charAt(x.length-1)=='*' ||x.charAt(x.length-1)=='/'|| x.charAt(x.length-1) == '+' || x.charAt(x.length-1)== '-'){
      if(count>=0){
        document.getElementById('result').value+='('
        count++;

      }
        
      }
      else
      {
        if(count>0){
          document.getElementById('result').value+=')'
          count--;
        }
        else if (count==0){
          
          document.getElementById('result').value+='('
          count++;
        }
  }
// console.log(count)

}

// function displayp(){
//   // document.getElementById('result').value*=0.01
//   return '%'
// }

function display(val){
  document.getElementById('result').value+=val
  return val
}

function clrback(){
  
  var value = document.getElementById("result").value
  if(value.charAt(value.length - 1)==')'){
    count+=1
  }
  else if(value.charAt(value.length - 1)=='('){
    count-=1
  }
  document.getElementById("result").value = value.substr(0, value.length - 1)

}

function clearScreen(){
  document.getElementById('result').value = ''
  count=0
}

function solve(){


  let x = document.getElementById('result').value
let ans=0;let a="",b="" ,m,n,count=0;
  for(let i=0;i<x.length;i++){

if(x[i]!='%'){
  a+=x[i];
}
    if(x[i]=='%'){
      ans=i;
      count++;
      b=a;
      a="";
    }
  }
  if(x[ans]=='%'){
    

    if(count==1){
      // m =parseInt(a)
    // n= parseInt(b)
    m=eval(a)
    n = eval(b)
    console.log(m)
    console.log(n)
    let res=(m*n)/100
    document.getElementById('result').value=res
  }
  else if(count>1){
    
    document.getElementById('result').value="ERROR!:("
    }
    
  }
  else{
    try{
      let x = document.getElementById('result').value
      let y = eval(x);
      document.getElementById('result').value = y
      return y
    }
    catch(solve){
      document.getElementById('result').value = 'Error'
    }
  }
  
}

// Array.from(buttons).forEach((button) => {
//   button.addEventListener('click', (e) => {
    
//     if (e.target.innerHTML == '='){
//       string=eval(string);
//       document.querySelector('input').value=string; 
//     }
//     if (e.target.innerHTML == 'AC') {
//       string='';
//       document.querySelector('input').value=string;
//     } else{
//     console.log(e.target);
//     string = string + e.target.innerHTML;
//     document.querySelector('input').value=string;
//     }
//   })
// })