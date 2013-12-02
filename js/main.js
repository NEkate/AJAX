;(function($){

    $.ajax({
        url: 'test.txt',
        type: 'GET',
        data: {},
        dataType: 'text',
        success: function(resualt){
            return resualt;
        },
        error: function(){

        },
        complete: function(){

        }
    });

})(jQuery);