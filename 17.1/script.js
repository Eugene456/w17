$(document).ready(function(){
    let tab = $('.tab');
    tab.click(function(){
        let target = $(this).attr('href');
        console.log(target);
        $('.content').hide();
        $(target).show();
    });
})