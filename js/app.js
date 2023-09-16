let input=document.getElementById('Input')
let groupno= document.getElementById('group')
let no;
function GetGroupNo(){
   let ad=input.value;
    for (let i= 0; i <ad.length; i++) {
          if(ad[i]>= '0' && ad[i]<= '9'){
            no=ad.slice(i);
            break;
          }
          else{
           continue;
          }
        
    }
   if(no.charAt(0)==1){
         groupno.innerHTML=ad;
            groupno.style.color="yellow";
            }
        
            else if(no.charAt(0)==2){
                groupno.innerHTML=ad;
                groupno.style.color="red";
            }
        
            else if(no.charAt(0)==3){
                groupno.innerHTML=ad;
                groupno.style.color="black";
            }
            else if(no.charAt(0)>3){
                groupno.innerHTML=ad;
                groupno.style.color="purple";
   }
    }
   
  



