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
            rect:['0px','0px','550px','316px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"sky.svg",'0px','0px']
         },
         {
            id:'buildings',
            type:'image',
            rect:['0px','134px','550px','182px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"buildings.svg",'0px','0px']
         },
         {
            id:'details',
            type:'image',
            rect:['0px','0px','550px','316px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"details.svg",'0px','0px']
         },
         {
            id:'Text3',
            type:'text',
            rect:['300','15','auto','auto','auto','auto'],
            text:"Bem-vindo <br>à Sao Paulo ",
            align:"left",
            font:['Palatino Linotype, Book Antigua, Palatino, serif',24,"rgba(0,0,0,1)","normal","none","normal"]
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_sky}": [
            ["style", "height", '315.60546875px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '550.11317251071px']
         ],
         "${_Text3}": [
            ["style", "top", '-71.7px'],
            ["style", "font-family", 'Palatino Linotype, Book Antigua, Palatino, serif']
         ],
         "${_details}": [
            ["style", "top", '-0.32px'],
            ["style", "height", '316.31773399015px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px'],
            ["style", "width", '550px']
         ],
         "${_buildings}": [
            ["style", "height", '182.01204942669px'],
            ["style", "top", '316px'],
            ["style", "left", '0px'],
            ["style", "width", '550.09997558594px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '316px'],
            ["style", "width", '550px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2000,
         autoPlay: true,
         timeline: [
            { id: "eid10", tween: [ "style", "${_Text3}", "top", '15px', { fromValue: '-71.7px'}], position: 1000, duration: 1000, easing: "easeOutElastic" },
            { id: "eid8", tween: [ "style", "${_buildings}", "top", '134px', { fromValue: '316px'}], position: 0, duration: 1000, easing: "easeOutBounce" },
            { id: "eid2", tween: [ "style", "${_details}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 1000, easing: "easeInOutElastic" }         ]
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
})(jQuery, AdobeEdge, "EDGE-692395380");
