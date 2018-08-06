var today=new Date();
var christmas=new Date("December 25,2018");
var msperday=24*60*60*1000;
var timleft=(christmas.getTime()-today.getTime());
var e_dayleft=timleft/msperday;

var dayleft=Math.floor(e_dayleft);
var e_hrsleft=(e_dayleft-dayleft)*24;
var hrsleft=Math.floor(e_hrsleft);
var minsleft=Math.floor((e_hrsleft-hrsleft)*60);
 console.log(dayleft+" days "+ hrsleft+" hours "+ minsleft + "minutes left for christmas");