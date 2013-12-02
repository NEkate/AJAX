;(function($){

    $.ajax({
        url: 'http://en.wikipedia.org/w/api.php',
        dataType: 'jsonp',
        data: {
            action: 'opensearch',
            format: 'json',
            search: 'JS'
        },
        success: function(resualt){
            console.log(resualt);
        }
    });

})(jQuery);