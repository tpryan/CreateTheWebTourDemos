/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
   fonts['"AdobeClean-Light", "source_sans_pro_lightregular"']='<link rel=\"stylesheet\" href=\"fonts.css\">';


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
            id:'grid',
            type:'image',
            rect:['0px','0px','800px','450px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"grid.png",'0px','0px']
         },
         {
            id:'an_title',
            type:'text',
            rect:['257px','157px','auto','auto','auto','auto'],
            text:"Adobe Edge Animate",
            font:['"AdobeClean-Light", "source_sans_pro_lightregular"',44,"rgba(0,0,0,1)","normal","none",""]
         },
         {
            id:'an_slogan',
            type:'text',
            rect:['317px','225px','254px','53px','auto','auto'],
            text:"Animate the Web",
            align:"left",
            font:['AdobeClean-Light, source_sans_pro_lightregular',35,"rgba(255,255,255,1.00)","normal","none","normal"]
         },
         {
            id:'an',
            type:'image',
            rect:['38px','18px','75px','75px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"edge_animate_mn.png",'0px','0px']
         },
         {
            id:'rs_an',
            type:'rect',
            rect:['22','18','auto','auto','auto','auto']
         },
         {
            id:'bd',
            type:'image',
            rect:['350px','18px','75px','73px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"phonegap_build_mn.png",'0px','0px']
         },
         {
            id:'rs_bd',
            type:'rect',
            rect:['443','239','auto','auto','auto','auto']
         },
         {
            id:'rf',
            type:'image',
            rect:['455px','18px','75px','73px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"edge_reflow_mn.png",'0px','0px']
         },
         {
            id:'rs_rf',
            type:'rect',
            rect:['598','239','auto','auto','auto','auto']
         },
         {
            id:'tk',
            type:'image',
            rect:['560px','18px','75px','73px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"typekit.png",'0px','0px']
         },
         {
            id:'rs_tk',
            type:'rect',
            rect:['577','55','auto','auto','auto','auto']
         },
         {
            id:'wf',
            type:'image',
            rect:['665px','18px','75px','73px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"edge_web_fonts_mn.png",'0px','0px']
         },
         {
            id:'rs_wf',
            type:'rect',
            rect:['548','195','auto','auto','auto','auto']
         },
         {
            id:'in',
            type:'image',
            rect:['140px','18px','75px','73px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"edge_inspect_mn.png",'0px','0px']
         },
         {
            id:'rs_in',
            type:'rect',
            rect:['388','274','auto','auto','auto','auto']
         },
         {
            id:'co',
            type:'image',
            rect:['245px','18px','75px','73px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"edge_code_mn.png",'0px','0px']
         },
         {
            id:'rs_co',
            type:'rect',
            rect:['254','177','auto','auto','auto','auto']
         }],
         symbolInstances: [
         {
            id:'rs_an',
            symbolName:'rs'
         },
         {
            id:'rs_rf',
            symbolName:'rs'
         },
         {
            id:'rs_tk',
            symbolName:'rs'
         },
         {
            id:'rs_co',
            symbolName:'rs'
         },
         {
            id:'rs_wf',
            symbolName:'rs'
         },
         {
            id:'rs_bd',
            symbolName:'rs'
         },
         {
            id:'rs_in',
            symbolName:'rs'
         }
         ]
      },
   states: {
      "Base State": {
         "${_rf}": [
            ["style", "height", '73.249998092651px'],
            ["style", "top", '17.92px'],
            ["style", "left", '455px'],
            ["style", "width", '75px']
         ],
         "${_tk}": [
            ["style", "height", '73.249998092651px'],
            ["style", "top", '17.92px'],
            ["style", "left", '560px'],
            ["style", "width", '75px']
         ],
         "${_rs_bd}": [
            ["style", "left", '337px'],
            ["style", "top", '18px']
         ],
         "${_co}": [
            ["style", "height", '73.249998092651px'],
            ["style", "top", '17.92px'],
            ["style", "left", '245px'],
            ["style", "width", '75px']
         ],
         "${_rs_tk}": [
            ["style", "left", '547px'],
            ["style", "top", '18px']
         ],
         "${_rs_in}": [
            ["style", "top", '18px'],
            ["style", "left", '127px']
         ],
         "${_rs_wf}": [
            ["style", "left", '652px'],
            ["style", "top", '18px']
         ],
         "${_grid}": [
            ["style", "top", '0px'],
            ["style", "height", '450px'],
            ["style", "left", '0px'],
            ["style", "width", '800px']
         ],
         "${_rs_co}": [
            ["style", "top", '18px'],
            ["style", "left", '232px']
         ],
         "${_an_slogan}": [
            ["style", "top", '532.1px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "width", '253.63723754883px'],
            ["style", "left", '317px'],
            ["style", "font-size", '35px']
         ],
         "${_in}": [
            ["style", "height", '73.249998092651px'],
            ["style", "top", '17.92px'],
            ["style", "left", '140px'],
            ["style", "width", '75px']
         ],
         "${_wf}": [
            ["style", "height", '73.249998092651px'],
            ["style", "top", '17.87px'],
            ["style", "left", '665px'],
            ["style", "width", '75px']
         ],
         "${_bd}": [
            ["style", "height", '73.249998092651px'],
            ["style", "top", '17.92px'],
            ["style", "left", '350px'],
            ["style", "width", '75px']
         ],
         "${_rs_rf}": [
            ["style", "top", '18px'],
            ["style", "left", '444px']
         ],
         "${_an_title}": [
            ["style", "top", '464.1px'],
            ["color", "color", 'rgba(178,170,252,1.00)'],
            ["style", "font-family", '"AdobeClean-Light", "source_sans_pro_lightregular"'],
            ["style", "left", '257px'],
            ["style", "font-size", '44px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "width", '800px'],
            ["style", "height", '450px'],
            ["style", "overflow", 'hidden']
         ],
         "${_an}": [
            ["style", "height", '75px'],
            ["style", "top", '18px'],
            ["style", "left", '38px'],
            ["style", "width", '75px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 7000,
         autoPlay: true,
         labels: {
            "reveal": 1000,
            "start_an": 2000,
            "stop_an": 6000
         },
         timeline: [
            { id: "eid10", tween: [ "style", "${_rs_bd}", "top", '18px', { fromValue: '18px'}], position: 0, duration: 0, easing: "easeInBounce" },
            { id: "eid42", tween: [ "style", "${_an}", "left", '33.62px', { fromValue: '38px'}], position: 2000, duration: 1000, easing: "easeOutQuad" },
            { id: "eid55", tween: [ "style", "${_an}", "left", '38px', { fromValue: '33.62px'}], position: 6000, duration: 1000, easing: "easeOutQuad" },
            { id: "eid5", tween: [ "style", "${_rs_in}", "top", '18px', { fromValue: '18px'}], position: 0, duration: 0, easing: "easeInBounce" },
            { id: "eid24", tween: [ "style", "${_rs_in}", "left", '127px', { fromValue: '127px'}], position: 0, duration: 0, easing: "easeInBounce" },
            { id: "eid7", tween: [ "style", "${_rs_co}", "top", '18px', { fromValue: '18px'}], position: 0, duration: 0, easing: "easeInBounce" },
            { id: "eid25", tween: [ "style", "${_rs_co}", "left", '232px', { fromValue: '232px'}], position: 0, duration: 0, easing: "easeInBounce" },
            { id: "eid14", tween: [ "style", "${_rs_tk}", "top", '18px', { fromValue: '18px'}], position: 0, duration: 0, easing: "easeInBounce" },
            { id: "eid46", tween: [ "style", "${_an_slogan}", "top", '225px', { fromValue: '532.1px'}], position: 2000, duration: 1000, easing: "easeOutQuad" },
            { id: "eid57", tween: [ "style", "${_an_slogan}", "top", '532.1px', { fromValue: '225px'}], position: 6000, duration: 1000, easing: "easeOutQuad" },
            { id: "eid44", tween: [ "style", "${_an_title}", "top", '157px', { fromValue: '464.1px'}], position: 2000, duration: 1000, easing: "easeOutQuad" },
            { id: "eid58", tween: [ "style", "${_an_title}", "top", '464.1px', { fromValue: '157px'}], position: 6000, duration: 1000, easing: "easeOutQuad" },
            { id: "eid40", tween: [ "style", "${_an}", "height", '200.39453125px', { fromValue: '75px'}], position: 2000, duration: 1000, easing: "easeOutQuad" },
            { id: "eid53", tween: [ "style", "${_an}", "height", '75px', { fromValue: '200.39453125px'}], position: 6000, duration: 1000, easing: "easeOutQuad" },
            { id: "eid23", tween: [ "style", "${_rs_rf}", "left", '444px', { fromValue: '444px'}], position: 0, duration: 0, easing: "easeInBounce" },
            { id: "eid27", tween: [ "style", "${_rs_wf}", "left", '652px', { fromValue: '652px'}], position: 0, duration: 0, easing: "easeInBounce" },
            { id: "eid39", tween: [ "style", "${_an}", "top", '156.67px', { fromValue: '18px'}], position: 2000, duration: 1000, easing: "easeOutQuad" },
            { id: "eid54", tween: [ "style", "${_an}", "top", '18px', { fromValue: '156.67px'}], position: 6000, duration: 1000, easing: "easeOutQuad" },
            { id: "eid11", tween: [ "style", "${_rs_rf}", "top", '18px', { fromValue: '18px'}], position: 0, duration: 0, easing: "easeInBounce" },
            { id: "eid41", tween: [ "style", "${_an}", "width", '200.39453125px', { fromValue: '75px'}], position: 2000, duration: 1000, easing: "easeOutQuad" },
            { id: "eid56", tween: [ "style", "${_an}", "width", '75px', { fromValue: '200.39453125px'}], position: 6000, duration: 1000, easing: "easeOutQuad" },
            { id: "eid26", tween: [ "style", "${_rs_bd}", "left", '337px', { fromValue: '337px'}], position: 0, duration: 0, easing: "easeInBounce" },
            { id: "eid28", tween: [ "style", "${_rs_tk}", "left", '547px', { fromValue: '547px'}], position: 0, duration: 0, easing: "easeInBounce" },
            { id: "eid16", tween: [ "style", "${_rs_wf}", "top", '18px', { fromValue: '18px'}], position: 0, duration: 0, easing: "easeInBounce" }         ]
      }
   }
},
"rs": {
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
      id: 'rs_an',
      type: 'image',
      rect: ['0px','0px','107px','62px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/redsheet.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_rs_an}": [
            ["style", "top", '0px'],
            ["transform", "scaleX", '1'],
            ["style", "height", '62.460802270092px'],
            ["style", "left", '0.01px'],
            ["style", "width", '107.29192352295px']
         ],
         "${symbolSelector}": [
            ["style", "height", '62.450000762939px'],
            ["style", "width", '107.28333282471px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1000,
         autoPlay: false,
         labels: {
            "remove": 0
         },
         timeline: [
            { id: "eid1", tween: [ "style", "${_rs_an}", "top", '-78.23px', { fromValue: '0px'}], position: 0, duration: 1000 }         ]
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
})(jQuery, AdobeEdge, "EDGE-171675818");
