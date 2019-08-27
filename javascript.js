var e;
var f;
var star;
var x;
var y;
var lev=document.querySelectorAll(".lev");
var grass=document.querySelectorAll(".grass");

function easy()
{
	x=100;
	y=70;
	audio2()
	startGame()
	


}



function medium(){


   x=60;
   y=40;
   audio3()
   startGame()
	// body...
}


function hard() {

x=50;
y=30;
audio4()
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
 var get=document.querySelectorAll(".get");
 var body=document.querySelector("body");
 var win=document.querySelector(".win")
 var value=document.querySelector(".value");
 var bell=document.querySelector(".bell");
 
 for(i=0;i<grass.length;i++)
 {
 	grass[i].style.display="block";
 }
// body.style.background="white";
car.style.background="yellow";
lost[0].style.display="none";
lost[1].style.display="none";
score.textContent="SCORE :";
car.style.opacity="1";
body.style.background="black";
for(var i=0;i<e.length;i++)
{
	e[i].style.display="block";
	e[i].style.background="red";
}
for(var i=0;i<f.length;i++)
{  
	f[i].style.display="block";
	
}
 for(var i=0;i<star.length;i++)
 {
 	star[i].style.display="block";
 }


 

// code for upper movement of blocks

var s = 5;            
setInterval(function(){
	for(var i=0;i<e.length;i++){
    var eLeftPos = e[i].offsetTop;
    var d=(eLeftPos + s)
    e[i].style.top =  d  + 'px';
    if(d>500)
    {
    	e[i].style.top= "20px";
    }
     
                    
}
},x );

//code for lower movement of blocks

setInterval(function(){
	for(var i=0;i<f.length;i++){
    var posi = f[i].offsetTop;
    var d=(posi - s)
    f[i].style.top =  d  + 'px';
    if(d<20)
    {
    	f[i].style.top= "500px";
    }
   
}
}, y);

 



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
			if((key.keyCode=="40")&&(car.offsetTop<=510))
				{
					 car.style.top = (car.offsetTop += 5) + 'px';
				}
			if((key.keyCode=="38")&&(car.offsetTop>=10))
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
                        grass[0].style.display="none";
                     	audio5();
                        get[0].style.display="block";
                        get[1].style.display="block";
                        car.style.opacity="0";
                        score.style.display="none";
                        no.style.display="none";
                        gra();

                        hide();
						body.style.background="peru";
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
                      {   audio5();
                        car.style.opacity="0";
                          
                          body.style.background="peru";
                           score.style.display="none";
                        no.style.display="none";
                        gra();
						hide();
                     } 
                       
              }        
             
                  for(var i=0;i<star.length;i++)
                  {
                  	if((bl<=star[i].offsetLeft && star[i].offsetLeft<=br)&&(bt<=star[i].offsetTop && star[i].offsetTop<=bb))
                  	{    audio1();
                        v=v+5;
                        star[i].style.display="none";                      	
                      
                   	}
                        	                       
                       	
                       	

                       
                   

                  }
                      no.textContent=v;
                      value.textContent=v;
                      
                      if(1140 <=car.offsetLeft)
                      { win.style.display="block";
                         get[1].style.display="block";
                         car.style.opacity="0";
                         score.style.display="none";
                        no.style.display="none";
                        gra();
						  hide();
						  body.style.background="rgb(23, 138, 214)";
                      }

          function audio1()
          {
          	bell.play()
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



			}


          function audio2()
          {
          	lev[0].play()
          }   

          function audio3()
          {
          	lev[1].play();
          }
          function audio4()
          {
          	lev[2].play();
          }

          function audio5()
          {
          	lev[3].play();
          }

        
          function gra()
          {
          	for(i=0;i<grass.length;i++)
          	{
          		grass[i].style.display="none";
          	}
          }