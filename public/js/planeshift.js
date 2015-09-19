/*
 * @licstart The following is the entire license notice for the
 *     JavaScript code in this page.
 *
 * Copyright © 2015 Ethan Joyce
 *
 * The JavaScript code in this page is free software: you can
 * redistribute it and/or modify it under the terms of the GNU
 * General Public License (GNU GPL) as published by the Free Software
 * Foundation, either version 3 of the License, or (at your option)
 * any later version. The code is distributed WITHOUT ANY WARRANTY;
 * without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE. See the GNU GPL for more details.
 *
 * As additional permission under GNU GPL version 3 section 7, you
 * may distribute non-source (e.g., minimized or compacted) forms of
 * that code without the copy of the GNU GPL normally required by
 * section 4, provided you include this license notice and a URL
 * through which recipients can access the Corresponding Source.
 *
 * @licend The above is the entire license notice
 *     for the JavaScript code in this page.
 */

function calculate() {
    var resultsElem = document.getElementById("results");

    var triaPerPP = 30;

    var startLevel = parseInt(document.getElementById("startLevel").value);
    var currentLevel = startLevel;
    var newLevel = parseInt(document.getElementById("newLevel").value);
 
    var requiredPP = 0;
    var requiredTria = 0;

    if (newLevel < startLevel) {
        resultsElem.innerHTML = "You can't go down in levels, silly!";
        resultsElem.style.visibility = "visible";
        return;
    }

    for (var i = 0; i < newLevel - startLevel; i++) {
        requiredPP += Math.ceil(currentLevel / 2);
        currentLevel++;
    }

    requiredTria = requiredPP * triaPerPP;
    resultsElem.innerHTML = "Progression Points (PP): " + requiredPP +
            "<br>Tria: " + requiredTria;
    resultsElem.style.visibility = "visible";
}
