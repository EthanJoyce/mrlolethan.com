$(".nav a").click(
    function(event) {
        event.preventDefault();
        href = $(this).attr('href');
        $(".fadeout").hide('slide', {direction: 'down'}, 'fast', function() {
            window.location.href = href;
        });
    }
);
