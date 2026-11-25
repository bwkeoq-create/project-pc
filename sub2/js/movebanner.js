// JavaScript Document

$(document).ready(function() {
   var position=0;  //최초위치(left목적지)
   var movesize=10; //이동 크기(속도)
   var timeonoff; //자동기능
   
   $('.partnerBox ul').after($('.partnerBox ul').clone()); //복재
   // $('가져다 놓을 태그').after('기준태그');
   
   function partnerMove(){
        position-=movesize;  // 2씩 감소
    	$('.partnerBox').css('left',position);
		
		 if(position < -4265){
			   $('.partnerBox').css('left',1300);
			   position=1300;
		 } 


		
   };

   
  





     timeonoff= setInterval(partnerMove, 100);
    
   	$('.partnerBox').hover(function(){
		clearInterval(timeonoff);
	},function(){
		timeonoff= setInterval(partnerMove, 100);	
	});
	
    
 });
 $(document).ready(function() {
   var position=-5000;  //최초위치(left목적지)
   var movesize=10; //이동 크기(속도)
   var timeonoff; //자동기능
   
   $('.partnerBox1 ul').before($('.partnerBox1 ul').clone()); //복재
   // $('가져다 놓을 태그').after('기준태그');
   
   function partnerMove(){
        position +=movesize;  // 2씩 감소
    	$('.partnerBox1').css('left',position);
		
		 if(position >1650){
			   $('.partnerBox1').css('left', -7350);
			   position=-7350;
		 } 


		
   };

   

     timeonoff= setInterval(partnerMove, 100);
    
   	$('.partnerBox1').hover(function(){
		clearInterval(timeonoff);
	},function(){
		timeonoff= setInterval(partnerMove, 100);	
	});
	
    
 });
 

 