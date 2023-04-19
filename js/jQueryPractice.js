$('li').hover(
    function() {
        $(this).css('color', 'red');
    },
    function() {
        $(this).css('color', 'black');
    }
);


$('h1').click(function() {
    $(this).css('background-color', 'yellow');
});


$('p').dblclick(function(e) {
    $(this).css('font-size', '18px');
});
