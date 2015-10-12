console.log('The PT planer');
console.log('Demo on three : 1.Flinders Street to Tooronga; 2.Flinders Street to Windsor; 3.Richmond to Windsor');
var line1 ={
  line : 'alamein',
  stations : ['Flinders Street','Richmond','East Richmond','Burnley','Hawthorn','Glenferrie']
};
var line2 ={
 line : 'glenWaverly',
 stations : ['Flagstaff','Melbourne Central', 'Parliament','Richmond','Kooyong','Tooronga']
};
var line3 = {
 line : 'sandringham',
 stations : ['Southern Cross','Richmond','South Yarra','Prahran','Windsor']
};

function getRoute(origin,destin){
var route;
var ori = checkLine(origin);
var des = checkLine(destin);
 if (ori.line === des.line){
    route = singleLine(origin,destin,ori);    
} else {
     route = doubleLine(origin,destin,ori,des);
}
console.log(route);
return route;
}


function checkLine(station){
  var lineName = {};
  for(var i=0;i<6;i++) {
if (station === line1.stations[i]){
 return lineName = line1;
}else if (station === line2.stations[i]){
  return lineName = line2;
  }else if (station === line3.stations[i]) {
    return lineName = line3;
  }
}
}

function singleLine(originS,destinS,sinLine){
var o = sinLine.stations.indexOf(originS);
var d = sinLine.stations.indexOf(destinS);
var journeyS = 'The journey stop on '+ sinLine.stations.slice(o,d+1).join();
return journeyS;
}

function doubleLine(originD,destinD,originLine,destinLine){
var oo = originLine.stations.indexOf(originD);
var ro = originLine.stations.indexOf('Richmond');
var dd = destinLine.stations.indexOf(destinD);
var rd = destinLine.stations.indexOf('Richmond');
var oriStops;
var desStops;
if (oo>ro){
  var reRoute1 = originLine.stations.reverse();
  var reOO = reRoute.indexOf(originD);
  var reRO = reRoute.indexOf('Richmond');
oriStops = tempRoute.slice(reOO,reRO);
}else{
  oriStops = originLine.stations.slice(oo,ro);
}
if (dd>ro){
  desStops = destinLine.stations.slice(rd,dd+1);
}else{
  var reRoute2 = destinLine.stations.reverse();
  var reDD = reRoute2.indexOf(destinD);
  var reRO = reRoute2.indexOf('Richmond');
  desStops = reRoute2.slice(rd+1,dd);
}
var journeyD = 'The journey stop on ' + oriStops.join() + ' ' + desStops.join();
return journeyD;
}

getRoute('Flinders Street','Tooronga');
getRoute('Flinders Street','Windsor');
getRoute('Richmond','Windsor');