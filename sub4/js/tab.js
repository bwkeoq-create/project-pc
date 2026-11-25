
$('#content .content_area .contlist:eq(0)').show();

$('.tab_menu ul li a').click(function(e){
    e.preventDefault();

    var idx = $(this).index('.tab_menu ul li a');  // 0 1 2
    $('#content .content_area .contlist').hide();
    $('.tab_menu ul li a').removeClass('active');
    $('#content .content_area .contlist:eq('+ idx +')').fadeIn('fast');
    $(this).addClass('active');

});