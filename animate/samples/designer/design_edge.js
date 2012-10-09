/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
   fonts['adobe-garamond-pro, Georgia, serif']='<link href=\"assets/css/fonts.css\" rel=\"stylesheet\" type=\"text/css\">';
   fonts['minion-pro, Georgia, serif']='<link href=\"assets/css/fonts.css\" rel=\"stylesheet\" type=\"text/css\">';


var resources = [
];
var symbols = {
"stage": {
   version: "0.1.6",
   build: "0.10.0.134",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {
         dom: [
         {
            id:'panel4',
            display:'none',
            type:'rect',
            rect:[1,0,960,347],
            font:['Arial Black, Gadget, sans-serif',null,"rgba(0,0,0,1)","normal","none",""],
            transform:[[-1]]
         },
         {
            id:'panel3',
            display:'none',
            type:'rect',
            rect:[0,0,0,0],
            font:['adobe-garamond-pro, Georgia, serif',null,"rgba(0,0,0,1)","normal","none",""]
         },
         {
            id:'panel2',
            display:'none',
            type:'rect',
            rect:[1,0,960,347],
            font:['Arial Black, Gadget, sans-serif',null,"rgba(0,0,0,1)","normal","none",""],
            transform:[[-2]]
         },
         {
            id:'panel1',
            type:'rect',
            rect:[0,0,960,347],
            font:['Arial Black, Gadget, sans-serif',null,"rgba(0,0,0,1)","normal","none",""],
            transform:[]
         },
         {
            id:'dark_line',
            type:'rect',
            rect:[1,165,960,1],
            fill:["rgba(188,188,188,1.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"],
            font:['Arial Black, Gadget, sans-serif',null,"rgba(0,0,0,1)","normal","none",""],
            transform:[[0,168]]
         },
         {
            id:'white_rect',
            type:'rect',
            rect:[1,165,958,22],
            fill:["rgba(255,255,255,1.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"],
            font:['Arial Black, Gadget, sans-serif',null,"rgba(0,0,0,1)","normal","none",""],
            transform:[[-1,164]]
         },
         {
            id:'white_top',
            type:'rect',
            rect:[1,165,958,8],
            fill:["rgba(255,255,255,1.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"],
            font:['Arial Black, Gadget, sans-serif',null,"rgba(0,0,0,1)","normal","none",""],
            transform:[[-1,-165]]
         },
         {
            id:'btn_circle4',
            type:'rect',
            rect:[444,304,0,0],
            font:['adobe-garamond-pro, Georgia, serif',null,"rgba(0,0,0,1)","normal","none",""],
            transform:[[48,28]]
         },
         {
            id:'btn_circle3',
            type:'rect',
            rect:[444,304,0,0],
            font:['adobe-garamond-pro, Georgia, serif',null,"rgba(0,0,0,1)","normal","none",""],
            transform:[[34,28]]
         },
         {
            id:'btn_circle2',
            type:'rect',
            rect:[444,304,0,0],
            font:['adobe-garamond-pro, Georgia, serif',null,"rgba(0,0,0,1)","normal","none",""],
            transform:[[20,28]]
         },
         {
            id:'btn_circle1',
            type:'rect',
            rect:[444,304,0,0],
            font:['adobe-garamond-pro, Georgia, serif',null,"rgba(0,0,0,1)","normal","none",""],
            transform:[[6,28]]
         },
         {
            id:'btn_arrow_rt',
            type:'rect',
            rect:[271,135,0,0],
            font:['Arial Black, Gadget, sans-serif',null,"rgba(0,0,0,1)","normal","none",""],
            transform:[[645,14]]
         },
         {
            id:'btn_arrow_lft',
            type:'rect',
            rect:[271,135,0,0],
            font:['Arial Black, Gadget, sans-serif',null,"rgba(0,0,0,1)","normal","none",""],
            transform:[[-270,14],[],[],[-1]]
         }],
         symbolInstances: [
         {
            id:'btn_circle4',
            symbolName:'btn_circle'
         },
         {
            id:'panel3',
            symbolName:'panel3'
         },
         {
            id:'btn_circle3',
            symbolName:'btn_circle'
         },
         {
            id:'panel2',
            symbolName:'panel2'
         },
         {
            id:'btn_circle1',
            symbolName:'btn_circle'
         },
         {
            id:'panel4',
            symbolName:'panel4'
         },
         {
            id:'btn_arrow_lft',
            symbolName:'btn_arrow'
         },
         {
            id:'btn_arrow_rt',
            symbolName:'btn_arrow'
         },
         {
            id:'btn_circle2',
            symbolName:'btn_circle'
         },
         {
            id:'panel1',
            symbolName:'panel1'
         }
         ]
      },
   states: {
      "Base State": {
         "${_white_rect}": [
            ["style", "top", '165px'],
            ["transform", "translateX", '-1.15px'],
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "height", '22px'],
            ["style", "left", '1px'],
            ["transform", "translateY", '164px'],
            ["style", "width", '958px']
         ],
         "${_btn_circle2}": [
            ["style", "cursor", 'pointer'],
            ["transform", "translateY", '28.66px'],
            ["transform", "translateX", '20.99px']
         ],
         "${_btn_arrow_rt}": [
            ["style", "cursor", 'pointer'],
            ["transform", "translateX", '645.99px'],
            ["transform", "translateY", '14.27px']
         ],
         "${_taxiCopy}": [
            ["style", "display", 'block']
         ],
         "${_stage}": [
            ["color", "background-color", 'rgba(243,234,225,1.00)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '350px'],
            ["style", "width", '958px']
         ],
         "${_btn_circle3}": [
            ["style", "cursor", 'pointer'],
            ["transform", "translateY", '28.66px'],
            ["transform", "translateX", '34.99px']
         ],
         "${_taxi3}": [
            ["style", "display", 'block']
         ],
         "${_panel1}": [
            ["style", "display", 'block']
         ],
         "${_btn_circle4}": [
            ["style", "cursor", 'pointer'],
            ["transform", "translateY", '28.66px'],
            ["transform", "translateX", '48.99px']
         ],
         "${_panel3}": [
            ["style", "display", 'none']
         ],
         "${_panel2}": [
            ["transform", "translateX", '-2px'],
            ["style", "display", 'none']
         ],
         "${_dark_line}": [
            ["style", "top", '165px'],
            ["transform", "translateX", '-0.66px'],
            ["style", "height", '1px'],
            ["style", "left", '1px'],
            ["transform", "translateY", '168.05px'],
            ["color", "background-color", 'rgba(188,188,188,1)']
         ],
         "${_btn_circle1}": [
            ["style", "cursor", 'pointer'],
            ["transform", "translateY", '28.66px'],
            ["transform", "translateX", '6.99px']
         ],
         "${_btn_arrow_lft}": [
            ["transform", "scaleX", '-1'],
            ["transform", "translateX", '-270.83px'],
            ["transform", "translateY", '14.27px'],
            ["style", "cursor", 'pointer']
         ],
         "${_white_top}": [
            ["style", "top", '165px'],
            ["transform", "translateX", '-1.15px'],
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "height", '8px'],
            ["style", "left", '1px'],
            ["transform", "translateY", '-165px'],
            ["style", "width", '958px']
         ],
         "${_panel4}": [
            ["transform", "translateX", '-1.99px'],
            ["style", "display", 'none']
         ],
         "${_stage} > img:nth-child(1)": [
            ["style", "display", 'block']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 17000,
         autoPlay: true,
         labels: {
            "panel1": 0,
            "panel2": 8500,
            "panel3": 12000,
            "panel4": 14000
         },
         timeline: [
            { id: "eid1032", tween: [ "style", "${_stage} > img:nth-child(1)", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid294", tween: [ "style", "${_panel2}", "display", 'block', { fromValue: 'none'}], position: 8500, duration: 0 },
            { id: "eid306", tween: [ "style", "${_panel2}", "display", 'none', { fromValue: 'block'}], position: 11391, duration: 0 },
            { id: "eid161", tween: [ "style", "${_panel4}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid145", tween: [ "style", "${_panel4}", "display", 'block', { fromValue: 'none'}], position: 14000, duration: 0 },
            { id: "eid155", tween: [ "style", "${_panel4}", "display", 'none', { fromValue: 'block'}], position: 17000, duration: 0 },
            { id: "eid88", tween: [ "style", "${_panel1}", "display", 'block', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid90", tween: [ "style", "${_panel1}", "display", 'none', { fromValue: 'block'}], position: 7750, duration: 0 },
            { id: "eid1567", tween: [ "style", "${_panel3}", "display", 'block', { fromValue: 'none'}], position: 12000, duration: 0 },
            { id: "eid1571", tween: [ "style", "${_panel3}", "display", 'none', { fromValue: 'block'}], position: 13800, duration: 0 },
            { id: "eid3481", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_panel1}', [] ], ""], position: 0 },
            { id: "eid162", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_panel2}', [0] ], ""], position: 8500 },
            { id: "eid1921", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_panel3}', [0] ], ""], position: 12000 },
            { id: "eid307", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_panel4}', [] ], ""], position: 14000 }         ]
      }
   }
},
"controls": {
   version: "0.1.6",
   build: "0.10.0.134",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {
   dom: [
   {
      rect: [1,165,960,16],
      transform: [[-1.15738,20]],
      id: 'white_rect',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,1.00)',null]
   },
   {
      rect: [1,165,960,1],
      transform: [[-0.6698,19.05324]],
      id: 'dark_line',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(188,188,188,1.00)',null]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_white_rect}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["transform", "translateX", '-1.15px'],
            ["style", "height", '16px'],
            ["style", "top", '165px'],
            ["transform", "translateY", '20px'],
            ["style", "left", '1px']
         ],
         "${_dark_line}": [
            ["color", "background-color", 'rgba(188,188,188,1.00)'],
            ["transform", "translateX", '-0.66px'],
            ["style", "height", '1px'],
            ["style", "top", '165px'],
            ["transform", "translateY", '19.05px'],
            ["style", "left", '1px']
         ],
         "${_panel2}": [
            ["style", "display", 'none']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1500,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"panel1": {
   version: "0.1.6",
   build: "0.10.0.134",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {
   dom: [
   {
      type: 'image',
      id: 'panel1_city',
      rect: [549,149,2055,751],
      transform: [[-1099,-349],{},{},[0.47,0.47]],
      fill: ['rgba(0,0,0,0)','images/panel1_city.jpg']
   },
   {
      type: 'image',
      transform: [[469,193],[90]],
      display: 'none',
      rect: [-237,44,78,77],
      id: 'panel1_taxi1',
      fill: ['rgba(0,0,0,0)','images/panel1_taxi.png']
   },
   {
      type: 'image',
      transform: [[469,193],[90]],
      display: 'none',
      rect: [-237,44,78,77],
      id: 'panel1_taxi2',
      fill: ['rgba(0,0,0,0)','images/panel1_taxi.png']
   },
   {
      type: 'image',
      transform: [[469,193],[90]],
      display: 'none',
      rect: [-237,44,78,77],
      id: 'panel1_taxi3',
      fill: ['rgba(0,0,0,0)','images/panel1_taxi.png']
   },
   {
      type: 'image',
      transform: [[601,309],[180]],
      display: 'none',
      rect: [-237,44,78,77],
      id: 'panel1_taxi4',
      fill: ['rgba(0,0,0,0)','images/panel1_taxi.png']
   },
   {
      type: 'image',
      transform: [[245,-64]],
      display: 'none',
      rect: [36,336,400,30],
      id: 'panel1_subHeader_box',
      fill: ['rgba(0,0,0,0)','images/panel1_subHeader_box2.png']
   },
   {
      type: 'text',
      id: 'txt_description',
      text: 'Alice Ritter brings her Parisian aesthetic to the fashion capital of the US.',
      font: ['minion-pro, Georgia, serif',12,'rgba(207,198,190,1.00)','normal','none','normal'],
      transform: [[-5,-18]],
      display: 'none',
      rect: [293,298,388,14],
      align: 'center',
      opacity: 1
   },
   {
      type: 'image',
      transform: [[-180,302]],
      rect: [413,-82,500,54],
      id: 'panel1_headerBox',
      opacity: 1,
      display: 'none',
      fill: ['rgba(0,0,0,0)','images/panel1_header_box.png']
   },
   {
      type: 'text',
      id: 'txt_americanDream',
      text: 'THE AMERICAN DREAM',
      font: ['adobe-garamond-pro, Georgia, serif',42,'rgba(255,255,255,1.00)','bold','none',''],
      transform: [[-46,-24]],
      display: 'none',
      rect: [279,245,498,47],
      align: 'center',
      opacity: 1
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_panel1_taxi3}": [
            ["style", "display", 'none'],
            ["transform", "translateX", '742.24px'],
            ["transform", "translateY", '-126.91px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_txt_description}": [
            ["transform", "translateX", '-5.17px'],
            ["color", "color", 'rgba(207,198,190,1.00)'],
            ["style", "opacity", '0'],
            ["style", "font-size", '12px'],
            ["style", "text-align", 'center'],
            ["style", "width", '388px'],
            ["style", "height", '14px'],
            ["style", "font-family", 'minion-pro, Georgia, serif'],
            ["transform", "translateY", '-18px'],
            ["style", "display", 'none']
         ],
         "${_panel1_subHeader_box}": [
            ["style", "display", 'none'],
            ["style", "opacity", '1'],
            ["transform", "translateY", '-64px'],
            ["transform", "translateX", '245px']
         ],
         "${_panel1_headerBox}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '303px'],
            ["transform", "translateX", '-180.77px']
         ],
         "${_panel1_taxi2}": [
            ["style", "display", 'none'],
            ["transform", "translateY", '-137.91px'],
            ["transform", "translateX", '1057.24px'],
            ["transform", "rotateZ", '90deg']
         ],
         "${_panel1_taxi1}": [
            ["style", "display", 'none'],
            ["transform", "translateX", '478.24px'],
            ["transform", "translateY", '-136.08px'],
            ["transform", "rotateZ", '90deg']
         ],
         "${_panel1_city}": [
            ["transform", "scaleX", '0.47'],
            ["transform", "translateY", '-348.01px'],
            ["transform", "translateX", '-1097.12px'],
            ["transform", "scaleY", '0.47']
         ],
         "${_txt_americanDream}": [
            ["transform", "translateX", '-46.17px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-weight", 'bold'],
            ["style", "width", '498px'],
            ["style", "font-size", '42px'],
            ["style", "text-align", 'center'],
            ["style", "height", '47px'],
            ["style", "display", 'none'],
            ["style", "font-family", 'adobe-garamond-pro, Georgia, serif'],
            ["transform", "translateY", '-24px'],
            ["style", "opacity", '0']
         ],
         "${_panel1_taxi4}": [
            ["style", "display", 'none'],
            ["transform", "translateY", '309.66px'],
            ["transform", "translateX", '595.66px'],
            ["transform", "rotateZ", '180deg']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 7750,
         autoPlay: false,
         labels: {
            "loopTaxi": 2500
         },
         timeline: [
            { id: "eid4841", tween: [ "style", "${_panel1_subHeader_box}", "opacity", '0.87', { fromValue: '0'}], position: 2000, duration: 500, easing: "easeInSine" },
            { id: "eid5763", tween: [ "transform", "${_panel1_city}", "scaleY", '1', { fromValue: '0.47'}], position: 0, duration: 1750, easing: "easeInSine" },
            { id: "eid3154", tween: [ "style", "${_panel1_headerBox}", "opacity", '1', { fromValue: '0'}], position: 1750, duration: 500, easing: "easeInSine" },
            { id: "eid4945", tween: [ "style", "${_panel1_taxi4}", "display", 'block', { fromValue: 'none'}], position: 4056, duration: 0, easing: "easeInSine" },
            { id: "eid4892", tween: [ "style", "${_panel1_taxi2}", "display", 'block', { fromValue: 'none'}], position: 2930, duration: 0, easing: "easeInSine" },
            { id: "eid3156", tween: [ "style", "${_txt_description}", "opacity", '1', { fromValue: '0'}], position: 2000, duration: 500, easing: "easeInSine" },
            { id: "eid3018", tween: [ "style", "${_panel1_headerBox}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid3017", tween: [ "style", "${_panel1_headerBox}", "display", 'block', { fromValue: 'none'}], position: 1750, duration: 0, easing: "easeInSine" },
            { id: "eid4932", tween: [ "transform", "${_panel1_taxi3}", "translateX", '1174.84px', { fromValue: '742.24px'}], position: 3180, duration: 3499, easing: "easeInSine" },
            { id: "eid4925", tween: [ "style", "${_panel1_taxi3}", "display", 'block', { fromValue: 'none'}], position: 3180, duration: 0, easing: "easeInSine" },
            { id: "eid3016", tween: [ "style", "${_txt_americanDream}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid3015", tween: [ "style", "${_txt_americanDream}", "display", 'block', { fromValue: 'none'}], position: 1750, duration: 0, easing: "easeInSine" },
            { id: "eid4950", tween: [ "transform", "${_panel1_taxi4}", "translateY", '-126.68px', { fromValue: '309.66px'}], position: 4056, duration: 2623, easing: "easeInSine" },
            { id: "eid3021", tween: [ "style", "${_txt_description}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid3019", tween: [ "style", "${_txt_description}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0, easing: "easeInSine" },
            { id: "eid4893", tween: [ "transform", "${_panel1_taxi2}", "translateX", '612.25px', { fromValue: '1057.24px'}], position: 2930, duration: 2820, easing: "easeInSine" },
            { id: "eid3152", tween: [ "style", "${_txt_americanDream}", "opacity", '1', { fromValue: '0'}], position: 1750, duration: 500, easing: "easeInSine" },
            { id: "eid5762", tween: [ "transform", "${_panel1_city}", "scaleX", '1', { fromValue: '0.47'}], position: 0, duration: 1750, easing: "easeInSine" },
            { id: "eid4931", tween: [ "transform", "${_panel1_taxi3}", "rotateZ", '0deg', { fromValue: '0deg'}], position: 3180, duration: 0, easing: "easeInSine" },
            { id: "eid4894", tween: [ "transform", "${_panel1_taxi2}", "translateY", '310.08px', { fromValue: '-137.91px'}], position: 2930, duration: 2820, easing: "easeInSine" },
            { id: "eid4888", tween: [ "transform", "${_panel1_taxi1}", "translateY", '188.08px', { fromValue: '-136.08px'}], position: 2500, duration: 2180, easing: "easeInSine" },
            { id: "eid5852", tween: [ "style", "${_panel1_subHeader_box}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0, easing: "easeInSine" },
            { id: "eid4842", tween: [ "style", "${_panel1_subHeader_box}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0, easing: "easeInSine" },
            { id: "eid4933", tween: [ "transform", "${_panel1_taxi3}", "translateY", '308.31px', { fromValue: '-126.91px'}], position: 3180, duration: 3499, easing: "easeInSine" },
            { id: "eid4951", tween: [ "transform", "${_panel1_taxi4}", "translateX", '160.5px', { fromValue: '595.66px'}], position: 4056, duration: 2623, easing: "easeInSine" },
            { id: "eid5818", tween: [ "transform", "${_panel1_city}", "translateX", '-1140.12px', { fromValue: '-1097.12px'}], position: 0, duration: 1750, easing: "easeInSine" },
            { id: "eid4889", tween: [ "style", "${_panel1_taxi1}", "display", 'block', { fromValue: 'none'}], position: 2500, duration: 0, easing: "easeInSine" },
            { id: "eid4877", tween: [ "transform", "${_panel1_taxi1}", "translateX", '154.24px', { fromValue: '478.24px'}], position: 2500, duration: 2180, easing: "easeInSine" },
            { id: "eid5819", tween: [ "transform", "${_panel1_city}", "translateY", '-358.01px', { fromValue: '-348.01px'}], position: 0, duration: 1750, easing: "easeInSine" }         ]
      }
   }
},
"panel4": {
   version: "0.1.6",
   build: "0.10.0.134",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {
   dom: [
   {
      id: 'panel4_clothesRack',
      type: 'image',
      rect: [0,0,958,350],
      fill: ['rgba(0,0,0,0)','images/panel4_clothesRack.jpg']
   },
   {
      id: 'diamondFlora6',
      type: 'rect',
      rect: [453,-107,0,0],
      transform: [[294,302]]
   },
   {
      id: 'diamondFlora5',
      type: 'rect',
      rect: [453,-107,0,0],
      transform: [[294,-290]]
   },
   {
      id: 'diamondFlora4',
      type: 'rect',
      rect: [453,-107,0,0],
      transform: [[-3,5]]
   },
   {
      id: 'diamondFlora3',
      type: 'rect',
      rect: [453,-107,0,0],
      transform: [[-301,301]]
   },
   {
      id: 'diamondFlora2',
      type: 'rect',
      rect: [453,-107,0,0],
      transform: [[-303,-290]]
   },
   {
      id: 'diamondFlora1',
      type: 'rect',
      rect: [453,-107,0,0],
      transform: [[-598,4],[90]]
   },
   {
      transform: [[-736,-155]],
      type: 'image',
      id: 'alice',
      display: 'none',
      rect: [615,140,600,500],
      fill: ['rgba(0,0,0,0)','images/panel4_alice.png']
   },
   {
      type: 'text',
      rect: [358,160,263,48],
      display: 'none',
      id: 'txt_description',
      align: 'center',
      text: 'Get to know the woman behind the threads. Alice offers some insight into what inspires her as a designer and motivates her as an entrepreneur.',
      transform: [[208,69]],
      font: ['minion-pro, Georgia, serif',12,'rgba(142,116,115,1.00)','normal','none','normal']
   },
   {
      type: 'text',
      rect: [358,160,0,0],
      display: 'none',
      id: 'txt_ritter',
      align: 'center',
      text: 'RITTER',
      transform: [[291,30]],
      font: ['adobe-garamond-pro, Georgia, serif',28,'rgba(96,96,90,1.00)','normal','none','italic']
   },
   {
      transform: [[520,115]],
      type: 'image',
      id: 'panel4_headerBox',
      display: 'none',
      rect: [0,0,356,77],
      fill: ['rgba(0,0,0,0)','images/panel4_header_box.png']
   },
   {
      type: 'text',
      id: 'txt_alice',
      opacity: 1,
      font: ['adobe-garamond-pro, Georgia, serif',92,'rgba(154,93,88,1.00)','bold','none','normal'],
      text: 'ALICE',
      display: 'none',
      align: 'center',
      rect: [358,160,0,0],
      transform: [[209,-68]]
   },
   {
      type: 'text',
      rect: [358,160,76,0],
      display: 'none',
      id: 'txt_meet',
      align: 'center',
      text: 'MEET',
      transform: [[303,-74]],
      font: ['adobe-garamond-pro, Georgia, serif',20,'rgba(142,116,115,1.00)','normal','none','italic']
   }],
   symbolInstances: [
   {
      id: 'diamondFlora5',
      symbolName: 'panel4_diamondFlora'
   },
   {
      id: 'diamondFlora3',
      symbolName: 'panel4_diamondFlora'
   },
   {
      id: 'diamondFlora4',
      symbolName: 'panel4_diamondFlora'
   },
   {
      id: 'diamondFlora1',
      symbolName: 'panel4_diamondFlora'
   },
   {
      id: 'diamondFlora2',
      symbolName: 'panel4_diamondFlora'
   },
   {
      id: 'diamondFlora6',
      symbolName: 'panel4_diamondFlora'
   }   ]
   },
   states: {
      "Base State": {
         "${_diamondFlora6}": [
            ["transform", "scaleX", '1.25'],
            ["transform", "translateY", '302.42px'],
            ["transform", "translateX", '294.61px'],
            ["transform", "scaleY", '1.25']
         ],
         "${_txt_description}": [
            ["transform", "translateX", '208.59px'],
            ["color", "color", 'rgba(142,116,115,1.00)'],
            ["style", "opacity", '0'],
            ["style", "font-size", '12px'],
            ["style", "display", 'none'],
            ["style", "height", '48px'],
            ["style", "font-family", 'minion-pro, Georgia, serif'],
            ["transform", "translateY", '69px'],
            ["style", "width", '263px']
         ],
         "${_diamondFlora5}": [
            ["transform", "scaleX", '1.25'],
            ["transform", "scaleY", '1.25'],
            ["transform", "translateY", '-290.34px'],
            ["transform", "translateX", '294.99px']
         ],
         "${_alice}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '-155.99px'],
            ["transform", "translateX", '-1002.99px']
         ],
         "${_diamondFlora4}": [
            ["transform", "scaleX", '1.25'],
            ["transform", "translateX", '-3.16px'],
            ["transform", "scaleY", '1.25'],
            ["transform", "translateY", '5.03px']
         ],
         "${_txt_alice}": [
            ["transform", "translateX", '209.09px'],
            ["color", "color", 'rgba(154,93,88,1.00)'],
            ["style", "opacity", '1'],
            ["style", "font-size", '92px'],
            ["style", "clip", [0,0,129,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "display", 'none'],
            ["style", "font-family", 'adobe-garamond-pro, Georgia, serif'],
            ["transform", "translateY", '-68.24px'],
            ["style", "font-weight", 'bold']
         ],
         "${_taxi_black}": [
            ["style", "display", 'block']
         ],
         "${_panel4_headerBox}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '115px'],
            ["transform", "translateX", '520.8px']
         ],
         "${_txt_ritter}": [
            ["style", "font-style", 'italic'],
            ["style", "display", 'none'],
            ["transform", "translateX", '291.59px'],
            ["style", "opacity", '0'],
            ["color", "color", 'rgba(96,96,90,1.00)'],
            ["style", "font-family", 'adobe-garamond-pro, Georgia, serif'],
            ["transform", "translateY", '30px'],
            ["style", "font-size", '28px']
         ],
         "${_diamondFlora3}": [
            ["transform", "scaleX", '1.25'],
            ["transform", "translateY", '301.95px'],
            ["transform", "translateX", '-301.38px'],
            ["transform", "scaleY", '1.25']
         ],
         "${_diamondFlora1}": [
            ["transform", "scaleY", '1.25'],
            ["transform", "rotateZ", '90deg'],
            ["transform", "scaleX", '1.25'],
            ["transform", "translateY", '4.95px'],
            ["transform", "translateX", '-598.66px']
         ],
         "${_diamondFlora2}": [
            ["transform", "scaleX", '1.25'],
            ["transform", "scaleY", '1.25'],
            ["transform", "translateY", '-290.04px'],
            ["transform", "translateX", '-303px']
         ],
         "${_txt_meet}": [
            ["transform", "translateX", '303.36px'],
            ["color", "color", 'rgba(142,116,115,1.00)'],
            ["style", "opacity", '0'],
            ["style", "font-size", '20px'],
            ["style", "width", '76px'],
            ["style", "font-style", 'italic'],
            ["style", "font-family", 'adobe-garamond-pro, Georgia, serif'],
            ["transform", "translateY", '-74.72px'],
            ["style", "display", 'none']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 3000,
         autoPlay: false,
         timeline: [
            { id: "eid4170", tween: [ "style", "${_panel4_headerBox}", "opacity", '0', { fromValue: '0'}], position: 0, duration: 0 },
            { id: "eid4005", tween: [ "style", "${_panel4_headerBox}", "opacity", '1', { fromValue: '0'}], position: 1500, duration: 750, easing: "easeInSine" },
            { id: "eid710", tween: [ "style", "${_alice}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid170", tween: [ "style", "${_alice}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0, easing: "easeOutSine" },
            { id: "eid4408", tween: [ "style", "${_txt_alice}", "clip", [0,272,129,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,0,129,0]}], position: 1500, duration: 750, easing: "easeInSine" },
            { id: "eid3959", tween: [ "style", "${_txt_meet}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid3958", tween: [ "style", "${_txt_meet}", "display", 'block', { fromValue: 'none'}], position: 1250, duration: 0, easing: "easeInSine" },
            { id: "eid1154", tween: [ "transform", "${_diamondFlora5}", "scaleY", '1.004', { fromValue: '1.25'}], position: 0, duration: 1000, easing: "easeOutBack" },
            { id: "eid3948", tween: [ "style", "${_txt_description}", "opacity", '1', { fromValue: '0'}], position: 2500, duration: 500, easing: "easeInSine" },
            { id: "eid1134", tween: [ "transform", "${_diamondFlora3}", "scaleY", '1.004', { fromValue: '1.25'}], position: 0, duration: 1000, easing: "easeOutBack" },
            { id: "eid1113", tween: [ "transform", "${_diamondFlora1}", "scaleY", '1.004', { fromValue: '1.25'}], position: 0, duration: 1000, easing: "easeOutBack" },
            { id: "eid3960", tween: [ "style", "${_txt_alice}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid3957", tween: [ "style", "${_txt_alice}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0, easing: "easeInSine" },
            { id: "eid1123", tween: [ "transform", "${_diamondFlora2}", "scaleY", '1.004', { fromValue: '1.25'}], position: 0, duration: 1000, easing: "easeOutBack" },
            { id: "eid1124", tween: [ "transform", "${_diamondFlora2}", "scaleX", '1.004', { fromValue: '1.25'}], position: 0, duration: 1000, easing: "easeOutBack" },
            { id: "eid3963", tween: [ "style", "${_txt_description}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid3954", tween: [ "style", "${_txt_description}", "display", 'block', { fromValue: 'none'}], position: 2500, duration: 0, easing: "easeInSine" },
            { id: "eid3949", tween: [ "style", "${_txt_ritter}", "opacity", '1', { fromValue: '0'}], position: 2250, duration: 500, easing: "easeInSine" },
            { id: "eid1144", tween: [ "transform", "${_diamondFlora4}", "scaleX", '1.004', { fromValue: '1.25'}], position: 0, duration: 1000, easing: "easeOutBack" },
            { id: "eid3962", tween: [ "style", "${_txt_ritter}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid3955", tween: [ "style", "${_txt_ritter}", "display", 'block', { fromValue: 'none'}], position: 2250, duration: 0, easing: "easeInSine" },
            { id: "eid1163", tween: [ "transform", "${_diamondFlora6}", "scaleX", '1.004', { fromValue: '1.25'}], position: 0, duration: 1000, easing: "easeOutBack" },
            { id: "eid1133", tween: [ "transform", "${_diamondFlora3}", "scaleX", '1.004', { fromValue: '1.25'}], position: 0, duration: 1000, easing: "easeOutBack" },
            { id: "eid95", tween: [ "transform", "${_alice}", "translateX", '-736.99px', { fromValue: '-1002.99px'}], position: 500, duration: 950, easing: "easeOutSine" },
            { id: "eid4006", tween: [ "style", "${_panel4_headerBox}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0, easing: "easeInSine" },
            { id: "eid1114", tween: [ "transform", "${_diamondFlora1}", "scaleX", '1.004', { fromValue: '1.25'}], position: 0, duration: 1000, easing: "easeOutBack" },
            { id: "eid3952", tween: [ "style", "${_txt_meet}", "opacity", '1', { fromValue: '0'}], position: 1250, duration: 500, easing: "easeInSine" },
            { id: "eid1153", tween: [ "transform", "${_diamondFlora5}", "scaleX", '1.004', { fromValue: '1.25'}], position: 0, duration: 1000, easing: "easeOutBack" },
            { id: "eid1143", tween: [ "transform", "${_diamondFlora4}", "scaleY", '1.004', { fromValue: '1.25'}], position: 0, duration: 1000, easing: "easeOutBack" },
            { id: "eid4326", tween: [ "style", "${_alice}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 950, easing: "easeOutSine" },
            { id: "eid1164", tween: [ "transform", "${_diamondFlora6}", "scaleY", '1.004', { fromValue: '1.25'}], position: 0, duration: 1000, easing: "easeOutBack" }         ]
      }
   }
},
"panel2": {
   version: "0.1.6",
   build: "0.10.0.134",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {
   dom: [
   {
      id: 'benchBg',
      rect: [0,0,960,347],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/panel2_bench_bg.jpg']
   },
   {
      type: 'image',
      transform: [[827.00002,257.00002]],
      id: 'sketchOrangeShirt',
      display: 'none',
      rect: [0,0,156,98],
      fill: ['rgba(0,0,0,0)','images/panel2_sketch_orange_shirt.png']
   },
   {
      type: 'image',
      transform: [[700.99995,-15.99999]],
      id: 'threadRows',
      display: 'none',
      rect: [0,0,113,176],
      fill: ['rgba(0,0,0,0)','images/panel2_thread_rows.png']
   },
   {
      type: 'image',
      transform: [[805.99998,21.00001]],
      id: 'sketchGirl',
      display: 'none',
      rect: [0,0,100,235],
      fill: ['rgba(0,0,0,0)','images/panel2_sketch_girl.png']
   },
   {
      type: 'image',
      transform: [[831.33336,232.99999]],
      id: 'spool',
      display: 'none',
      rect: [0,0,63,64],
      fill: ['rgba(0,0,0,0)','images/panel2_spool.png']
   },
   {
      type: 'image',
      transform: [[854.38885,3]],
      id: 'ribbon',
      display: 'none',
      rect: [0,0,133,279],
      fill: ['rgba(0,0,0,0)','images/panel2_ribbon.png']
   },
   {
      type: 'image',
      transform: [[656,30]],
      id: 'needles',
      display: 'none',
      rect: [0,0,45,65],
      fill: ['rgba(0,0,0,0)','images/panel2_needles.png']
   },
   {
      type: 'image',
      transform: [[506.99999,192.00001]],
      id: 'sketchCotton',
      display: 'none',
      rect: [0,0,193,170],
      fill: ['rgba(0,0,0,0)','images/panel2_sketch_cotton.png']
   },
   {
      type: 'image',
      transform: [[674.83343,158.88887]],
      id: 'paperFabricSwatch',
      display: 'none',
      rect: [0,0,127,199],
      fill: ['rgba(0,0,0,0)','images/panel2_paper_fabric_swatch.png']
   },
   {
      type: 'image',
      transform: [[381.72213,233.8889]],
      id: 'books',
      display: 'none',
      rect: [0,0,148,136],
      fill: ['rgba(0,0,0,0)','images/panel2_books.png']
   },
   {
      type: 'image',
      transform: [[340.66668,235.99998]],
      id: 'sketchBlueDress',
      display: 'none',
      rect: [0,0,57,100],
      fill: ['rgba(0,0,0,0)','images/panel2_sketch_blue_dress.png']
   },
   {
      type: 'image',
      transform: [[251.77776,220]],
      id: 'pencilSketch',
      display: 'none',
      rect: [0,0,84,125],
      fill: ['rgba(0,0,0,0)','images/panel2_pencil_sketch.png']
   },
   {
      type: 'image',
      transform: [[-29,173]],
      id: 'threadSpools',
      display: 'none',
      rect: [0,0,256,203],
      fill: ['rgba(0,0,0,0)','images/panel2_thread_spools.png']
   },
   {
      type: 'image',
      id: 'fabric',
      rect: [0,0,340,140],
      transform: [[-30,-6]],
      fill: ['rgba(0,0,0,0)','images/panel2_fabric.png']
   },
   {
      type: 'rect',
      display: 'none',
      rect: [0,0,0,0],
      id: 'scissorsBlk',
      transform: [[124.99994,85.00001]]
   },
   {
      type: 'image',
      transform: [[226.38889,106.94441]],
      id: 'bowlButtons',
      display: 'none',
      rect: [0,0,100,102],
      fill: ['rgba(0,0,0,0)','images/panel2_bowl_buttons.png']
   },
   {
      type: 'image',
      transform: [[188,33.99999]],
      id: 'measureTape',
      display: 'none',
      rect: [0,0,90,74],
      fill: ['rgba(0,0,0,0)','images/panel2_measure_tape.png']
   },
   {
      type: 'text',
      font: ['minion-pro, Georgia, serif',12,'rgba(96,96,90,1.00)','normal','none',''],
      display: 'none',
      id: 'txt_description',
      align: 'center',
      text: 'Alice brings a delicate touch to creating her line. From sketches to construction, fabric to stitching, each piece is exquisitely feminine.',
      transform: [[-71.76117,101.8635]],
      rect: [392.70178222656,56.757629394531,315,60]
   },
   {
      type: 'text',
      font: ['adobe-garamond-pro, Georgia, serif',40,'rgba(96,96,90,1.00)','bold','none',''],
      display: 'none',
      id: 'txt_details',
      align: 'center',
      text: 'DETAILS',
      transform: [[4.23886,52.8635]],
      rect: [392.70178222656,56.757629394531,0,0]
   },
   {
      type: 'text',
      font: ['minion-pro, Georgia, serif',19,'rgba(96,96,90,1.00)','normal','none','italic'],
      display: 'none',
      id: 'txt_inThe',
      align: 'center',
      text: 'IN THE',
      transform: [[52.2389,35.8635]],
      rect: [392.70178222656,56.757629394531,0,0]
   },
   {
      type: 'image',
      id: 'panel2_headerBox',
      rect: [437.419921875,41.278289794922,258,62],
      transform: [[-88.86146,-14.27826]],
      fill: ['rgba(0,0,0,0)','images/panel2_header_box.png']
   },
   {
      rect: [392.70178222656,56.757629394531,0,0],
      transform: [[-27,-40]],
      type: 'text',
      id: 'txt_beauty',
      text: 'BEAUTY',
      align: 'center',
      font: ['adobe-garamond-pro, Georgia, serif',58,'rgba(255,255,255,1.00)','bold','none','']
   }],
   symbolInstances: [
   {
      id: 'scissorsBlk',
      symbolName: 'panel2_scissorsBlk'
   }   ]
   },
   states: {
      "Base State": {
         "${_panel2_headerBox}": [
            ["transform", "translateY", '-150.81px'],
            ["transform", "translateX", '-145.61px'],
            ["transform", "rotateZ", '-15deg']
         ],
         "${_sketchOrangeShirt}": [
            ["style", "display", 'none'],
            ["transform", "translateX", '986.73px'],
            ["transform", "translateY", '416.65px'],
            ["transform", "rotateZ", '-36deg']
         ],
         "${_fabric}": [
            ["transform", "translateX", '-178.61px'],
            ["transform", "translateY", '-146.27px'],
            ["transform", "rotateZ", '-25deg']
         ],
         "${_threadRows}": [
            ["style", "display", 'none'],
            ["transform", "translateX", '787.99px'],
            ["transform", "translateY", '-189.61px'],
            ["transform", "rotateZ", '-54deg']
         ],
         "${_threadSpools}": [
            ["style", "display", 'none'],
            ["transform", "translateX", '-97.05px'],
            ["transform", "translateY", '386.92px'],
            ["transform", "rotateZ", '25deg']
         ],
         "${_bowlButtons}": [
            ["style", "-webkit-transform-origin", [56.14,41.28], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [56.14,41.28],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [56.14,41.28],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [56.14,41.28],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [56.14,41.28],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "translateX", '275.81px'],
            ["transform", "rotateZ", '184deg'],
            ["style", "display", 'none'],
            ["transform", "translateY", '-91.62px']
         ],
         "${_pencilSketch}": [
            ["style", "display", 'none'],
            ["transform", "translateX", '167.5px'],
            ["transform", "translateY", '454.72px'],
            ["transform", "rotateZ", '39deg']
         ],
         "${_txt_details}": [
            ["transform", "translateX", '23.23px'],
            ["transform", "rotateZ", '23deg'],
            ["color", "color", 'rgba(96,96,90,1.00)'],
            ["style", "font-weight", 'bold'],
            ["style", "font-size", '40px'],
            ["style", "text-align", 'center'],
            ["style", "display", 'none'],
            ["style", "font-family", 'adobe-garamond-pro, Georgia, serif'],
            ["transform", "translateY", '334.74px']
         ],
         "${_needles}": [
            ["style", "display", 'none'],
            ["transform", "translateX", '619.88px'],
            ["transform", "translateY", '-103.33px'],
            ["transform", "rotateZ", '-51deg']
         ],
         "${_spool}": [
            ["style", "-webkit-transform-origin", [50.69,38.02], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50.69,38.02],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50.69,38.02],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50.69,38.02],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50.69,38.02],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "translateX", '1003.3px'],
            ["transform", "rotateZ", '182deg'],
            ["style", "display", 'none'],
            ["transform", "translateY", '251.26px']
         ],
         "${_sketchCotton}": [
            ["style", "display", 'none'],
            ["transform", "translateX", '460.79px'],
            ["transform", "translateY", '390.61px'],
            ["transform", "rotateZ", '32deg']
         ],
         "${_sketchBlueDress}": [
            ["style", "display", 'none'],
            ["transform", "translateX", '294.46px'],
            ["transform", "translateY", '434.61px'],
            ["transform", "rotateZ", '32deg']
         ],
         "${_sketchGirl}": [
            ["style", "display", 'none'],
            ["transform", "translateX", '869.99px'],
            ["transform", "translateY", '-188.72px'],
            ["transform", "rotateZ", '-58deg']
         ],
         "${_measureTape}": [
            ["style", "display", 'none'],
            ["transform", "translateX", '100.99px'],
            ["transform", "translateY", '-106.27px'],
            ["transform", "rotateZ", '-25deg']
         ],
         "${_books}": [
            ["style", "display", 'none'],
            ["transform", "translateX", '335.51px'],
            ["transform", "translateY", '432.49px'],
            ["transform", "rotateZ", '32deg']
         ],
         "${_txt_beauty}": [
            ["transform", "translateX", '-83.75px'],
            ["style", "font-family", 'adobe-garamond-pro, Georgia, serif'],
            ["style", "text-align", 'center'],
            ["transform", "rotateZ", '-15deg'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-weight", 'bold'],
            ["transform", "translateY", '-176.53px'],
            ["style", "font-size", '58px']
         ],
         "${_ribbon}": [
            ["style", "display", 'none'],
            ["transform", "translateX", '993.27px'],
            ["transform", "translateY", '-88px'],
            ["transform", "rotateZ", '-36deg']
         ],
         "${_scissorsBlk}": [
            ["style", "display", 'none'],
            ["transform", "translateX", '-95.65px'],
            ["transform", "translateY", '-220.42px'],
            ["transform", "rotateZ", '-31deg']
         ],
         "${_txt_description}": [
            ["transform", "translateX", '-33.54px'],
            ["transform", "rotateZ", '6deg'],
            ["color", "color", 'rgba(96,96,90,1.00)'],
            ["style", "font-size", '12px'],
            ["style", "text-align", 'center'],
            ["style", "display", 'none'],
            ["style", "height", '60px'],
            ["style", "font-family", 'minion-pro, Georgia, serif'],
            ["transform", "translateY", '352.86px'],
            ["style", "width", '315px']
         ],
         "${_txt_inThe}": [
            ["transform", "translateX", '4.23px'],
            ["transform", "rotateZ", '19deg'],
            ["color", "color", 'rgba(96,96,90,1.00)'],
            ["style", "font-size", '19px'],
            ["style", "text-align", 'center'],
            ["style", "display", 'none'],
            ["style", "font-family", 'minion-pro, Georgia, serif'],
            ["transform", "translateY", '317.86px'],
            ["style", "font-style", 'italic']
         ],
         "${_paperFabricSwatch}": [
            ["style", "display", 'none'],
            ["transform", "translateX", '798.97px'],
            ["transform", "translateY", '381.23px'],
            ["transform", "rotateZ", '-47deg']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2889,
         autoPlay: false,
         timeline: [
            { id: "eid238", tween: [ "transform", "${_paperFabricSwatch}", "rotateZ", '0deg', { fromValue: '-47deg'}], position: 1439, duration: 579, easing: "easeOutSine" },
            { id: "eid3756", tween: [ "style", "${_txt_inThe}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid3755", tween: [ "style", "${_txt_inThe}", "display", 'block', { fromValue: 'none'}], position: 649, duration: 0, easing: "easeOutSine" },
            { id: "eid218", tween: [ "transform", "${_scissorsBlk}", "translateY", '85px', { fromValue: '-220.42px'}], position: 562, duration: 687 },
            { id: "eid240", tween: [ "transform", "${_sketchOrangeShirt}", "translateX", '826.99px', { fromValue: '986.73px'}], position: 1500, duration: 579, easing: "easeOutSine" },
            { id: "eid3706", tween: [ "transform", "${_txt_inThe}", "translateX", '53.33px', { fromValue: '4.23px'}], position: 649, duration: 594, easing: "easeOutSine" },
            { id: "eid3702", tween: [ "transform", "${_txt_beauty}", "rotateZ", '0deg', { fromValue: '-15deg'}], position: 0, duration: 439, easing: "easeOutSine" },
            { id: "eid220", tween: [ "transform", "${_scissorsBlk}", "rotateZ", '0deg', { fromValue: '-31deg'}], position: 562, duration: 687 },
            { id: "eid661", tween: [ "style", "${_paperFabricSwatch}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid383", tween: [ "style", "${_paperFabricSwatch}", "display", 'block', { fromValue: 'none'}], position: 1439, duration: 0, easing: "easeOutSine" },
            { id: "eid259", tween: [ "transform", "${_needles}", "rotateZ", '0deg', { fromValue: '-51deg'}], position: 2500, duration: 389, easing: "easeOutSine" },
            { id: "eid245", tween: [ "transform", "${_sketchGirl}", "translateY", '21px', { fromValue: '-188.72px'}], position: 2098, duration: 401, easing: "easeOutSine" },
            { id: "eid223", tween: [ "transform", "${_pencilSketch}", "translateX", '251.77px', { fromValue: '167.5px'}], position: 750, duration: 500, easing: "easeOutSine" },
            { id: "eid658", tween: [ "style", "${_pencilSketch}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid379", tween: [ "style", "${_pencilSketch}", "display", 'block', { fromValue: 'none'}], position: 750, duration: 0, easing: "easeOutSine" },
            { id: "eid271", tween: [ "transform", "${_spool}", "rotateZ", '0deg', { fromValue: '182deg'}], position: 1740, duration: 339, easing: "easeOutSine" },
            { id: "eid3758", tween: [ "style", "${_txt_details}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid3757", tween: [ "style", "${_txt_details}", "display", 'block', { fromValue: 'none'}], position: 801, duration: 0 },
            { id: "eid3710", tween: [ "transform", "${_txt_inThe}", "rotateZ", '0deg', { fromValue: '19deg'}], position: 649, duration: 594, easing: "easeOutSine" },
            { id: "eid255", tween: [ "transform", "${_needles}", "translateX", '656px', { fromValue: '619.88px'}], position: 2500, duration: 389, easing: "easeOutSine" },
            { id: "eid267", tween: [ "transform", "${_spool}", "translateX", '831.33px', { fromValue: '1003.3px'}], position: 1740, duration: 339, easing: "easeOutSine" },
            { id: "eid226", tween: [ "transform", "${_sketchBlueDress}", "translateX", '340.66px', { fromValue: '294.46px'}], position: 975, duration: 500, easing: "easeOutSine" },
            { id: "eid234", tween: [ "transform", "${_sketchCotton}", "translateX", '506.82px', { fromValue: '460.79px'}], position: 859, duration: 579, easing: "easeOutSine" },
            { id: "eid227", tween: [ "transform", "${_books}", "translateX", '381.72px', { fromValue: '335.51px'}], position: 1250, duration: 500, easing: "easeOutSine" },
            { id: "eid3760", tween: [ "style", "${_txt_description}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid3759", tween: [ "style", "${_txt_description}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0 },
            { id: "eid201", tween: [ "transform", "${_threadSpools}", "translateY", '173px', { fromValue: '386.92px'}], position: 500, duration: 500, easing: "easeOutSine" },
            { id: "eid261", tween: [ "transform", "${_ribbon}", "translateX", '854.38px', { fromValue: '993.27px'}], position: 2344, duration: 345, easing: "easeOutSine" },
            { id: "eid3714", tween: [ "transform", "${_txt_details}", "translateY", '52.86px', { fromValue: '334.74px'}], position: 801, duration: 580, easing: "easeOutSine" },
            { id: "eid243", tween: [ "transform", "${_sketchGirl}", "translateX", '805.99px', { fromValue: '869.99px'}], position: 2098, duration: 401, easing: "easeOutSine" },
            { id: "eid233", tween: [ "transform", "${_sketchCotton}", "rotateZ", '0deg', { fromValue: '32deg'}], position: 859, duration: 579, easing: "easeOutSine" },
            { id: "eid3722", tween: [ "transform", "${_txt_description}", "rotateZ", '0deg', { fromValue: '6deg'}], position: 1003, duration: 675, easing: "easeOutSine" },
            { id: "eid202", tween: [ "transform", "${_threadSpools}", "rotateZ", '0deg', { fromValue: '25deg'}], position: 500, duration: 500, easing: "easeOutSine" },
            { id: "eid664", tween: [ "style", "${_ribbon}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid385", tween: [ "style", "${_ribbon}", "display", 'block', { fromValue: 'none'}], position: 2344, duration: 0, easing: "easeOutSine" },
            { id: "eid224", tween: [ "transform", "${_sketchBlueDress}", "translateY", '235.99px', { fromValue: '434.61px'}], position: 975, duration: 500, easing: "easeOutSine" },
            { id: "eid265", tween: [ "transform", "${_ribbon}", "rotateZ", '0deg', { fromValue: '-36deg'}], position: 2344, duration: 345, easing: "easeOutSine" },
            { id: "eid3720", tween: [ "transform", "${_txt_description}", "translateY", '101.86px', { fromValue: '352.86px'}], position: 1003, duration: 675, easing: "easeOutSine" },
            { id: "eid659", tween: [ "style", "${_sketchBlueDress}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid380", tween: [ "style", "${_sketchBlueDress}", "display", 'block', { fromValue: 'none'}], position: 975, duration: 0, easing: "easeOutSine" },
            { id: "eid3718", tween: [ "transform", "${_txt_description}", "translateX", '-71.16px', { fromValue: '-33.54px'}], position: 1003, duration: 675, easing: "easeOutSine" },
            { id: "eid210", tween: [ "transform", "${_measureTape}", "translateX", '188px', { fromValue: '100.99px'}], position: 212, duration: 405, easing: "easeOutSine" },
            { id: "eid273", tween: [ "style", "${_spool}", "-webkit-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50.69,38.02]}], position: 1740, duration: 339, easing: "easeOutSine" },
            { id: "eid33", tween: [ "style", "${_spool}", "-moz-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50.69,38.02]}], position: 1740, duration: 339, easing: "easeOutSine" },
            { id: "eid34", tween: [ "style", "${_spool}", "-ms-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50.69,38.02]}], position: 1740, duration: 339, easing: "easeOutSine" },
            { id: "eid35", tween: [ "style", "${_spool}", "msTransformOrigin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50.69,38.02]}], position: 1740, duration: 339, easing: "easeOutSine" },
            { id: "eid36", tween: [ "style", "${_spool}", "-o-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50.69,38.02]}], position: 1740, duration: 339, easing: "easeOutSine" },
            { id: "eid247", tween: [ "transform", "${_sketchGirl}", "rotateZ", '0deg', { fromValue: '-58deg'}], position: 2098, duration: 401, easing: "easeOutSine" },
            { id: "eid655", tween: [ "style", "${_bowlButtons}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid376", tween: [ "style", "${_bowlButtons}", "display", 'block', { fromValue: 'none'}], position: 1036, duration: 0, easing: "easeOutSine" },
            { id: "eid3716", tween: [ "transform", "${_txt_details}", "rotateZ", '0deg', { fromValue: '23deg'}], position: 801, duration: 580, easing: "easeOutSine" },
            { id: "eid656", tween: [ "style", "${_scissorsBlk}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid377", tween: [ "style", "${_scissorsBlk}", "display", 'block', { fromValue: 'none'}], position: 562, duration: 0 },
            { id: "eid241", tween: [ "transform", "${_sketchOrangeShirt}", "rotateZ", '0deg', { fromValue: '-36deg'}], position: 1500, duration: 579, easing: "easeOutSine" },
            { id: "eid269", tween: [ "transform", "${_spool}", "translateY", '232.99px', { fromValue: '251.26px'}], position: 1740, duration: 339, easing: "easeOutSine" },
            { id: "eid235", tween: [ "transform", "${_sketchCotton}", "translateY", '193.09px', { fromValue: '390.61px'}], position: 859, duration: 579, easing: "easeOutSine" },
            { id: "eid3700", tween: [ "transform", "${_panel2_headerBox}", "translateY", '-14.27px', { fromValue: '-150.81px'}], position: 0, duration: 439, easing: "easeOutSine" },
            { id: "eid667", tween: [ "style", "${_threadRows}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid388", tween: [ "style", "${_threadRows}", "display", 'block', { fromValue: 'none'}], position: 2304, duration: 0, easing: "easeOutSine" },
            { id: "eid668", tween: [ "style", "${_sketchOrangeShirt}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid389", tween: [ "style", "${_sketchOrangeShirt}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0, easing: "easeOutSine" },
            { id: "eid665", tween: [ "style", "${_spool}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid386", tween: [ "style", "${_spool}", "display", 'block', { fromValue: 'none'}], position: 1740, duration: 0, easing: "easeOutSine" },
            { id: "eid3704", tween: [ "transform", "${_panel2_headerBox}", "rotateZ", '0deg', { fromValue: '-15deg'}], position: 0, duration: 439, easing: "easeOutSine" },
            { id: "eid225", tween: [ "transform", "${_sketchBlueDress}", "rotateZ", '0deg', { fromValue: '32deg'}], position: 975, duration: 500, easing: "easeOutSine" },
            { id: "eid657", tween: [ "style", "${_threadSpools}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid378", tween: [ "style", "${_threadSpools}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0, easing: "easeOutSine" },
            { id: "eid3712", tween: [ "transform", "${_txt_details}", "translateX", '4.23px', { fromValue: '23.23px'}], position: 801, duration: 580, easing: "easeOutSine" },
            { id: "eid3694", tween: [ "transform", "${_txt_beauty}", "translateX", '-23.66px', { fromValue: '-83.75px'}], position: 0, duration: 439, easing: "easeOutSine" },
            { id: "eid263", tween: [ "transform", "${_ribbon}", "translateY", '3px', { fromValue: '-88px'}], position: 2344, duration: 345, easing: "easeOutSine" },
            { id: "eid228", tween: [ "transform", "${_books}", "translateY", '233.88px', { fromValue: '432.49px'}], position: 1250, duration: 500, easing: "easeOutSine" },
            { id: "eid663", tween: [ "style", "${_needles}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid384", tween: [ "style", "${_needles}", "display", 'block', { fromValue: 'none'}], position: 2500, duration: 0, easing: "easeOutSine" },
            { id: "eid221", tween: [ "transform", "${_pencilSketch}", "translateY", '220px', { fromValue: '454.72px'}], position: 750, duration: 500, easing: "easeOutSine" },
            { id: "eid660", tween: [ "style", "${_books}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid381", tween: [ "style", "${_books}", "display", 'block', { fromValue: 'none'}], position: 1250, duration: 0, easing: "easeOutSine" },
            { id: "eid253", tween: [ "transform", "${_threadRows}", "rotateZ", '0deg', { fromValue: '-54deg'}], position: 2304, duration: 385, easing: "easeOutSine" },
            { id: "eid196", tween: [ "transform", "${_fabric}", "translateX", '-30px', { fromValue: '-178.61px'}], position: 0, duration: 500, easing: "easeOutSine" },
            { id: "eid281", tween: [ "transform", "${_bowlButtons}", "translateY", '106.94px', { fromValue: '-91.62px'}], position: 1036, duration: 562, easing: "easeOutSine" },
            { id: "eid216", tween: [ "transform", "${_scissorsBlk}", "translateX", '124.99px', { fromValue: '-95.65px'}], position: 562, duration: 687 },
            { id: "eid214", tween: [ "transform", "${_measureTape}", "rotateZ", '0deg', { fromValue: '-25deg'}], position: 212, duration: 405, easing: "easeOutSine" },
            { id: "eid666", tween: [ "style", "${_sketchGirl}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid387", tween: [ "style", "${_sketchGirl}", "display", 'block', { fromValue: 'none'}], position: 2098, duration: 0, easing: "easeOutSine" },
            { id: "eid229", tween: [ "transform", "${_books}", "rotateZ", '0deg', { fromValue: '32deg'}], position: 1250, duration: 500, easing: "easeOutSine" },
            { id: "eid3708", tween: [ "transform", "${_txt_inThe}", "translateY", '35.86px', { fromValue: '317.86px'}], position: 649, duration: 594, easing: "easeOutSine" },
            { id: "eid237", tween: [ "transform", "${_paperFabricSwatch}", "translateX", '675px', { fromValue: '798.97px'}], position: 1439, duration: 579, easing: "easeOutSine" },
            { id: "eid283", tween: [ "transform", "${_bowlButtons}", "rotateZ", '0deg', { fromValue: '184deg'}], position: 1036, duration: 562, easing: "easeOutSine" },
            { id: "eid239", tween: [ "transform", "${_sketchOrangeShirt}", "translateY", '257.26px', { fromValue: '416.65px'}], position: 1500, duration: 579, easing: "easeOutSine" },
            { id: "eid257", tween: [ "transform", "${_needles}", "translateY", '30px', { fromValue: '-103.33px'}], position: 2500, duration: 389, easing: "easeOutSine" },
            { id: "eid3696", tween: [ "transform", "${_txt_beauty}", "translateY", '-36px', { fromValue: '-176.53px'}], position: 0, duration: 439, easing: "easeOutSine" },
            { id: "eid212", tween: [ "transform", "${_measureTape}", "translateY", '33.99px', { fromValue: '-106.27px'}], position: 212, duration: 405, easing: "easeOutSine" },
            { id: "eid279", tween: [ "transform", "${_bowlButtons}", "translateX", '226.38px', { fromValue: '275.81px'}], position: 1036, duration: 562, easing: "easeOutSine" },
            { id: "eid249", tween: [ "transform", "${_threadRows}", "translateX", '700.99px', { fromValue: '787.99px'}], position: 2304, duration: 385, easing: "easeOutSine" },
            { id: "eid203", tween: [ "transform", "${_threadSpools}", "translateX", '-29px', { fromValue: '-97.05px'}], position: 500, duration: 500, easing: "easeOutSine" },
            { id: "eid222", tween: [ "transform", "${_pencilSketch}", "rotateZ", '0deg', { fromValue: '39deg'}], position: 750, duration: 500, easing: "easeOutSine" },
            { id: "eid198", tween: [ "transform", "${_fabric}", "translateY", '-6px', { fromValue: '-146.27px'}], position: 0, duration: 500, easing: "easeOutSine" },
            { id: "eid251", tween: [ "transform", "${_threadRows}", "translateY", '-15.99px', { fromValue: '-189.61px'}], position: 2304, duration: 385, easing: "easeOutSine" },
            { id: "eid200", tween: [ "transform", "${_fabric}", "rotateZ", '0deg', { fromValue: '-25deg'}], position: 0, duration: 500, easing: "easeOutSine" },
            { id: "eid662", tween: [ "style", "${_sketchCotton}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid382", tween: [ "style", "${_sketchCotton}", "display", 'block', { fromValue: 'none'}], position: 859, duration: 0, easing: "easeOutSine" },
            { id: "eid285", tween: [ "style", "${_bowlButtons}", "-webkit-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [56.14,41.28]}], position: 1036, duration: 562, easing: "easeOutSine" },
            { id: "eid37", tween: [ "style", "${_bowlButtons}", "-moz-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [56.14,41.28]}], position: 1036, duration: 562, easing: "easeOutSine" },
            { id: "eid38", tween: [ "style", "${_bowlButtons}", "-ms-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [56.14,41.28]}], position: 1036, duration: 562, easing: "easeOutSine" },
            { id: "eid39", tween: [ "style", "${_bowlButtons}", "msTransformOrigin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [56.14,41.28]}], position: 1036, duration: 562, easing: "easeOutSine" },
            { id: "eid40", tween: [ "style", "${_bowlButtons}", "-o-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [56.14,41.28]}], position: 1036, duration: 562, easing: "easeOutSine" },
            { id: "eid3698", tween: [ "transform", "${_panel2_headerBox}", "translateX", '-87.66px', { fromValue: '-145.61px'}], position: 0, duration: 439, easing: "easeOutSine" },
            { id: "eid654", tween: [ "style", "${_measureTape}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid375", tween: [ "style", "${_measureTape}", "display", 'block', { fromValue: 'none'}], position: 212, duration: 0, easing: "easeOutSine" },
            { id: "eid236", tween: [ "transform", "${_paperFabricSwatch}", "translateY", '159px', { fromValue: '381.23px'}], position: 1439, duration: 579, easing: "easeOutSine" },
            { id: "eid4608", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_scissorsBlk}', [0] ], ""], position: 649 }         ]
      }
   }
},
"panel2_scissorsBlk": {
   version: "0.1.6",
   build: "0.10.0.134",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {
   dom: [
   {
      id: 'scissor_blk_blade1',
      type: 'image',
      rect: [0,0,160,179],
      fill: ['rgba(0,0,0,0)','images/panel2_scissor_blk_blade1.png']
   },
   {
      type: 'image',
      id: 'scissor_blk_blade2',
      transform: {},
      rect: [0,0,160,179],
      fill: ['rgba(0,0,0,0)','images/panel2_scissor_blk_blade2.png']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_scissor_blk_blade2}": [
            ["transform", "rotateZ", '0']
         ],
         "${_scissor_blk_blade1}": [
            ["transform", "rotateZ", '0']
         ],
         "${symbolSelector}": [
            ["style", "height", '177px'],
            ["style", "width", '159px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1000,
         autoPlay: false,
         timeline: [
            { id: "eid192", tween: [ "transform", "${_scissor_blk_blade2}", "rotateZ", '-30deg', { fromValue: '0deg'}], position: 0, duration: 250 },
            { id: "eid194", tween: [ "transform", "${_scissor_blk_blade2}", "rotateZ", '0deg', { fromValue: '-30deg'}], position: 250, duration: 250 },
            { id: "eid4550", tween: [ "transform", "${_scissor_blk_blade2}", "rotateZ", '-30deg', { fromValue: '0deg'}], position: 500, duration: 250 },
            { id: "eid4551", tween: [ "transform", "${_scissor_blk_blade2}", "rotateZ", '0deg', { fromValue: '-30deg'}], position: 750, duration: 250 }         ]
      }
   }
},
"btn_arrow": {
   version: "0.1.6",
   build: "0.10.0.134",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {
   dom: [
   {
      type: 'image',
      id: 'btn_arrow',
      rect: [100.94461304297,47.666672023438,42,39],
      transform: [[-100.32902,-46.3333]],
      fill: ['rgba(0,0,0,0)','images/btn_arrow.png']
   },
   {
      type: 'image',
      transform: [[0,1]],
      id: 'btn_arrowOver',
      display: 'none',
      rect: [0,0,42,39],
      fill: ['rgba(0,0,0,0)','images/btn_arrowOver.png']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '38px'],
            ["style", "width", '41px']
         ],
         "${_btn_arrow}": [
            ["style", "display", 'block'],
            ["transform", "translateY", '-46.33px'],
            ["transform", "translateX", '-100.32px']
         ],
         "${_btn_arrowOver}": [
            ["style", "display", 'none'],
            ["transform", "translateY", '1px']
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
            "off": 0,
            "on": 1000
         },
         timeline: [
            { id: "eid2601", tween: [ "style", "${_btn_arrow}", "display", 'none', { fromValue: 'block'}], position: 500, duration: 0 },
            { id: "eid2604", tween: [ "style", "${_btn_arrowOver}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid2603", tween: [ "style", "${_btn_arrowOver}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 }         ]
      }
   }
},
"panel4_diamondFlora": {
   version: "0.1.6",
   build: "0.10.0.134",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {
   dom: [
   {
      type: 'image',
      id: 'diamond_flora',
      rect: [-453,107,494,494],
      transform: [[453,-108]],
      fill: ['rgba(0,0,0,0)','images/panel4_diamond_flora.svg']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '493px'],
            ["style", "width", '493px']
         ],
         "${_diamond_flora}": [
            ["transform", "translateX", '453.99px'],
            ["transform", "translateY", '-108px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1500,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"panel3": {
   version: "0.1.6",
   build: "0.10.0.134",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {
   dom: [
   {
      rect: [0,0,958,345],
      id: 'panel3_black',
      stroke: [0,'rgba(0,0,0,0.00)','none'],
      type: 'rect',
      fill: ['rgba(0,0,0,1.00)']
   },
   {
      id: 'panel3_shirtGroup1',
      type: 'rect',
      transform: [[0,-2]],
      rect: [0,2,0,0]
   },
   {
      rect: [238,2,0,0],
      id: 'panel3_shirtGroup2',
      transform: [[2,-1]],
      display: 'none',
      type: 'rect'
   },
   {
      rect: [478,1,0,0],
      id: 'panel3_shirtGroup3',
      transform: [[2,-1]],
      display: 'none',
      type: 'rect'
   },
   {
      rect: [717,1,0,0],
      id: 'panel3_shirtGroup4',
      transform: [[3]],
      display: 'none',
      type: 'rect'
   },
   {
      rect: [291,-54,370,27],
      transform: [[2,334]],
      id: 'panel3_description_box2',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','images/panel3_description_box2.png']
   },
   {
      transform: [[-87,73]],
      rect: [400,212,0,0],
      font: ['minion-pro, Georgia, serif',12,'rgba(185,175,167,1.00)','normal','none','normal'],
      align: 'center',
      id: 'txt_description',
      text: ' A fresh, colorful and feminine line up to welcome the fall season.',
      display: 'none',
      type: 'text'
   },
   {
      rect: [0,0,378,55],
      transform: [[290,221]],
      id: 'panel3_subHeaderBox',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','images/panel3_subHeader_box.png']
   },
   {
      transform: [[-91]],
      rect: [400,212,0,0],
      font: ['adobe-garamond-pro, Georgia, serif',53,'rgba(255,255,255,1.00)','bold','none','normal'],
      align: 'center',
      id: 'txt_subHeader',
      text: 'COLLECTION',
      display: 'none',
      type: 'text'
   },
   {
      rect: [0,0,245,19],
      transform: [[357,198]],
      id: 'panel3_headerBox',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','images/panel3_header_box.png']
   },
   {
      transform: [[13,-13]],
      rect: [400,212,0,0],
      font: ['adobe-garamond-pro, Georgia, serif',15,'rgba(225,80,82,1.00)','normal','none','italic'],
      align: 'center',
      id: 'txt_header',
      text: 'THE ALICE RITTER',
      display: 'none',
      type: 'text'
   }],
   symbolInstances: [
   {
      id: 'panel3_shirtGroup3',
      symbolName: 'panel3_shirtGroup3'
   },
   {
      id: 'panel3_shirtGroup2',
      symbolName: 'panel3_shirtGroup2'
   },
   {
      id: 'panel3_shirtGroup1',
      symbolName: 'panel3_shirtGroup1'
   },
   {
      id: 'panel3_shirtGroup4',
      symbolName: 'panel3_shirtGroup4'
   }   ]
   },
   states: {
      "Base State": {
         "${_panel3_subHeaderBox}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '221px'],
            ["transform", "translateX", '290.99px']
         ],
         "${_panel3_shirtGroup3}": [
            ["transform", "translateX", '2px'],
            ["style", "display", 'none'],
            ["transform", "scaleX", '0'],
            ["transform", "translateY", '-1.6px'],
            ["style", "cursor", 'pointer'],
            ["transform", "skewY", '-20deg']
         ],
         "${_txt_subHeader}": [
            ["style", "font-weight", 'bold'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["transform", "translateX", '-91.94px'],
            ["style", "opacity", '0'],
            ["style", "display", 'none'],
            ["style", "font-family", 'adobe-garamond-pro, Georgia, serif'],
            ["transform", "translateY", '0.99px'],
            ["style", "font-size", '53px']
         ],
         "${_panel3_black}": [
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["color", "border-color", 'rgba(0,0,0,0.00)'],
            ["style", "width", '958px']
         ],
         "${_txt_header}": [
            ["style", "font-style", 'italic'],
            ["style", "display", 'none'],
            ["transform", "translateX", '13.05px'],
            ["style", "opacity", '0'],
            ["color", "color", 'rgba(225,80,82,1.00)'],
            ["style", "font-family", 'adobe-garamond-pro, Georgia, serif'],
            ["transform", "translateY", '-13px'],
            ["style", "font-size", '15px']
         ],
         "${_panel3_shirtGroup1}": [
            ["transform", "scaleX", '0'],
            ["style", "cursor", 'pointer'],
            ["transform", "skewY", '-20deg'],
            ["transform", "translateY", '-2.6px']
         ],
         "${_txt_description}": [
            ["style", "text-align", 'center'],
            ["color", "color", 'rgba(185,175,167,1.00)'],
            ["transform", "translateX", '-87.51px'],
            ["style", "opacity", '0'],
            ["style", "display", 'none'],
            ["style", "font-family", 'minion-pro, Georgia, serif'],
            ["transform", "translateY", '73.8px'],
            ["style", "font-size", '12px']
         ],
         "${_panel3_shirtGroup2}": [
            ["transform", "translateX", '2px'],
            ["transform", "skewY", '-20deg'],
            ["style", "display", 'none'],
            ["transform", "translateY", '-1.92px'],
            ["style", "cursor", 'pointer'],
            ["transform", "scaleX", '0']
         ],
         "${_panel3_shirtGroup4}": [
            ["transform", "translateX", '3px'],
            ["style", "display", 'none'],
            ["transform", "scaleX", '0'],
            ["transform", "translateY", '-0.96px'],
            ["style", "cursor", 'pointer'],
            ["transform", "skewY", '-20deg']
         ],
         "${symbolSelector}": [
            ["style", "height", '345px'],
            ["style", "width", '956px']
         ],
         "${_panel3_description_box2}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '334px'],
            ["transform", "translateX", '2px']
         ],
         "${_panel3_headerBox}": [
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["transform", "translateX", '357.44px'],
            ["transform", "translateY", '198.99px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1788,
         autoPlay: false,
         timeline: [
            { id: "eid3860", tween: [ "style", "${_txt_subHeader}", "opacity", '1', { fromValue: '0'}], position: 1149, duration: 500, easing: "easeInSine" },
            { id: "eid3870", tween: [ "style", "${_panel3_headerBox}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid3867", tween: [ "style", "${_panel3_headerBox}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0, easing: "easeInSine" },
            { id: "eid1703", tween: [ "transform", "${_panel3_shirtGroup1}", "skewY", '0deg', { fromValue: '-20deg'}], position: 0, duration: 1000, easing: "easeOutBack" },
            { id: "eid3859", tween: [ "style", "${_panel3_subHeaderBox}", "opacity", '1', { fromValue: '0'}], position: 1149, duration: 500, easing: "easeInSine" },
            { id: "eid5121", tween: [ "style", "${_panel3_description_box2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0, easing: "easeInSine" },
            { id: "eid4860", tween: [ "style", "${_panel3_description_box2}", "display", 'block', { fromValue: 'none'}], position: 1288, duration: 0, easing: "easeInSine" },
            { id: "eid3858", tween: [ "style", "${_txt_description}", "opacity", '1', { fromValue: '0'}], position: 1288, duration: 500, easing: "easeInSine" },
            { id: "eid1709", tween: [ "transform", "${_panel3_shirtGroup4}", "skewY", '0deg', { fromValue: '-20deg'}], position: 750, duration: 1000, easing: "easeOutBack" },
            { id: "eid1947", tween: [ "style", "${_panel3_shirtGroup3}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid1743", tween: [ "style", "${_panel3_shirtGroup3}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
            { id: "eid3869", tween: [ "style", "${_txt_header}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid3868", tween: [ "style", "${_txt_header}", "display", 'block', { fromValue: 'none'}], position: 1000, duration: 0, easing: "easeInSine" },
            { id: "eid3873", tween: [ "style", "${_txt_description}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid3864", tween: [ "style", "${_txt_description}", "display", 'block', { fromValue: 'none'}], position: 1288, duration: 0, easing: "easeInSine" },
            { id: "eid3872", tween: [ "style", "${_panel3_subHeaderBox}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid3865", tween: [ "style", "${_panel3_subHeaderBox}", "display", 'block', { fromValue: 'none'}], position: 1149, duration: 0, easing: "easeInSine" },
            { id: "eid3861", tween: [ "style", "${_panel3_headerBox}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 500, easing: "easeInSine" },
            { id: "eid3862", tween: [ "style", "${_txt_header}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 500, easing: "easeInSine" },
            { id: "eid4859", tween: [ "style", "${_panel3_description_box2}", "opacity", '1', { fromValue: '0'}], position: 1288, duration: 500, easing: "easeInSine" },
            { id: "eid1704", tween: [ "transform", "${_panel3_shirtGroup2}", "scaleX", '1', { fromValue: '0'}], position: 250, duration: 1000, easing: "easeOutBack" },
            { id: "eid1701", tween: [ "transform", "${_panel3_shirtGroup1}", "scaleX", '1', { fromValue: '0'}], position: 0, duration: 1000, easing: "easeOutBack" },
            { id: "eid1706", tween: [ "transform", "${_panel3_shirtGroup3}", "scaleX", '1', { fromValue: '0'}], position: 500, duration: 1000, easing: "easeOutBack" },
            { id: "eid1705", tween: [ "transform", "${_panel3_shirtGroup2}", "skewY", '0deg', { fromValue: '-20deg'}], position: 250, duration: 1000, easing: "easeOutBack" },
            { id: "eid3871", tween: [ "style", "${_txt_subHeader}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid3866", tween: [ "style", "${_txt_subHeader}", "display", 'block', { fromValue: 'none'}], position: 1149, duration: 0, easing: "easeInSine" },
            { id: "eid1708", tween: [ "transform", "${_panel3_shirtGroup4}", "scaleX", '1', { fromValue: '0'}], position: 750, duration: 1000, easing: "easeOutBack" },
            { id: "eid1946", tween: [ "style", "${_panel3_shirtGroup2}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid1742", tween: [ "style", "${_panel3_shirtGroup2}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0 },
            { id: "eid1948", tween: [ "style", "${_panel3_shirtGroup4}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid1744", tween: [ "style", "${_panel3_shirtGroup4}", "display", 'block', { fromValue: 'none'}], position: 750, duration: 0 },
            { id: "eid1707", tween: [ "transform", "${_panel3_shirtGroup3}", "skewY", '0deg', { fromValue: '-20deg'}], position: 500, duration: 1000, easing: "easeOutBack" }         ]
      }
   }
},
"panel3_redPanel": {
   version: "0.1.6",
   build: "0.10.0.134",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {
   dom: [
   {
      type: 'image',
      id: 'panel3_redPanel',
      rect: [0,-0.0095,239,327],
      transform: [[0,1.4999],null,null,[1.00418,1.0092]],
      fill: ['rgba(0,0,0,0)','images/panel3_redPanel.png']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_panel3_redPanel}": [
            ["transform", "scaleX", '1.004'],
            ["transform", "translateY", '1.49px'],
            ["transform", "scaleY", '1.009']
         ],
         "${symbolSelector}": [
            ["style", "height", '328.9992px'],
            ["style", "width", '238px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1500,
         autoPlay: false,
         timeline: [
         ]
      }
   }
},
"panel3_shirtGroup1": {
   version: "0.1.6",
   build: "0.10.0.134",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {
   dom: [
   {
      id: 'red_panel_1',
      type: 'rect',
      transform: [[-1,3]],
      rect: [1,-4,0,0]
   },
   {
      rect: [0,0,239,120],
      id: 'panel3_infoBox',
      transform: [[0,-120]],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/panel3_infoBox.png']
   },
   {
      rect: [417,82,190,243],
      id: 'panel3_shirt1',
      transform: [[-393,-33]],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/panel3_shirt1.png']
   },
   {
      rect: [11,51,190,59],
      transform: [[15,-14]],
      font: ['minion-pro, Georgia, serif',12,'rgba(255,255,255,1)','normal','none','normal'],
      id: 'description',
      text: 'Elegant silk, adorned on the front with crystal stone appliqués, has a draped attached scarf to wrap as you like.',
      align: 'auto',
      type: 'text'
   },
   {
      rect: [11,35,0,0],
      transform: [[15,-20]],
      font: ['minion-pro, Georgia, serif',15,'rgba(195,193,191,1.00)','bold','none','italic'],
      id: 'title',
      text: 'SILK BLOUSE',
      align: 'auto',
      type: 'text'
   },
   {
      id: 'panel3_hit',
      type: 'rect',
      rect: [0,-118,0,0]
   }],
   symbolInstances: [
   {
      id: 'red_panel_1',
      symbolName: 'panel3_redPanel'
   },
   {
      id: 'panel3_hit',
      symbolName: 'panel3_hit'
   }   ]
   },
   states: {
      "Base State": {
         "${_panel3_shirt1}": [
            ["style", "-webkit-transform-origin", [48.79,4.41], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [48.79,4.41],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [48.79,4.41],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [48.79,4.41],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [48.79,4.41],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "translateX", '-393.63px'],
            ["transform", "translateY", '-33.87px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_panel3_infoBox}": [
            ["transform", "translateY", '-120px']
         ],
         "${_red_panel_1}": [
            ["transform", "translateX", '-1.15px'],
            ["transform", "translateY", '3.85px']
         ],
         "${_title}": [
            ["style", "font-style", 'italic'],
            ["style", "height", '30px'],
            ["transform", "translateX", '14px'],
            ["style", "font-weight", 'bold'],
            ["color", "color", 'rgba(195,193,191,1.00)'],
            ["style", "font-family", 'minion-pro, Georgia, serif'],
            ["transform", "translateY", '-130.43px'],
            ["style", "font-size", '15px']
         ],
         "${symbolSelector}": [
            ["style", "height", '330.0087px'],
            ["style", "width", '239px']
         ],
         "${_description}": [
            ["style", "height", '84px'],
            ["transform", "translateY", '-124.43px'],
            ["transform", "translateX", '14px'],
            ["style", "width", '190px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 500,
         autoPlay: false,
         timeline: [
            { id: "eid4985", tween: [ "transform", "${_title}", "translateX", '15px', { fromValue: '14px'}], position: 0, duration: 499, easing: "easeInSine" },
            { id: "eid2038", tween: [ "transform", "${_panel3_infoBox}", "translateY", '1.06px', { fromValue: '-120px'}], position: 0, duration: 499, easing: "easeInSine" },
            { id: "eid2037", tween: [ "transform", "${_panel3_shirt1}", "translateY", '86.12px', { fromValue: '-33.87px'}], position: 0, duration: 500 },
            { id: "eid4987", tween: [ "transform", "${_title}", "translateY", '-10px', { fromValue: '-130.43px'}], position: 0, duration: 499, easing: "easeInSine" },
            { id: "eid2039", tween: [ "transform", "${_panel3_shirt1}", "rotateZ", '5deg', { fromValue: '0deg'}], position: 0, duration: 125 },
            { id: "eid2040", tween: [ "transform", "${_panel3_shirt1}", "rotateZ", '-8deg', { fromValue: '5deg'}], position: 125, duration: 180 },
            { id: "eid2041", tween: [ "transform", "${_panel3_shirt1}", "rotateZ", '16deg', { fromValue: '-8deg'}], position: 305, duration: 194 },
            { id: "eid2035", tween: [ "transform", "${_red_panel_1}", "translateY", '123.85px', { fromValue: '3.85px'}], position: 0, duration: 499, easing: "easeInSine" },
            { id: "eid4989", tween: [ "transform", "${_description}", "translateX", '15px', { fromValue: '14px'}], position: 0, duration: 499, easing: "easeInSine" },
            { id: "eid4991", tween: [ "transform", "${_description}", "translateY", '-4px', { fromValue: '-124.43px'}], position: 0, duration: 499, easing: "easeInSine" },
            { id: "eid4992", tween: [ "style", "${_description}", "height", '84px', { fromValue: '84px'}], position: 499, duration: 0 }         ]
      }
   }
},
"panel3_shirtGroup2": {
   version: "0.1.6",
   build: "0.10.0.134",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {
   dom: [
   {
      id: 'red_panel_2',
      type: 'rect',
      transform: [[-1,3]],
      rect: [1,-4,0,0]
   },
   {
      rect: [0,0,239,120],
      id: 'panel3_infoBox',
      transform: [[0,-120]],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/panel3_infoBox.png']
   },
   {
      rect: [0,0,200,255],
      id: 'panel3_shirt2',
      transform: [[18]],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/panel3_shirt2.png']
   },
   {
      rect: [11,51,190,59],
      transform: [[15,-14]],
      font: ['minion-pro, Georgia, serif',12,'rgba(255,255,255,1)','normal','none','normal'],
      id: 'description',
      text: 'Patches in shades of grey and blush are set at angles for dramatic effect. Ribbed trim at neckline and armholes.',
      align: 'auto',
      type: 'text'
   },
   {
      rect: [11,35,0,0],
      transform: [[15,-20]],
      font: ['minion-pro, Georgia, serif',15,'rgba(195,193,191,1.00)','bold','none','italic'],
      id: 'title',
      text: 'GEOMETRIC VEST',
      align: 'auto',
      type: 'text'
   },
   {
      id: 'panel3_hit',
      type: 'rect',
      rect: [0,-118,0,0]
   }],
   symbolInstances: [
   {
      id: 'panel3_hit',
      symbolName: 'panel3_hit'
   },
   {
      id: 'red_panel_2',
      symbolName: 'panel3_redPanel'
   }   ]
   },
   states: {
      "Base State": {
         "${_red_panel_2}": [
            ["transform", "translateX", '-1.15px'],
            ["transform", "translateY", '4.16px']
         ],
         "${_panel3_infoBox}": [
            ["transform", "translateY", '-120px']
         ],
         "${_title}": [
            ["style", "height", '30px'],
            ["color", "color", 'rgba(195,193,191,1.00)'],
            ["transform", "translateX", '14px'],
            ["style", "font-family", 'minion-pro, Georgia, serif'],
            ["style", "font-style", 'italic'],
            ["style", "font-weight", 'bold'],
            ["transform", "translateY", '-130.43px'],
            ["style", "font-size", '15px']
         ],
         "${symbolSelector}": [
            ["style", "height", '330.0087px'],
            ["style", "width", '239px']
         ],
         "${_panel3_shirt2}": [
            ["style", "-webkit-transform-origin", [49.02,4.59], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [49.02,4.59],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [49.02,4.59],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [49.02,4.59],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [49.02,4.59],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "translateY", '49px'],
            ["transform", "translateX", '18px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_description}": [
            ["style", "height", '84px'],
            ["transform", "translateX", '14px'],
            ["transform", "translateY", '-124.43px'],
            ["style", "width", '190px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 500,
         autoPlay: false,
         timeline: [
            { id: "eid5002", tween: [ "transform", "${_title}", "translateX", '15px', { fromValue: '14px'}], position: 0, duration: 499, easing: "easeInSine" },
            { id: "eid2151", tween: [ "transform", "${_panel3_infoBox}", "translateY", '1.06px', { fromValue: '-120px'}], position: 0, duration: 499, easing: "easeInSine" },
            { id: "eid2401", tween: [ "transform", "${_panel3_shirt2}", "translateY", '166.53px', { fromValue: '49px'}], position: 0, duration: 500 },
            { id: "eid5003", tween: [ "transform", "${_title}", "translateY", '-10px', { fromValue: '-130.43px'}], position: 0, duration: 499, easing: "easeInSine" },
            { id: "eid4109", tween: [ "transform", "${_red_panel_2}", "translateY", '124.16px', { fromValue: '4.16px'}], position: 0, duration: 499, easing: "easeInSine" },
            { id: "eid2402", tween: [ "transform", "${_panel3_shirt2}", "rotateZ", '5deg', { fromValue: '0deg'}], position: 0, duration: 125 },
            { id: "eid2403", tween: [ "transform", "${_panel3_shirt2}", "rotateZ", '-8deg', { fromValue: '5deg'}], position: 125, duration: 180 },
            { id: "eid2404", tween: [ "transform", "${_panel3_shirt2}", "rotateZ", '16deg', { fromValue: '-8deg'}], position: 305, duration: 194 },
            { id: "eid5004", tween: [ "transform", "${_description}", "translateY", '-4px', { fromValue: '-124.43px'}], position: 0, duration: 499, easing: "easeInSine" },
            { id: "eid5005", tween: [ "transform", "${_description}", "translateX", '15px', { fromValue: '14px'}], position: 0, duration: 499, easing: "easeInSine" },
            { id: "eid5006", tween: [ "style", "${_description}", "height", '84px', { fromValue: '84px'}], position: 499, duration: 0 }         ]
      }
   }
},
"panel3_shirtGroup3": {
   version: "0.1.6",
   build: "0.10.0.134",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {
   dom: [
   {
      id: 'red_panel_3',
      type: 'rect',
      transform: [[-1,3]],
      rect: [1,-4,0,0]
   },
   {
      rect: [0,0,239,120],
      id: 'panel3_infoBox',
      transform: [[0,-120]],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/panel3_infoBox.png']
   },
   {
      rect: [0,0,190,255],
      id: 'panel3_shirt3',
      transform: [[24,49]],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/panel3_shirt3.png']
   },
   {
      rect: [11,51,190,59],
      transform: [[15,-14]],
      font: ['minion-pro, Georgia, serif',12,'rgba(255,255,255,1)','normal','none','normal'],
      id: 'description',
      text: 'The voluminous silhouette of a cape style shirt features vibrant colors and has a full button fastening.',
      align: 'auto',
      type: 'text'
   },
   {
      rect: [11,35,0,0],
      transform: [[15,-20]],
      font: ['minion-pro, Georgia, serif',15,'rgba(195,193,191,1.00)','bold','none','italic'],
      id: 'title',
      text: 'CAPE SHIRT',
      align: 'auto',
      type: 'text'
   },
   {
      id: 'panel3_hit',
      type: 'rect',
      rect: [0,-118,0,0]
   }],
   symbolInstances: [
   {
      id: 'panel3_hit',
      symbolName: 'panel3_hit'
   },
   {
      id: 'red_panel_3',
      symbolName: 'panel3_redPanel'
   }   ]
   },
   states: {
      "Base State": {
         "${_red_panel_3}": [
            ["transform", "translateX", '-1.15px'],
            ["transform", "translateY", '4.16px']
         ],
         "${symbolSelector}": [
            ["style", "height", '330.0087px'],
            ["style", "width", '239px']
         ],
         "${_title}": [
            ["style", "height", '30px'],
            ["color", "color", 'rgba(195,193,191,1.00)'],
            ["transform", "translateX", '14px'],
            ["style", "font-family", 'minion-pro, Georgia, serif'],
            ["style", "font-style", 'italic'],
            ["style", "font-weight", 'bold'],
            ["transform", "translateY", '-130.43px'],
            ["style", "font-size", '15px']
         ],
         "${_panel3_shirt3}": [
            ["style", "-webkit-transform-origin", [47.96,4.61], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [47.96,4.61],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [47.96,4.61],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [47.96,4.61],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [47.96,4.61],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "translateX", '23.8px'],
            ["transform", "translateY", '48.99px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_panel3_infoBox}": [
            ["transform", "translateY", '-120px']
         ],
         "${_description}": [
            ["style", "height", '84px'],
            ["transform", "translateX", '14px'],
            ["transform", "translateY", '-124.43px'],
            ["style", "width", '190px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 500,
         autoPlay: false,
         timeline: [
            { id: "eid5015", tween: [ "transform", "${_title}", "translateX", '15px', { fromValue: '14px'}], position: 0, duration: 499, easing: "easeInSine" },
            { id: "eid2152", tween: [ "transform", "${_panel3_infoBox}", "translateY", '1.06px', { fromValue: '-120px'}], position: 0, duration: 499, easing: "easeInSine" },
            { id: "eid2224", tween: [ "transform", "${_panel3_shirt3}", "translateY", '165.25px', { fromValue: '48.99px'}], position: 0, duration: 500 },
            { id: "eid5016", tween: [ "transform", "${_title}", "translateY", '-10px', { fromValue: '-130.43px'}], position: 0, duration: 499, easing: "easeInSine" },
            { id: "eid2223", tween: [ "transform", "${_panel3_shirt3}", "rotateZ", '5deg', { fromValue: '0deg'}], position: 0, duration: 125 },
            { id: "eid2226", tween: [ "transform", "${_panel3_shirt3}", "rotateZ", '-8deg', { fromValue: '5deg'}], position: 125, duration: 180 },
            { id: "eid2227", tween: [ "transform", "${_panel3_shirt3}", "rotateZ", '16deg', { fromValue: '-8deg'}], position: 305, duration: 194 },
            { id: "eid4110", tween: [ "transform", "${_red_panel_3}", "translateY", '124.16px', { fromValue: '4.16px'}], position: 0, duration: 499, easing: "easeInSine" },
            { id: "eid5018", tween: [ "transform", "${_description}", "translateX", '15px', { fromValue: '14px'}], position: 0, duration: 499, easing: "easeInSine" },
            { id: "eid5017", tween: [ "transform", "${_description}", "translateY", '-4px', { fromValue: '-124.43px'}], position: 0, duration: 499, easing: "easeInSine" },
            { id: "eid5019", tween: [ "style", "${_description}", "height", '84px', { fromValue: '84px'}], position: 499, duration: 0 }         ]
      }
   }
},
"panel3_shirtGroup4": {
   version: "0.1.6",
   build: "0.10.0.134",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {
   dom: [
   {
      id: 'red_panel_4',
      type: 'rect',
      transform: [[-1,124]],
      rect: [1,-4,0,0]
   },
   {
      rect: [0,0,239,120],
      id: 'panel3_infoBox',
      transform: [[0,-120]],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/panel3_infoBox.png']
   },
   {
      rect: [0,0,190,255],
      id: 'panel3_shirt4',
      transform: [[24,49]],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/panel3_shirt4.png']
   },
   {
      rect: [11,51,190,59],
      transform: [[15,-14]],
      font: ['minion-pro, Georgia, serif',12,'rgba(255,255,255,1)','normal','none','normal'],
      id: 'description',
      text: 'A collarless neckline with soft gathers at the shoulders and back yokes. Topped with full blouson sleeves and front button closure.',
      align: 'auto',
      type: 'text'
   },
   {
      rect: [11,35,0,0],
      transform: [[15,-20]],
      font: ['minion-pro, Georgia, serif',15,'rgba(195,193,191,1.00)','bold','none','italic'],
      id: 'title',
      text: 'WHITE BLOUSE',
      align: 'auto',
      type: 'text'
   },
   {
      id: 'panel3_hit',
      type: 'rect',
      rect: [0,-118,0,0]
   }],
   symbolInstances: [
   {
      id: 'red_panel_4',
      symbolName: 'panel3_redPanel'
   },
   {
      id: 'panel3_hit',
      symbolName: 'panel3_hit'
   }   ]
   },
   states: {
      "Base State": {
         "${_title}": [
            ["style", "height", '30px'],
            ["color", "color", 'rgba(195,193,191,1.00)'],
            ["transform", "translateX", '14px'],
            ["style", "font-family", 'minion-pro, Georgia, serif'],
            ["style", "font-style", 'italic'],
            ["style", "font-weight", 'bold'],
            ["transform", "translateY", '-130.43px'],
            ["style", "font-size", '15px']
         ],
         "${_panel3_infoBox}": [
            ["transform", "translateY", '-120px']
         ],
         "${_panel3_shirt4}": [
            ["style", "-webkit-transform-origin", [50.07,5.24], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [50.07,5.24],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50.07,5.24],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50.07,5.24],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50.07,5.24],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "translateX", '23.8px'],
            ["transform", "translateY", '49px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${symbolSelector}": [
            ["style", "height", '330.0087px'],
            ["style", "width", '239px']
         ],
         "${_red_panel_4}": [
            ["transform", "translateX", '-1.15px'],
            ["transform", "translateY", '4.16px']
         ],
         "${_description}": [
            ["style", "height", '84px'],
            ["transform", "translateX", '14px'],
            ["transform", "translateY", '-124.43px'],
            ["style", "width", '190px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 500,
         autoPlay: false,
         timeline: [
            { id: "eid5028", tween: [ "transform", "${_title}", "translateX", '15px', { fromValue: '14px'}], position: 0, duration: 499, easing: "easeInSine" },
            { id: "eid2153", tween: [ "transform", "${_panel3_infoBox}", "translateY", '1.06px', { fromValue: '-120px'}], position: 0, duration: 499, easing: "easeInSine" },
            { id: "eid2237", tween: [ "transform", "${_panel3_shirt4}", "translateY", '165.25px', { fromValue: '49px'}], position: 0, duration: 500 },
            { id: "eid2236", tween: [ "transform", "${_panel3_shirt4}", "rotateZ", '5deg', { fromValue: '0deg'}], position: 0, duration: 125 },
            { id: "eid2239", tween: [ "transform", "${_panel3_shirt4}", "rotateZ", '-8deg', { fromValue: '5deg'}], position: 125, duration: 180 },
            { id: "eid2240", tween: [ "transform", "${_panel3_shirt4}", "rotateZ", '16deg', { fromValue: '-8deg'}], position: 305, duration: 194 },
            { id: "eid5029", tween: [ "transform", "${_title}", "translateY", '-10px', { fromValue: '-130.43px'}], position: 0, duration: 499, easing: "easeInSine" },
            { id: "eid4121", tween: [ "transform", "${_red_panel_4}", "translateY", '124.16px', { fromValue: '4.16px'}], position: 0, duration: 499, easing: "easeInSine" },
            { id: "eid5031", tween: [ "transform", "${_description}", "translateX", '15px', { fromValue: '14px'}], position: 0, duration: 499, easing: "easeInSine" },
            { id: "eid5030", tween: [ "transform", "${_description}", "translateY", '-4px', { fromValue: '-124.43px'}], position: 0, duration: 499, easing: "easeInSine" },
            { id: "eid5032", tween: [ "style", "${_description}", "height", '84px', { fromValue: '84px'}], position: 499, duration: 0 }         ]
      }
   }
},
"btn_circle": {
   version: "0.1.6",
   build: "0.10.0.134",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {
   dom: [
   {
      rect: [-232.89798330023,-137.15689191919,13,13],
      borderRadius: ['13px 13px','13px 13px','13px 13px','13px 13px'],
      transform: [[232.99997,137.33336]],
      id: 'RoundRect',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(142,143,138,1)',null]
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '13px'],
            ["style", "width", '13px']
         ],
         "${_RoundRect}": [
            ["color", "background-color", 'rgba(142,143,138,1)'],
            ["style", "border-top-left-radius", [13,13], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["transform", "translateX", '232.99px'],
            ["style", "border-bottom-right-radius", [13,13], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-top-right-radius", [13,13], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "width", '13px'],
            ["style", "border-bottom-left-radius", [13,13], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '13px'],
            ["transform", "translateY", '137.33px']
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
            "off": 0,
            "on": 1000
         },
         timeline: [
            { id: "eid2512", tween: [ "color", "${_RoundRect}", "background-color", 'rgba(60,60,60,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(142,143,138,1)'}], position: 0, duration: 1000 }         ]
      }
   }
},
"panel3_hit": {
   version: "0.1.6",
   build: "0.10.0.134",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {
   dom: [
   {
      transform: [[-1,-40]],
      rect: [1,39,238,449],
      id: 'Rectangle',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(70,200,55,0.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '449px'],
            ["style", "width", '238px']
         ],
         "${_Rectangle}": [
            ["style", "height", '449px'],
            ["color", "background-color", 'rgba(70,200,55,0.00)'],
            ["transform", "translateY", '-40.83px'],
            ["transform", "translateX", '-1.83px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1500,
         autoPlay: false,
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
})(jQuery, AdobeEdge, "promo");
