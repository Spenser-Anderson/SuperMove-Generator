var btn = document.querySelector("button");

var title = document.querySelector("h1");

btn.addEventListener("click", function() { 
    var word = ["Super","Hyper","Ultimate","Final","Ultima","Sure-Kill","Deadly","Gigantic","Mega","Ultra","Omega","Freak","Hazard","Gatling","Forbidden","Lovey Dovey","Lovely","Double","Triple","Quintuple","Taboo","Royal","Angelic","Gentle","Ancient","Beautiful","Raging"];

    var word2 = ["Atomic","Justice","Dragon's Breath","Dragoon","Chrono","Thunder","Double Rainbow","Rainbow","Thundera","Flaming","Blazing","Electric","Toxic","Supreme","Viper","Royal","Shining","Rose","Glamorous"];

    var word3 = ["Buster","Typhoon","Breaker","Cyclone","Cannon","Harpoon","Arrow","Kiss","Punch","Kick","Beatdown","Rhythm","Tempo","Loop","Dropkick","Suplex","Blast","Blaster","Beam","Bite","Impact","Strike","World Breaker","Shatter Strike","Wave","Tempest","Crush"];

    var l = Math.floor(Math.random()*word.length);
    var m = Math.floor(Math.random()*word2.length);
    var n = Math.floor(Math.random()*word3.length);

    title.innerHTML = (word[l] + " " + word2[m] + " " + word3[n] + "!");

});