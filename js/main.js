;(function($){

    $.ajax({
        url: 'styles/style.css',
        data: {
            action: 'opensearch',
            format: 'json',
            search: 'Javascript'
        },
        success: function(resualt){
            console.log(resualt);
        }
    });

})(jQuery);