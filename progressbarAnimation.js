function progressbarAnimation(clickElement, element, timer, callback){

    'use strict';

    $(clickElement).click(function(){

        var val = 0,
            elem = $(element);

        var interval = setInterval(function(){

            if (val > $(element).attr("max")){

                clearInterval(interval);

                if(typeof callback === "function"){

                    callback();

                } else {

                    console.log("No callback method available");

                }

            } else {

                val++;

                elem.attr("value", val);

            }
        
        }, timer);

    });

}