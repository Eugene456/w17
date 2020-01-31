$(document).ready(function(){
    let tab = $('.tab');
    let content
    tab.click(function(){
        let target = $(this).attr('data-target');
        console.log(target);
        $('.tab-content').hide();
        $('.' + target).show();
    });
})