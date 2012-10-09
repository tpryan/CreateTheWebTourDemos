/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
var fonts = {
   "NovecentowideBold":"<link rel=\"stylesheet\" href=\"novecento.css\" type=\"text/css\" title=\"\" charset=\"utf-8\" />"
};
var symbols = {
"stage": {
   version: "0.1.4",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {
      dom: [
        {
            id:'Sunset',
            className:'stage_Sunset_id',
            type:'image',
            rect:[0,0,600,300],
            fill:['rgba(0,0,0,0)','images/Sunset.png'],
            transform:[[-0.47803,0.09813]]
        },
        {
            id:'sunset_txt',
            className:'stage_sunset_txt_id',
            type:'text',
            rect:[99,112,587,94],
            text:"SHADOWS",
            align:"center",
            font:["NovecentowideBold",85,"rgba(0,0,0,1.00)","normal","none","normal"],
            transform:[[-95,62]]
        },
        {
            id:'sunset_txtCopy',
            className:'sunset_txtCopy_id',
            type:'text',
            rect:[99,112,587,94],
            opacity:0.26931720890411,
            text:"SHADOWS",
            align:"center",
            font:["NovecentowideBold",85,"rgba(0,0,0,1.00)","normal","none","normal"],
            transform:[[-95,40.45704],,[50],[1,-0.48]]
        },
        {
            id:'mask',
            className:'stage_mask_id',
            type:'image',
            rect:[0,0,600,64],
            fill:['rgba(0,0,0,0)','images/mask.png'],
            transform:[[0,236]]
        },
        {
            id:'star_sym',
            className:'stage_star_sym_id',
            type:'rect',
            rect:[3.99999,90.999992,0,0]
        },
        {
            id:'white',
            className:'stage_white_id',
            type:'rect',
            rect:[-4,-5.1839904785156,615.11135864258,307.50979614258],
            fill:['rgba(192,192,192,1)',null],
            stroke:[0,"rgba(0,0,0,1)","none"]
        },
        {
            id:'button',
            className:'stage_button_id',
            type:'image',
            rect:[0,0,74,79],
            fill:['rgba(0,0,0,0)','images/button.png']
        }],
      symbolInstances: [
      {
         id:'star_sym',
         symbolName:'star_sym'
      }
      ]
   },
   states: {
      "Base State": {
         "${_mask}": [
            ["transform", "translateX", '0px'],
            ["transform", "translateY", '236px']
         ],
         "${_star_sym}": [
            ["style", "-webkit-transform-origin", [72.7776,667.2422],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-moz-transform-origin", [72.7776,667.2422],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [72.7776,667.2422],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [72.7776,667.2422],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [72.7776,667.2422],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "translateX", '59.86359px'],
            ["transform", "translateY", '-79.6938px'],
            ["transform", "rotateZ", '-58deg']
         ],
         "${_sunset_txt}": [
            ["style", "font-size", '85px'],
            ["transform", "translateX", '-95px'],
            ["style", "text-align", 'center'],
            ["style", "height", '94px'],
            ["color", "color", 'rgba(0,0,0,1.00)'],
            ["style", "font-family", 'NovecentowideBold'],
            ["transform", "translateY", '62px'],
            ["style", "width", '587px']
         ],
         "${_stage}": [
            ["style", "height", '300px'],
            ["style", "width", '600px'],
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "overflow", 'hidden']
         ],
         "body": [
            ["color", "background-color", 'rgba(0,0,0,0)']
         ],
         "${_white}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "opacity", '0.53'],
            ["style", "display", 'block']
         ],
         "${_button}": [
            ["style", "display", 'block'],
            ["transform", "translateY", '121.45951px'],
            ["transform", "translateX", '264.00004px']
         ],
         "${_Sunset}": [
            ["transform", "translateX", '-0.47803px'],
            ["transform", "translateY", '0.09813px']
         ],
         "${_sunset_txtCopy}": [
            ["style", "-webkit-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-moz-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "translateX", '-102.00001px'],
            ["color", "color", 'rgba(64,44,0,1.00)'],
            ["style", "opacity", '0.48908390492609'],
            ["style", "width", '587px'],
            ["style", "font-size", '85px'],
            ["transform", "scaleY", '-0.48'],
            ["transform", "skewX", '50deg'],
            ["style", "height", '94px'],
            ["style", "font-family", 'NovecentowideBold'],
            ["transform", "translateY", '44px'],
            ["style", "text-align", 'center']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 3658.14453125,
         autoPlay: true,
         labels: {

         },
         timeline: [
            { id: "eid423", tween: [ "style", "${_white}", "opacity", '0.53', { fromValue: '0.53'}], position: 0, duration: 0 },
            { id: "eid422", tween: [ "color", "${_white}", "background-color", 'rgba(255,255,255,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1.00)'}], position: 0, duration: 0 },
            { id: "eid425", tween: [ "style", "${_white}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid15", tween: [ "transform", "${_mask}", "translateX", '0px', { fromValue: '0px'}], position: 0, duration: 0 },
            { id: "eid102", tween: [ "style", "${_star_sym}", "-webkit-transform-origin", [72.7776,667.2422], { valueTemplate: '@@0@@% @@1@@%', fromValue: [72.7776,667.2422]}], position: 0, duration: 0 },
            { id: "eid442", tween: [ "style", "${_star_sym}", "-moz-transform-origin", [72.7776,667.2422], { valueTemplate: '@@0@@% @@1@@%', fromValue: [72.7776,667.2422]}], position: 0, duration: 0 },
            { id: "eid443", tween: [ "style", "${_star_sym}", "-ms-transform-origin", [72.7776,667.2422], { valueTemplate: '@@0@@% @@1@@%', fromValue: [72.7776,667.2422]}], position: 0, duration: 0 },
            { id: "eid444", tween: [ "style", "${_star_sym}", "msTransformOrigin", [72.7776,667.2422], { valueTemplate: '@@0@@% @@1@@%', fromValue: [72.7776,667.2422]}], position: 0, duration: 0 },
            { id: "eid445", tween: [ "style", "${_star_sym}", "-o-transform-origin", [72.7776,667.2422], { valueTemplate: '@@0@@% @@1@@%', fromValue: [72.7776,667.2422]}], position: 0, duration: 0 },
            { id: "eid103", tween: [ "transform", "${_star_sym}", "translateX", '59.86359px', { fromValue: '59.86359px'}], position: 0, duration: 0 },
            { id: "eid27", tween: [ "color", "${_sunset_txtCopy}", "color", 'rgba(64,44,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(64,44,0,1.00)'}], position: 161, duration: 0, easing: "swing" },
            { id: "eid19", tween: [ "transform", "${_sunset_txtCopy}", "translateY", '44px', { fromValue: '44px'}], position: 161, duration: 0, easing: "swing" },
            { id: "eid421", tween: [ "transform", "${_button}", "translateY", '121.45951px', { fromValue: '121.45951px'}], position: 0, duration: 0 },
            { id: "eid106", tween: [ "transform", "${_star_sym}", "rotateZ", '57deg', { fromValue: '-58deg'}], position: 0, duration: 2250 },
            { id: "eid104", tween: [ "transform", "${_star_sym}", "translateY", '-79.6938px', { fromValue: '-79.6938px'}], position: 0, duration: 0 },
            { id: "eid13", tween: [ "transform", "${_sunset_txtCopy}", "skewX", '-50deg', { fromValue: '50deg'}], position: 161, duration: 2250, easing: "swing" },
            { id: "eid420", tween: [ "transform", "${_button}", "translateX", '264.00004px', { fromValue: '264.00004px'}], position: 0, duration: 0 },
            { id: "eid21", tween: [ "transform", "${_sunset_txtCopy}", "translateX", '-89.00001px', { fromValue: '-102.00001px'}], position: 161, duration: 2250, easing: "swing" },
            { id: "eid424", tween: [ "style", "${_button}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid28", tween: [ "style", "${_sunset_txtCopy}", "opacity", '0.48908390492609', { fromValue: '0.48908390492609'}], position: 161, duration: 0, easing: "swing" }         ]
      }
   }
},
"star_sym": {
   version: "0.1.4",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {"dom":[{"id":"startail","className":"symbolStage_star_sym_startail_id","type":"image","rect":[-3.99999,-90.999992,324,73],"fill":["rgba(0,0,0,0)","images/startail.png"]},{"id":"starrotate_sym","className":"symbolStage_star_sym_starrotate_sym_id","type":"rect","rect":[294.999977,1.999987,0,0]}],"symbolInstances":[{"id":"starrotate_sym","symbolName":"starrotate_sym"}]},
   states: {
      "Base State": {
         "${_startail}": [
            ["transform", "translateX", '3.99999px'],
            ["transform", "translateY", '100.99999px']
         ],
         "${symbolSelector}": [
            ["style", "height", '83px'],
            ["style", "width", '352.999979px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1500,
         autoPlay: true,
         labels: {

         },
         timeline: [
            { id: "eid29", tween: [ "transform", "${_startail}", "translateX", '3.99999px', { fromValue: '3.99999px'}], position: 0, duration: 0 },
            { id: "eid30", tween: [ "transform", "${_startail}", "translateY", '100.99999px', { fromValue: '100.99999px'}], position: 0, duration: 0 }         ]
      }
   }
},
"starrotate_sym": {
   version: "0.1.4",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {"dom":[{"id":"star","className":"symbolStage_star_sym_star_id","type":"image","rect":[-298.999967,-92.999979,59,59],"fill":["rgba(0,0,0,0)","images/star.png"]}],"symbolInstances":[]},
   states: {
      "Base State": {
         "${_star}": [
            ["transform", "translateY", '90.99999px'],
            ["style", "opacity", '1'],
            ["transform", "translateX", '297.99998px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${symbolSelector}": [
            ["style", "height", '58px'],
            ["style", "width", '58px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 500,
         autoPlay: true,
         labels: {

         },
         timeline: [
            { id: "eid155", tween: [ "transform", "${_star}", "rotateZ", '359deg', { fromValue: '0deg'}], position: 0, duration: 500 },
            { id: "eid34", tween: [ "style", "${_star}", "opacity", '1', { fromValue: '1'}], position: 0, duration: 0 }         ]
      }
   }
}
};

Edge.registerCompositionDefn(compId, symbols, fonts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-13113906");
