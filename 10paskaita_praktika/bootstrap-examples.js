
$(function() {
    $('#process').on('click', function(event) {
            // Animate reikalauja pilnos jquery bibliotekos: https://code.jquery.com/jquery-3.3.1.min.js
             $(".progress-bar").animate({   
            width: "100%"
        }, {
        //Naustatom kiek laiko animacija tesis
        duration:1000,
        // Nustatom kokius veiksmus atlikti po animacijos
        complete: function() {
        // Keičiam spalvą button
        $(event.target).removeClass('btn-dark').addClass('btn-success');
        // Nebūtina bet fiksuojam esamą ilgį
        $(".progress-bar").attr('aria-valuenow','100');
        // Nuimam stebėjimą nuo mygtuko kad nesikartotu animacija paspaudus
        $(event.target).unbind('click');
    }});
})});
