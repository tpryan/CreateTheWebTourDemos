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
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'bg2',
            type:'image',
            rect:['0px','0px','550px','393px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"bg.svg",'0px','0px']
         },
         {
            id:'buildings_outline',
            type:'image',
            rect:['0px','0px','550px','393px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"buildings_outline.svg",'0px','0px']
         },
         {
            id:'plane',
            type:'image',
            rect:['0px','0px','550px','393px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"plane.svg",'0px','0px']
         },
         {
            id:'trees',
            type:'image',
            rect:['0px','0px','550px','393px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"trees.svg",'0px','0px']
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_buildings_outline}": [
            ["style", "top", '0px'],
            ["style", "height", '393px'],
            ["style", "left", '0px'],
            ["style", "width", '550px']
         ],
         "${_plane}": [
            ["style", "top", '0px'],
            ["style", "height", '393px'],
            ["style", "left", '0px'],
            ["style", "width", '550px']
         ],
         "${_trees}": [
            ["style", "top", '0px'],
            ["style", "height", '393px'],
            ["style", "left", '0px'],
            ["style", "width", '550px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "width", '550px'],
            ["style", "height", '393px'],
            ["style", "overflow", 'hidden']
         ],
         "${_bg2}": [
            ["style", "height", '393px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '550px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
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
})(jQuery, AdobeEdge, "EDGE-128700327");
