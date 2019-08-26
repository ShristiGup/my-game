
/*function startGame(){
	var but = document.getElementById("but");
	but.style.display="none";
	var start = document.getElementById("start");
	start.style.backgroundImage="";*/

var e;
var f;
var star;
var x;


function easy()
{
	x=400;
	startGame();


}



function medium(){


   x=300;
   startGame()
	// body...
}


function hard() {

x=100;
startGame()
	
}
function startGame(){
	var body="document.get"
	var but = document.querySelectorAll(".but");
	but[0].style.display="none";
	but[1].style.display="none";
	but[2].style.display="none";
var car = document.getElementById("player");
 e = document.querySelectorAll(".up");
 f = document.querySelectorAll(".down");
var score=document.querySelector(".score");
var no=document.querySelector(".no");
 star=document.querySelectorAll(".star");
 var lost=document.querySelectorAll(".lost");
 var get=document.querySelector(".get");
 var body=document.querySelector("body");
 var win=document.querySelector(".win")
car.style.background="yellow";
score.style.color="white";
lost[0].style.display="none";
lost[1].style.display="none";
score.textContent="SCORE :";
no.style.color="white";


 
for(var i=0;i<star.length;i++)
{
	star[i].style.background="blue";
}

for(var i=0;i<e.length;i++)
{
	e[i].style.background="red";
}

for(var j=0;j<f.length;j++)
{
	f[j].style.background="green";
}

// code for upper movement of blocks

var s = 5;            
setInterval(function(){
	for(var i=0;i<e.length;i++){
    var eLeftPos = e[i].offsetTop;
    var d=(eLeftPos + s)
    e[i].style.top =  d  + 'px';
    if(d>540)
    {
    	e[i].style.top= "20px";
    }
     
                    
}
}, x);

//code for lower movement of blocks

setInterval(function(){
	for(var i=0;i<f.length;i++){
    var posi = f[i].offsetTop;
    var d=(posi - s)
    f[i].style.top =  d  + 'px';
    if(d<20)
    {
    	f[i].style.top= "540px";
    }
   
}
}, x);

 



	window.addEventListener("keydown",checkKeyPress);
		function checkKeyPress(key)
		{

			if((key.keyCode=="39")&&(car.offsetLeft<=1195))
				{
					car.style.left = (car.offsetLeft += 5) + 'px';
				}
				if((key.keyCode=="37")&&(car.offsetLeft>0))

				{
					car.style.left = (car.offsetLeft -= 5) + 'px';
				}	
			if((key.keyCode=="40")&&(car.offsetTop<=550))
				{
					 car.style.top = (car.offsetTop += 5) + 'px';
				}
			if((key.keyCode=="38")&&(car.offsetTop>=0))
				{
					car.style.top = (car.offsetTop -= 5) + 'px';
		
				}

			
			   }    

                
            
			   setInterval(function(){
			    	
				for(i=0;i<e.length;i++)
      			{		var x=car.offsetLeft;     /*cars left position*/                              
	  			        var t=car.offsetTop;     /*cars upper position*/
					    var y=e[i].offsetLeft;      /* obsticals left  position*/
					    var z=e[i].offsetTop;       /* obstical top side*/
				     var r=y+15;         /*right side of obstical*/   
				     var l=y-15;         /*left side of obstical*/
   				     var ot=z-25;         /*top side of obstical*/
				     var b=z+25;         /*bottom side of obstical*/
				     var bl=x-20;        /*balls left part*/
				     var br=x+20;        /*balls right part*/
				     var bt=t-20;        /*balls top part*/
				     var bb=t+20;        /* balls bottom part*/
                     if(((l<=x && x<=r)||(l<=bl && bl<=r)||(l<=br && br<=r))&&((ot<=bb && bb<=b)||(ot<=bt && bt<=b)||(ot<=t && t<=b)))
                     {   
                        car.style.background="blue";
                        get.style.display="block";
                        hide();
					 
					 }
                       
             }
         });   
       
       var  v=0;
                  
			      setInterval(function(){
			    	
				for(var i=0;i<f.length;i++)
      			{		var x=car.offsetLeft;     /*cars left position*/                              
	  			        var t=car.offsetTop;     /*cars upper position*/
					    var y=f[i].offsetLeft;      /* obsticals left  position*/
					    var z=f[i].offsetTop;       /* obstical top side*/
				     var r=y+15;         /*right side of obstical*/   
				     var l=y-15;         /*left side of obstical*/
   				     var ot=z-25;         /*top side of obstical*/
				     var b=z+25;         /*bottom side of obstical*/
				     var bl=x-20;        /*balls left part*/
				     var br=x+20;        /*balls right part*/
				     var bt=t-20;        /*balls top part*/
				     var bb=t+20;        /* balls bottom part*/
                     if(((l<=x && x<=r)||(l<=bl && bl<=r)||(l<=br && br<=r))&&((ot<=bb && bb<=b)||(ot<=bt && bt<=b)||(ot<=t && t<=b)))
                     {   
                        car.style.background="blue";
                           get.style.display="block";
                       
						hide();
                     } 
                       
              }        
             
                  for(var i=0;i<star.length;i++)
                  {
                  	if((bl<=star[i].offsetLeft && star[i].offsetLeft<=br)&&(bt<=star[i].offsetTop && star[i].offsetTop<=bb))
                  	{
                        v=v+5;
                        star[i].style.display="none";                      	
                      
                  	}
                  }
                      no.textContent=v;
                      if(v==80)
                      { win.style.display="block";
                      	
                      }
                 

         });       



			
		}
		function hide()
			{
				for(var i=0;i<e.length;i++)
					{
						e[i].style.display="none";
					}
				for(var i=0;i<f.length;i++)
				{
					f[i].style.display="none";

				}	
				for(var i=0;i<star.length;i++)
				{
					star[i].style.display="none";
				}
             car.style.display="none";

			}