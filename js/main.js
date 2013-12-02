;(function($){

    $.get('js/main.json', function(resualt){
        console.log(resualt);
        console.log(typeof resualt);
        return resualt;
    });

})(jQuery);