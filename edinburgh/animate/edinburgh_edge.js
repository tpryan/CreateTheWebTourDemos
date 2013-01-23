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
   build: "1.0.1.204",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'mountain2',
            type:'image',
            rect:['173','141','573px','215px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"mountain.png",'0px','0px']
         },
         {
            id:'nessie2',
            type:'image',
            rect:['7px','314px','559px','241px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"nessie.png",'0px','0px']
         },
         {
            id:'boat2',
            type:'image',
            rect:['123px','200px','190px','111px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"boat.png",'0px','0px']
         },
         {
            id:'water2',
            type:'image',
            rect:['0','250','573px','100px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"water.png",'0px','0px']
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_boat2}": [
            ["style", "top", '200px'],
            ["style", "opacity", '0'],
            ["style", "left", '123.3px']
         ],
         "${_mountain2}": [
            ["style", "top", '108.4px'],
            ["style", "opacity", '0'],
            ["style", "left", '0px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(165,191,194,1.00)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '400px'],
            ["style", "width", '573px']
         ],
         "${_water2}": [
            ["style", "top", '294.08px'],
            ["style", "opacity", '0']
         ],
         "${_nessie2}": [
            ["style", "top", '314.44px'],
            ["style", "opacity", '0'],
            ["style", "left", '7px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 3899,
         autoPlay: true,
         labels: {
            "Label 1": 3899
         },
         timeline: [
            { id: "eid40", tween: [ "style", "${_mountain2}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 1000 },
            { id: "eid44", tween: [ "style", "${_nessie2}", "left", '0px', { fromValue: '7px'}], position: 1500, duration: 750, easing: "easeOutBack" },
            { id: "eid46", tween: [ "style", "${_nessie2}", "left", '-5.17px', { fromValue: '0px'}], position: 3000, duration: 899 },
            { id: "eid38", tween: [ "style", "${_water2}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 1000 },
            { id: "eid48", tween: [ "style", "${_boat2}", "left", '118.13px', { fromValue: '123.3px'}], position: 3000, duration: 899 },
            { id: "eid47", tween: [ "style", "${_boat2}", "top", '145.2px', { fromValue: '200px'}], position: 3000, duration: 899 },
            { id: "eid42", tween: [ "style", "${_nessie2}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 0, easing: "easeOutBack" },
            { id: "eid36", tween: [ "style", "${_boat2}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 1000 },
            { id: "eid43", tween: [ "style", "${_nessie2}", "top", '173px', { fromValue: '314.44px'}], position: 1500, duration: 750, easing: "easeOutBack" },
            { id: "eid45", tween: [ "style", "${_nessie2}", "top", '118.2px', { fromValue: '173px'}], position: 3000, duration: 899 }         ]
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
})(jQuery, AdobeEdge, "EDGE-1791476801");
