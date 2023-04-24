(function(){
    "use strict"

    // toggles question answers on and off
    let toggleAll = $('.toggleAll');
    toggleAll.click(function(e){
        $('dd').toggleClass('invisible');
        $(this).toggleClass('btn-on');
    });


$('dt').click((e) => {
    const target = e.target
    $(target).toggleClass('highlight')

    })

})()