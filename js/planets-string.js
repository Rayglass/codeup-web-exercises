(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */

    var planetsArray = planetsString.split('|');
    console.log(planetsArray);


    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     */

    // var planetsStringB = "Mercury<br>Venus<br>Earth<br>Mars<br>Jupiter<br>Saturn<br>Uranus<br>Neptune";
    // console.log(planetsStringB);

    // var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    //
    // var newString = planetsString.replace(/\|/g, "\n");
    // console.log(planetsString);
    // console.log(newString);

 var listPlanets = planetsString.split("|");
 var planetsBreak = "Mercury<br>Venus<br>Earth<br>Mars<br>Jupiter<br>Saturn<br>Uranus<br>Neptune";
 var brlistPlanets = "<ul>" + "<li>" + listPlanets.join("</li><li>") + "</li>" + "</ul>";
 document.body.innerHTML += planetsBreak;
    console.log(listPlanets);
    console.log(planetsBreak);
    console.log(brlistPlanets);

    /**
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

    // var planetsStringLi = '<ul><li>Mercury</li> <li>Venus</li> <li>Earth</li> <li>Mars</li> <li>Jupiter</li> <li>Saturn</li> <li>Uranus</li> <li>Neptune</li> </ul>'
    // console.log(planetsStringLi);

// var planetsString =  "<ul><li>Mercury</li>|<li>Venus</li>|<li>Earth</li>|<li>Mars</li>|<li>Jupiter</li>|<li>Saturn</li>|<li>Uranus</li>|<li>Neptune</li></ul>";

//

})();