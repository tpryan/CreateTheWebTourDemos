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
            opacity:1,
            fill:["rgba(0,0,0,0)",im+"buildings_outline.svg",'0px','0px']
         },
         {
            id:'plane',
            type:'image',
            rect:['115px','54px','550px','393px','auto','auto'],
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
            ["subproperty", "filter.blur", '110.76923076923px'],
            ["style", "height", '393px'],
            ["style", "opacity", '1'],
            ["style", "left", '0px'],
            ["style", "width", '550px']
         ],
         "${_plane}": [
            ["style", "height", '393px'],
            ["style", "top", '54px'],
            ["style", "left", '115px'],
            ["style", "width", '550px']
         ],
         "${_trees}": [
            ["style", "top", '393px'],
            ["style", "height", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '550px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '393px'],
            ["style", "width", '550px']
         ],
         "${_bg2}": [
            ["style", "top", '0px'],
            ["style", "height", '393px'],
            ["style", "left", '0px'],
            ["style", "width", '550px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 4847.5,
         autoPlay: true,
         timeline: [
            { id: "eid18", tween: [ "style", "${_trees}", "height", '393px', { fromValue: '0px'}], position: 848, duration: 1000, easing: "easeOutBounce" },
            { id: "eid2", tween: [ "style", "${_plane}", "top", '-56px', { fromValue: '54px'}], position: 2848, duration: 2000 },
            { id: "eid1", tween: [ "style", "${_plane}", "left", '-242px', { fromValue: '115px'}], position: 2848, duration: 2000 },
            { id: "eid20", tween: [ "style", "${_trees}", "top", '0px', { fromValue: '393px'}], position: 848, duration: 1000, easing: "easeOutBounce" },
            { id: "eid22", tween: [ "subproperty", "${_buildings_outline}", "filter.blur", '0px', { fromValue: '110.76923076923px'}], position: 1848, duration: 1000, easing: "easeOutQuad" }         ]
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
