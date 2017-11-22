function progressbarSVG(pathElement, textElement, lineCounter, speed, callback){

    'use strict';

    var path    = document.querySelector(pathElement),
        text    = document.querySelector(textElement),
        length  = path.getTotalLength(),
        i       = 0,
        count   = 0,
        lines   = lineCounter;

    setInterval(function() {

        if (i < length + length / lines) {

            path.setAttribute('stroke-dasharray', i + "," + length);

            i += length / lines;

            text.innerHTML = Math.round((count++ / lines) * 100) + " %";

        } else {

            if(typeof callback === "function"){

                callback();

            } else {

                console.log("No callback method available");

            }

        }

    }, speed);

}