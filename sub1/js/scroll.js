//년도 메뉴 클릭 시 해당 섹션으로 부드럽게 이동


    $('.subNav a').click(function(e){ //각각의 년도 메뉴를 클릭하면...
             e.preventDefault(); //href="#" 속성을 막아주는..메소드
            
                 var value=0; //이동할 스크롤의 거리

                  if($(this).hasClass('link1')){   //첫번째 메뉴를 클릭했냐?   if($(this).is('#link1')){
                     value= $('#content .sec1').offset().top-100;  // 해당 콘테츠의 상단의 거리~~
                  }else if($(this).hasClass('link2')){
                     value= $('#content .sec2').offset().top-100; 
                  }else if($(this).hasClass('link3')){
                     value= $('#content .sec3').offset().top-100; 
                  }else if($(this).hasClass('link4')){
                     value= $('#content .sec4').offset().top-100; 
                  }else if($(this).hasClass('link5')){
                     value= $('#content .sec5').offset().top-100; 
                  }else if($(this).hasClass('link6')){
                     value= $('#content .sec6').offset().top-100; 
                  }
                  
                   $("html,body").stop().animate({"scrollTop":value},1000);
    });         
            

              //년도 메뉴의 스티키 기능 구현

            
              $('.subNav li:eq(0)').find('a').addClass('spy');//첫번째 서브메뉴 활성화
              
           
                var smh2= $('.navBox').offset().top;  //메인 비주얼의 높이
                var header_h= $('header').height();

                var h0= $('#content section:eq(0)').offset().top-600 ;
                var h1= $('#content section:eq(1)').offset().top-600 ;
                var h2= $('#content section:eq(2)').offset().top-600 ;
                var h3= $('#content section:eq(3)').offset().top-600 ;
                var h4= $('#content section:eq(4)').offset().top-600 ;
                var h5= $('#content section:eq(5)').offset().top-600 ;
                

                //스크롤의 좌표가 변하면.. 스크롤 이벤트
            $(window).on('scroll',function(){
                 var scroll = $(window).scrollTop();
                //스크롤top의 좌표를 담는다
                //sticky menu 처리
                    if(scroll>smh2-header_h){ 
                        $('.navBox').addClass('navOn');
                        //스크롤의 거리가 350px 이상이면 서브메뉴 고정
                        $('header').hide();
                    }else{
                        $('.navBox').removeClass('navOn');
                        //스크롤의 거리가 350px 보다 작으면 서브메뉴 원래 상태로
                        $('header').show();
                    }
                        
                

                    //
                    $('.subNav li').find('a').removeClass('spy');
                    //모든 서브메뉴 비활성화~ 불꺼!!!
                    
                    
                    //스크롤의 거리의 범위를 처리
                    if(scroll>=h0 && scroll<h1){
                        $('.subNav li:eq(0)').find('a').addClass('spy');
                        //첫번째 서브메뉴 활성
                        //첫번째 내용 콘텐츠 애니메이
                    }else if(scroll>=h1 && scroll<h2){
                        $('.subNav li:eq(1)').find('a').addClass('spy');
                        //두번째 서브메뉴 활성화
                        
                    }else if(scroll>=h2 && scroll<h3){
                        $('.subNav li:eq(2)').find('a').addClass('spy');
                        //세번째 서브메뉴 활성화
                    }
                    else if(scroll>=h3 && scroll<h4){
                        $('.subNav li:eq(3)').find('a').addClass('spy');
                        //세번째 서브메뉴 활성화
                    }
                    else if(scroll>=h4 && scroll<h5){
                        $('.subNav li:eq(4)').find('a').addClass('spy');
                        //세번째 서브메뉴 활성화
                    } else if(scroll>=h5){
                        $('.subNav li:eq(5)').find('a').addClass('spy');
                        //세번째 서브메뉴 활성화
                    }

            });   
        


     
