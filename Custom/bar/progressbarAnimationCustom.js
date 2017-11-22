function progressbarAnimationCustom(containerElement, subElement, clickElement, timer, callback){

  'use strict';

  var main        = $(containerElement),
      findElement = $(subElement),
      counter     = 0;

  if(typeof callback === "function"){

    callback();

  } else {

    $(clickElement).click(function(){

      if(main.has(findElement)){

        var timer = setInterval(animateBar, timer);

        function animateBar(){

          if(counter >= 100){

            clearInterval(timer);

          } else {

            counter++;

            findElement.css("width", counter + "%");

            findElement.text(counter * 1 + "%");

          }

        }

      } else {

        console.log("Not working!");

      }

    });

  }

}