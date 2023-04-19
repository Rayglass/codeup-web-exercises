$('li').hover(
    function() {
        $(this).css('background-color', 'red');
    },
    function() {
        $(this).css('background-color', '#FFF');
    }
);


$('h1').click(function() {
    $(this).css('background-color', 'yellow');
});


$('p').dblclick(function(e) {
    $(this).css('font-size', '18px');
});
