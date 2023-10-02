const me = require('./information.js');

const cowsay = require("cowsay");

console.log(cowsay.say({
    text : `Hello Im ${me.nom} from ${me.campus} campus` ,
    e : "oO",
    T : "U "
}));


