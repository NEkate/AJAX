;(function($){

    $.get(
        'js/main.json',
        {
          name: 'asd',
          age: 73
        },
        function(resualt){
        console.log(resualt);
        console.log(typeof resualt);
        return resualt;
    });

})(jQuery);