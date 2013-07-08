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
            id:'University_of_Maryland_Seal',
            type:'image',
            rect:['142px','67px','266px','266px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"University_of_Maryland_Seal.svg",'0px','0px']
         },
         {
            id:'RoundRect',
            type:'rect',
            rect:['33px','333px','129px','47px','auto','auto'],
            borderRadius:["10px","10px","10px","10px"],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgba(0,0,0,1)","none"]
         },
         {
            id:'Text',
            type:'text',
            rect:['77px','343px','auto','auto','auto','auto'],
            text:"Go!",
            font:['Arial, Helvetica, sans-serif',[24,""],"rgba(0,0,0,1)","normal","none",""]
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_University_of_Maryland_Seal}": [
            ["style", "top", '67px'],
            ["transform", "rotateZ", '-720deg'],
            ["style", "height", '266px'],
            ["style", "left", '-276px'],
            ["style", "width", '266px']
         ],
         "${_RoundRect}": [
            ["color", "background-color", 'rgba(204,0,0,1.00)']
         ],
         "${_Text}": [
            ["style", "left", '77px'],
            ["style", "top", '343px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "width", '550px'],
            ["style", "height", '400px'],
            ["style", "overflow", 'hidden']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 4000,
         autoPlay: true,
         labels: {
            "roll": 3000
         },
         timeline: [
            { id: "eid6", tween: [ "color", "${_RoundRect}", "background-color", 'rgba(204,0,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(204,0,0,1.00)'}], position: 3000, duration: 0, easing: "easeOutElastic" },
            { id: "eid4", tween: [ "transform", "${_University_of_Maryland_Seal}", "rotateZ", '0deg', { fromValue: '-720deg'}], position: 3000, duration: 1000, easing: "easeOutElastic" },
            { id: "eid2", tween: [ "style", "${_University_of_Maryland_Seal}", "left", '142px', { fromValue: '-276px'}], position: 3000, duration: 1000, easing: "easeOutElastic" }         ]
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
})(jQuery, AdobeEdge, "EDGE-270617903");
