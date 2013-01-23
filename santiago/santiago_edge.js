/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.0.185",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'sky',
            type:'image',
            rect:['0px','0px','576px','288px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"sky.svg",'0px','0px']
         },
         {
            id:'mountains',
            type:'image',
            rect:['0px','53px','576px','235px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"mountains.svg",'0px','0px']
         },
         {
            id:'city',
            type:'image',
            rect:['-1px','176px','577px','113px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"city.svg",'0px','0px']
         },
         {
            id:'Text',
            type:'text',
            rect:['101px','53px','auto','auto','auto','auto'],
            text:"Bienvenido a Santiago",
            font:['Palatino Linotype, Book Antigua, Palatino, serif',38,"rgba(0,0,0,1)","normal","none",""]
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_Text}": [
            ["style", "top", '-63.65px'],
            ["style", "font-family", 'Palatino Linotype, Book Antigua, Palatino, serif'],
            ["style", "left", '101px'],
            ["style", "font-size", '38px']
         ],
         "${_city}": [
            ["style", "top", '288.02px'],
            ["style", "height", '0.54998779296875px'],
            ["style", "left", '-1px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "width", '576px'],
            ["style", "height", '288px'],
            ["style", "overflow", 'hidden']
         ],
         "${_mountains}": [
            ["style", "top", '53px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px']
         ],
         "${_sky}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 3000,
         autoPlay: true,
         timeline: [
            { id: "eid6", tween: [ "style", "${_mountains}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 1000, easing: "easeInOutQuart" },
            { id: "eid8", tween: [ "style", "${_Text}", "top", '53px', { fromValue: '-63.65px'}], position: 2000, duration: 1000, easing: "easeInOutQuart" },
            { id: "eid4", tween: [ "style", "${_city}", "top", '175.55px', { fromValue: '288.02px'}], position: 500, duration: 1000, easing: "easeOutBounce" },
            { id: "eid2", tween: [ "style", "${_city}", "height", '113px', { fromValue: '0.54998779296875px'}], position: 500, duration: 1000, easing: "easeOutBounce" }         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-651566886");
