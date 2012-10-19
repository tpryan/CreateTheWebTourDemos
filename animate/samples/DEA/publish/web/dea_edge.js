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
            id:'bg2',
            type:'image',
            rect:['1px','0px','960px','650px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"bg2.jpg",'0px','0px']
         },
         {
            id:'board2',
            type:'rect',
            rect:['0','14','auto','auto','auto','auto']
         }],
         symbolInstances: [
         {
            id:'board2',
            symbolName:'board'
         }
         ]
      },
   states: {
      "Base State": {
         "${_Stage}": [
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "width", '960px'],
            ["style", "height", '650px'],
            ["style", "overflow", 'hidden']
         ],
         "${_bg2}": [
            ["style", "left", '1px'],
            ["style", "top", '0px']
         ],
         "${_board2}": [
            ["style", "top", '-275.7px'],
            ["transform", "scaleY", '0.3'],
            ["style", "left", '-412.1px'],
            ["transform", "scaleX", '0.3']
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
            { id: "eid102", tween: [ "transform", "${_board2}", "scaleY", '0.3', { fromValue: '0.3'}], position: 0, duration: 0 },
            { id: "eid104", tween: [ "style", "${_board2}", "top", '-275.7px', { fromValue: '-275.7px'}], position: 0, duration: 0 },
            { id: "eid105", tween: [ "style", "${_board2}", "left", '-412.1px', { fromValue: '-412.1px'}], position: 0, duration: 0 },
            { id: "eid101", tween: [ "transform", "${_board2}", "scaleX", '0.3', { fromValue: '0.3'}], position: 0, duration: 0 }         ]
      }
   }
},
"board": {
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
      id: 'board',
      type: 'image',
      rect: ['0px','0px','1786px','1202px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/board.jpg','0px','0px']
   },
   {
      rect: ['725px','500px','294px','402px','auto','auto'],
      id: 'fring3',
      type: 'image',
      cursor: ['pointer'],
      fill: ['rgba(0,0,0,0)','images/fring.png','0px','0px']
   },
   {
      id: 'fringInfo',
      type: 'rect',
      rect: ['761','571','auto','auto','auto','auto']
   },
   {
      rect: ['1209px','749px','421px','361px','auto','auto'],
      id: 'lab',
      type: 'image',
      cursor: ['pointer'],
      fill: ['rgba(0,0,0,0)','images/lab.png','0px','0px']
   },
   {
      id: 'labInfo',
      type: 'rect',
      transform: {},
      rect: ['1254px','831px','auto','auto','auto','auto']
   },
   {
      rect: ['203px','174px','324px','374px','auto','auto'],
      id: 'mike',
      type: 'image',
      cursor: ['pointer'],
      fill: ['rgba(0,0,0,0)','images/mike.png','0px','0px']
   },
   {
      id: 'mikeInfo',
      type: 'rect',
      rect: ['264px','241px','auto','auto','auto','auto']
   },
   {
      rect: ['704px','109px','369px','258px','auto','auto'],
      id: 'pollos',
      type: 'image',
      cursor: ['pointer'],
      fill: ['rgba(0,0,0,0)','images/pollos.png','0px','0px']
   },
   {
      id: 'pollosInfo',
      type: 'rect',
      rect: ['786px','180px','auto','auto','auto','auto']
   },
   {
      rect: ['1261px','220px','319px','404px','auto','auto'],
      id: 'salamanca',
      type: 'image',
      cursor: ['pointer'],
      fill: ['rgba(0,0,0,0)','images/salamanca.png','0px','0px']
   },
   {
      rect: ['170px','726px','390px','335px','auto','auto'],
      id: 'schuler',
      type: 'image',
      cursor: ['pointer'],
      fill: ['rgba(0,0,0,0)','images/schuler.png','0px','0px']
   },
   {
      id: 'salamancaInfo',
      type: 'rect',
      rect: ['1332px','295px','auto','auto','auto','auto']
   },
   {
      id: 'schulerInfo',
      type: 'rect',
      rect: ['207px','802px','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'fringInfo',
      symbolName: 'fringInfo'
   },
   {
      id: 'mikeInfo',
      symbolName: 'mikeInfo'
   },
   {
      id: 'labInfo',
      symbolName: 'labInfo'
   },
   {
      id: 'pollosInfo',
      symbolName: 'pollosInfo'
   },
   {
      id: 'salamancaInfo',
      symbolName: 'salamancaInfo'
   },
   {
      id: 'schulerInfo',
      symbolName: 'schulerInfo'
   }   ]
   },
   states: {
      "Base State": {
         "${_lab}": [
            ["style", "top", '749.42px'],
            ["style", "left", '1209px'],
            ["style", "cursor", 'pointer']
         ],
         "${_fring3}": [
            ["style", "top", '500.05px'],
            ["style", "left", '724.86px'],
            ["style", "cursor", 'pointer']
         ],
         "${_mikeInfo}": [
            ["style", "top", '241px'],
            ["style", "opacity", '0'],
            ["style", "left", '264.28px']
         ],
         "${_labInfo}": [
            ["style", "top", '831.15px'],
            ["style", "opacity", '0'],
            ["style", "left", '1254px']
         ],
         "${_pollos}": [
            ["style", "top", '108.58px'],
            ["style", "left", '704px'],
            ["style", "cursor", 'pointer']
         ],
         "${_pollosInfo}": [
            ["style", "top", '180px'],
            ["style", "opacity", '0'],
            ["style", "left", '786px']
         ],
         "${_schuler}": [
            ["style", "top", '726px'],
            ["style", "left", '169.91px'],
            ["style", "cursor", 'pointer']
         ],
         "${_fringInfo}": [
            ["style", "display", 'block'],
            ["style", "opacity", '0']
         ],
         "${_salamanca}": [
            ["style", "top", '219.82px'],
            ["style", "left", '1260.95px'],
            ["style", "cursor", 'pointer']
         ],
         "${symbolSelector}": [
            ["style", "height", '1202px'],
            ["style", "width", '1786px']
         ],
         "${_salamancaInfo}": [
            ["style", "top", '295px'],
            ["style", "opacity", '0'],
            ["style", "left", '1332px']
         ],
         "${_schulerInfo}": [
            ["style", "top", '802px'],
            ["style", "opacity", '0'],
            ["style", "left", '207px']
         ],
         "${_board}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_mike}": [
            ["style", "top", '174.45px'],
            ["style", "left", '203px'],
            ["style", "cursor", 'pointer']
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
            { id: "eid112", tween: [ "style", "${_fringInfo}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 }         ]
      }
   }
},
"info": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.0.185",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {},
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '136.23333740234px'],
            ["style", "width", '206.11666870117px']
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
},
"fringInfo": {
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
      rect: ['0px','0px','228px','290px','auto','auto'],
      stroke: [0,'rgb(0, 0, 0)','none'],
      id: 'Rectangle2',
      opacity: 0.74905395507812,
      type: 'rect',
      fill: ['rgba(0,0,0,1.00)']
   },
   {
      type: 'text',
      rect: ['21px','15px','189px','260px','auto','auto'],
      id: 'Text3',
      text: 'Gustavo \"Gus\" Fring was a Chilean national who used it as a cover for an extremely successful methamphetamine distribution network.',
      align: 'left',
      font: ['Courier, Courier New, monospace',20,'rgba(255,255,255,1.00)','normal','none','normal']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text3}": [
            ["style", "top", '15px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-size", '20px'],
            ["style", "word-spacing", '3px'],
            ["style", "height", '260px'],
            ["style", "font-family", 'Courier, Courier New, monospace'],
            ["style", "left", '21px'],
            ["style", "width", '189.31666564941px']
         ],
         "${_Rectangle2}": [
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "opacity", '0.74905395507812'],
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '290.25px'],
            ["style", "width", '227.83332824707px']
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
},
"labInfo": {
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
      rect: ['0px','0px','322px','231px','auto','auto'],
      stroke: [0,'rgb(0, 0, 0)','none'],
      id: 'Rectangle2',
      opacity: 0.74905395507812,
      type: 'rect',
      fill: ['rgba(0,0,0,1.00)']
   },
   {
      type: 'text',
      rect: ['36px','41px','252px','149px','auto','auto'],
      id: 'Text3',
      text: 'Primary meth lab for the Fring operation. Was burned and all evidence destroyed after the killing of Gus Fring.',
      align: 'left',
      font: ['Courier, Courier New, monospace',20,'rgba(255,255,255,1.00)','normal','none','normal']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text3}": [
            ["style", "top", '41px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "width", '251.9143371582px'],
            ["style", "left", '36px'],
            ["style", "height", '149.35000610352px'],
            ["style", "font-family", 'Courier, Courier New, monospace'],
            ["style", "word-spacing", '3px'],
            ["style", "font-size", '20px']
         ],
         "${_Rectangle2}": [
            ["style", "top", '0px'],
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "height", '231.06640625px'],
            ["style", "opacity", '0.74905395507812'],
            ["style", "left", '0px'],
            ["style", "width", '321.75px']
         ],
         "${symbolSelector}": [
            ["style", "height", '232px'],
            ["style", "width", '323px']
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
},
"salamancaInfo": {
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
      rect: ['0px','0px','176px','274px','auto','auto'],
      stroke: [0,'rgb(0, 0, 0)','none'],
      id: 'Rectangle2',
      opacity: 0.74905395507812,
      type: 'rect',
      fill: ['rgba(0,0,0,1.00)']
   },
   {
      type: 'text',
      rect: ['29px','19px','118px','242px','auto','auto'],
      id: 'Text3',
      text: 'Hector Salamanca was a notorius drug smuggler with ties to the Fuentes clan.',
      align: 'left',
      font: ['Courier, Courier New, monospace',20,'rgba(255,255,255,1.00)','normal','none','normal']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text3}": [
            ["style", "top", '19px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "width", '118.18620300293px'],
            ["style", "left", '29px'],
            ["style", "height", '241.93333435059px'],
            ["style", "font-family", 'Courier, Courier New, monospace'],
            ["style", "word-spacing", '3px'],
            ["style", "font-size", '20px']
         ],
         "${_Rectangle2}": [
            ["style", "top", '0px'],
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "height", '273.80078125px'],
            ["style", "opacity", '0.74905395507812'],
            ["style", "left", '0px'],
            ["style", "width", '176.36666870117px']
         ],
         "${symbolSelector}": [
            ["style", "height", '274px'],
            ["style", "width", '176px']
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
},
"pollosInfo": {
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
      rect: ['0px','0px','207px','150px','auto','auto'],
      stroke: [0,'rgb(0, 0, 0)','none'],
      id: 'Rectangle2',
      opacity: 0.74905395507812,
      type: 'rect',
      fill: ['rgba(0,0,0,1.00)']
   },
   {
      type: 'text',
      rect: ['37px','15px','139px','121px','auto','auto'],
      id: 'Text3',
      text: 'Fast food chicken restaurant owned by Gus Fring.',
      align: 'left',
      font: ['Courier, Courier New, monospace',20,'rgba(255,255,255,1.00)','normal','none','normal']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text3}": [
            ["style", "top", '15px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "width", '138.57786560059px'],
            ["style", "left", '37px'],
            ["style", "height", '120.66666412354px'],
            ["style", "font-family", 'Courier, Courier New, monospace'],
            ["style", "word-spacing", '3px'],
            ["style", "font-size", '20px']
         ],
         "${_Rectangle2}": [
            ["style", "top", '0px'],
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "height", '149.94999694824px'],
            ["style", "opacity", '0.74905395507812'],
            ["style", "left", '0px'],
            ["style", "width", '206.76953125px']
         ],
         "${symbolSelector}": [
            ["style", "height", '150px'],
            ["style", "width", '207px']
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
},
"schulerInfo": {
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
      rect: ['0px','0px','301px','201px','auto','auto'],
      stroke: [0,'rgb(0, 0, 0)','none'],
      id: 'Rectangle2',
      opacity: 0.74905395507812,
      type: 'rect',
      fill: ['rgba(0,0,0,1.00)']
   },
   {
      type: 'text',
      rect: ['26px','30px','251px','141px','auto','auto'],
      id: 'Text3',
      text: 'Peter Schuler was the president of the Madrigal Corporation and was also in charge of Gus Fring\'s finances.',
      align: 'left',
      font: ['Courier, Courier New, monospace',20,'rgba(255,255,255,1.00)','normal','none','normal']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text3}": [
            ["style", "top", '30px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "width", '251.26666259766px'],
            ["style", "left", '26px'],
            ["style", "height", '141.20025634766px'],
            ["style", "font-family", 'Courier, Courier New, monospace'],
            ["style", "word-spacing", '3px'],
            ["style", "font-size", '20px']
         ],
         "${_Rectangle2}": [
            ["style", "top", '0px'],
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "height", '201.09765625px'],
            ["style", "opacity", '0.74905395507812'],
            ["style", "left", '0px'],
            ["style", "width", '300.88333129883px']
         ],
         "${symbolSelector}": [
            ["style", "height", '201px'],
            ["style", "width", '301px']
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
},
"mikeInfo": {
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
      rect: ['0px','0px','179px','258px','auto','auto'],
      stroke: [0,'rgb(0, 0, 0)','none'],
      id: 'Rectangle2',
      opacity: 0.74905395507812,
      type: 'rect',
      fill: ['rgba(0,0,0,1.00)']
   },
   {
      type: 'text',
      rect: ['16px','27px','148px','205px','auto','auto'],
      id: 'Text3',
      text: 'Mike Ehrmantraut was the head of security for Gus Fring\'s drug operation.',
      align: 'left',
      font: ['Courier, Courier New, monospace',20,'rgba(255,255,255,1.00)','normal','none','normal']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Text3}": [
            ["style", "top", '27px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "width", '147.5px'],
            ["style", "left", '16px'],
            ["style", "height", '204.82005310059px'],
            ["style", "font-family", 'Courier, Courier New, monospace'],
            ["style", "word-spacing", '3px'],
            ["style", "font-size", '20px']
         ],
         "${_Rectangle2}": [
            ["style", "top", '0px'],
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "height", '258.27734375px'],
            ["style", "opacity", '0.74905395507812'],
            ["style", "left", '0px'],
            ["style", "width", '179.46875px']
         ],
         "${symbolSelector}": [
            ["style", "height", '258px'],
            ["style", "width", '179px']
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
})(jQuery, AdobeEdge, "EDGE-321751761");
