(function(){
    "use strict"

// toggles question answers on and off
    let toggleAll = $('.toggleAll');
    toggleAll.click(function(e){
        $('dd').toggleClass('invisible');
        $(this).toggleClass('btn-on');
    });

// highlights individual dt's on click (e-target allows individual elements to be targeted)
$('dt').click((e) => {
    const target = e.target
    $(target).toggleClass('highlight')

    });

})()

// highlights last fact below each h3 header
// let highlightLast = $('.highlight-btn');
// highlightLast.on('click',function(){
//     $(this).siblings('ul').each(function(){
//         $(this).children().last().css('background-color', 'yellow');
//     });
//
// });

// highlights last fact below each h3 header
$('.highlight-btn').click(() => {
    $('.facts').each((index, el) => {

        const lastList=$(el).children().last()
        console.log(lastList);
        $(lastList).toggleClass('highlight')
    })


})

// bolds all facts of parent h3 that is clicked
$('h3').on('click', function(){
    let liParent = $(this).next();
    liParent.children().css('font-weight', 'bold');

})


// changes font color of first fact when sibling fact is clicked
$('li').on('click', function() {
    $(this).parent().children().first().css('color', 'blue');
})

// $(document).ready(function () {
//     $('.left-btn').click(function () {
//         var src = $('#yosemite').attr('src');
//
//         if(src =='img/yosemite.jpeg') {
//             $('#yosemite').attr("src", "img/yellowstone.jpeg");
//         }




