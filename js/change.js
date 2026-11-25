
    $('.big').css('background','url(./images/companybig1.png)'); //첫번째 배경이미지를 넣는다.
    $('.big').css('background-size','700px 433px'); //배경이미지 크기 조절
    $('.big').hide().fadeIn('fast'); //처음에 페이드 애니메이션
    $('.company_right li:eq(0) a').css('border','3px solid rgba(255,0,0,1)').children('img').css('filter','grayscale(100%)'); //첫번째 버튼 활성화!

    $('.company_right li a').click(function(e){  //각각의 버튼을 클릭하면
        e.preventDefault(); //a 태그 href속성을 막는다
        var ind = $(this).index('.company_right li a');  //버튼 클릭시 해당 index 번호를 할당(0 1 2 3)
        //console.log(ind);// 0 1 2 3 
        //ind = 0
        $('.big').css('background','url(./images/companybig'+(ind+1)+'.png)'); //클릭한 버튼에 index값에 해당하는 배경이미지로 경로 교체
        $('.big').css('background-size','700px 433px'); //배경크기 변경
        $('.big').hide().fadeIn('fast'); //클릭 시 페이드 효과

        $('.company_right li a').css('border','3px solid rgba(255,0,0,0)').children().css('filter','grayscale(0)'); //모든 버튼을 비 활성화
        $(this).css('border','3px solid rgba(255,0,0,1)').children().css('filter','grayscale(100%)'); //클릭한 자신의 버튼만 활성화!
        
    });

