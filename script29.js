var data=[
    {dp:"https://images.unsplash.com/photo-1615241721719-cffa5802f256?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80", story:"https://images.unsplash.com/photo-1618886614638-80e3c103d31a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=370&q=80"},
    {dp:"https://images.unsplash.com/photo-1625587997931-545e4561ada5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=425&q=80", story:"https://images.unsplash.com/photo-1503249023995-51b0f3778ccf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=360&q=80"},
{dp:"https://images.unsplash.com/photo-1531384441138-2736e62e0919?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80", story:"https://images.unsplash.com/photo-1664575600850-c4b712e6e2bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"}
];


var clutter="";
var timer;
 data.forEach(function(val,index){

clutter+=` <div class="story">
<div class="outer"></div> 
<div class="inner"> 
    <img id="${index}" src="${val.dp}" alt="">
</div> 
</div>
`
})
document.querySelector("#stories").innerHTML=clutter
document.querySelector("#stories").addEventListener("click",function(details){
document.querySelector("#fs img").setAttribute("src",data[details.target.id].story)
document.querySelector("#fs").style.display="flex"
document.querySelector("#slide #progress").style.width="0";
clearInterval(timer);

  runtime();  
    
 });
 
function runtime(){
     var progress= 0;
 timer=  setInterval(function(){
 progress++ ;
document.querySelector("#slide #progress").style.width= `${progress}%`;
},28);

setTimeout(function(){
    document.querySelector("#fs").style.display="none";
},3000);

}