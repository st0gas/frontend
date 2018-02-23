
$(function() {
    $('#process').on('click', function(event) {
             $(".progress-bar").animate({
            width: "100%"
        }, {
        duration:1000,
        complete: function() {
        $(event.target).removeClass('btn-dark').addClass('btn-success');
        $(".progress-bar").attr('aria-valuenow','100');
        $(event.target).unbind('click');
    }});
})});
