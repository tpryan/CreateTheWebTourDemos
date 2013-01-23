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
            id:'background',
            type:'image',
            rect:['127px','0px','296px','277px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"background.png",'0px','0px']
         },
         {
            id:'fighter',
            type:'image',
            rect:['148px','44px','240px','336px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"fighter.png",'0px','0px']
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "width", '550px'],
            ["style", "height", '400px'],
            ["style", "overflow", 'hidden']
         ],
         "${_background}": [
            ["style", "top", '0px'],
            ["transform", "rotateZ", '-720deg'],
            ["style", "height", '277.3042116218px'],
            ["style", "left", '-296.05px'],
            ["style", "width", '296.06198120117px']
         ],
         "${_fighter}": [
            ["style", "top", '43.58px'],
            ["transform", "rotateZ", '-720deg'],
            ["style", "height", '336.2437371886px'],
            ["style", "opacity", '0'],
            ["style", "left", '148.45px'],
            ["style", "width", '240.44742979091px']
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
            { id: "eid7", tween: [ "transform", "${_background}", "rotateZ", '0deg', { fromValue: '-720deg'}], position: 0, duration: 1000, easing: "easeOutElastic" },
            { id: "eid4", tween: [ "style", "${_background}", "left", '127px', { fromValue: '-296.05px'}], position: 0, duration: 1000, easing: "easeOutElastic" },
            { id: "eid2", tween: [ "style", "${_fighter}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 1000 }         ]
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
})(jQuery, AdobeEdge, "EDGE-1812588943");
