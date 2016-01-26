/**
 * Created by codename on 2016-01-26.
 */

$(document).ready(function(){
    /* Definding selector */
    $('nav a.mobile_menu').on('click', function(){

        var currentNavHeight = $('nav').height();

        if( currentNavHeight < 5 )
        {
            var newNavHeight = $('nav > ul').height() + 15;
            $('nav').animate({'height':newNavHeight+'px'},750);
        }
        else
        {
            $('nav').animate({'height':'0px'},750);
        }

    });
});