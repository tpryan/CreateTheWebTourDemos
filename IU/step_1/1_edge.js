/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
   fonts['graduate, sans-serif']='<script src=\"http://use.edgefonts.net/graduate:n4:all.js\"></script>';


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
            id:'gates',
            type:'image',
            rect:['0px','0px','540px','360px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"gates.jpg",'0px','0px']
         },
         {
            id:'iulogo',
            type:'image',
            rect:['466px','271px','65px','81px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"iulogo.svg",'0px','0px'],
            filter:[0,0,1,1,0,0,0,0,"rgba(0,0,0,1.00)",2,2,2]
         },
         {
            id:'Text',
            type:'text',
            rect:['270px','324px','auto','auto','auto','auto'],
            text:"Indiana University",
            font:['graduate, sans-serif',[24,""],"rgba(0,0,0,1)","normal","none",""],
            filter:[0,0,1,1,0,0,0,0,"rgba(0,0,0,1.00)",2,2,2]
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_iulogo}": [
            ["subproperty", "filter.drop-shadow.color", 'rgba(0,0,0,1.00)'],
            ["style", "opacity", '0'],
            ["style", "left", '466px'],
            ["style", "width", '65px'],
            ["style", "top", '271px'],
            ["subproperty", "filter.drop-shadow.blur", '2px'],
            ["style", "height", '81px'],
            ["subproperty", "filter.drop-shadow.offsetV", '2px'],
            ["subproperty", "filter.drop-shadow.offsetH", '2px']
         ],
         "${_gates}": [
            ["style", "top", '0px'],
            ["subproperty", "filter.blur", '20.477764423079px'],
            ["style", "left", '0px']
         ],
         "${_Text}": [
            ["subproperty", "filter.drop-shadow.color", 'rgba(0,0,0,1.00)'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "left", '207px'],
            ["subproperty", "filter.drop-shadow.offsetH", '-2px'],
            ["style", "top", '369px'],
            ["subproperty", "filter.blur", '0px'],
            ["style", "font-family", 'graduate, sans-serif'],
            ["subproperty", "filter.drop-shadow.blur", '2px'],
            ["subproperty", "filter.drop-shadow.offsetV", '2px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '360px'],
            ["style", "width", '540px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 3042.734375,
         autoPlay: true,
         timeline: [
            { id: "eid20", tween: [ "subproperty", "${_gates}", "filter.blur", '0px', { fromValue: '20.477764423079px'}], position: 1000, duration: 1000, easing: "easeOutExpo" },
            { id: "eid2", tween: [ "style", "${_iulogo}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 1000 },
            { id: "eid8", tween: [ "color", "${_Text}", "color", 'rgba(125,17,12,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(0,0,0,1.00)'}], position: 2000, duration: 1000, easing: "easeOutExpo" },
            { id: "eid4", tween: [ "style", "${_Text}", "top", '319px', { fromValue: '369px'}], position: 2043, duration: 1000, easing: "easeOutExpo" }         ]
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
})(jQuery, AdobeEdge, "EDGE-50669172");
