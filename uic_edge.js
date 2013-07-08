/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
   fonts['calligraffitti, sans-serif']='<script src=\"http://use.edgefonts.net/calligraffitti:n4:all.js\"></script>';


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
            id:'illinios',
            type:'image',
            rect:['150px','75px','250px','250px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"illinios.png",'0px','0px']
         },
         {
            id:'Text',
            type:'text',
            rect:['43px','7px','479px','57px','auto','auto'],
            clip:['rect(0px 479.41015625pxpx 57.046875pxpx 0px)'],
            text:"Welcome to",
            align:"center",
            font:['calligraffitti, sans-serif',49,"rgba(0,0,0,1)","normal","none",""]
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
         "${_illinios}": [
            ["style", "top", '75px'],
            ["style", "left", '-250px'],
            ["transform", "rotateZ", '-720deg']
         ],
         "${_Text}": [
            ["style", "clip", [0,234,57.046875,239], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "font-family", 'calligraffitti, sans-serif'],
            ["style", "text-align", 'center'],
            ["style", "font-size", '49px']
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
            { id: "eid2", tween: [ "style", "${_illinios}", "left", '150px', { fromValue: '-250px'}], position: 0, duration: 1000, easing: "easeOutElastic" },
            { id: "eid6", tween: [ "transform", "${_illinios}", "rotateZ", '0deg', { fromValue: '-720deg'}], position: 0, duration: 1000, easing: "easeOutElastic" },
            { id: "eid8", tween: [ "style", "${_Text}", "clip", [0,479.41015625,57.046875,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,234,57.046875,239]}], position: 1000, duration: 1000 }         ]
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
})(jQuery, AdobeEdge, "EDGE-459267410");
