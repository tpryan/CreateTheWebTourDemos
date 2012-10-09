/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
var fonts = {
   "Armata":"<link href='http://fonts.googleapis.com/css?family=Armata' rel='stylesheet' type='text/css'>"
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
            id:'mapwhole_sym',
            className:'stage_mapwhole_sym_id',
            type:'rect',
            rect:[10.999986,21.40232,0,0],
            transform:[]
        },
        {
            id:'glowbg',
            display:'none',
            className:'stage_glowbg_id',
            type:'image',
            rect:[71.403015136719,199.06684112549,900,538],
            fill:['rgba(0,0,0,0)','images/glowbg.png'],
            transform:[[-85.58176,-158.20683],,,[1.66203,1.66203]]
        },
        {
            id:'asiatxt_sym',
            className:'stage_asiatxt_sym_id',
            type:'rect',
            rect:[710.48046875,224,0,0],
            transform:[[-143,16]]
        },
        {
            id:'austxt_sym',
            className:'stage_austxt_sym_id',
            type:'rect',
            rect:[747,460.046875,0,0],
            transform:[[-47.64457,-24.89845]]
        },
        {
            id:'europetxt_sym',
            className:'stage_europetxt_sym_id',
            type:'rect',
            rect:[459.367157,223.34375,0,0],
            opacity:1,
            transform:[[-8.99999,-8]]
        },
        {
            id:'natxt_sym',
            className:'stage_natxt_sym_id',
            type:'rect',
            rect:[329.19921875,203,0,0],
            transform:[[-233.5,21.10547]]
        },
        {
            id:'aftxt_sym',
            className:'stage_aftxt_sym_id',
            type:'rect',
            rect:[262.28125,424.0390625,0,0],
            transform:[[103.60545,-79.99999]]
        },
        {
            id:'satxt_sym',
            className:'stage_satxt_sym_id',
            type:'rect',
            rect:[336.32421875,503.29296875,0,0],
            transform:[[-149.50783,-85.72268]]
        },
        {
            id:'asiagraph_sym',
            display:'none',
            className:'stage_asiagraph_sym3_id',
            type:'rect',
            rect:[190.8046875,150.01953125,0,0],
            transform:[[-390,-150]]
        },
        {
            id:'afgraph_sym',
            display:'none',
            className:'stage_afgraph_sym_id',
            type:'rect',
            rect:[-160.82084274292,226.02347564697,0,0],
            transform:[[26.7222,-230.69442]]
        },
        {
            id:'sagraph_sym',
            display:'none',
            className:'stage_sagraph_sym_id',
            type:'rect',
            rect:[745.29341125488,8.9915237426758,0,0],
            transform:[[-918.21292,-66.10185]]
        },
        {
            id:'closeasia_btn',
            display:'none',
            className:'close_btn_id',
            type:'text',
            rect:[559.72222900391,227.77777862549,51,22],
            text:"close x",
            align:"right",
            font:["Armata",13,"rgba(0,0,0,1)","normal","none",""],
            transform:[[166.22855,-56.98548]]
        },
        {
            id:'ocgraph_sym',
            display:'none',
            className:'stage_ocgraph_sym_id',
            type:'rect',
            rect:[242.88371276855,201.7721786499,0,0],
            transform:[[-415.89812,-259.38887]]
        },
        {
            id:'nagraph_sym',
            display:'none',
            className:'stage_nagraph_sym_id',
            type:'rect',
            rect:[300.44212341309,230.56720733643,0,0],
            transform:[[-473.76848,-288.32405]]
        },
        {
            id:'closeaf_btn',
            display:'none',
            className:'close_btn_id',
            type:'text',
            rect:[559.72222900391,227.77777862549,51,22],
            text:"close x",
            align:"right",
            font:["Armata",13,"rgba(0,0,0,1)","normal","none",""],
            transform:[[166.22855,-56.98548]]
        },
        {
            id:'closena_btn',
            display:'none',
            className:'close_btn_id',
            type:'text',
            rect:[559.72222900391,227.77777862549,51,22],
            text:"close x",
            align:"right",
            font:["Armata",13,"rgba(0,0,0,1)","normal","none",""],
            transform:[[166.22855,-56.98548]]
        },
        {
            id:'closesa_btn',
            display:'none',
            className:'close_btn_id',
            type:'text',
            rect:[559.72222900391,227.77777862549,51,22],
            text:"close x",
            align:"right",
            font:["Armata",13,"rgba(0,0,0,1)","normal","none",""],
            transform:[[166.22855,-56.98548]]
        },
        {
            id:'closeoc_btn',
            display:'none',
            className:'close_btn_id',
            type:'text',
            rect:[559.72222900391,227.77777862549,51,22],
            text:"close x",
            align:"right",
            font:["Armata",13,"rgba(0,0,0,1)","normal","none",""],
            transform:[[166.22855,-56.98548]]
        },
        {
            id:'closeeu_btn',
            display:'none',
            className:'close_btn_id',
            type:'text',
            rect:[559.72222900391,227.77777862549,51,22],
            text:"close x",
            align:"right",
            font:["Armata",13,"rgba(0,0,0,1)","normal","none",""],
            transform:[[166.22855,-56.98548]]
        },
        {
            id:'eugraph_sym',
            display:'none',
            className:'stage_eugraph_sym_id',
            type:'rect',
            rect:[348.62109375,227.44140625,0,0],
            transform:[[-522,-285]]
        },
        {
            id:'af_btn',
            className:'europe_btnCopy_id',
            type:'rect',
            rect:[447.52734375,203,128,151],
            borderRadius:[10,10,10,10],
            fill:['rgba(0,0,0,0)',null],
            stroke:[0,"","none"],
            transform:[[-41.25099,107.54901],[-39]]
        },
        {
            id:'aus_btn',
            className:'europe_btnCopy_id',
            type:'rect',
            rect:[447.52734375,203,88,97],
            borderRadius:[10,10,10,10],
            fill:['rgba(0,0,0,0)',null],
            stroke:[0,"","none"],
            transform:[[261.33219,208.01177],[-88.4385],,[0.70913]]
        },
        {
            id:'na_btn',
            className:'europe_btnCopy_id',
            type:'rect',
            rect:[447.52734375,203,191,170],
            borderRadius:[10,10,10,10],
            fill:['rgba(0,0,0,0)',null],
            stroke:[0,"","none"],
            transform:[[-365.32812,-29]]
        },
        {
            id:'europe_btn',
            className:'stage_europe_btn_id',
            type:'rect',
            rect:[447.52734375,203,160,71],
            borderRadius:[10,10,10,10],
            fill:['rgba(0,0,0,0)',null],
            stroke:[0,"","none"],
            transform:[[-40],[-11]]
        },
        {
            id:'asia_btn',
            className:'stage_europe_btn_id',
            type:'rect',
            rect:[447.52734375,203,255,174],
            borderRadius:[10,10,10,10],
            fill:['rgba(0,0,0,0)',null],
            stroke:[0,"","none"],
            transform:[[136.51561,-25.71642],[2],[-34],[1.1,1.1]]
        },
        {
            id:'sa_btn',
            className:'stage_europe_btn_id',
            type:'rect',
            rect:[447.52734375,203,105,170],
            borderRadius:[10,10,10,10],
            fill:['rgba(0,0,0,0)',null],
            stroke:[0,"","none"],
            transform:[[-206.74581,165.96827],[-11]]
        }],
      symbolInstances: [
      {
         id:'sagraph_sym',
         symbolName:'sagraph_sym'
      },
      {
         id:'europetxt_sym',
         symbolName:'europetxt_sym'
      },
      {
         id:'asiatxt_sym',
         symbolName:'asiatxt_sym'
      },
      {
         id:'satxt_sym',
         symbolName:'satxt_sym'
      },
      {
         id:'afgraph_sym',
         symbolName:'afgraph_sym'
      },
      {
         id:'eugraph_sym',
         symbolName:'eugraph_sym'
      },
      {
         id:'asiagraph_sym',
         symbolName:'asiagraph_sym'
      },
      {
         id:'nagraph_sym',
         symbolName:'nagraph_sym'
      },
      {
         id:'austxt_sym',
         symbolName:'austxt_sym'
      },
      {
         id:'aftxt_sym',
         symbolName:'aftxt_sym'
      },
      {
         id:'natxt_sym',
         symbolName:'natxt_sym'
      },
      {
         id:'mapwhole_sym',
         symbolName:'mapwhole_sym'
      },
      {
         id:'ocgraph_sym',
         symbolName:'ocgraph_sym'
      }
      ]
   },
   states: {
      "Base State": {
         "${_europe_btn}": [
            ["style", "height", '71px'],
            ["style", "width", '160px'],
            ["transform", "translateX", '-40px'],
            ["transform", "rotateZ", '-11deg']
         ],
         "${_edge_txt}": [
            ["transform", "translateX", '0px'],
            ["transform", "translateY", '0px']
         ],
         "${_mapwhole_sym}": [
            ["transform", "scaleX", '1'],
            ["transform", "translateX", '0px'],
            ["transform", "scaleY", '1'],
            ["transform", "translateY", '0px']
         ],
         "${_closena_btn}": [
            ["transform", "translateX", '166.22855px'],
            ["color", "color", 'rgba(95,95,95,1.00)'],
            ["style", "opacity", '0'],
            ["style", "font-size", '13px'],
            ["style", "text-align", 'right'],
            ["style", "width", '51px'],
            ["style", "display", 'none'],
            ["style", "font-family", 'Armata'],
            ["transform", "translateY", '-56.98548px'],
            ["style", "height", '22px']
         ],
         "${_glowbg}": [
            ["transform", "translateX", '-85.58176px'],
            ["style", "display", 'none'],
            ["transform", "scaleX", '1.66203'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '-158.20683px'],
            ["transform", "scaleY", '1.66203']
         ],
         "${_stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "width", '900px'],
            ["style", "height", '600px'],
            ["style", "overflow", 'hidden']
         ],
         "${_closeaf_btn}": [
            ["transform", "translateX", '166.22855px'],
            ["color", "color", 'rgba(95,95,95,1.00)'],
            ["style", "opacity", '0'],
            ["style", "font-size", '13px'],
            ["style", "text-align", 'right'],
            ["style", "display", 'none'],
            ["style", "height", '22px'],
            ["style", "font-family", 'Armata'],
            ["transform", "translateY", '-56.98548px'],
            ["style", "width", '51px']
         ],
         "${_europe_txt}": [
            ["transform", "translateY", '205.30468px']
         ],
         "${_aftxt_sym}": [
            ["transform", "translateX", '103.60545px'],
            ["transform", "translateY", '-79.99999px']
         ],
         "${_satxt_sym}": [
            ["transform", "translateX", '-149.50783px'],
            ["transform", "translateY", '-85.72268px']
         ],
         "${_sa_btn}": [
            ["transform", "translateX", '-206.74581px'],
            ["transform", "rotateZ", '-11deg'],
            ["style", "height", '170px'],
            ["transform", "translateY", '165.96827px'],
            ["style", "width", '105px']
         ],
         "${_afgraph_sym}": [
            ["style", "display", 'none'],
            ["style", "opacity", '1'],
            ["transform", "translateY", '-283.69443px'],
            ["transform", "translateX", '-27.2778px']
         ],
         "${_asiagraph_sym}": [
            ["style", "display", 'none'],
            ["style", "opacity", '1'],
            ["transform", "translateY", '-154.28064px'],
            ["transform", "translateX", '-322.73624px']
         ],
         "${_closeeu_btn}": [
            ["transform", "translateX", '166.22855px'],
            ["color", "color", 'rgba(95,95,95,1.00)'],
            ["style", "opacity", '0'],
            ["style", "font-size", '13px'],
            ["style", "text-align", 'right'],
            ["style", "display", 'none'],
            ["style", "height", '22px'],
            ["style", "font-family", 'Armata'],
            ["transform", "translateY", '-56.98548px'],
            ["style", "width", '51px']
         ],
         "${_na_btn}": [
            ["style", "height", '170px'],
            ["transform", "translateX", '-365.32812px'],
            ["transform", "translateY", '-29px'],
            ["style", "width", '191px']
         ],
         "${_closeasia_btn}": [
            ["transform", "translateX", '166.22855px'],
            ["color", "color", 'rgba(95,95,95,1.00)'],
            ["style", "opacity", '0'],
            ["style", "font-size", '13px'],
            ["style", "text-align", 'right'],
            ["style", "width", '51px'],
            ["style", "height", '22px'],
            ["style", "font-family", 'Armata'],
            ["transform", "translateY", '-56.98548px'],
            ["style", "display", 'none']
         ],
         "${_nagraph_sym}": [
            ["style", "display", 'none'],
            ["style", "opacity", '1'],
            ["transform", "translateX", '-473.76848px'],
            ["transform", "translateY", '-288.32405px']
         ],
         "${_eugraph_sym}": [
            ["style", "display", 'none'],
            ["style", "opacity", '1'],
            ["transform", "translateY", '-285px'],
            ["transform", "translateX", '-522px']
         ],
         "${_asia_btn}": [
            ["transform", "translateX", '136.51561px'],
            ["style", "height", '174px'],
            ["transform", "scaleY", '1.1'],
            ["transform", "rotateZ", '2deg'],
            ["transform", "scaleX", '1.1'],
            ["transform", "skewX", '-34deg'],
            ["transform", "translateY", '-25.71642px'],
            ["style", "width", '255px']
         ],
         "${_closesa_btn}": [
            ["transform", "translateX", '166.22855px'],
            ["color", "color", 'rgba(95,95,95,1.00)'],
            ["style", "opacity", '0'],
            ["style", "font-size", '13px'],
            ["style", "text-align", 'right'],
            ["style", "height", '22px'],
            ["style", "display", 'none'],
            ["style", "font-family", 'Armata'],
            ["transform", "translateY", '-56.98548px'],
            ["style", "width", '51px']
         ],
         "${_natxt_sym}": [
            ["transform", "translateX", '-233.5px'],
            ["transform", "translateY", '21.10547px']
         ],
         "${_asiatxt_sym}": [
            ["transform", "translateX", '-143px'],
            ["transform", "translateY", '16px']
         ],
         "${_austxt_sym}": [
            ["transform", "translateX", '-47.64457px'],
            ["transform", "translateY", '-24.89845px']
         ],
         "${_europetxt_sym}": [
            ["transform", "scaleX", '1'],
            ["transform", "scaleY", '1'],
            ["transform", "translateX", '-8.99999px'],
            ["transform", "translateY", '-8px']
         ],
         "${_sagraph_sym}": [
            ["style", "display", 'none'],
            ["style", "opacity", '1'],
            ["transform", "translateY", '-66.10185px'],
            ["transform", "translateX", '-918.21292px']
         ],
         "${_closeoc_btn}": [
            ["transform", "translateX", '166.22855px'],
            ["color", "color", 'rgba(95,95,95,1.00)'],
            ["style", "opacity", '0'],
            ["style", "font-size", '13px'],
            ["style", "text-align", 'right'],
            ["style", "width", '51px'],
            ["style", "height", '22px'],
            ["style", "font-family", 'Armata'],
            ["transform", "translateY", '-56.98548px'],
            ["style", "display", 'none']
         ],
         "${_af_btn}": [
            ["transform", "translateX", '-41.25099px'],
            ["transform", "rotateZ", '-39deg'],
            ["style", "height", '151px'],
            ["transform", "translateY", '107.54901px'],
            ["style", "width", '128px']
         ],
         "${_aus_btn}": [
            ["transform", "translateX", '261.33219px'],
            ["transform", "rotateZ", '-88.4385deg'],
            ["transform", "scaleX", '0.70913'],
            ["style", "height", '97px'],
            ["transform", "translateY", '208.01177px'],
            ["style", "width", '88px']
         ],
         "${_ocgraph_sym}": [
            ["style", "display", 'none'],
            ["style", "opacity", '1'],
            ["transform", "translateX", '-415.89812px'],
            ["transform", "translateY", '-259.38887px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 18393,
         autoPlay: true,
         labels: {
            "asiazoom": 1000,
            "asiazoomout": 2377.0264856851,
            "africazoom": 4091,
            "africazoomout": 5468.0264856851,
            "nazoom": 7250,
            "nazoomout": 8627.0264856851,
            "sazoom": 10000,
            "sazoomout": 11377.026485685,
            "oczoom": 13000,
            "oczoomout": 14377.026485685,
            "euzoom": 16500,
            "euzoomout": 17877
         },
         timeline: [
            { id: "eid4518", tween: [ "style", "${_closena_btn}", "opacity", '1', { fromValue: '0'}], position: 8121, duration: 258 },
            { id: "eid4519", tween: [ "style", "${_closena_btn}", "opacity", '0', { fromValue: '1'}], position: 8627, duration: 258 },
            { id: "eid4989", tween: [ "style", "${_closeeu_btn}", "opacity", '1', { fromValue: '0'}], position: 17250, duration: 258 },
            { id: "eid4990", tween: [ "style", "${_closeeu_btn}", "opacity", '0', { fromValue: '1'}], position: 17756, duration: 258 },
            { id: "eid4701", tween: [ "style", "${_closeoc_btn}", "opacity", '1', { fromValue: '0'}], position: 13871, duration: 258 },
            { id: "eid4702", tween: [ "style", "${_closeoc_btn}", "opacity", '0', { fromValue: '1'}], position: 14377, duration: 258 },
            { id: "eid2307", tween: [ "transform", "${_mapwhole_sym}", "translateY", '106.74403px', { fromValue: '0px'}], position: 1250, duration: 500, easing: "easeOutSine" },
            { id: "eid3665", tween: [ "transform", "${_mapwhole_sym}", "translateY", '0px', { fromValue: '106.74403px'}], position: 2377, duration: 500, easing: "easeOutSine" },
            { id: "eid4204", tween: [ "transform", "${_mapwhole_sym}", "translateY", '-262.39547px', { fromValue: '0px'}], position: 4341, duration: 500, easing: "easeOutSine" },
            { id: "eid4205", tween: [ "transform", "${_mapwhole_sym}", "translateY", '0px', { fromValue: '-262.39547px'}], position: 5468, duration: 500, easing: "easeOutSine" },
            { id: "eid4512", tween: [ "transform", "${_mapwhole_sym}", "translateY", '150.53044px', { fromValue: '0px'}], position: 7500, duration: 500, easing: "easeOutSine" },
            { id: "eid4513", tween: [ "transform", "${_mapwhole_sym}", "translateY", '0px', { fromValue: '150.53044px'}], position: 8627, duration: 500, easing: "easeOutSine" },
            { id: "eid4604", tween: [ "transform", "${_mapwhole_sym}", "translateY", '-453.32432px', { fromValue: '0px'}], position: 10250, duration: 500, easing: "easeOutSine" },
            { id: "eid4605", tween: [ "transform", "${_mapwhole_sym}", "translateY", '0px', { fromValue: '-453.32432px'}], position: 11377, duration: 500, easing: "easeOutSine" },
            { id: "eid4695", tween: [ "transform", "${_mapwhole_sym}", "translateY", '-633.07413px', { fromValue: '0px'}], position: 13250, duration: 500, easing: "easeOutSine" },
            { id: "eid4699", tween: [ "transform", "${_mapwhole_sym}", "translateY", '0px', { fromValue: '-633.07413px'}], position: 14377, duration: 500, easing: "easeOutSine" },
            { id: "eid4955", tween: [ "transform", "${_mapwhole_sym}", "translateY", '185.51191px', { fromValue: '0px'}], position: 16750, duration: 500, easing: "easeOutSine" },
            { id: "eid4959", tween: [ "transform", "${_mapwhole_sym}", "translateY", '0px', { fromValue: '185.51191px'}], position: 17877, duration: 500, easing: "easeOutSine" },
            { id: "eid4244", tween: [ "style", "${_closeaf_btn}", "display", 'block', { fromValue: 'none'}], position: 4962, duration: 0 },
            { id: "eid4245", tween: [ "style", "${_closeaf_btn}", "display", 'none', { fromValue: 'block'}], position: 5968, duration: 0 },
            { id: "eid4520", tween: [ "style", "${_closena_btn}", "display", 'block', { fromValue: 'none'}], position: 8121, duration: 0 },
            { id: "eid4521", tween: [ "style", "${_closena_btn}", "display", 'none', { fromValue: 'block'}], position: 9127, duration: 0 },
            { id: "eid5192", tween: [ "style", "${_afgraph_sym}", "opacity", '0', { fromValue: '1'}], position: 5468, duration: 258 },
            { id: "eid10344", tween: [ "style", "${_eugraph_sym}", "display", 'block', { fromValue: 'none'}], position: 17629, duration: 0 },
            { id: "eid3321", tween: [ "style", "${_glowbg}", "opacity", '1', { fromValue: '0'}], position: 1500, duration: 629 },
            { id: "eid3875", tween: [ "style", "${_glowbg}", "opacity", '0', { fromValue: '1'}], position: 2377, duration: 258 },
            { id: "eid4200", tween: [ "style", "${_glowbg}", "opacity", '1', { fromValue: '0'}], position: 4591, duration: 629 },
            { id: "eid4201", tween: [ "style", "${_glowbg}", "opacity", '0', { fromValue: '1'}], position: 5468, duration: 258 },
            { id: "eid4506", tween: [ "style", "${_glowbg}", "opacity", '1', { fromValue: '0'}], position: 7750, duration: 629 },
            { id: "eid4508", tween: [ "style", "${_glowbg}", "opacity", '0', { fromValue: '1'}], position: 8627, duration: 258 },
            { id: "eid4598", tween: [ "style", "${_glowbg}", "opacity", '1', { fromValue: '0'}], position: 10500, duration: 629 },
            { id: "eid4600", tween: [ "style", "${_glowbg}", "opacity", '0', { fromValue: '1'}], position: 11377, duration: 258 },
            { id: "eid4689", tween: [ "style", "${_glowbg}", "opacity", '1', { fromValue: '0'}], position: 13500, duration: 629 },
            { id: "eid4691", tween: [ "style", "${_glowbg}", "opacity", '0', { fromValue: '1'}], position: 14377, duration: 258 },
            { id: "eid4949", tween: [ "style", "${_glowbg}", "opacity", '1', { fromValue: '0'}], position: 17000, duration: 629 },
            { id: "eid4951", tween: [ "style", "${_glowbg}", "opacity", '0', { fromValue: '1'}], position: 17877, duration: 258 },
            { id: "eid6101", tween: [ "style", "${_sagraph_sym}", "opacity", '0', { fromValue: '1'}], position: 11377, duration: 258 },
            { id: "eid3322", tween: [ "style", "${_glowbg}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0 },
            { id: "eid4488", tween: [ "style", "${_glowbg}", "display", 'none', { fromValue: 'block'}], position: 2635, duration: 0 },
            { id: "eid4199", tween: [ "style", "${_glowbg}", "display", 'block', { fromValue: 'none'}], position: 4591, duration: 0 },
            { id: "eid4489", tween: [ "style", "${_glowbg}", "display", 'none', { fromValue: 'block'}], position: 5726, duration: 0 },
            { id: "eid4507", tween: [ "style", "${_glowbg}", "display", 'block', { fromValue: 'none'}], position: 7750, duration: 0 },
            { id: "eid4509", tween: [ "style", "${_glowbg}", "display", 'none', { fromValue: 'block'}], position: 8885, duration: 0 },
            { id: "eid4599", tween: [ "style", "${_glowbg}", "display", 'block', { fromValue: 'none'}], position: 10500, duration: 0 },
            { id: "eid4601", tween: [ "style", "${_glowbg}", "display", 'none', { fromValue: 'block'}], position: 11635, duration: 0 },
            { id: "eid4690", tween: [ "style", "${_glowbg}", "display", 'block', { fromValue: 'none'}], position: 13500, duration: 0 },
            { id: "eid4692", tween: [ "style", "${_glowbg}", "display", 'none', { fromValue: 'block'}], position: 14635, duration: 0 },
            { id: "eid4950", tween: [ "style", "${_glowbg}", "display", 'block', { fromValue: 'none'}], position: 17000, duration: 0 },
            { id: "eid4952", tween: [ "style", "${_glowbg}", "display", 'none', { fromValue: 'block'}], position: 18135, duration: 0 },
            { id: "eid6021", tween: [ "style", "${_nagraph_sym}", "display", 'block', { fromValue: 'none'}], position: 8258, duration: 0 },
            { id: "eid4991", tween: [ "style", "${_closeeu_btn}", "display", 'block', { fromValue: 'none'}], position: 17250, duration: 0 },
            { id: "eid4992", tween: [ "style", "${_closeeu_btn}", "display", 'none', { fromValue: 'block'}], position: 18256, duration: 0 },
            { id: "eid2309", tween: [ "transform", "${_mapwhole_sym}", "scaleY", '2.57599', { fromValue: '1'}], position: 1250, duration: 500, easing: "easeOutSine" },
            { id: "eid3666", tween: [ "transform", "${_mapwhole_sym}", "scaleY", '1', { fromValue: '2.57599'}], position: 2377, duration: 500, easing: "easeOutSine" },
            { id: "eid4208", tween: [ "transform", "${_mapwhole_sym}", "scaleY", '3.1347', { fromValue: '1'}], position: 4341, duration: 500, easing: "easeOutSine" },
            { id: "eid4209", tween: [ "transform", "${_mapwhole_sym}", "scaleY", '1', { fromValue: '3.1347'}], position: 5468, duration: 500, easing: "easeOutSine" },
            { id: "eid4516", tween: [ "transform", "${_mapwhole_sym}", "scaleY", '2.57599', { fromValue: '1'}], position: 7500, duration: 500, easing: "easeOutSine" },
            { id: "eid4517", tween: [ "transform", "${_mapwhole_sym}", "scaleY", '1', { fromValue: '2.57599'}], position: 8627, duration: 500, easing: "easeOutSine" },
            { id: "eid4608", tween: [ "transform", "${_mapwhole_sym}", "scaleY", '3.1073', { fromValue: '1'}], position: 10250, duration: 500, easing: "easeOutSine" },
            { id: "eid4609", tween: [ "transform", "${_mapwhole_sym}", "scaleY", '1', { fromValue: '3.1073'}], position: 11377, duration: 500, easing: "easeOutSine" },
            { id: "eid4696", tween: [ "transform", "${_mapwhole_sym}", "scaleY", '4.00684', { fromValue: '1'}], position: 13250, duration: 500, easing: "easeOutSine" },
            { id: "eid4700", tween: [ "transform", "${_mapwhole_sym}", "scaleY", '1', { fromValue: '4.00684'}], position: 14377, duration: 500, easing: "easeOutSine" },
            { id: "eid4956", tween: [ "transform", "${_mapwhole_sym}", "scaleY", '3.62143', { fromValue: '1'}], position: 16750, duration: 500, easing: "easeOutSine" },
            { id: "eid4960", tween: [ "transform", "${_mapwhole_sym}", "scaleY", '1', { fromValue: '3.62143'}], position: 17877, duration: 500, easing: "easeOutSine" },
            { id: "eid4238", tween: [ "style", "${_closeaf_btn}", "opacity", '1', { fromValue: '0'}], position: 4962, duration: 258 },
            { id: "eid4239", tween: [ "style", "${_closeaf_btn}", "opacity", '0', { fromValue: '1'}], position: 5468, duration: 258 },
            { id: "eid10346", tween: [ "style", "${_eugraph_sym}", "opacity", '0', { fromValue: '1'}], position: 18135, duration: 258 },
            { id: "eid3420", tween: [ "transform", "${_asiagraph_sym}", "translateY", '-206.87396px', { fromValue: '-154.28064px'}], position: 1871, duration: 258 },
            { id: "eid6099", tween: [ "style", "${_sagraph_sym}", "display", 'block', { fromValue: 'none'}], position: 10871, duration: 0 },
            { id: "eid6022", tween: [ "transform", "${_nagraph_sym}", "translateY", '-288.32405px', { fromValue: '-288.32405px'}], position: 8516, duration: 0 },
            { id: "eid2308", tween: [ "transform", "${_mapwhole_sym}", "scaleX", '2.57599', { fromValue: '1'}], position: 1250, duration: 500, easing: "easeOutSine" },
            { id: "eid3664", tween: [ "transform", "${_mapwhole_sym}", "scaleX", '1', { fromValue: '2.57599'}], position: 2377, duration: 500, easing: "easeOutSine" },
            { id: "eid4206", tween: [ "transform", "${_mapwhole_sym}", "scaleX", '3.1347', { fromValue: '1'}], position: 4341, duration: 500, easing: "easeOutSine" },
            { id: "eid4207", tween: [ "transform", "${_mapwhole_sym}", "scaleX", '1', { fromValue: '3.1347'}], position: 5468, duration: 500, easing: "easeOutSine" },
            { id: "eid4514", tween: [ "transform", "${_mapwhole_sym}", "scaleX", '2.57599', { fromValue: '1'}], position: 7500, duration: 500, easing: "easeOutSine" },
            { id: "eid4515", tween: [ "transform", "${_mapwhole_sym}", "scaleX", '1', { fromValue: '2.57599'}], position: 8627, duration: 500, easing: "easeOutSine" },
            { id: "eid4606", tween: [ "transform", "${_mapwhole_sym}", "scaleX", '3.1073', { fromValue: '1'}], position: 10250, duration: 500, easing: "easeOutSine" },
            { id: "eid4607", tween: [ "transform", "${_mapwhole_sym}", "scaleX", '1', { fromValue: '3.1073'}], position: 11377, duration: 500, easing: "easeOutSine" },
            { id: "eid4693", tween: [ "transform", "${_mapwhole_sym}", "scaleX", '4.00684', { fromValue: '1'}], position: 13250, duration: 500, easing: "easeOutSine" },
            { id: "eid4697", tween: [ "transform", "${_mapwhole_sym}", "scaleX", '1', { fromValue: '4.00684'}], position: 14377, duration: 500, easing: "easeOutSine" },
            { id: "eid4953", tween: [ "transform", "${_mapwhole_sym}", "scaleX", '3.62143', { fromValue: '1'}], position: 16750, duration: 500, easing: "easeOutSine" },
            { id: "eid4957", tween: [ "transform", "${_mapwhole_sym}", "scaleX", '1', { fromValue: '3.62143'}], position: 17877, duration: 500, easing: "easeOutSine" },
            { id: "eid3876", tween: [ "style", "${_asiagraph_sym}", "opacity", '0', { fromValue: '1'}], position: 2377, duration: 258 },
            { id: "eid2306", tween: [ "transform", "${_mapwhole_sym}", "translateX", '-533.86334px', { fromValue: '0px'}], position: 1250, duration: 500, easing: "easeOutSine" },
            { id: "eid3663", tween: [ "transform", "${_mapwhole_sym}", "translateX", '0px', { fromValue: '-533.86334px'}], position: 2377, duration: 500, easing: "easeOutSine" },
            { id: "eid4202", tween: [ "transform", "${_mapwhole_sym}", "translateX", '-51.31552px', { fromValue: '0px'}], position: 4341, duration: 500, easing: "easeOutSine" },
            { id: "eid4203", tween: [ "transform", "${_mapwhole_sym}", "translateX", '0px', { fromValue: '-51.31552px'}], position: 5468, duration: 500, easing: "easeOutSine" },
            { id: "eid4510", tween: [ "transform", "${_mapwhole_sym}", "translateX", '668.99465px', { fromValue: '0px'}], position: 7500, duration: 500, easing: "easeOutSine" },
            { id: "eid4511", tween: [ "transform", "${_mapwhole_sym}", "translateX", '0px', { fromValue: '668.99465px'}], position: 8627, duration: 500, easing: "easeOutSine" },
            { id: "eid4602", tween: [ "transform", "${_mapwhole_sym}", "translateX", '573.73166px', { fromValue: '0px'}], position: 10250, duration: 500, easing: "easeOutSine" },
            { id: "eid4603", tween: [ "transform", "${_mapwhole_sym}", "translateX", '0px', { fromValue: '573.73166px'}], position: 11377, duration: 500, easing: "easeOutSine" },
            { id: "eid4694", tween: [ "transform", "${_mapwhole_sym}", "translateX", '-1260.10672px', { fromValue: '0px'}], position: 13250, duration: 500, easing: "easeOutSine" },
            { id: "eid4698", tween: [ "transform", "${_mapwhole_sym}", "translateX", '0px', { fromValue: '-1260.10672px'}], position: 14377, duration: 500, easing: "easeOutSine" },
            { id: "eid4954", tween: [ "transform", "${_mapwhole_sym}", "translateX", '-170.18625px', { fromValue: '0px'}], position: 16750, duration: 500, easing: "easeOutSine" },
            { id: "eid4958", tween: [ "transform", "${_mapwhole_sym}", "translateX", '0px', { fromValue: '-170.18625px'}], position: 17877, duration: 500, easing: "easeOutSine" },
            { id: "eid6594", tween: [ "style", "${_ocgraph_sym}", "display", 'block', { fromValue: 'none'}], position: 13750, duration: 0 },
            { id: "eid3848", tween: [ "style", "${_closeasia_btn}", "opacity", '1', { fromValue: '0'}], position: 1871, duration: 258 },
            { id: "eid3873", tween: [ "style", "${_closeasia_btn}", "opacity", '0', { fromValue: '1'}], position: 2377, duration: 258 },
            { id: "eid4703", tween: [ "style", "${_closeoc_btn}", "display", 'block', { fromValue: 'none'}], position: 13871, duration: 0 },
            { id: "eid4704", tween: [ "style", "${_closeoc_btn}", "display", 'none', { fromValue: 'block'}], position: 14877, duration: 0 },
            { id: "eid3985", tween: [ "style", "${_closeasia_btn}", "display", 'block', { fromValue: 'none'}], position: 1871, duration: 0 },
            { id: "eid3986", tween: [ "style", "${_closeasia_btn}", "display", 'none', { fromValue: 'block'}], position: 2877, duration: 0 },
            { id: "eid6023", tween: [ "style", "${_nagraph_sym}", "opacity", '0', { fromValue: '1'}], position: 8764, duration: 258 },
            { id: "eid4644", tween: [ "style", "${_closesa_btn}", "display", 'block', { fromValue: 'none'}], position: 10871, duration: 0 },
            { id: "eid4645", tween: [ "style", "${_closesa_btn}", "display", 'none', { fromValue: 'block'}], position: 11877, duration: 0 },
            { id: "eid6595", tween: [ "style", "${_ocgraph_sym}", "opacity", '0', { fromValue: '1'}], position: 14256, duration: 258 },
            { id: "eid5388", tween: [ "style", "${_afgraph_sym}", "display", 'block', { fromValue: 'none'}], position: 4962, duration: 0 },
            { id: "eid5581", tween: [ "transform", "${_afgraph_sym}", "translateY", '-283.69443px', { fromValue: '-283.69443px'}], position: 5220, duration: 0 },
            { id: "eid2697", tween: [ "style", "${_asiagraph_sym}", "display", 'block', { fromValue: 'none'}], position: 1871, duration: 0 },
            { id: "eid5337", tween: [ "style", "${_asiagraph_sym}", "display", 'none', { fromValue: 'block'}], position: 2635, duration: 0 },
            { id: "eid5191", tween: [ "transform", "${_afgraph_sym}", "translateX", '-14.2778px', { fromValue: '-27.2778px'}], position: 4962, duration: 258 },
            { id: "eid4642", tween: [ "style", "${_closesa_btn}", "opacity", '1', { fromValue: '0'}], position: 10871, duration: 258 },
            { id: "eid4643", tween: [ "style", "${_closesa_btn}", "opacity", '0', { fromValue: '1'}], position: 11377, duration: 258 },
            { id: "eid3419", tween: [ "transform", "${_asiagraph_sym}", "translateX", '-363.37749px', { fromValue: '-322.73624px'}], position: 1871, duration: 258 },
            { id: "eid4064", tween: [ "color", "${_closeasia_btn}", "color", 'rgba(0,0,0,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(95,95,95,1.00)'}], position: 2377, duration: 0 }         ]
      }
   }
},
"map_sym": {
   version: "0.1.4",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {"dom":[{"transform":[[-680.90056,-220.89397],null,null,[0.38824,0.38824]],"className":"stage_map_id","id":"map","rect":[-10.999986,-119.244593,2262,1113],"type":"image","fill":["rgba(0,0,0,0)","images/map.png"]}],"symbolInstances":[]},
   states: {
      "Base State": {
         "${_map}": [
            ["transform", "scaleX", '0.38824'],
            ["transform", "translateX", '-680.90056px'],
            ["transform", "scaleY", '0.38824'],
            ["transform", "translateY", '-220.89397px']
         ],
         "${symbolSelector}": [
            ["style", "height", '432.11112px'],
            ["style", "width", '878.19888px']
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
         ]
      }
   }
},
"europetxt_sym": {
   version: "0.1.4",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {"dom":[{"id":"europe_txt","className":"stage_Text_id","type":"text","rect":[-410.367157,-212.34375,105,50],"text":"Europe","align":"center","font":["Armata",20,"rgba(93,30,156,1.00)","normal","none",""],"transform":[[410.36717,212.34375]]}],"symbolInstances":[]},
   states: {
      "Base State": {
         "${_europe_txt}": [
            ["transform", "translateX", '410px'],
            ["color", "color", 'rgba(93,30,156,1.00)'],
            ["style", "opacity", '0'],
            ["style", "width", '105px'],
            ["style", "text-align", 'center'],
            ["style", "height", '50px'],
            ["style", "font-family", 'Armata'],
            ["transform", "translateY", '195.81248px'],
            ["style", "font-size", '20px']
         ],
         "${symbolSelector}": [
            ["style", "height", '50px'],
            ["style", "width", '105px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 571.62109375,
         autoPlay: true,
         labels: {

         },
         timeline: [
            { id: "eid8", tween: [ "style", "${_europe_txt}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 571, easing: "swing" },
            { id: "eid6", tween: [ "transform", "${_europe_txt}", "translateY", '212.34375px', { fromValue: '195.81248px'}], position: 0, duration: 571, easing: "swing" }         ]
      }
   }
},
"natxt_sym": {
   version: "0.1.4",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {"dom":[{"id":"europe_txt","className":"stage_Text_id","type":"text","rect":[-410.367157,-212.34375,105,50],"text":"North America","align":"center","font":["Armata",20,"rgba(93,30,156,1.00)","normal","none",""],"transform":[[410.36717,212.34375]]}],"symbolInstances":[]},
   states: {
      "Base State": {
         "${_europe_txt}": [
            ["transform", "translateX", '410px'],
            ["color", "color", 'rgba(93,30,156,1.00)'],
            ["style", "opacity", '0'],
            ["style", "width", '105px'],
            ["style", "text-align", 'center'],
            ["style", "height", '50px'],
            ["style", "font-family", 'Armata'],
            ["transform", "translateY", '195.81248px'],
            ["style", "font-size", '20px']
         ],
         "${symbolSelector}": [
            ["style", "height", '50px'],
            ["style", "width", '105px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 571.62109375,
         autoPlay: true,
         labels: {

         },
         timeline: [
            { id: "eid8", tween: [ "style", "${_europe_txt}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 571, easing: "swing" },
            { id: "eid10", tween: [ "style", "${_europe_txt}", "width", '195px', { fromValue: '195px'}], position: 0, duration: 0 },
            { id: "eid12", tween: [ "color", "${_europe_txt}", "color", 'rgba(19,51,100,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(19,51,100,1.00)'}], position: 0, duration: 0 },
            { id: "eid6", tween: [ "transform", "${_europe_txt}", "translateY", '212.34375px', { fromValue: '195.81248px'}], position: 0, duration: 571, easing: "swing" }         ]
      }
   }
},
"aftxt_sym": {
   version: "0.1.4",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {"dom":[{"id":"europe_txt","className":"stage_Text_id","type":"text","rect":[-410.367157,-212.34375,105,50],"text":"Africa","align":"center","font":["Armata",20,"rgba(93,30,156,1.00)","normal","none",""],"transform":[[410.36717,212.34375]]}],"symbolInstances":[]},
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '50px'],
            ["style", "width", '105px']
         ],
         "${_europe_txt}": [
            ["transform", "translateX", '410px'],
            ["color", "color", 'rgba(93,30,156,1.00)'],
            ["style", "opacity", '0'],
            ["style", "width", '105px'],
            ["style", "text-align", 'center'],
            ["style", "height", '50px'],
            ["style", "font-family", 'Armata'],
            ["transform", "translateY", '195.81248px'],
            ["style", "font-size", '20px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 571.62109375,
         autoPlay: true,
         labels: {

         },
         timeline: [
            { id: "eid8", tween: [ "style", "${_europe_txt}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 571, easing: "swing" },
            { id: "eid10", tween: [ "style", "${_europe_txt}", "width", '195px', { fromValue: '195px'}], position: 0, duration: 0 },
            { id: "eid6", tween: [ "transform", "${_europe_txt}", "translateY", '212.34375px', { fromValue: '195.81248px'}], position: 0, duration: 571, easing: "swing" },
            { id: "eid13", tween: [ "color", "${_europe_txt}", "color", 'rgba(95,63,1,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(157,103,0,1.00)'}], position: 0, duration: 0 }         ]
      }
   }
},
"austxt_sym": {
   version: "0.1.4",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {"dom":[{"id":"europe_txt","className":"stage_Text_id","type":"text","rect":[-410.367157,-212.34375,105,50],"text":"Oceania","align":"center","font":["Armata",20,"rgba(93,30,156,1.00)","normal","none",""],"transform":[[364.99999,212.34375]]}],"symbolInstances":[]},
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '50px'],
            ["style", "width", '105px']
         ],
         "${_europe_txt}": [
            ["transform", "translateX", '364.99999px'],
            ["color", "color", 'rgba(93,30,156,1.00)'],
            ["style", "opacity", '0'],
            ["style", "width", '105px'],
            ["style", "text-align", 'center'],
            ["style", "height", '50px'],
            ["style", "font-family", 'Armata'],
            ["transform", "translateY", '205.30468px'],
            ["style", "font-size", '20px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 571.62109375,
         autoPlay: true,
         labels: {

         },
         timeline: [
            { id: "eid8", tween: [ "style", "${_europe_txt}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 571, easing: "swing" },
            { id: "eid10", tween: [ "style", "${_europe_txt}", "width", '195px', { fromValue: '195px'}], position: 0, duration: 0 },
            { id: "eid13", tween: [ "color", "${_europe_txt}", "color", 'rgba(33,110,46,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(157,103,0,1.00)'}], position: 0, duration: 0 },
            { id: "eid6", tween: [ "transform", "${_europe_txt}", "translateY", '224.30467px', { fromValue: '205.30468px'}], position: 0, duration: 571, easing: "swing" }         ]
      }
   }
},
"asiatxt_sym": {
   version: "0.1.4",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {"dom":[{"id":"europe_txt","className":"stage_Text_id","type":"text","rect":[-410.367157,-212.34375,105,50],"text":"Asia","align":"center","font":["Armata",20,"rgba(93,30,156,1.00)","normal","none",""],"transform":[[410.36717,212.34375]]}],"symbolInstances":[]},
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '50px'],
            ["style", "width", '105px']
         ],
         "${_europe_txt}": [
            ["transform", "translateX", '410px'],
            ["color", "color", 'rgba(93,30,156,1.00)'],
            ["style", "opacity", '0'],
            ["style", "width", '105px'],
            ["style", "text-align", 'center'],
            ["style", "height", '50px'],
            ["style", "font-family", 'Armata'],
            ["transform", "translateY", '195.81248px'],
            ["style", "font-size", '20px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 571.62109375,
         autoPlay: true,
         labels: {

         },
         timeline: [
            { id: "eid8", tween: [ "style", "${_europe_txt}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 571, easing: "swing" },
            { id: "eid10", tween: [ "style", "${_europe_txt}", "width", '195px', { fromValue: '195px'}], position: 0, duration: 0 },
            { id: "eid13", tween: [ "color", "${_europe_txt}", "color", 'rgba(59,59,59,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(157,103,0,1.00)'}], position: 0, duration: 0 },
            { id: "eid6", tween: [ "transform", "${_europe_txt}", "translateY", '212.34375px', { fromValue: '195.81248px'}], position: 0, duration: 571, easing: "swing" }         ]
      }
   }
},
"satxt_sym": {
   version: "0.1.4",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {"dom":[{"id":"europe_txt","className":"stage_Text_id","type":"text","rect":[-410.367157,-212.34375,105,50],"text":"South America","align":"center","font":["Armata",20,"rgba(93,30,156,1.00)","normal","none",""],"transform":[[410.36717,212.34375]]}],"symbolInstances":[]},
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '50px'],
            ["style", "width", '105px']
         ],
         "${_europe_txt}": [
            ["transform", "translateX", '410px'],
            ["color", "color", 'rgba(93,30,156,1.00)'],
            ["style", "opacity", '0'],
            ["style", "width", '105px'],
            ["style", "text-align", 'center'],
            ["style", "height", '50px'],
            ["style", "font-family", 'Armata'],
            ["transform", "translateY", '195.81248px'],
            ["style", "font-size", '20px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 571.62109375,
         autoPlay: true,
         labels: {

         },
         timeline: [
            { id: "eid8", tween: [ "style", "${_europe_txt}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 571, easing: "swing" },
            { id: "eid10", tween: [ "style", "${_europe_txt}", "width", '195px', { fromValue: '195px'}], position: 0, duration: 0 },
            { id: "eid13", tween: [ "color", "${_europe_txt}", "color", 'rgba(138,91,0,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(157,103,0,1.00)'}], position: 0, duration: 0 },
            { id: "eid6", tween: [ "transform", "${_europe_txt}", "translateY", '212.34375px', { fromValue: '195.81248px'}], position: 0, duration: 571, easing: "swing" }         ]
      }
   }
},
"asiagraph_sym": {
   version: "0.1.4",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {"dom":[{"id":"as1","className":"symbolStage_asiagraph_sym_as1_id","type":"image","rect":[0,0,282,149],"fill":["rgba(0,0,0,0)","images/as1.png"],"transform":[[267.78508,229.00001],[360]]},{"id":"as2","className":"symbolStage_asiagraph_sym_as2_id","type":"image","rect":[0,0,158,135],"fill":["rgba(0,0,0,0)","images/as2.png"],"transform":[[282.00002,243]]},{"id":"as5","className":"symbolStage_asiagraph_sym_as5_id","type":"image","rect":[0,0,25,42],"fill":["rgba(0,0,0,0)","images/as5.png"],"transform":[[320.99999,336.00001]]},{"id":"as6","className":"symbolStage_asiagraph_sym_as6_id","type":"image","rect":[470.984375,470.85546875,41,60],"fill":["rgba(0,0,0,0)","images/as6.png"],"transform":[[-135.00002,-152.99999]]},{"id":"as4","className":"symbolStage_asiagraph_sym_as4_id","type":"image","rect":[490.515625,437.09375,25,47],"fill":["rgba(0,0,0,0)","images/as4.png"],"transform":[[-168.00001,-106.00001]]},{"id":"as3","className":"symbolStage_asiagraph_sym_as3_id","type":"image","rect":[364,423.3828125,36,69],"fill":["rgba(0,0,0,0)","images/as3.png"],"transform":[[-68,-114.00001]]},{"id":"Rectangle","className":"symbolStage_asiagraph_sym_Rectangle_id","type":"rect","rect":[268.33331298828,377.49997901917,91.360687255859,1.904296875],"fill":["rgba(88,89,90,1.00)",null],"stroke":[0,"rgba(0, 0, 0, 0)","none"],"transform":[[-4]]},{"id":"operaico_sym","className":"symbolStage_asiagraph_sym_operaico_sym_id","type":"rect","rect":[269.000005,379.500018,0,0],"transform":[]},{"id":"nokiaico_sym","className":"symbolStage_asiagraph_sym_nokiaico_sym_id","type":"rect","rect":[283.500009,379.500018,0,0],"transform":[]},{"id":"bbico_sym","className":"symbolStage_asiagraph_sym_bbico_sym_id","type":"rect","rect":[294.499997,379.500018,0,0],"transform":[]},{"id":"appleico_sym","className":"symbolStage_asiagraph_sym_appleico_sym_id","type":"rect","rect":[312,379.500018,0,0],"transform":[]},{"id":"netfrontico_sym","className":"symbolStage_asiagraph_sym_netfrontico_sym_id","type":"rect","rect":[326.333337,379.500018,0,0],"transform":[]},{"id":"otherico_sym","className":"symbolStage_asiagraph_sym_otherico_sym_id","type":"rect","rect":[337.500004,379.500018,0,0],"transform":[]},{"id":"header","className":"Text_id","type":"text","rect":[417,327,433.80078125,31],"text":"Mobile Browser Marketshare","font":["Armata",24,"rgba(65,64,66,1.00)","normal","none",""],"transform":[[169.78122,-70]]},{"id":"TextCopy","className":"Text_id","type":"text","rect":[417,327,433.80078125,31],"text":"Asia","font":["Armata",24,"rgba(144,144,144,1.00)","normal","none",""],"transform":[[169.78122,-38.99999]]},{"id":"opera_txt","className":"symbolStage_asiagraph_sym_Text2_id","type":"text","rect":[587,331,91,16],"opacity":1,"text":"Opera","align":"auto","font":["Armata",13,"rgba(63,215,95,1.00)","normal","none","normal"],"transform":[]},{"id":"operapercent_txt","className":"Text2Copy_id","type":"text","rect":[587,331,91,16],"opacity":1,"text":"xxx","align":"auto","font":["Armata",13,"rgba(144,144,144,1.00)","normal","none","normal"],"transform":[[0,16]]},{"id":"nokiapercent_txt","className":"Text2Copy_id","type":"text","rect":[587,331,91,16],"opacity":1,"text":"xxx","align":"auto","font":["Armata",13,"rgba(144,144,144,1.00)","normal","none","normal"],"transform":[[0,61.99999]]},{"id":"nokia_txt","className":"symbolStage_asiagraph_sym_Text2_id","type":"text","rect":[587,331,91,16],"opacity":1,"text":"Nokia","align":"auto","font":["Armata",13,"rgba(63,215,95,1.00)","normal","none","normal"],"transform":[[0,45.99999]]},{"id":"bb_txt","className":"symbolStage_asiagraph_sym_Text2_id","type":"text","rect":[587,331,91,16],"opacity":1,"text":"BlackBerry","align":"auto","font":["Armata",13,"rgba(63,215,95,1.00)","normal","none","normal"],"transform":[[0,89.99999]]},{"id":"bbpercent_txt","className":"Text2Copy_id","type":"text","rect":[587,331,91,16],"opacity":1,"text":"xxx","align":"auto","font":["Armata",13,"rgba(144,144,144,1.00)","normal","none","normal"],"transform":[[0,105.99999]]},{"id":"otherpercent_txt","className":"Text2Copy_id","type":"text","rect":[587,331,91,16],"opacity":1,"text":"xxx","align":"auto","font":["Armata",13,"rgba(144,144,144,1.00)","normal","none","normal"],"transform":[[135.85937,105.99999]]},{"id":"other_txt","className":"symbolStage_asiagraph_sym_Text2_id","type":"text","rect":[587,331,91,16],"opacity":1,"text":"Other","align":"auto","font":["Armata",13,"rgba(63,215,95,1.00)","normal","none","normal"],"transform":[[135.85937,89.99999]]},{"id":"netfront_txt","className":"symbolStage_asiagraph_sym_Text2_id","type":"text","rect":[587,331,91,16],"opacity":1,"text":"NetFront","align":"auto","font":["Armata",13,"rgba(63,215,95,1.00)","normal","none","normal"],"transform":[[135.85937,45.99999]]},{"id":"netfrontpercent_txt","className":"Text2Copy_id","type":"text","rect":[587,331,91,16],"opacity":1,"text":"xxx","align":"auto","font":["Armata",13,"rgba(144,144,144,1.00)","normal","none","normal"],"transform":[[135.85937,61.99999]]},{"id":"iospercent_txt","className":"Text2Copy_id","type":"text","rect":[587,331,91,16],"opacity":1,"text":"xxx","align":"auto","font":["Armata",13,"rgba(144,144,144,1.00)","normal","none","normal"],"transform":[[135.85937,16]]},{"id":"apple_txt","className":"symbolStage_asiagraph_sym_Text2_id","type":"text","rect":[587,331,91,16],"opacity":1,"text":"iOS","align":"auto","font":["Armata",13,"rgba(63,215,95,1.00)","normal","none","normal"],"transform":[[135.85937]]}],"symbolInstances":[{"id":"operaico_sym","symbolName":"operaico_sym"},{"id":"netfrontico_sym","symbolName":"netfrontico_sym"},{"id":"nokiaico_sym","symbolName":"nokiaico_sy"},{"id":"appleico_sym","symbolName":"appleico_sym"},{"id":"bbico_sym","symbolName":"bbico_sym"},{"id":"otherico_sym","symbolName":"otherico_sym"}]},
   states: {
      "Base State": {
         "${_bbpercent_txt}": [
            ["style", "width", '91px'],
            ["transform", "translateX", '0px'],
            ["style", "height", '16px'],
            ["color", "color", 'rgba(144,144,144,1.00)'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '105.99999px'],
            ["style", "font-size", '13px']
         ],
         "${_as5}": [
            ["style", "-webkit-transform-origin", [310.721,113.3263],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-moz-transform-origin", [310.721,113.3263],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [310.721,113.3263],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [310.721,113.3263],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [310.721,113.3263],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "translateX", '307.35878px'],
            ["transform", "rotateZ", '131deg'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '337.84052px']
         ],
         "${_otherico_sym}": [
            ["style", "clip", [0,12,0,0],{valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}]
         ],
         "${_nokiapercent_txt}": [
            ["style", "font-size", '13px'],
            ["transform", "translateX", '0px'],
            ["color", "color", 'rgba(144,144,144,1.00)'],
            ["style", "height", '16px'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '61.99999px'],
            ["style", "width", '91px']
         ],
         "${_apple_txt}": [
            ["style", "width", '91px'],
            ["transform", "translateX", '135.85937px'],
            ["style", "height", '16px'],
            ["color", "color", 'rgba(83,179,151,1.00)'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '0px'],
            ["style", "font-size", '13px']
         ],
         "${_netfrontpercent_txt}": [
            ["style", "width", '91px'],
            ["transform", "translateX", '135.85937px'],
            ["style", "height", '16px'],
            ["color", "color", 'rgba(144,144,144,1.00)'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '61.99999px'],
            ["style", "font-size", '13px']
         ],
         "${_TextCopy}": [
            ["transform", "translateX", '169.78122px'],
            ["transform", "translateY", '-38.99999px'],
            ["color", "color", 'rgba(144,144,144,1.00)'],
            ["style", "font-family", 'Armata'],
            ["style", "clip", [0,0,31,0],{valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}],
            ["style", "height", '31px']
         ],
         "${symbolSelector}": [
            ["style", "height", '149px'],
            ["style", "width", '282px']
         ],
         "${_nokiaico_sym}": [
            ["style", "clip", [0,12,0,0],{valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}]
         ],
         "${_nokia_txt}": [
            ["style", "width", '91px'],
            ["transform", "translateX", '0px'],
            ["style", "height", '16px'],
            ["color", "color", 'rgba(171,109,169,1.00)'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '45.99999px'],
            ["style", "font-size", '13px']
         ],
         "${_netfrontico_sym}": [
            ["style", "clip", [0,12,0,0],{valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}]
         ],
         "${_otherpercent_txt}": [
            ["style", "font-size", '13px'],
            ["transform", "translateX", '135.85937px'],
            ["color", "color", 'rgba(144,144,144,1.00)'],
            ["style", "height", '16px'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '105.99999px'],
            ["style", "width", '91px']
         ],
         "${_as2}": [
            ["style", "-webkit-transform-origin", [100.0642,123.7471],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-moz-transform-origin", [100.0642,123.7471],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [100.0642,123.7471],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [100.0642,123.7471],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [100.0642,123.7471],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "translateX", '211.48626px'],
            ["transform", "rotateZ", '115deg'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '225.55143px']
         ],
         "${_netfront_txt}": [
            ["style", "font-size", '13px'],
            ["transform", "translateX", '135.85937px'],
            ["color", "color", 'rgba(215,145,63,1.00)'],
            ["style", "height", '16px'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '45.99999px'],
            ["style", "width", '91px']
         ],
         "${_operaico_sym}": [
            ["style", "clip", [0,12,0,0],{valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}]
         ],
         "${_other_txt}": [
            ["style", "width", '91px'],
            ["transform", "translateX", '135.85937px'],
            ["style", "height", '16px'],
            ["color", "color", 'rgba(117,70,139,1.00)'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '89.99999px'],
            ["style", "font-size", '13px']
         ],
         "${_as6}": [
            ["style", "-webkit-transform-origin", [161.3281,128.0664],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-moz-transform-origin", [161.3281,128.0664],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [161.3281,128.0664],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [161.3281,128.0664],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [161.3281,128.0664],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "translateX", '-135.00002px'],
            ["transform", "rotateZ", '445deg'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '-152.99999px']
         ],
         "${_Rectangle}": [
            ["style", "height", '0px'],
            ["color", "background-color", 'rgba(88,89,90,1.00)'],
            ["transform", "translateX", '-4px'],
            ["style", "width", '0px']
         ],
         "${_operapercent_txt}": [
            ["style", "width", '91px'],
            ["transform", "translateX", '0px'],
            ["style", "height", '16px'],
            ["color", "color", 'rgba(144,144,144,1.00)'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '16px'],
            ["style", "font-size", '13px']
         ],
         "${_bb_txt}": [
            ["style", "font-size", '13px'],
            ["transform", "translateX", '0px'],
            ["color", "color", 'rgba(207,204,109,1.00)'],
            ["style", "height", '16px'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '89.99999px'],
            ["style", "width", '91px']
         ],
         "${_as4}": [
            ["style", "-webkit-transform-origin", [346.5312,133.6768],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-moz-transform-origin", [346.5312,133.6768],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [346.5312,133.6768],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [346.5312,133.6768],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [346.5312,133.6768],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "translateX", '-168.00001px'],
            ["transform", "rotateZ", '74deg'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '-106.00001px']
         ],
         "${_header}": [
            ["transform", "translateX", '169.78122px'],
            ["transform", "translateY", '-70px'],
            ["color", "color", 'rgba(65,64,66,1)'],
            ["style", "font-family", 'Armata'],
            ["style", "clip", [0,0,31,0],{valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}],
            ["style", "height", '31px']
         ],
         "${_iospercent_txt}": [
            ["style", "font-size", '13px'],
            ["transform", "translateX", '135.85937px'],
            ["color", "color", 'rgba(144,144,144,1.00)'],
            ["style", "height", '16px'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '16px'],
            ["style", "width", '91px']
         ],
         "${_opera_txt}": [
            ["style", "font-size", '13px'],
            ["transform", "translateX", '0px'],
            ["color", "color", 'rgba(63,215,95,1.00)'],
            ["style", "height", '16px'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '0px'],
            ["style", "width", '91px']
         ],
         "${_bbico_sym}": [
            ["style", "clip", [0,12,0,0],{valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}]
         ],
         "${_appleico_sym}": [
            ["style", "clip", [0,12,0,0],{valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}]
         ],
         "${_as3}": [
            ["style", "-webkit-transform-origin", [279.1775,147.4864],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-moz-transform-origin", [279.1775,147.4864],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [279.1775,147.4864],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [279.1775,147.4864],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [279.1775,147.4864],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "translateX", '-68px'],
            ["transform", "rotateZ", '289deg'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '-114.00001px']
         ],
         "${_as1}": [
            ["style", "-webkit-transform-origin", [50.1989,103.1694],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-moz-transform-origin", [50.1989,103.1694],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50.1989,103.1694],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50.1989,103.1694],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50.1989,103.1694],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "translateX", '281.11823px'],
            ["transform", "rotateZ", '153deg'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '261.33718px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 4983,
         autoPlay: false,
         labels: {
            "play": 250
         },
         timeline: [
            { id: "eid1111", tween: [ "style", "${_nokiaico_sym}", "clip", [0,11,75,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,12,0,0]}], position: 2120, duration: 250, easing: "easeOutSine" },
            { id: "eid1945", tween: [ "style", "${_bbpercent_txt}", "opacity", '1', { fromValue: '0'}], position: 4000, duration: 411 },
            { id: "eid58", tween: [ "style", "${_as5}", "-webkit-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [310.721,113.3263]}], position: 250, duration: 1451, easing: "easeOutCirc" },
            { id: "eid23283", tween: [ "style", "${_as5}", "-moz-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [310.721,113.3263]}], position: 250, duration: 1451, easing: "easeOutCirc" },
            { id: "eid23284", tween: [ "style", "${_as5}", "-ms-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [310.721,113.3263]}], position: 250, duration: 1451, easing: "easeOutCirc" },
            { id: "eid23285", tween: [ "style", "${_as5}", "msTransformOrigin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [310.721,113.3263]}], position: 250, duration: 1451, easing: "easeOutCirc" },
            { id: "eid23286", tween: [ "style", "${_as5}", "-o-transform-origin", [50,50], { valueTemplate: '@@0@@% @@1@@%', fromValue: [310.721,113.3263]}], position: 250, duration: 1451, easing: "easeOutCirc" },
            { id: "eid1965", tween: [ "style", "${_nokia_txt}", "opacity", '1', { fromValue: '0'}], position: 3838, duration: 411 },
            { id: "eid1939", tween: [ "style", "${_netfront_txt}", "opacity", '1', { fromValue: '0'}], position: 4411, duration: 411 },
            { id: "eid42", tween: [ "transform", "${_as2}", "translateY", '243px', { fromValue: '225.55143px'}], position: 250, duration: 1451, easing: "easeOutCirc" },
            { id: "eid1969", tween: [ "style", "${_iospercent_txt}", "opacity", '1', { fromValue: '0'}], position: 4160, duration: 411 },
            { id: "eid1107", tween: [ "style", "${_otherico_sym}", "clip", [0,12,32,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,12,0,0]}], position: 2250, duration: 250, easing: "easeOutSine" },
            { id: "eid313", tween: [ "style", "${_as1}", "opacity", '1', { fromValue: '0'}], position: 250, duration: 656, easing: "easeOutCirc" },
            { id: "eid4089", tween: [ "color", "${_nokia_txt}", "color", 'rgba(171,109,169,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(171,109,169,1.00)'}], position: 4983, duration: 0 },
            { id: "eid63", tween: [ "transform", "${_as6}", "rotateZ", '360deg', { fromValue: '445deg'}], position: 250, duration: 1451, easing: "easeOutCirc" },
            { id: "eid1109", tween: [ "style", "${_bbico_sym}", "clip", [0,13,56,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,12,0,0]}], position: 2000, duration: 250, easing: "easeOutSine" },
            { id: "eid1971", tween: [ "style", "${_bb_txt}", "opacity", '1', { fromValue: '0'}], position: 4000, duration: 411 },
            { id: "eid1429", tween: [ "style", "${_header}", "clip", [0,433,31,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,0,31,0]}], position: 2589, duration: 1160 },
            { id: "eid44", tween: [ "transform", "${_as2}", "rotateZ", '0deg', { fromValue: '115deg'}], position: 250, duration: 1451, easing: "easeOutCirc" },
            { id: "eid60", tween: [ "transform", "${_as5}", "rotateZ", '360deg', { fromValue: '131deg'}], position: 250, duration: 1451, easing: "easeOutCirc" },
            { id: "eid1431", tween: [ "style", "${_TextCopy}", "clip", [0,56,31,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,0,31,0]}], position: 3365, duration: 250 },
            { id: "eid95", tween: [ "transform", "${_as4}", "rotateZ", '360deg', { fromValue: '74deg'}], position: 250, duration: 1451, easing: "easeOutCirc" },
            { id: "eid1963", tween: [ "style", "${_otherpercent_txt}", "opacity", '1', { fromValue: '0'}], position: 4572, duration: 411 },
            { id: "eid4092", tween: [ "color", "${_netfront_txt}", "color", 'rgba(215,145,63,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(215,145,63,1.00)'}], position: 4983, duration: 0 },
            { id: "eid315", tween: [ "style", "${_as2}", "opacity", '1', { fromValue: '0'}], position: 250, duration: 437, easing: "easeOutCirc" },
            { id: "eid1115", tween: [ "style", "${_netfrontico_sym}", "clip", [0,13,73,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,12,0,0]}], position: 2120, duration: 250, easing: "easeOutSine" },
            { id: "eid193", tween: [ "style", "${_as3}", "-webkit-transform-origin", [279.1775,147.4864], { valueTemplate: '@@0@@% @@1@@%', fromValue: [279.1775,147.4864]}], position: 250, duration: 0, easing: "easeOutCirc" },
            { id: "eid23287", tween: [ "style", "${_as3}", "-moz-transform-origin", [279.1775,147.4864], { valueTemplate: '@@0@@% @@1@@%', fromValue: [279.1775,147.4864]}], position: 250, duration: 0, easing: "easeOutCirc" },
            { id: "eid23288", tween: [ "style", "${_as3}", "-ms-transform-origin", [279.1775,147.4864], { valueTemplate: '@@0@@% @@1@@%', fromValue: [279.1775,147.4864]}], position: 250, duration: 0, easing: "easeOutCirc" },
            { id: "eid23289", tween: [ "style", "${_as3}", "msTransformOrigin", [279.1775,147.4864], { valueTemplate: '@@0@@% @@1@@%', fromValue: [279.1775,147.4864]}], position: 250, duration: 0, easing: "easeOutCirc" },
            { id: "eid23290", tween: [ "style", "${_as3}", "-o-transform-origin", [279.1775,147.4864], { valueTemplate: '@@0@@% @@1@@%', fromValue: [279.1775,147.4864]}], position: 250, duration: 0, easing: "easeOutCirc" },
            { id: "eid1947", tween: [ "style", "${_nokiapercent_txt}", "opacity", '1', { fromValue: '0'}], position: 3838, duration: 411 },
            { id: "eid1113", tween: [ "style", "${_operaico_sym}", "clip", [0,12,54,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,12,0,0]}], position: 2000, duration: 250, easing: "easeOutSine" },
            { id: "eid4091", tween: [ "color", "${_apple_txt}", "color", 'rgba(83,179,151,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(83,179,151,1.00)'}], position: 4983, duration: 0 },
            { id: "eid19", tween: [ "transform", "${_as1}", "translateY", '229px', { fromValue: '261.33718px'}], position: 250, duration: 1451, easing: "easeOutCirc" },
            { id: "eid1105", tween: [ "style", "${_appleico_sym}", "clip", [0,12,85,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,12,0,0]}], position: 2250, duration: 250, easing: "easeOutSine" },
            { id: "eid307", tween: [ "style", "${_as6}", "opacity", '1', { fromValue: '0'}], position: 250, duration: 388, easing: "easeOutCirc" },
            { id: "eid1973", tween: [ "style", "${_netfrontpercent_txt}", "opacity", '1', { fromValue: '0'}], position: 4411, duration: 411 },
            { id: "eid40", tween: [ "transform", "${_as2}", "translateX", '282.00002px', { fromValue: '211.48626px'}], position: 250, duration: 1451, easing: "easeOutCirc" },
            { id: "eid195", tween: [ "transform", "${_as3}", "rotateZ", '0deg', { fromValue: '289deg'}], position: 250, duration: 1451, easing: "easeOutCirc" },
            { id: "eid17", tween: [ "transform", "${_as1}", "translateX", '267.85651px', { fromValue: '281.11823px'}], position: 250, duration: 1451, easing: "easeOutCirc" },
            { id: "eid15", tween: [ "transform", "${_as1}", "rotateZ", '360deg', { fromValue: '153deg'}], position: 250, duration: 1451, easing: "easeOutCirc" },
            { id: "eid1943", tween: [ "style", "${_operapercent_txt}", "opacity", '1', { fromValue: '0'}], position: 3749, duration: 411 },
            { id: "eid309", tween: [ "style", "${_as3}", "opacity", '1', { fromValue: '0'}], position: 250, duration: 388, easing: "easeOutCirc" },
            { id: "eid1941", tween: [ "style", "${_opera_txt}", "opacity", '1', { fromValue: '0'}], position: 3749, duration: 411 },
            { id: "eid1967", tween: [ "style", "${_apple_txt}", "opacity", '1', { fromValue: '0'}], position: 4160, duration: 411 },
            { id: "eid80", tween: [ "style", "${_as4}", "-webkit-transform-origin", [346.5312,133.6768], { valueTemplate: '@@0@@% @@1@@%', fromValue: [346.5312,133.6768]}], position: 250, duration: 0, easing: "easeOutCirc" },
            { id: "eid23291", tween: [ "style", "${_as4}", "-moz-transform-origin", [346.5312,133.6768], { valueTemplate: '@@0@@% @@1@@%', fromValue: [346.5312,133.6768]}], position: 250, duration: 0, easing: "easeOutCirc" },
            { id: "eid23292", tween: [ "style", "${_as4}", "-ms-transform-origin", [346.5312,133.6768], { valueTemplate: '@@0@@% @@1@@%', fromValue: [346.5312,133.6768]}], position: 250, duration: 0, easing: "easeOutCirc" },
            { id: "eid23293", tween: [ "style", "${_as4}", "msTransformOrigin", [346.5312,133.6768], { valueTemplate: '@@0@@% @@1@@%', fromValue: [346.5312,133.6768]}], position: 250, duration: 0, easing: "easeOutCirc" },
            { id: "eid23294", tween: [ "style", "${_as4}", "-o-transform-origin", [346.5312,133.6768], { valueTemplate: '@@0@@% @@1@@%', fromValue: [346.5312,133.6768]}], position: 250, duration: 0, easing: "easeOutCirc" },
            { id: "eid1017", tween: [ "style", "${_Rectangle}", "height", '2px', { fromValue: '0px'}], position: 1701, duration: 299 },
            { id: "eid1949", tween: [ "style", "${_other_txt}", "opacity", '1', { fromValue: '0'}], position: 4572, duration: 411 },
            { id: "eid113", tween: [ "transform", "${_as5}", "translateX", '309.35878px', { fromValue: '307.35878px'}], position: 250, duration: 0, easing: "easeOutCirc" },
            { id: "eid1019", tween: [ "style", "${_Rectangle}", "width", '91px', { fromValue: '0px'}], position: 1701, duration: 299 },
            { id: "eid4093", tween: [ "color", "${_other_txt}", "color", 'rgba(117,70,139,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(117,70,139,1.00)'}], position: 4983, duration: 0 },
            { id: "eid317", tween: [ "style", "${_as5}", "opacity", '1', { fromValue: '0'}], position: 250, duration: 656, easing: "easeOutCirc" },
            { id: "eid311", tween: [ "style", "${_as4}", "opacity", '1', { fromValue: '0'}], position: 250, duration: 500, easing: "easeOutCirc" },
            { id: "eid4090", tween: [ "color", "${_bb_txt}", "color", 'rgba(207,204,109,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(207,204,109,1.00)'}], position: 4983, duration: 0 },
            { id: "eid114", tween: [ "transform", "${_as5}", "translateY", '335.84052px', { fromValue: '337.84052px'}], position: 250, duration: 0, easing: "easeOutCirc" }         ]
      }
   }
},
"mapwhole_sym": {
   version: "0.1.4",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {"dom":[{"id":"title_txt","className":"stage_Text_id","type":"text","rect":[38.000014,-10.40232,557.1796875,50],"text":"Mobile OS Market Share","font":["Armata",36,"rgba(65,64,66,1.00)","normal","none",""],"transform":[[-29.69922,10.40232]]},{"id":"title_txtCopy","className":"stage_Text_id","type":"text","rect":[38.000014,-10.40232,557.1796875,50],"opacity":0.13126070205479,"text":"Mobile OS Market Share","font":["Armata",36,"rgba(98,98,98,1.00)","normal","none",""],"transform":[[-34.67893,15.67968],[180],[53],[-1,-0.53]]},{"id":"subtitle_txt","className":"stage_Text_id","type":"text","rect":[38.000014,-10.40232,557.1796875,50],"text":"Top 5 Mobile Operating Systems Used Worldwide","font":["Armata",12.5,"rgba(144,144,144,1.00)","normal","none",""],"transform":[[-30,56]]},{"id":"source_txt","className":"stage_Text_id","type":"text","rect":[38.000014,-10.40232,223,15],"text":"Source: http://gs.statcounter.com","align":"right","font":["Armata",10,"rgba(144,144,144,1.00)","normal","none",""],"transform":[[615.00001,562.99998]]},{"id":"edge_txt","className":"stage_Text_id","type":"text","rect":[38.000014,-10.40232,223,15],"text":"Made with Adobe Edge","align":"right","font":["Armata",10,"rgba(144,144,144,1.00)","normal","none",""],"transform":[[614.49998,549.72221]]},{"id":"map2","className":"symbolStage_mapwhole_sym_map2_id","type":"image","rect":[731.08984375,253.5625,2259,1110],"fill":["rgba(0,0,0,0)","images/map.jpg"],"transform":[[-1421.5085,-501.29372],null,null,[0.38866,0.38866]]}],"symbolInstances":[]},
   states: {
      "Base State": {
         "${_source_txt}": [
            ["style", "font-size", '10px'],
            ["transform", "translateX", '615.00001px'],
            ["style", "text-align", 'right'],
            ["style", "height", '15px'],
            ["color", "color", 'rgba(144,144,144,1.00)'],
            ["style", "font-family", 'Armata'],
            ["transform", "translateY", '562.99998px'],
            ["style", "width", '223px']
         ],
         "${_edge_txt}": [
            ["style", "width", '223px'],
            ["style", "text-align", 'right'],
            ["transform", "translateX", '614.49998px'],
            ["color", "color", 'rgba(144,144,144,1.00)'],
            ["style", "height", '15px'],
            ["style", "font-family", 'Armata'],
            ["transform", "translateY", '549.72221px'],
            ["style", "font-size", '10px']
         ],
         "${symbolSelector}": [
            ["style", "height", '567.59768px'],
            ["style", "width", '878.19888px']
         ],
         "${_title_txtCopy}": [
            ["transform", "translateX", '-34.67893px'],
            ["transform", "rotateZ", '180deg'],
            ["color", "color", 'rgba(98,98,98,1.00)'],
            ["style", "opacity", '0.13126070205479'],
            ["style", "font-size", '36px'],
            ["transform", "scaleY", '-0.53'],
            ["transform", "skewX", '53deg'],
            ["style", "height", '50px'],
            ["style", "font-family", 'Armata'],
            ["transform", "translateY", '15.67968px'],
            ["transform", "scaleX", '-1']
         ],
         "${_subtitle_txt}": [
            ["transform", "translateX", '-30px'],
            ["color", "color", 'rgba(144,144,144,1.00)'],
            ["style", "height", '50px'],
            ["style", "font-family", 'Armata'],
            ["transform", "translateY", '56px'],
            ["style", "font-size", '12.5px']
         ],
         "${_title_txt}": [
            ["transform", "translateX", '-29.69922px'],
            ["color", "color", 'rgba(65,64,66,1.00)'],
            ["style", "height", '50px'],
            ["style", "font-family", 'Armata'],
            ["transform", "translateY", '10.40232px'],
            ["style", "font-size", '36px']
         ],
         "${_map2}": [
            ["transform", "scaleX", '0.38866'],
            ["transform", "translateX", '-1421.5085px'],
            ["transform", "scaleY", '0.38866'],
            ["transform", "translateY", '-501.29372px']
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
         ]
      }
   }
},
"otherico_sym": {
   version: "0.1.4",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {"dom":[{"transform":[[182.32157,86.50002]],"rect":[-178.33334750586,-87.00003898083,2,26],"className":"Rectangle2Copy_id","id":"Rectangle2Copy3","stroke":[0,"rgba(0, 0, 0, 0)","none"],"type":"rect","fill":["rgba(88,88,90,1.00)",null]},{"rect":[225.32873135156,-11.500018,12,12],"id":"other_ico2","transform":[[-225.49999,31.50002],[0,0],[0],[1,1]],"type":"image","fill":["rgba(0,0,0,0)","images/other_ico.png"]}],"symbolInstances":[]},
   states: {
      "Base State": {
         "${_Rectangle2Copy3}": [
            ["color", "background-color", 'rgba(88,88,90,1.00)'],
            ["transform", "translateX", '182.32157px'],
            ["style", "height", '26px'],
            ["transform", "translateY", '86.50002px'],
            ["style", "width", '2px']
         ],
         "${_other_ico2}": [
            ["transform", "translateX", '-225.49999px'],
            ["transform", "translateY", '31.50002px']
         ],
         "${symbolSelector}": [
            ["style", "height", '32.000002px'],
            ["style", "width", '12px']
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
         ]
      }
   }
},
"netfrontico_sym": {
   version: "0.1.4",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {"dom":[{"type":"rect","rect":[-167.16668050586,-87.00003898083,2,68],"transform":[[169.14057,86.50002]],"className":"Rectangle2Copy_id","id":"Rectangle2Copy4","opacity":1,"stroke":[0,"rgba(0, 0, 0, 0)","none"],"fill":["rgba(88,88,90,1.00)",null]},{"rect":[145.56766397656,77.499982,13,9],"id":"netfront_ico","transform":[[-145.66666,-13.66664]],"type":"image","fill":["rgba(0,0,0,0)","images/netfront_ico.png"]}],"symbolInstances":[]},
   states: {
      "Base State": {
         "${_Rectangle2Copy4}": [
            ["color", "background-color", 'rgba(88,88,90,1.00)'],
            ["transform", "translateX", '169.14057px'],
            ["style", "height", '68px'],
            ["transform", "translateY", '86.50002px'],
            ["style", "width", '2px']
         ],
         "${_netfront_ico}": [
            ["transform", "translateX", '-145.66666px'],
            ["transform", "translateY", '-13.66664px']
         ],
         "${symbolSelector}": [
            ["style", "height", '72.833342px'],
            ["style", "width", '13px']
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
         ]
      }
   }
},
"appleico_sym": {
   version: "0.1.4",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {"dom":[{"transform":[[155.83331,86.50002]],"rect":[-152.83334350586,-87.00003898083,2,75],"className":"Rectangle2Copy5_id","id":"Rectangle2Copy5","stroke":[0,"rgba(0, 0, 0, 0)","none"],"type":"rect","fill":["rgba(88,88,90,1.00)",null]},{"rect":[42.70050048828,90.95830261768,12,14],"id":"apple_ico","transform":[[-43,-20]],"type":"image","fill":["rgba(0,0,0,0)","images/apple_ico.png"]}],"symbolInstances":[]},
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '84.499983px'],
            ["style", "width", '12px']
         ],
         "${_apple_ico}": [
            ["transform", "translateX", '-43px'],
            ["transform", "translateY", '-20px']
         ],
         "${_Rectangle2Copy5}": [
            ["color", "background-color", 'rgba(88,88,90,1.00)'],
            ["transform", "translateX", '155.83331px'],
            ["style", "height", '75px'],
            ["transform", "translateY", '86.50002px'],
            ["style", "width", '2px']
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
         ]
      }
   }
},
"bbico_sym": {
   version: "0.1.4",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {"dom":[{"id":"Rectangle2Copy2","className":"Rectangle2Copy_id","type":"rect","rect":[-135.33334050586,-87.00003898083,2,47],"fill":["rgba(88,88,90,1.00)",null],"stroke":[0,"rgba(0, 0, 0, 0)","none"],"transform":[[140.42312,86.50002]]},{"id":"bb_ico3","className":"symbolStage_bbico_sym_bb_ico3_id","type":"image","rect":[178.12042536328,107.69981873096,13,9],"fill":["rgba(0,0,0,0)","images/bb_ico.png"],"transform":[[-178.5,-60.66664]]}],"symbolInstances":[]},
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '55.833341px'],
            ["style", "width", '13px']
         ],
         "${_Rectangle2Copy2}": [
            ["color", "background-color", 'rgba(88,88,90,1.00)'],
            ["transform", "translateX", '140.42312px'],
            ["style", "height", '47px'],
            ["transform", "translateY", '86.50002px'],
            ["style", "width", '2px']
         ],
         "${_bb_ico3}": [
            ["transform", "translateX", '-178.5px'],
            ["transform", "translateY", '-60.66664px']
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
         ]
      }
   }
},
"nokiaico_sy": {
   version: "0.1.4",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {"dom":[{"transform":[[128.24216,86.50002]],"rect":[-124.33335250586,-87.00003898083,2,68],"className":"Rectangle2Copy_id","id":"Rectangle2Copy","stroke":[0,"rgba(0, 0, 0, 0)","none"],"type":"rect","fill":["rgba(88,88,90,1.00)",null]},{"rect":[104.31572586328,62.11064636768,11,8],"id":"nokia_ico","transform":[[-104.49999,5.16666]],"type":"image","fill":["rgba(0,0,0,0)","images/nokia_ico.png"]}],"symbolInstances":[]},
   states: {
      "Base State": {
         "${_nokia_ico}": [
            ["transform", "translateX", '-104.49999px'],
            ["transform", "translateY", '5.16666px']
         ],
         "${_Rectangle2Copy}": [
            ["color", "background-color", 'rgba(88,88,90,1.00)'],
            ["transform", "translateX", '128.24216px'],
            ["style", "height", '68px'],
            ["transform", "translateY", '86.50002px'],
            ["style", "width", '2px']
         ],
         "${symbolSelector}": [
            ["style", "height", '74.666642px'],
            ["style", "width", '11px']
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
         ]
      }
   }
},
"operaico_sym": {
   version: "0.1.4",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {"dom":[{"transform":[[114.93488,86.50002]],"rect":[-109.83334850586,-87.00003898083,2,42],"className":"symbolStage_asiagraph_sym_Rectangle2_id","id":"Rectangle2","stroke":[0,"rgba(0, 0, 0, 0)","none"],"type":"rect","fill":["rgba(88,88,90,1.00)",null]},{"rect":[199.03057361328,51.76231873096,12,13],"id":"opera_ico","transform":[[-199,-11]],"type":"image","fill":["rgba(0,0,0,0)","images/opera_ico.png"]}],"symbolInstances":[]},
   states: {
      "Base State": {
         "${_Rectangle2}": [
            ["color", "background-color", 'rgba(88,88,90,1.00)'],
            ["transform", "translateX", '114.93488px'],
            ["style", "height", '42px'],
            ["transform", "translateY", '86.50002px'],
            ["style", "width", '2px']
         ],
         "${symbolSelector}": [
            ["style", "height", '53.499982px'],
            ["style", "width", '12px']
         ],
         "${_opera_ico}": [
            ["transform", "translateX", '-199px'],
            ["transform", "translateY", '-11px']
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
         ]
      }
   }
},
"afgraph_sym": {
   version: "0.1.4",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {"dom":[{"id":"af12","className":"symbolStage_eugraph_sym_af12_id","type":"image","rect":[0,0,308,295],"fill":["rgba(0,0,0,0)","images/af12.png"],"transform":[[267.99999,220.5664]]},{"id":"boltico_sym","className":"symbolStage_eugraph_sym_boltico_sym_id","type":"rect","rect":[674.19921875,311.11328125,0,0],"transform":[[-364,68]]},{"id":"af22","className":"symbolStage_eugraph_sym_af22_id","type":"image","rect":[0,0,98,133],"fill":["rgba(0,0,0,0)","images/af22.png"],"transform":[[267.99999,220.5664]]},{"id":"af32","className":"symbolStage_eugraph_sym_af32_id","type":"image","rect":[0,0,17,25],"fill":["rgba(0,0,0,0)","images/af32.png"],"transform":[[295,352.99999]]},{"id":"af42","className":"symbolStage_eugraph_sym_af42_id","type":"image","rect":[0,0,16,19],"fill":["rgba(0,0,0,0)","images/af42.png"],"transform":[[307.99999,360]]},{"id":"af52","className":"symbolStage_eugraph_sym_af52_id","type":"image","rect":[0,0,15,10],"fill":["rgba(0,0,0,0)","images/af52.png"],"transform":[[267.99999,220.5664]]},{"id":"af62","className":"symbolStage_eugraph_sym_af62_id","type":"image","rect":[0,0,19,27],"fill":["rgba(0,0,0,0)","images/af62.png"],"transform":[[336.00001,350.99999]]},{"id":"operaico_sym","className":"symbolStage_asiagraph_sym_operaico_sym_id","type":"rect","rect":[269.000005,379.500018,0,0],"transform":[[-1,-1]]},{"id":"nokiaico_sym","className":"symbolStage_asiagraph_sym_nokiaico_sym_id","type":"rect","rect":[283.500009,379.500018,0,0],"transform":[]},{"id":"appleico_sym","className":"symbolStage_asiagraph_sym_appleico_sym_id","type":"rect","rect":[312,379.500018,0,0],"transform":[[-16]]},{"id":"netfrontico_sym","className":"symbolStage_asiagraph_sym_netfrontico_sym_id","type":"rect","rect":[326.333337,379.500018,0,0],"transform":[]},{"id":"otherico_sym","className":"symbolStage_asiagraph_sym_otherico_sym_id","type":"rect","rect":[337.500004,379.500018,0,0],"transform":[]},{"id":"header","className":"Text_id","type":"text","rect":[417,327,433.80078125,31],"text":"Mobile Browser Marketshare","font":["Armata",24,"rgba(65,64,66,1.00)","normal","none",""],"transform":[[169.78122,-70]]},{"id":"TextCopy","className":"Text_id","type":"text","rect":[417,327,433.80078125,31],"text":"Africa","font":["Armata",24,"rgba(144,144,144,1.00)","normal","none",""],"transform":[[169.78122,-38.99999]]},{"id":"opera_txt","className":"symbolStage_asiagraph_sym_Text2_id","type":"text","rect":[587,331,91,16],"opacity":1,"text":"Opera","align":"auto","font":["Armata",13,"rgba(63,215,95,1.00)","normal","none","normal"],"transform":[]},{"id":"operapercent_txt","className":"Text2Copy_id","type":"text","rect":[587,331,91,16],"opacity":1,"text":"xxx","align":"auto","font":["Armata",13,"rgba(144,144,144,1.00)","normal","none","normal"],"transform":[[0,16]]},{"id":"nokiapercent_txt","className":"Text2Copy_id","type":"text","rect":[587,331,91,16],"opacity":1,"text":"xxx","align":"auto","font":["Armata",13,"rgba(144,144,144,1.00)","normal","none","normal"],"transform":[[0,61.99999]]},{"id":"nokia_txt","className":"symbolStage_asiagraph_sym_Text2_id","type":"text","rect":[587,331,91,16],"opacity":1,"text":"Nokia","align":"auto","font":["Armata",13,"rgba(63,215,95,1.00)","normal","none","normal"],"transform":[[0,45.99999]]},{"id":"bb_txt","className":"symbolStage_asiagraph_sym_Text2_id","type":"text","rect":[587,331,91,16],"opacity":1,"text":"iOS","align":"auto","font":["Armata",13,"rgba(63,215,95,1.00)","normal","none","normal"],"transform":[[0,89.99999]]},{"id":"bbpercent_txt","className":"Text2Copy_id","type":"text","rect":[587,331,91,16],"opacity":1,"text":"xxx","align":"auto","font":["Armata",13,"rgba(144,144,144,1.00)","normal","none","normal"],"transform":[[0,105.99999]]},{"id":"otherpercent_txt","className":"Text2Copy_id","type":"text","rect":[587,331,91,16],"opacity":1,"text":"xxx","align":"auto","font":["Armata",13,"rgba(144,144,144,1.00)","normal","none","normal"],"transform":[[135.85937,105.99999]]},{"id":"other_txt","className":"symbolStage_asiagraph_sym_Text2_id","type":"text","rect":[587,331,91,16],"opacity":1,"text":"Other","align":"auto","font":["Armata",13,"rgba(63,215,95,1.00)","normal","none","normal"],"transform":[[135.85937,89.99999]]},{"id":"netfront_txt","className":"symbolStage_asiagraph_sym_Text2_id","type":"text","rect":[587,331,91,16],"opacity":1,"text":"NetFront","align":"auto","font":["Armata",13,"rgba(63,215,95,1.00)","normal","none","normal"],"transform":[[135.85937,45.99999]]},{"id":"netfrontpercent_txt","className":"Text2Copy_id","type":"text","rect":[587,331,91,16],"opacity":1,"text":"xxx","align":"auto","font":["Armata",13,"rgba(144,144,144,1.00)","normal","none","normal"],"transform":[[135.85937,61.99999]]},{"id":"iospercent_txt","className":"Text2Copy_id","type":"text","rect":[587,331,91,16],"opacity":1,"text":"xxx","align":"auto","font":["Armata",13,"rgba(144,144,144,1.00)","normal","none","normal"],"transform":[[135.85937,16]]},{"id":"apple_txt","className":"symbolStage_asiagraph_sym_Text2_id","type":"text","rect":[587,331,91,16],"opacity":1,"text":"Bolt","align":"auto","font":["Armata",13,"rgba(63,215,95,1.00)","normal","none","normal"],"transform":[[135.85937]]},{"id":"Rectangle","className":"symbolStage_asiagraph_sym_Rectangle_id","type":"rect","rect":[268.33331298828,377.49997901917,91.360687255859,1.904296875],"fill":["rgba(88,89,90,1.00)",null],"stroke":[0,"rgba(0, 0, 0, 0)","none"],"transform":[[-4]]}],"symbolInstances":[{"id":"operaico_sym","symbolName":"operaico_sym"},{"id":"netfrontico_sym","symbolName":"netfrontico_sym"},{"id":"nokiaico_sym","symbolName":"nokiaico_sy"},{"id":"appleico_sym","symbolName":"appleico_sym"},{"id":"otherico_sym","symbolName":"otherico_sym"},{"id":"boltico_sym","symbolName":"boltico_sym"}]},
   states: {
      "Base State": {
         "${_operaico_sym}": [
            ["style", "clip", [0,12,0,0],{valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}],
            ["transform", "translateX", '-1px'],
            ["transform", "translateY", '-1px']
         ],
         "${_netfront_txt}": [
            ["style", "width", '91px'],
            ["transform", "translateX", '135.85937px'],
            ["color", "color", 'rgba(215,145,63,1.00)'],
            ["style", "height", '16px'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '45.99999px'],
            ["style", "font-size", '13px']
         ],
         "${_otherico_sym}": [
            ["style", "clip", [0,12,0,0],{valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}]
         ],
         "${_boltico_sym}": [
            ["transform", "translateX", '-364px'],
            ["transform", "translateY", '68px'],
            ["style", "clip", [0,12,0,0],{valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}]
         ],
         "${_nokiapercent_txt}": [
            ["style", "width", '91px'],
            ["transform", "translateX", '0px'],
            ["color", "color", 'rgba(144,144,144,1.00)'],
            ["style", "height", '16px'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '61.99999px'],
            ["style", "font-size", '13px']
         ],
         "${_af22}": [
            ["style", "-webkit-transform-origin", [154.626,106.5334],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-moz-transform-origin", [154.626,106.5334],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [154.626,106.5334],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [154.626,106.5334],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [154.626,106.5334],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "translateX", '197.48623px'],
            ["transform", "rotateZ", '115deg'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '203.11783px']
         ],
         "${_netfrontpercent_txt}": [
            ["style", "font-size", '13px'],
            ["transform", "translateX", '135.85937px'],
            ["style", "height", '16px'],
            ["color", "color", 'rgba(144,144,144,1.00)'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '61.99999px'],
            ["style", "width", '91px']
         ],
         "${symbolSelector}": [
            ["style", "height", '149px'],
            ["style", "width", '282px']
         ],
         "${_nokiaico_sym}": [
            ["style", "clip", [0,12,0,0],{valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}],
            ["transform", "translateX", '0px']
         ],
         "${_nokia_txt}": [
            ["style", "font-size", '13px'],
            ["transform", "translateX", '0px'],
            ["style", "height", '16px'],
            ["color", "color", 'rgba(171,109,169,1.00)'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '45.99999px'],
            ["style", "width", '91px']
         ],
         "${_netfrontico_sym}": [
            ["style", "clip", [0,12,0,0],{valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}],
            ["transform", "translateX", '0px'],
            ["transform", "translateY", '0px']
         ],
         "${_otherpercent_txt}": [
            ["style", "width", '91px'],
            ["transform", "translateX", '135.85937px'],
            ["color", "color", 'rgba(144,144,144,1.00)'],
            ["style", "height", '16px'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '105.99999px'],
            ["style", "font-size", '13px']
         ],
         "${_appleico_sym}": [
            ["style", "clip", [0,12,0,0],{valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}],
            ["transform", "translateX", '-16px'],
            ["transform", "translateY", '0px']
         ],
         "${_af12}": [
            ["transform", "translateX", '281.26171px'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '252.90358px'],
            ["transform", "rotateZ", '153deg']
         ],
         "${_bbpercent_txt}": [
            ["style", "font-size", '13px'],
            ["transform", "translateX", '0px'],
            ["style", "height", '16px'],
            ["color", "color", 'rgba(144,144,144,1.00)'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '105.99999px'],
            ["style", "width", '91px']
         ],
         "${_af62}": [
            ["style", "-webkit-transform-origin", [524.2283,65.455],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-moz-transform-origin", [524.2283,65.455],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [524.2283,65.455],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [524.2283,65.455],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [524.2283,65.455],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "translateX", '336.00001px'],
            ["transform", "rotateZ", '445deg'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '350.99999px']
         ],
         "${_opera_txt}": [
            ["style", "width", '91px'],
            ["transform", "translateX", '0px'],
            ["color", "color", 'rgba(63,215,95,1.00)'],
            ["style", "height", '16px'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '0px'],
            ["style", "font-size", '13px']
         ],
         "${_Rectangle}": [
            ["color", "background-color", 'rgba(88,89,90,1.00)'],
            ["style", "height", '0px'],
            ["transform", "translateX", '-4px'],
            ["style", "width", '0px']
         ],
         "${_af52}": [
            ["style", "-webkit-transform-origin", [310.721,113.3263],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-moz-transform-origin", [310.721,113.3263],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [310.721,113.3263],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [310.721,113.3263],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [310.721,113.3263],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "translateX", '265.99999px'],
            ["transform", "rotateZ", '131deg'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '222.5664px']
         ],
         "${_bb_txt}": [
            ["style", "width", '91px'],
            ["transform", "translateX", '0px'],
            ["color", "color", 'rgba(207,204,109,1.00)'],
            ["style", "height", '16px'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '89.99999px'],
            ["style", "font-size", '13px']
         ],
         "${_operapercent_txt}": [
            ["style", "font-size", '13px'],
            ["transform", "translateX", '0px'],
            ["style", "height", '16px'],
            ["color", "color", 'rgba(144,144,144,1.00)'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '16px'],
            ["style", "width", '91px']
         ],
         "${_header}": [
            ["transform", "translateX", '169.78122px'],
            ["style", "height", '31px'],
            ["color", "color", 'rgba(65,64,66,1)'],
            ["style", "font-family", 'Armata'],
            ["transform", "translateY", '-70px'],
            ["style", "clip", [0,0,31,0],{valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}]
         ],
         "${_iospercent_txt}": [
            ["style", "width", '91px'],
            ["transform", "translateX", '135.85937px'],
            ["color", "color", 'rgba(144,144,144,1.00)'],
            ["style", "height", '16px'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '16px'],
            ["style", "font-size", '13px']
         ],
         "${_other_txt}": [
            ["style", "font-size", '13px'],
            ["transform", "translateX", '135.85937px'],
            ["style", "height", '16px'],
            ["color", "color", 'rgba(117,70,139,1.00)'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '89.99999px'],
            ["style", "width", '91px']
         ],
         "${_af42}": [
            ["style", "-webkit-transform-origin", [346.5312,133.6768],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-moz-transform-origin", [346.5312,133.6768],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [346.5312,133.6768],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [346.5312,133.6768],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [346.5312,133.6768],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "translateX", '307.99999px'],
            ["transform", "rotateZ", '74deg'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '360px']
         ],
         "${_af32}": [
            ["style", "-webkit-transform-origin", [279.1775,147.4864],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-moz-transform-origin", [279.1775,147.4864],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [279.1775,147.4864],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [279.1775,147.4864],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [279.1775,147.4864],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "translateX", '295px'],
            ["transform", "rotateZ", '289deg'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '352.99999px']
         ],
         "${_TextCopy}": [
            ["transform", "translateX", '169.78122px'],
            ["style", "height", '31px'],
            ["color", "color", 'rgba(144,144,144,1.00)'],
            ["style", "font-family", 'Armata'],
            ["transform", "translateY", '-38.99999px'],
            ["style", "clip", [0,0,31,0],{valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}]
         ],
         "${_apple_txt}": [
            ["style", "font-size", '13px'],
            ["transform", "translateX", '135.85937px'],
            ["style", "height", '16px'],
            ["color", "color", 'rgba(83,179,151,1.00)'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '0px'],
            ["style", "width", '91px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 4983,
         autoPlay: false,
         labels: {
            "play": 250
         },
         timeline: [
            { id: "eid1111", tween: [ "style", "${_nokiaico_sym}", "clip", [0,11,75,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,12,0,0]}], position: 2120, duration: 250, easing: "easeOutSine" },
            { id: "eid1945", tween: [ "style", "${_bbpercent_txt}", "opacity", '1', { fromValue: '0'}], position: 4000, duration: 411 },
            { id: "eid7797", tween: [ "transform", "${_af12}", "translateX", '267.99999px', { fromValue: '281.26171px'}], position: 250, duration: 1451, easing: "easeOutCirc" },
            { id: "eid7814", tween: [ "transform", "${_af52}", "translateY", '369.00001px', { fromValue: '222.5664px'}], position: 250, duration: 0, easing: "easeOutCirc" },
            { id: "eid1019", tween: [ "style", "${_Rectangle}", "width", '91px', { fromValue: '0px'}], position: 1701, duration: 299 },
            { id: "eid7802", tween: [ "transform", "${_af22}", "translateY", '245px', { fromValue: '203.11783px'}], position: 250, duration: 1451, easing: "easeOutCirc" },
            { id: "eid1969", tween: [ "style", "${_iospercent_txt}", "opacity", '1', { fromValue: '0'}], position: 4160, duration: 411 },
            { id: "eid1107", tween: [ "style", "${_otherico_sym}", "clip", [0,12,32,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,12,0,0]}], position: 2250, duration: 250, easing: "easeOutSine" },
            { id: "eid4089", tween: [ "color", "${_nokia_txt}", "color", 'rgba(171,109,169,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(171,109,169,1.00)'}], position: 4983, duration: 0 },
            { id: "eid7812", tween: [ "style", "${_af52}", "-webkit-transform-origin", [676.8347,58.0062], { valueTemplate: '@@0@@% @@1@@%', fromValue: [310.721,113.3263]}], position: 250, duration: 1451, easing: "easeOutCirc" },
            { id: "eid23295", tween: [ "style", "${_af52}", "-moz-transform-origin", [676.8347,58.0062], { valueTemplate: '@@0@@% @@1@@%', fromValue: [310.721,113.3263]}], position: 250, duration: 1451, easing: "easeOutCirc" },
            { id: "eid23296", tween: [ "style", "${_af52}", "-ms-transform-origin", [676.8347,58.0062], { valueTemplate: '@@0@@% @@1@@%', fromValue: [310.721,113.3263]}], position: 250, duration: 1451, easing: "easeOutCirc" },
            { id: "eid23297", tween: [ "style", "${_af52}", "msTransformOrigin", [676.8347,58.0062], { valueTemplate: '@@0@@% @@1@@%', fromValue: [310.721,113.3263]}], position: 250, duration: 1451, easing: "easeOutCirc" },
            { id: "eid23298", tween: [ "style", "${_af52}", "-o-transform-origin", [676.8347,58.0062], { valueTemplate: '@@0@@% @@1@@%', fromValue: [310.721,113.3263]}], position: 250, duration: 1451, easing: "easeOutCirc" },
            { id: "eid7817", tween: [ "style", "${_af62}", "opacity", '1', { fromValue: '0'}], position: 250, duration: 388, easing: "easeOutCirc" },
            { id: "eid1971", tween: [ "style", "${_bb_txt}", "opacity", '1', { fromValue: '0'}], position: 4000, duration: 411 },
            { id: "eid7808", tween: [ "transform", "${_af42}", "rotateZ", '360deg', { fromValue: '74deg'}], position: 250, duration: 1451, easing: "easeOutCirc" },
            { id: "eid7806", tween: [ "transform", "${_af32}", "rotateZ", '0deg', { fromValue: '289deg'}], position: 250, duration: 1451, easing: "easeOutCirc" },
            { id: "eid7810", tween: [ "style", "${_af42}", "-webkit-transform-origin", [743.8894,63.3233], { valueTemplate: '@@0@@% @@1@@%', fromValue: [346.5312,133.6768]}], position: 250, duration: 0, easing: "easeOutCirc" },
            { id: "eid23299", tween: [ "style", "${_af42}", "-moz-transform-origin", [743.8894,63.3233], { valueTemplate: '@@0@@% @@1@@%', fromValue: [346.5312,133.6768]}], position: 250, duration: 0, easing: "easeOutCirc" },
            { id: "eid23300", tween: [ "style", "${_af42}", "-ms-transform-origin", [743.8894,63.3233], { valueTemplate: '@@0@@% @@1@@%', fromValue: [346.5312,133.6768]}], position: 250, duration: 0, easing: "easeOutCirc" },
            { id: "eid23301", tween: [ "style", "${_af42}", "msTransformOrigin", [743.8894,63.3233], { valueTemplate: '@@0@@% @@1@@%', fromValue: [346.5312,133.6768]}], position: 250, duration: 0, easing: "easeOutCirc" },
            { id: "eid23302", tween: [ "style", "${_af42}", "-o-transform-origin", [743.8894,63.3233], { valueTemplate: '@@0@@% @@1@@%', fromValue: [346.5312,133.6768]}], position: 250, duration: 0, easing: "easeOutCirc" },
            { id: "eid1431", tween: [ "style", "${_TextCopy}", "clip", [0,89,31,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,0,31,0]}], position: 3365, duration: 250 },
            { id: "eid1963", tween: [ "style", "${_otherpercent_txt}", "opacity", '1', { fromValue: '0'}], position: 4572, duration: 411 },
            { id: "eid4092", tween: [ "color", "${_netfront_txt}", "color", 'rgba(215,145,63,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(215,145,63,1.00)'}], position: 4983, duration: 0 },
            { id: "eid7798", tween: [ "transform", "${_af12}", "translateY", '222.5664px', { fromValue: '252.90358px'}], position: 250, duration: 1451, easing: "easeOutCirc" },
            { id: "eid4090", tween: [ "color", "${_bb_txt}", "color", 'rgba(207,204,109,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(207,204,109,1.00)'}], position: 4983, duration: 0 },
            { id: "eid7811", tween: [ "style", "${_af52}", "opacity", '1', { fromValue: '0'}], position: 250, duration: 656, easing: "easeOutCirc" },
            { id: "eid1113", tween: [ "style", "${_operaico_sym}", "clip", [0,12,54,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,12,0,0]}], position: 2000, duration: 250, easing: "easeOutSine" },
            { id: "eid4093", tween: [ "color", "${_other_txt}", "color", 'rgba(117,70,139,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(117,70,139,1.00)'}], position: 4983, duration: 0 },
            { id: "eid7813", tween: [ "transform", "${_af52}", "rotateZ", '360deg', { fromValue: '131deg'}], position: 250, duration: 1451, easing: "easeOutCirc" },
            { id: "eid7809", tween: [ "style", "${_af42}", "opacity", '1', { fromValue: '0'}], position: 250, duration: 500, easing: "easeOutCirc" },
            { id: "eid1973", tween: [ "style", "${_netfrontpercent_txt}", "opacity", '1', { fromValue: '0'}], position: 4411, duration: 411 },
            { id: "eid1939", tween: [ "style", "${_netfront_txt}", "opacity", '1', { fromValue: '0'}], position: 4411, duration: 411 },
            { id: "eid1105", tween: [ "style", "${_appleico_sym}", "clip", [0,12,85,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,12,0,0]}], position: 2250, duration: 250, easing: "easeOutSine" },
            { id: "eid7800", tween: [ "transform", "${_af12}", "rotateZ", '360deg', { fromValue: '153deg'}], position: 250, duration: 1451, easing: "easeOutCirc" },
            { id: "eid1943", tween: [ "style", "${_operapercent_txt}", "opacity", '1', { fromValue: '0'}], position: 3749, duration: 411 },
            { id: "eid7816", tween: [ "transform", "${_af62}", "rotateZ", '360deg', { fromValue: '445deg'}], position: 250, duration: 1451, easing: "easeOutCirc" },
            { id: "eid1941", tween: [ "style", "${_opera_txt}", "opacity", '1', { fromValue: '0'}], position: 3749, duration: 411 },
            { id: "eid7799", tween: [ "style", "${_af12}", "opacity", '1', { fromValue: '0'}], position: 250, duration: 656, easing: "easeOutCirc" },
            { id: "eid4091", tween: [ "color", "${_apple_txt}", "color", 'rgba(83,179,151,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(83,179,151,1.00)'}], position: 4983, duration: 0 },
            { id: "eid7805", tween: [ "style", "${_af32}", "opacity", '1', { fromValue: '0'}], position: 250, duration: 388, easing: "easeOutCirc" },
            { id: "eid1947", tween: [ "style", "${_nokiapercent_txt}", "opacity", '1', { fromValue: '0'}], position: 3838, duration: 411 },
            { id: "eid7801", tween: [ "transform", "${_af22}", "translateX", '281px', { fromValue: '197.48623px'}], position: 250, duration: 1451, easing: "easeOutCirc" },
            { id: "eid7815", tween: [ "transform", "${_af52}", "translateX", '322px', { fromValue: '265.99999px'}], position: 250, duration: 0, easing: "easeOutCirc" },
            { id: "eid7804", tween: [ "style", "${_af22}", "opacity", '1', { fromValue: '0'}], position: 250, duration: 437, easing: "easeOutCirc" },
            { id: "eid1017", tween: [ "style", "${_Rectangle}", "height", '2px', { fromValue: '0px'}], position: 1701, duration: 299 },
            { id: "eid1949", tween: [ "style", "${_other_txt}", "opacity", '1', { fromValue: '0'}], position: 4572, duration: 411 },
            { id: "eid1967", tween: [ "style", "${_apple_txt}", "opacity", '1', { fromValue: '0'}], position: 4160, duration: 411 },
            { id: "eid1965", tween: [ "style", "${_nokia_txt}", "opacity", '1', { fromValue: '0'}], position: 3838, duration: 411 },
            { id: "eid7803", tween: [ "transform", "${_af22}", "rotateZ", '0deg', { fromValue: '115deg'}], position: 250, duration: 1451, easing: "easeOutCirc" },
            { id: "eid9742", tween: [ "style", "${_boltico_sym}", "clip", [0,12,54,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,12,0,0]}], position: 2000, duration: 250, easing: "easeOutSine" },
            { id: "eid1115", tween: [ "style", "${_netfrontico_sym}", "clip", [0,13,73,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,12,0,0]}], position: 2120, duration: 250, easing: "easeOutSine" },
            { id: "eid1429", tween: [ "style", "${_header}", "clip", [0,433,31,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,0,31,0]}], position: 2589, duration: 1160 },
            { id: "eid7807", tween: [ "style", "${_af32}", "-webkit-transform-origin", [781.3355,44.7696], { valueTemplate: '@@0@@% @@1@@%', fromValue: [279.1775,147.4864]}], position: 250, duration: 0, easing: "easeOutCirc" },
            { id: "eid23303", tween: [ "style", "${_af32}", "-moz-transform-origin", [781.3355,44.7696], { valueTemplate: '@@0@@% @@1@@%', fromValue: [279.1775,147.4864]}], position: 250, duration: 0, easing: "easeOutCirc" },
            { id: "eid23304", tween: [ "style", "${_af32}", "-ms-transform-origin", [781.3355,44.7696], { valueTemplate: '@@0@@% @@1@@%', fromValue: [279.1775,147.4864]}], position: 250, duration: 0, easing: "easeOutCirc" },
            { id: "eid23305", tween: [ "style", "${_af32}", "msTransformOrigin", [781.3355,44.7696], { valueTemplate: '@@0@@% @@1@@%', fromValue: [279.1775,147.4864]}], position: 250, duration: 0, easing: "easeOutCirc" },
            { id: "eid23306", tween: [ "style", "${_af32}", "-o-transform-origin", [781.3355,44.7696], { valueTemplate: '@@0@@% @@1@@%', fromValue: [279.1775,147.4864]}], position: 250, duration: 0, easing: "easeOutCirc" }         ]
      }
   }
},
"nagraph_sym": {
   version: "0.1.4",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {"dom":[{"id":"operaico_sym","className":"symbolStage_asiagraph_sym_operaico_sym_id","type":"rect","rect":[269.000005,379.500018,0,0],"transform":[[55.25,-2.16671]]},{"id":"nokiaico_sym","className":"symbolStage_asiagraph_sym_nokiaico_sym_id","type":"rect","rect":[283.500009,379.500018,0,0],"transform":[[14.66665,-2.16671]]},{"id":"bbico_sym","className":"symbolStage_asiagraph_sym_bbico_sym_id","type":"rect","rect":[294.499997,379.500018,0,0],"transform":[[-25.44445,-1]]},{"id":"appleico_sym","className":"symbolStage_asiagraph_sym_appleico_sym_id","type":"rect","rect":[312,379.500018,0,0],"transform":[[-26.80556,-1.16669]]},{"id":"otherico_sym","className":"symbolStage_asiagraph_sym_otherico_sym_id","type":"rect","rect":[337.500004,379.500018,0,0],"transform":[]},{"id":"header","className":"Text_id","type":"text","rect":[417,327,433.80078125,31],"text":"Mobile Browser Marketshare","font":["Armata",24,"rgba(65,64,66,1.00)","normal","none",""],"transform":[[169.78122,-70]]},{"id":"TextCopy","className":"Text_id","type":"text","rect":[417,327,433.80078125,31],"text":"North America","font":["Armata",24,"rgba(144,144,144,1.00)","normal","none",""],"transform":[[169.78122,-38.99999]]},{"id":"opera_txt","className":"symbolStage_asiagraph_sym_Text2_id","type":"text","rect":[587,331,91,16],"opacity":1,"text":"BlackBerry","align":"auto","font":["Armata",13,"rgba(63,215,95,1.00)","normal","none","normal"],"transform":[]},{"id":"operapercent_txt","className":"Text2Copy_id","type":"text","rect":[587,331,91,16],"opacity":1,"text":"xxx","align":"auto","font":["Armata",13,"rgba(144,144,144,1.00)","normal","none","normal"],"transform":[[0,16]]},{"id":"nokiapercent_txt","className":"Text2Copy_id","type":"text","rect":[587,331,91,16],"opacity":1,"text":"xxx","align":"auto","font":["Armata",13,"rgba(144,144,144,1.00)","normal","none","normal"],"transform":[[0,61.99999]]},{"id":"nokia_txt","className":"symbolStage_asiagraph_sym_Text2_id","type":"text","rect":[587,331,91,16],"opacity":1,"text":"iOS","align":"auto","font":["Armata",13,"rgba(63,215,95,1.00)","normal","none","normal"],"transform":[[0,45.99999]]},{"id":"bb_txt","className":"symbolStage_asiagraph_sym_Text2_id","type":"text","rect":[587,331,91,16],"opacity":1,"text":"Android","align":"auto","font":["Armata",13,"rgba(63,215,95,1.00)","normal","none","normal"],"transform":[[0,89.99999]]},{"id":"bbpercent_txt","className":"Text2Copy_id","type":"text","rect":[587,331,91,16],"opacity":1,"text":"xxx","align":"auto","font":["Armata",13,"rgba(144,144,144,1.00)","normal","none","normal"],"transform":[[0,105.99999]]},{"id":"otherpercent_txt","className":"Text2Copy_id","type":"text","rect":[587,331,91,16],"opacity":1,"text":"xxx","align":"auto","font":["Armata",13,"rgba(144,144,144,1.00)","normal","none","normal"],"transform":[[135.85937,105.99999]]},{"id":"other_txt","className":"symbolStage_asiagraph_sym_Text2_id","type":"text","rect":[587,331,91,16],"opacity":1,"text":"Other","align":"auto","font":["Armata",13,"rgba(63,215,95,1.00)","normal","none","normal"],"transform":[[135.85937,89.99999]]},{"id":"netfront_txt","className":"symbolStage_asiagraph_sym_Text2_id","type":"text","rect":[587,331,91,16],"opacity":1,"text":"Opera","align":"auto","font":["Armata",13,"rgba(63,215,95,1.00)","normal","none","normal"],"transform":[[135.85937,45.99999]]},{"id":"netfrontpercent_txt","className":"Text2Copy_id","type":"text","rect":[587,331,91,16],"opacity":1,"text":"xxx","align":"auto","font":["Armata",13,"rgba(144,144,144,1.00)","normal","none","normal"],"transform":[[135.85937,61.99999]]},{"id":"iospercent_txt","className":"Text2Copy_id","type":"text","rect":[587,331,91,16],"opacity":1,"text":"xxx","align":"auto","font":["Armata",13,"rgba(144,144,144,1.00)","normal","none","normal"],"transform":[[135.85937,16]]},{"id":"apple_txt","className":"symbolStage_asiagraph_sym_Text2_id","type":"text","rect":[587,331,91,16],"opacity":1,"text":"Nokia","align":"auto","font":["Armata",13,"rgba(63,215,95,1.00)","normal","none","normal"],"transform":[[135.85937]]},{"id":"androidico_sym","className":"symbolStage_nagraph_sym_androidico_sym_id","type":"rect","rect":[447.97103881836,416.65692138672,0,0],"transform":[[-135.91669,-37.97226]]},{"id":"na1","className":"symbolStage_nagraph_sym_na1_id","type":"image","rect":[0,0,264,156],"fill":["rgba(0,0,0,0)","images/na1.png"],"transform":[[268,221]]},{"id":"na2","className":"symbolStage_nagraph_sym_na2_id","type":"image","rect":[0,0,161,142],"fill":["rgba(0,0,0,0)","images/na2.png"],"transform":[[268,221]]},{"id":"na3","className":"symbolStage_nagraph_sym_na3_id","type":"image","rect":[0,0,111,127],"fill":["rgba(0,0,0,0)","images/na3.png"],"transform":[[268,221]]},{"id":"na4","className":"symbolStage_nagraph_sym_na4_id","type":"image","rect":[0,0,16,25],"fill":["rgba(0,0,0,0)","images/na4.png"],"transform":[[268,221]]},{"id":"na5","className":"symbolStage_nagraph_sym_na5_id","type":"image","rect":[0,0,16,22],"fill":["rgba(0,0,0,0)","images/na5.png"],"transform":[[268,221]]},{"id":"na6","className":"symbolStage_nagraph_sym_na6_id","type":"image","rect":[0,0,21,40],"fill":["rgba(0,0,0,0)","images/na6.png"],"transform":[[268,221]]},{"id":"Rectangle","className":"symbolStage_asiagraph_sym_Rectangle_id","type":"rect","rect":[268.33331298828,377.49997901917,91.360687255859,1.904296875],"fill":["rgba(88,89,90,1.00)",null],"stroke":[0,"rgba(0, 0, 0, 0)","none"],"transform":[[-4]]}],"symbolInstances":[{"id":"operaico_sym","symbolName":"operaico_sym"},{"id":"nokiaico_sym","symbolName":"nokiaico_sy"},{"id":"androidico_sym","symbolName":"androidico_sym"},{"id":"appleico_sym","symbolName":"appleico_sym"},{"id":"bbico_sym","symbolName":"bbico_sym"},{"id":"otherico_sym","symbolName":"otherico_sym"}]},
   states: {
      "Base State": {
         "${_operaico_sym}": [
            ["transform", "translateY", '-2.16671px'],
            ["transform", "translateX", '55.25px'],
            ["style", "clip", [0,12,0,0],{valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}]
         ],
         "${_netfront_txt}": [
            ["style", "font-size", '13px'],
            ["transform", "translateX", '135.85937px'],
            ["color", "color", 'rgba(215,145,63,1.00)'],
            ["style", "height", '16px'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '45.99999px'],
            ["style", "width", '91px']
         ],
         "${_otherico_sym}": [
            ["style", "clip", [0,12,0,0],{valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}]
         ],
         "${_nokiapercent_txt}": [
            ["style", "font-size", '13px'],
            ["transform", "translateX", '0px'],
            ["color", "color", 'rgba(144,144,144,1.00)'],
            ["style", "height", '16px'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '61.99999px'],
            ["style", "width", '91px']
         ],
         "${_apple_txt}": [
            ["style", "width", '91px'],
            ["transform", "translateX", '135.85937px'],
            ["style", "height", '16px'],
            ["color", "color", 'rgba(83,179,151,1.00)'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '0px'],
            ["style", "font-size", '13px']
         ],
         "${_netfrontpercent_txt}": [
            ["style", "width", '91px'],
            ["transform", "translateX", '135.85937px'],
            ["style", "height", '16px'],
            ["color", "color", 'rgba(144,144,144,1.00)'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '61.99999px'],
            ["style", "font-size", '13px']
         ],
         "${_TextCopy}": [
            ["transform", "translateX", '169.78122px'],
            ["style", "clip", [0,0,31,0],{valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}],
            ["color", "color", 'rgba(144,144,144,1.00)'],
            ["style", "font-family", 'Armata'],
            ["transform", "translateY", '-38.99999px'],
            ["style", "height", '31px']
         ],
         "${symbolSelector}": [
            ["style", "height", '149px'],
            ["style", "width", '282px']
         ],
         "${_na4}": [
            ["style", "-webkit-transform-origin", [346.5312,133.6768],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-moz-transform-origin", [346.5312,133.6768],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [346.5312,133.6768],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [346.5312,133.6768],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [346.5312,133.6768],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "translateX", '309.99998px'],
            ["transform", "rotateZ", '74deg'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '352.99999px']
         ],
         "${_Rectangle}": [
            ["style", "height", '0px'],
            ["color", "background-color", 'rgba(88,89,90,1.00)'],
            ["transform", "translateX", '-4px'],
            ["style", "width", '0px']
         ],
         "${_operapercent_txt}": [
            ["style", "width", '91px'],
            ["transform", "translateX", '0px'],
            ["style", "height", '16px'],
            ["color", "color", 'rgba(144,144,144,1.00)'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '16px'],
            ["style", "font-size", '13px']
         ],
         "${_otherpercent_txt}": [
            ["style", "font-size", '13px'],
            ["transform", "translateX", '135.85937px'],
            ["color", "color", 'rgba(144,144,144,1.00)'],
            ["style", "height", '16px'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '105.99999px'],
            ["style", "width", '91px']
         ],
         "${_na5}": [
            ["style", "-webkit-transform-origin", [310.721,113.3263],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-moz-transform-origin", [310.721,113.3263],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [310.721,113.3263],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [310.721,113.3263],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [310.721,113.3263],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "translateX", '266px'],
            ["transform", "rotateZ", '131deg'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '223px']
         ],
         "${_na2}": [
            ["style", "-webkit-transform-origin", [110.2803,111.2435],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-moz-transform-origin", [110.2803,111.2435],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [110.2803,111.2435],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [110.2803,111.2435],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [110.2803,111.2435],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "translateX", '197.48624px'],
            ["transform", "rotateZ", '115deg'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '203.55143px']
         ],
         "${_androidico_sym}": [
            ["transform", "translateY", '-37.97226px'],
            ["transform", "translateX", '-135.91669px'],
            ["style", "clip", [0,12,0,0],{valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}]
         ],
         "${_na3}": [
            ["style", "-webkit-transform-origin", [322.3011,25.8864],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-moz-transform-origin", [322.3011,25.8864],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [322.3011,25.8864],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [322.3011,25.8864],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [322.3011,25.8864],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "translateX", '118.02275px'],
            ["transform", "rotateZ", '289deg'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '310.31907px']
         ],
         "${_bbico_sym}": [
            ["transform", "translateY", '-1px'],
            ["transform", "translateX", '-25.44445px'],
            ["style", "clip", [0,12,0,0],{valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}]
         ],
         "${_nokia_txt}": [
            ["style", "width", '91px'],
            ["transform", "translateX", '0px'],
            ["style", "height", '16px'],
            ["color", "color", 'rgba(171,109,169,1.00)'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '45.99999px'],
            ["style", "font-size", '13px']
         ],
         "${_na1}": [
            ["style", "-webkit-transform-origin", [55.5928,111.3195],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-moz-transform-origin", [55.5928,111.3195],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [55.5928,111.3195],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [55.5928,111.3195],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [55.5928,111.3195],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "translateX", '281.26172px'],
            ["transform", "rotateZ", '153deg'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '253.33718px']
         ],
         "${_bb_txt}": [
            ["style", "font-size", '13px'],
            ["transform", "translateX", '0px'],
            ["color", "color", 'rgba(207,204,109,1.00)'],
            ["style", "height", '16px'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '89.99999px'],
            ["style", "width", '91px']
         ],
         "${_opera_txt}": [
            ["style", "font-size", '13px'],
            ["transform", "translateX", '0px'],
            ["color", "color", 'rgba(63,215,95,1.00)'],
            ["style", "height", '16px'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '0px'],
            ["style", "width", '91px']
         ],
         "${_header}": [
            ["transform", "translateX", '169.78122px'],
            ["style", "clip", [0,0,31,0],{valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}],
            ["color", "color", 'rgba(65,64,66,1)'],
            ["style", "font-family", 'Armata'],
            ["transform", "translateY", '-70px'],
            ["style", "height", '31px']
         ],
         "${_iospercent_txt}": [
            ["style", "font-size", '13px'],
            ["transform", "translateX", '135.85937px'],
            ["color", "color", 'rgba(144,144,144,1.00)'],
            ["style", "height", '16px'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '16px'],
            ["style", "width", '91px']
         ],
         "${_nokiaico_sym}": [
            ["transform", "translateY", '-2.16671px'],
            ["transform", "translateX", '14.66665px'],
            ["style", "clip", [0,12,0,0],{valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}]
         ],
         "${_bbpercent_txt}": [
            ["style", "width", '91px'],
            ["transform", "translateX", '0px'],
            ["style", "height", '16px'],
            ["color", "color", 'rgba(144,144,144,1.00)'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '105.99999px'],
            ["style", "font-size", '13px']
         ],
         "${_other_txt}": [
            ["style", "width", '91px'],
            ["transform", "translateX", '135.85937px'],
            ["style", "height", '16px'],
            ["color", "color", 'rgba(117,70,139,1.00)'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '89.99999px'],
            ["style", "font-size", '13px']
         ],
         "${_na6}": [
            ["style", "-webkit-transform-origin", [489.8013,103.1789],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-moz-transform-origin", [489.8013,103.1789],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [489.8013,103.1789],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [489.8013,103.1789],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [489.8013,103.1789],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "translateX", '337.99999px'],
            ["transform", "rotateZ", '445deg'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '338.99999px']
         ],
         "${_appleico_sym}": [
            ["transform", "translateY", '-1.16669px'],
            ["transform", "translateX", '-26.80556px'],
            ["style", "clip", [0,12,0,0],{valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}]
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 4983,
         autoPlay: false,
         labels: {
            "play": 250
         },
         timeline: [
            { id: "eid8598", tween: [ "style", "${_androidico_sym}", "clip", [0,13,73,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,12,0,0]}], position: 2000, duration: 250, easing: "easeOutSine" },
            { id: "eid11025", tween: [ "transform", "${_na4}", "translateX", '309.99998px', { fromValue: '309.99998px'}], position: 1701, duration: 0 },
            { id: "eid11003", tween: [ "transform", "${_na2}", "translateY", '235.99999px', { fromValue: '203.55143px'}], position: 250, duration: 0, easing: "easeOutCirc" },
            { id: "eid1939", tween: [ "style", "${_netfront_txt}", "opacity", '1', { fromValue: '0'}], position: 4411, duration: 411 },
            { id: "eid1973", tween: [ "style", "${_netfrontpercent_txt}", "opacity", '1', { fromValue: '0'}], position: 4411, duration: 411 },
            { id: "eid11022", tween: [ "transform", "${_na6}", "translateY", '338.99999px', { fromValue: '338.99999px'}], position: 1701, duration: 0 },
            { id: "eid1969", tween: [ "style", "${_iospercent_txt}", "opacity", '1', { fromValue: '0'}], position: 4160, duration: 411 },
            { id: "eid11684", tween: [ "transform", "${_na3}", "translateY", '250.99998px', { fromValue: '310.31907px'}], position: 250, duration: 0 },
            { id: "eid4089", tween: [ "color", "${_nokia_txt}", "color", 'rgba(171,109,169,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(171,109,169,1.00)'}], position: 4983, duration: 0 },
            { id: "eid11016", tween: [ "transform", "${_na5}", "rotateZ", '360deg', { fromValue: '131deg'}], position: 250, duration: 1451, easing: "easeOutCirc" },
            { id: "eid11006", tween: [ "style", "${_na3}", "opacity", '1', { fromValue: '0'}], position: 250, duration: 388, easing: "easeOutCirc" },
            { id: "eid1109", tween: [ "style", "${_bbico_sym}", "clip", [0,13,56,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,12,0,0]}], position: 2000, duration: 250, easing: "easeOutSine" },
            { id: "eid1971", tween: [ "style", "${_bb_txt}", "opacity", '1', { fromValue: '0'}], position: 4000, duration: 411 },
            { id: "eid1429", tween: [ "style", "${_header}", "clip", [0,433,31,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,0,31,0]}], position: 2589, duration: 1160 },
            { id: "eid11021", tween: [ "transform", "${_na6}", "translateX", '337.99999px', { fromValue: '337.99999px'}], position: 1701, duration: 0 },
            { id: "eid4091", tween: [ "color", "${_apple_txt}", "color", 'rgba(83,179,151,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(83,179,151,1.00)'}], position: 4983, duration: 0 },
            { id: "eid11007", tween: [ "transform", "${_na3}", "rotateZ", '0deg', { fromValue: '289deg'}], position: 250, duration: 1451, easing: "easeOutCirc" },
            { id: "eid11028", tween: [ "style", "${_na2}", "-webkit-transform-origin", [110.2803,111.2435], { valueTemplate: '@@0@@% @@1@@%', fromValue: [110.2803,111.2435]}], position: 1701, duration: 0 },
            { id: "eid23307", tween: [ "style", "${_na2}", "-moz-transform-origin", [110.2803,111.2435], { valueTemplate: '@@0@@% @@1@@%', fromValue: [110.2803,111.2435]}], position: 1701, duration: 0 },
            { id: "eid23308", tween: [ "style", "${_na2}", "-ms-transform-origin", [110.2803,111.2435], { valueTemplate: '@@0@@% @@1@@%', fromValue: [110.2803,111.2435]}], position: 1701, duration: 0 },
            { id: "eid23309", tween: [ "style", "${_na2}", "msTransformOrigin", [110.2803,111.2435], { valueTemplate: '@@0@@% @@1@@%', fromValue: [110.2803,111.2435]}], position: 1701, duration: 0 },
            { id: "eid23310", tween: [ "style", "${_na2}", "-o-transform-origin", [110.2803,111.2435], { valueTemplate: '@@0@@% @@1@@%', fromValue: [110.2803,111.2435]}], position: 1701, duration: 0 },
            { id: "eid11683", tween: [ "transform", "${_na3}", "translateX", '295.99999px', { fromValue: '118.02275px'}], position: 250, duration: 0 },
            { id: "eid11017", tween: [ "transform", "${_na6}", "rotateZ", '360deg', { fromValue: '445deg'}], position: 250, duration: 1451, easing: "easeOutCirc" },
            { id: "eid4090", tween: [ "color", "${_bb_txt}", "color", 'rgba(207,204,109,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(207,204,109,1.00)'}], position: 4983, duration: 0 },
            { id: "eid10998", tween: [ "transform", "${_na1}", "translateX", '268px', { fromValue: '281.26172px'}], position: 250, duration: 1451, easing: "easeOutCirc" },
            { id: "eid11018", tween: [ "style", "${_na6}", "opacity", '1', { fromValue: '0'}], position: 250, duration: 388, easing: "easeOutCirc" },
            { id: "eid4092", tween: [ "color", "${_netfront_txt}", "color", 'rgba(215,145,63,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(215,145,63,1.00)'}], position: 4983, duration: 0 },
            { id: "eid1963", tween: [ "style", "${_otherpercent_txt}", "opacity", '1', { fromValue: '0'}], position: 4572, duration: 411 },
            { id: "eid11027", tween: [ "style", "${_na1}", "-webkit-transform-origin", [55.5928,111.3195], { valueTemplate: '@@0@@% @@1@@%', fromValue: [55.5928,111.3195]}], position: 1701, duration: 0 },
            { id: "eid23311", tween: [ "style", "${_na1}", "-moz-transform-origin", [55.5928,111.3195], { valueTemplate: '@@0@@% @@1@@%', fromValue: [55.5928,111.3195]}], position: 1701, duration: 0 },
            { id: "eid23312", tween: [ "style", "${_na1}", "-ms-transform-origin", [55.5928,111.3195], { valueTemplate: '@@0@@% @@1@@%', fromValue: [55.5928,111.3195]}], position: 1701, duration: 0 },
            { id: "eid23313", tween: [ "style", "${_na1}", "msTransformOrigin", [55.5928,111.3195], { valueTemplate: '@@0@@% @@1@@%', fromValue: [55.5928,111.3195]}], position: 1701, duration: 0 },
            { id: "eid23314", tween: [ "style", "${_na1}", "-o-transform-origin", [55.5928,111.3195], { valueTemplate: '@@0@@% @@1@@%', fromValue: [55.5928,111.3195]}], position: 1701, duration: 0 },
            { id: "eid11002", tween: [ "transform", "${_na2}", "translateX", '281.99998px', { fromValue: '197.48624px'}], position: 250, duration: 0, easing: "easeOutCirc" },
            { id: "eid1019", tween: [ "style", "${_Rectangle}", "width", '91px', { fromValue: '0px'}], position: 1701, duration: 299 },
            { id: "eid1017", tween: [ "style", "${_Rectangle}", "height", '2px', { fromValue: '0px'}], position: 1701, duration: 299 },
            { id: "eid1945", tween: [ "style", "${_bbpercent_txt}", "opacity", '1', { fromValue: '0'}], position: 4000, duration: 411 },
            { id: "eid11031", tween: [ "style", "${_na6}", "-webkit-transform-origin", [489.8013,103.1789], { valueTemplate: '@@0@@% @@1@@%', fromValue: [489.8013,103.1789]}], position: 1701, duration: 0 },
            { id: "eid23315", tween: [ "style", "${_na6}", "-moz-transform-origin", [489.8013,103.1789], { valueTemplate: '@@0@@% @@1@@%', fromValue: [489.8013,103.1789]}], position: 1701, duration: 0 },
            { id: "eid23316", tween: [ "style", "${_na6}", "-ms-transform-origin", [489.8013,103.1789], { valueTemplate: '@@0@@% @@1@@%', fromValue: [489.8013,103.1789]}], position: 1701, duration: 0 },
            { id: "eid23317", tween: [ "style", "${_na6}", "msTransformOrigin", [489.8013,103.1789], { valueTemplate: '@@0@@% @@1@@%', fromValue: [489.8013,103.1789]}], position: 1701, duration: 0 },
            { id: "eid23318", tween: [ "style", "${_na6}", "-o-transform-origin", [489.8013,103.1789], { valueTemplate: '@@0@@% @@1@@%', fromValue: [489.8013,103.1789]}], position: 1701, duration: 0 },
            { id: "eid1941", tween: [ "style", "${_opera_txt}", "opacity", '1', { fromValue: '0'}], position: 3749, duration: 411 },
            { id: "eid1431", tween: [ "style", "${_TextCopy}", "clip", [0,185,31,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,0,31,0]}], position: 3365, duration: 250 },
            { id: "eid11024", tween: [ "transform", "${_na5}", "translateY", '354.99999px', { fromValue: '223px'}], position: 250, duration: 0 },
            { id: "eid11400", tween: [ "transform", "${_na5}", "translateY", '355.99999px', { fromValue: '354.99999px'}], position: 1701, duration: 0 },
            { id: "eid11014", tween: [ "style", "${_na5}", "opacity", '1', { fromValue: '0'}], position: 250, duration: 656, easing: "easeOutCirc" },
            { id: "eid1965", tween: [ "style", "${_nokia_txt}", "opacity", '1', { fromValue: '0'}], position: 3838, duration: 411 },
            { id: "eid1105", tween: [ "style", "${_appleico_sym}", "clip", [0,12,85,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,12,0,0]}], position: 2250, duration: 250, easing: "easeOutSine" },
            { id: "eid11685", tween: [ "style", "${_na3}", "-webkit-transform-origin", [100.9957,100.6746], { valueTemplate: '@@0@@% @@1@@%', fromValue: [322.3011,25.8864]}], position: 250, duration: 0 },
            { id: "eid23319", tween: [ "style", "${_na3}", "-moz-transform-origin", [100.9957,100.6746], { valueTemplate: '@@0@@% @@1@@%', fromValue: [322.3011,25.8864]}], position: 250, duration: 0 },
            { id: "eid23320", tween: [ "style", "${_na3}", "-ms-transform-origin", [100.9957,100.6746], { valueTemplate: '@@0@@% @@1@@%', fromValue: [322.3011,25.8864]}], position: 250, duration: 0 },
            { id: "eid23321", tween: [ "style", "${_na3}", "msTransformOrigin", [100.9957,100.6746], { valueTemplate: '@@0@@% @@1@@%', fromValue: [322.3011,25.8864]}], position: 250, duration: 0 },
            { id: "eid23322", tween: [ "style", "${_na3}", "-o-transform-origin", [100.9957,100.6746], { valueTemplate: '@@0@@% @@1@@%', fromValue: [322.3011,25.8864]}], position: 250, duration: 0 },
            { id: "eid11000", tween: [ "style", "${_na1}", "opacity", '1', { fromValue: '0'}], position: 250, duration: 656, easing: "easeOutCirc" },
            { id: "eid11023", tween: [ "transform", "${_na5}", "translateX", '323.99999px', { fromValue: '266px'}], position: 250, duration: 0 },
            { id: "eid11015", tween: [ "style", "${_na5}", "-webkit-transform-origin", [723.5657,69.0065], { valueTemplate: '@@0@@% @@1@@%', fromValue: [310.721,113.3263]}], position: 250, duration: 1451, easing: "easeOutCirc" },
            { id: "eid23323", tween: [ "style", "${_na5}", "-moz-transform-origin", [723.5657,69.0065], { valueTemplate: '@@0@@% @@1@@%', fromValue: [310.721,113.3263]}], position: 250, duration: 1451, easing: "easeOutCirc" },
            { id: "eid23324", tween: [ "style", "${_na5}", "-ms-transform-origin", [723.5657,69.0065], { valueTemplate: '@@0@@% @@1@@%', fromValue: [310.721,113.3263]}], position: 250, duration: 1451, easing: "easeOutCirc" },
            { id: "eid23325", tween: [ "style", "${_na5}", "msTransformOrigin", [723.5657,69.0065], { valueTemplate: '@@0@@% @@1@@%', fromValue: [310.721,113.3263]}], position: 250, duration: 1451, easing: "easeOutCirc" },
            { id: "eid23326", tween: [ "style", "${_na5}", "-o-transform-origin", [723.5657,69.0065], { valueTemplate: '@@0@@% @@1@@%', fromValue: [310.721,113.3263]}], position: 250, duration: 1451, easing: "easeOutCirc" },
            { id: "eid10999", tween: [ "transform", "${_na1}", "translateY", '222px', { fromValue: '253.33718px'}], position: 250, duration: 1451, easing: "easeOutCirc" },
            { id: "eid11009", tween: [ "style", "${_na4}", "opacity", '1', { fromValue: '0'}], position: 250, duration: 500, easing: "easeOutCirc" },
            { id: "eid11004", tween: [ "transform", "${_na2}", "rotateZ", '0deg', { fromValue: '115deg'}], position: 250, duration: 1451, easing: "easeOutCirc" },
            { id: "eid11010", tween: [ "transform", "${_na4}", "rotateZ", '360deg', { fromValue: '74deg'}], position: 250, duration: 1451, easing: "easeOutCirc" },
            { id: "eid11001", tween: [ "transform", "${_na1}", "rotateZ", '360deg', { fromValue: '153deg'}], position: 250, duration: 1451, easing: "easeOutCirc" },
            { id: "eid1967", tween: [ "style", "${_apple_txt}", "opacity", '1', { fromValue: '0'}], position: 4160, duration: 411 },
            { id: "eid1111", tween: [ "style", "${_nokiaico_sym}", "clip", [0,11,75,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,12,0,0]}], position: 2120, duration: 250, easing: "easeOutSine" },
            { id: "eid1943", tween: [ "style", "${_operapercent_txt}", "opacity", '1', { fromValue: '0'}], position: 3749, duration: 411 },
            { id: "eid1949", tween: [ "style", "${_other_txt}", "opacity", '1', { fromValue: '0'}], position: 4572, duration: 411 },
            { id: "eid1107", tween: [ "style", "${_otherico_sym}", "clip", [0,12,32,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,12,0,0]}], position: 2250, duration: 250, easing: "easeOutSine" },
            { id: "eid11011", tween: [ "style", "${_na4}", "-webkit-transform-origin", [346.5312,133.6768], { valueTemplate: '@@0@@% @@1@@%', fromValue: [346.5312,133.6768]}], position: 250, duration: 0, easing: "easeOutCirc" },
            { id: "eid23327", tween: [ "style", "${_na4}", "-moz-transform-origin", [346.5312,133.6768], { valueTemplate: '@@0@@% @@1@@%', fromValue: [346.5312,133.6768]}], position: 250, duration: 0, easing: "easeOutCirc" },
            { id: "eid23328", tween: [ "style", "${_na4}", "-ms-transform-origin", [346.5312,133.6768], { valueTemplate: '@@0@@% @@1@@%', fromValue: [346.5312,133.6768]}], position: 250, duration: 0, easing: "easeOutCirc" },
            { id: "eid23329", tween: [ "style", "${_na4}", "msTransformOrigin", [346.5312,133.6768], { valueTemplate: '@@0@@% @@1@@%', fromValue: [346.5312,133.6768]}], position: 250, duration: 0, easing: "easeOutCirc" },
            { id: "eid23330", tween: [ "style", "${_na4}", "-o-transform-origin", [346.5312,133.6768], { valueTemplate: '@@0@@% @@1@@%', fromValue: [346.5312,133.6768]}], position: 250, duration: 0, easing: "easeOutCirc" },
            { id: "eid11030", tween: [ "style", "${_na4}", "-webkit-transform-origin", [744.4187,82.6323], { valueTemplate: '@@0@@% @@1@@%', fromValue: [346.5312,133.6768]}], position: 1701, duration: 0 },
            { id: "eid23331", tween: [ "style", "${_na4}", "-moz-transform-origin", [744.4187,82.6323], { valueTemplate: '@@0@@% @@1@@%', fromValue: [346.5312,133.6768]}], position: 1701, duration: 0 },
            { id: "eid23332", tween: [ "style", "${_na4}", "-ms-transform-origin", [744.4187,82.6323], { valueTemplate: '@@0@@% @@1@@%', fromValue: [346.5312,133.6768]}], position: 1701, duration: 0 },
            { id: "eid23333", tween: [ "style", "${_na4}", "msTransformOrigin", [744.4187,82.6323], { valueTemplate: '@@0@@% @@1@@%', fromValue: [346.5312,133.6768]}], position: 1701, duration: 0 },
            { id: "eid23334", tween: [ "style", "${_na4}", "-o-transform-origin", [744.4187,82.6323], { valueTemplate: '@@0@@% @@1@@%', fromValue: [346.5312,133.6768]}], position: 1701, duration: 0 },
            { id: "eid4093", tween: [ "color", "${_other_txt}", "color", 'rgba(117,70,139,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(117,70,139,1.00)'}], position: 4983, duration: 0 },
            { id: "eid1947", tween: [ "style", "${_nokiapercent_txt}", "opacity", '1', { fromValue: '0'}], position: 3838, duration: 411 },
            { id: "eid1113", tween: [ "style", "${_operaico_sym}", "clip", [0,12,54,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,12,0,0]}], position: 2000, duration: 250, easing: "easeOutSine" },
            { id: "eid11026", tween: [ "transform", "${_na4}", "translateY", '352.99999px', { fromValue: '352.99999px'}], position: 1701, duration: 0 },
            { id: "eid11005", tween: [ "style", "${_na2}", "opacity", '1', { fromValue: '0'}], position: 250, duration: 437, easing: "easeOutCirc" }         ]
      }
   }
},
"sagraph_sym": {
   version: "0.1.4",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {"dom":[{"id":"operaico_sym","className":"symbolStage_asiagraph_sym_operaico_sym_id","type":"rect","rect":[269.000005,379.500018,0,0],"transform":[[14.25,-2.16669]]},{"id":"nokiaico_sym","className":"symbolStage_asiagraph_sym_nokiaico_sym_id","type":"rect","rect":[283.500009,379.500018,0,0],"transform":[[-13.33334,-2.16668]]},{"id":"appleico_sym","className":"symbolStage_asiagraph_sym_appleico_sym_id","type":"rect","rect":[312,379.500018,0,0],"transform":[[15,-1]]},{"id":"netfrontico_sym","className":"symbolStage_asiagraph_sym_netfrontico_sym_id","type":"rect","rect":[326.333337,379.500018,0,0],"transform":[[-25,-1]]},{"id":"otherico_sym","className":"symbolStage_asiagraph_sym_otherico_sym_id","type":"rect","rect":[337.500004,379.500018,0,0],"transform":[]},{"id":"header","className":"Text_id","type":"text","rect":[417,327,433.80078125,31],"text":"Mobile Browser Marketshare","font":["Armata",24,"rgba(65,64,66,1.00)","normal","none",""],"transform":[[169.78122,-70]]},{"id":"TextCopy","className":"Text_id","type":"text","rect":[417,327,433.80078125,31],"text":"South America","font":["Armata",24,"rgba(144,144,144,1.00)","normal","none",""],"transform":[[169.78122,-38.99999]]},{"id":"opera_txt","className":"symbolStage_asiagraph_sym_Text2_id","type":"text","rect":[587,331,91,16],"opacity":1,"text":"Nokia","align":"auto","font":["Armata",13,"rgba(63,215,95,1.00)","normal","none","normal"],"transform":[]},{"id":"operapercent_txt","className":"Text2Copy_id","type":"text","rect":[587,331,91,16],"opacity":1,"text":"xxx","align":"auto","font":["Armata",13,"rgba(144,144,144,1.00)","normal","none","normal"],"transform":[[0,16]]},{"id":"nokiapercent_txt","className":"Text2Copy_id","type":"text","rect":[587,331,91,16],"opacity":1,"text":"xxx","align":"auto","font":["Armata",13,"rgba(144,144,144,1.00)","normal","none","normal"],"transform":[[0,61.99999]]},{"id":"nokia_txt","className":"symbolStage_asiagraph_sym_Text2_id","type":"text","rect":[587,331,91,16],"opacity":1,"text":"Opera","align":"auto","font":["Armata",13,"rgba(63,215,95,1.00)","normal","none","normal"],"transform":[[0,45.99999]]},{"id":"bb_txt","className":"symbolStage_asiagraph_sym_Text2_id","type":"text","rect":[587,331,91,16],"opacity":1,"text":"NetFront","align":"auto","font":["Armata",13,"rgba(63,215,95,1.00)","normal","none","normal"],"transform":[[0,89.99999]]},{"id":"bbpercent_txt","className":"Text2Copy_id","type":"text","rect":[587,331,91,16],"opacity":1,"text":"xxx","align":"auto","font":["Armata",13,"rgba(144,144,144,1.00)","normal","none","normal"],"transform":[[0,105.99999]]},{"id":"otherpercent_txt","className":"Text2Copy_id","type":"text","rect":[587,331,91,16],"opacity":1,"text":"xxx","align":"auto","font":["Armata",13,"rgba(144,144,144,1.00)","normal","none","normal"],"transform":[[135.85937,105.99999]]},{"id":"other_txt","className":"symbolStage_asiagraph_sym_Text2_id","type":"text","rect":[587,331,91,16],"opacity":1,"text":"Other","align":"auto","font":["Armata",13,"rgba(63,215,95,1.00)","normal","none","normal"],"transform":[[135.85937,89.99999]]},{"id":"netfront_txt","className":"symbolStage_asiagraph_sym_Text2_id","type":"text","rect":[587,331,91,16],"opacity":1,"text":"iOS","align":"auto","font":["Armata",13,"rgba(63,215,95,1.00)","normal","none","normal"],"transform":[[135.85937,45.99999]]},{"id":"netfrontpercent_txt","className":"Text2Copy_id","type":"text","rect":[587,331,91,16],"opacity":1,"text":"xxx","align":"auto","font":["Armata",13,"rgba(144,144,144,1.00)","normal","none","normal"],"transform":[[135.85937,61.99999]]},{"id":"iospercent_txt","className":"Text2Copy_id","type":"text","rect":[587,331,91,16],"opacity":1,"text":"xxx","align":"auto","font":["Armata",13,"rgba(144,144,144,1.00)","normal","none","normal"],"transform":[[135.85937,16]]},{"id":"apple_txt","className":"symbolStage_asiagraph_sym_Text2_id","type":"text","rect":[587,331,91,16],"opacity":1,"text":"Samsung","align":"auto","font":["Armata",13,"rgba(63,215,95,1.00)","normal","none","normal"],"transform":[[135.85937]]},{"id":"samsungico_sym","className":"symbolStage_sagraph_sym_samsungico_sym_id","type":"rect","rect":[317.25531005859,477.94454956055,0,0],"transform":[[-6.66668,-99.77779]]},{"id":"sa1","className":"symbolStage_sagraph_sym_sa1_id","type":"image","rect":[0,0,250,156],"fill":["rgba(0,0,0,0)","images/sa1.png"],"transform":[[269.99999,219.99999]]},{"id":"sa2","className":"symbolStage_sagraph_sym_sa2_id","type":"image","rect":[0,0,127,141],"fill":["rgba(0,0,0,0)","images/sa2.png"],"transform":[[269.99999,219.99999]]},{"id":"sa3","className":"symbolStage_sagraph_sym_sa3_id","type":"image","rect":[0,0,29,64],"fill":["rgba(0,0,0,0)","images/sa3.png"],"transform":[[269.99999,219.99999]]},{"id":"sa4","className":"symbolStage_sagraph_sym_sa4_id","type":"image","rect":[0,0,23,48],"fill":["rgba(0,0,0,0)","images/sa4.png"],"transform":[[269.99999,219.99999]]},{"id":"sa5","className":"symbolStage_sagraph_sym_sa5_id","type":"image","rect":[0,0,22,42],"fill":["rgba(0,0,0,0)","images/sa5.png"],"transform":[[269.99999,219.99999]]},{"id":"sa6","className":"symbolStage_sagraph_sym_sa6_id","type":"image","rect":[0,0,56,78],"fill":["rgba(0,0,0,0)","images/sa6.png"],"transform":[[269.99999,219.99999]]},{"id":"Rectangle","className":"symbolStage_asiagraph_sym_Rectangle_id","type":"rect","rect":[268.33331298828,377.49997901917,91.360687255859,1.904296875],"fill":["rgba(88,89,90,1.00)",null],"stroke":[0,"rgba(0, 0, 0, 0)","none"],"transform":[[-4]]}],"symbolInstances":[{"id":"operaico_sym","symbolName":"operaico_sym"},{"id":"netfrontico_sym","symbolName":"netfrontico_sym"},{"id":"nokiaico_sym","symbolName":"nokiaico_sy"},{"id":"appleico_sym","symbolName":"appleico_sym"},{"id":"samsungico_sym","symbolName":"samsungico_sym"},{"id":"otherico_sym","symbolName":"otherico_sym"}]},
   states: {
      "Base State": {
         "${_bbpercent_txt}": [
            ["style", "font-size", '13px'],
            ["transform", "translateX", '0px'],
            ["style", "height", '16px'],
            ["color", "color", 'rgba(144,144,144,1.00)'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '105.99999px'],
            ["style", "width", '91px']
         ],
         "${_netfront_txt}": [
            ["style", "width", '91px'],
            ["transform", "translateX", '135.85937px'],
            ["color", "color", 'rgba(215,145,63,1.00)'],
            ["style", "height", '16px'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '45.99999px'],
            ["style", "font-size", '13px']
         ],
         "${_sa5}": [
            ["style", "-webkit-transform-origin", [310.721,113.3263],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-moz-transform-origin", [310.721,113.3263],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [310.721,113.3263],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [310.721,113.3263],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [310.721,113.3263],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "translateX", '267.99999px'],
            ["transform", "rotateZ", '131deg'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '221.99999px']
         ],
         "${_otherico_sym}": [
            ["style", "clip", [0,12,0,0],{valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}]
         ],
         "${_nokiapercent_txt}": [
            ["style", "width", '91px'],
            ["transform", "translateX", '0px'],
            ["color", "color", 'rgba(144,144,144,1.00)'],
            ["style", "height", '16px'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '61.99999px'],
            ["style", "font-size", '13px']
         ],
         "${_netfrontpercent_txt}": [
            ["style", "font-size", '13px'],
            ["transform", "translateX", '135.85937px'],
            ["style", "height", '16px'],
            ["color", "color", 'rgba(144,144,144,1.00)'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '61.99999px'],
            ["style", "width", '91px']
         ],
         "${_appleico_sym}": [
            ["transform", "translateY", '-1px'],
            ["transform", "translateX", '15px'],
            ["style", "clip", [0,12,0,0],{valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}]
         ],
         "${symbolSelector}": [
            ["style", "height", '149px'],
            ["style", "width", '282px']
         ],
         "${_nokiaico_sym}": [
            ["transform", "translateY", '-2.16668px'],
            ["transform", "translateX", '-13.33334px'],
            ["style", "clip", [0,12,0,0],{valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}]
         ],
         "${_sa3}": [
            ["style", "-webkit-transform-origin", [279.1775,147.4864],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-moz-transform-origin", [279.1775,147.4864],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [279.1775,147.4864],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [279.1775,147.4864],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [279.1775,147.4864],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "translateX", '296px'],
            ["transform", "rotateZ", '289deg'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '313.99999px']
         ],
         "${_netfrontico_sym}": [
            ["transform", "translateY", '-1px'],
            ["transform", "translateX", '-25px'],
            ["style", "clip", [0,12,0,0],{valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}]
         ],
         "${_otherpercent_txt}": [
            ["style", "width", '91px'],
            ["transform", "translateX", '135.85937px'],
            ["color", "color", 'rgba(144,144,144,1.00)'],
            ["style", "height", '16px'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '105.99999px'],
            ["style", "font-size", '13px']
         ],
         "${_samsungico_sym}": [
            ["style", "clip", [0,12,0,0],{valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}],
            ["transform", "translateY", '-99.77779px'],
            ["transform", "translateX", '-6.66668px']
         ],
         "${_sa2}": [
            ["style", "-webkit-transform-origin", [114.164,114.0101],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-moz-transform-origin", [114.164,114.0101],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [114.164,114.0101],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [114.164,114.0101],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [114.164,114.0101],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "translateX", '199.48623px'],
            ["transform", "rotateZ", '115deg'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '202.55142px']
         ],
         "${_Rectangle}": [
            ["color", "background-color", 'rgba(88,89,90,1.00)'],
            ["style", "height", '0px'],
            ["transform", "translateX", '-4px'],
            ["style", "width", '0px']
         ],
         "${_other_txt}": [
            ["style", "font-size", '13px'],
            ["transform", "translateX", '135.85937px'],
            ["style", "height", '16px'],
            ["color", "color", 'rgba(117,70,139,1.00)'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '89.99999px'],
            ["style", "width", '91px']
         ],
         "${_opera_txt}": [
            ["style", "width", '91px'],
            ["transform", "translateX", '0px'],
            ["color", "color", 'rgba(63,215,95,1.00)'],
            ["style", "height", '16px'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '0px'],
            ["style", "font-size", '13px']
         ],
         "${_sa6}": [
            ["style", "-webkit-transform-origin", [169.819,107.2194],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-moz-transform-origin", [169.819,107.2194],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [169.819,107.2194],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [169.819,107.2194],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [169.819,107.2194],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "translateX", '336.18932px'],
            ["transform", "rotateZ", '445deg'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '300.00002px']
         ],
         "${_nokia_txt}": [
            ["style", "font-size", '13px'],
            ["transform", "translateX", '0px'],
            ["style", "height", '16px'],
            ["color", "color", 'rgba(171,109,169,1.00)'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '45.99999px'],
            ["style", "width", '91px']
         ],
         "${_bb_txt}": [
            ["style", "width", '91px'],
            ["transform", "translateX", '0px'],
            ["color", "color", 'rgba(207,204,109,1.00)'],
            ["style", "height", '16px'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '89.99999px'],
            ["style", "font-size", '13px']
         ],
         "${_operaico_sym}": [
            ["transform", "translateY", '-2.16669px'],
            ["transform", "translateX", '14.25px'],
            ["style", "clip", [0,12,0,0],{valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}]
         ],
         "${_header}": [
            ["transform", "translateX", '169.78122px'],
            ["style", "height", '31px'],
            ["color", "color", 'rgba(65,64,66,1)'],
            ["style", "font-family", 'Armata'],
            ["style", "clip", [0,0,31,0],{valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}],
            ["transform", "translateY", '-70px']
         ],
         "${_iospercent_txt}": [
            ["style", "width", '91px'],
            ["transform", "translateX", '135.85937px'],
            ["color", "color", 'rgba(144,144,144,1.00)'],
            ["style", "height", '16px'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '16px'],
            ["style", "font-size", '13px']
         ],
         "${_operapercent_txt}": [
            ["style", "font-size", '13px'],
            ["transform", "translateX", '0px'],
            ["style", "height", '16px'],
            ["color", "color", 'rgba(144,144,144,1.00)'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '16px'],
            ["style", "width", '91px']
         ],
         "${_sa4}": [
            ["style", "-webkit-transform-origin", [346.5312,133.6768],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-moz-transform-origin", [346.5312,133.6768],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [346.5312,133.6768],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [346.5312,133.6768],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [346.5312,133.6768],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "translateX", '310px'],
            ["transform", "rotateZ", '74deg'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '330.00002px']
         ],
         "${_sa1}": [
            ["style", "-webkit-transform-origin", [54.6311,111.5979],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-moz-transform-origin", [54.6311,111.5979],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [54.6311,111.5979],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [54.6311,111.5979],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [54.6311,111.5979],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "translateX", '283.26171px'],
            ["transform", "rotateZ", '153deg'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '252.33717px']
         ],
         "${_TextCopy}": [
            ["transform", "translateX", '169.78122px'],
            ["style", "height", '31px'],
            ["color", "color", 'rgba(144,144,144,1.00)'],
            ["style", "font-family", 'Armata'],
            ["style", "clip", [0,0,31,0],{valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}],
            ["transform", "translateY", '-38.99999px']
         ],
         "${_apple_txt}": [
            ["style", "font-size", '13px'],
            ["transform", "translateX", '135.85937px'],
            ["style", "height", '16px'],
            ["color", "color", 'rgba(83,179,151,1.00)'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '0px'],
            ["style", "width", '91px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 11129,
         autoPlay: false,
         labels: {
            "play": 250
         },
         timeline: [
            { id: "eid1111", tween: [ "style", "${_nokiaico_sym}", "clip", [0,11,75,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,12,0,0]}], position: 2120, duration: 250, easing: "easeOutSine" },
            { id: "eid1945", tween: [ "style", "${_bbpercent_txt}", "opacity", '1', { fromValue: '0'}], position: 4000, duration: 411 },
            { id: "eid12069", tween: [ "transform", "${_sa3}", "translateY", '313.99999px', { fromValue: '313.99999px'}], position: 1701, duration: 0 },
            { id: "eid1965", tween: [ "style", "${_nokia_txt}", "opacity", '1', { fromValue: '0'}], position: 3838, duration: 411 },
            { id: "eid1019", tween: [ "style", "${_Rectangle}", "width", '91px', { fromValue: '0px'}], position: 1701, duration: 299 },
            { id: "eid12041", tween: [ "transform", "${_sa1}", "translateY", '221.99999px', { fromValue: '252.33717px'}], position: 250, duration: 1451, easing: "easeOutCirc" },
            { id: "eid12051", tween: [ "style", "${_sa3}", "opacity", '1', { fromValue: '0'}], position: 250, duration: 388, easing: "easeOutCirc" },
            { id: "eid1969", tween: [ "style", "${_iospercent_txt}", "opacity", '1', { fromValue: '0'}], position: 4160, duration: 411 },
            { id: "eid1107", tween: [ "style", "${_otherico_sym}", "clip", [0,12,32,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,12,0,0]}], position: 2250, duration: 250, easing: "easeOutSine" },
            { id: "eid12058", tween: [ "style", "${_sa5}", "-webkit-transform-origin", [421.9492,101.0155], { valueTemplate: '@@0@@% @@1@@%', fromValue: [310.721,113.3263]}], position: 250, duration: 1451, easing: "easeOutCirc" },
            { id: "eid23335", tween: [ "style", "${_sa5}", "-moz-transform-origin", [421.9492,101.0155], { valueTemplate: '@@0@@% @@1@@%', fromValue: [310.721,113.3263]}], position: 250, duration: 1451, easing: "easeOutCirc" },
            { id: "eid23336", tween: [ "style", "${_sa5}", "-ms-transform-origin", [421.9492,101.0155], { valueTemplate: '@@0@@% @@1@@%', fromValue: [310.721,113.3263]}], position: 250, duration: 1451, easing: "easeOutCirc" },
            { id: "eid23337", tween: [ "style", "${_sa5}", "msTransformOrigin", [421.9492,101.0155], { valueTemplate: '@@0@@% @@1@@%', fromValue: [310.721,113.3263]}], position: 250, duration: 1451, easing: "easeOutCirc" },
            { id: "eid23338", tween: [ "style", "${_sa5}", "-o-transform-origin", [421.9492,101.0155], { valueTemplate: '@@0@@% @@1@@%', fromValue: [310.721,113.3263]}], position: 250, duration: 1451, easing: "easeOutCirc" },
            { id: "eid12067", tween: [ "transform", "${_sa4}", "translateY", '330.00002px', { fromValue: '330.00002px'}], position: 1701, duration: 0 },
            { id: "eid12046", tween: [ "transform", "${_sa2}", "rotateZ", '0deg', { fromValue: '115deg'}], position: 250, duration: 1451, easing: "easeOutCirc" },
            { id: "eid1971", tween: [ "style", "${_bb_txt}", "opacity", '1', { fromValue: '0'}], position: 4000, duration: 411 },
            { id: "eid12039", tween: [ "style", "${_bb_txt}", "opacity", '0.93999999761581', { fromValue: '1'}], position: 11129, duration: 0 },
            { id: "eid12071", tween: [ "style", "${_sa6}", "-webkit-transform-origin", [169.819,107.2194], { valueTemplate: '@@0@@% @@1@@%', fromValue: [169.819,107.2194]}], position: 1701, duration: 0 },
            { id: "eid23339", tween: [ "style", "${_sa6}", "-moz-transform-origin", [169.819,107.2194], { valueTemplate: '@@0@@% @@1@@%', fromValue: [169.819,107.2194]}], position: 1701, duration: 0 },
            { id: "eid23340", tween: [ "style", "${_sa6}", "-ms-transform-origin", [169.819,107.2194], { valueTemplate: '@@0@@% @@1@@%', fromValue: [169.819,107.2194]}], position: 1701, duration: 0 },
            { id: "eid23341", tween: [ "style", "${_sa6}", "msTransformOrigin", [169.819,107.2194], { valueTemplate: '@@0@@% @@1@@%', fromValue: [169.819,107.2194]}], position: 1701, duration: 0 },
            { id: "eid23342", tween: [ "style", "${_sa6}", "-o-transform-origin", [169.819,107.2194], { valueTemplate: '@@0@@% @@1@@%', fromValue: [169.819,107.2194]}], position: 1701, duration: 0 },
            { id: "eid12053", tween: [ "style", "${_sa4}", "-webkit-transform-origin", [346.5312,133.6768], { valueTemplate: '@@0@@% @@1@@%', fromValue: [346.5312,133.6768]}], position: 250, duration: 0, easing: "easeOutCirc" },
            { id: "eid23343", tween: [ "style", "${_sa4}", "-moz-transform-origin", [346.5312,133.6768], { valueTemplate: '@@0@@% @@1@@%', fromValue: [346.5312,133.6768]}], position: 250, duration: 0, easing: "easeOutCirc" },
            { id: "eid23344", tween: [ "style", "${_sa4}", "-ms-transform-origin", [346.5312,133.6768], { valueTemplate: '@@0@@% @@1@@%', fromValue: [346.5312,133.6768]}], position: 250, duration: 0, easing: "easeOutCirc" },
            { id: "eid23345", tween: [ "style", "${_sa4}", "msTransformOrigin", [346.5312,133.6768], { valueTemplate: '@@0@@% @@1@@%', fromValue: [346.5312,133.6768]}], position: 250, duration: 0, easing: "easeOutCirc" },
            { id: "eid23346", tween: [ "style", "${_sa4}", "-o-transform-origin", [346.5312,133.6768], { valueTemplate: '@@0@@% @@1@@%', fromValue: [346.5312,133.6768]}], position: 250, duration: 0, easing: "easeOutCirc" },
            { id: "eid12072", tween: [ "style", "${_sa4}", "-webkit-transform-origin", [473.7341,87.4665], { valueTemplate: '@@0@@% @@1@@%', fromValue: [346.5312,133.6768]}], position: 1701, duration: 0 },
            { id: "eid23347", tween: [ "style", "${_sa4}", "-moz-transform-origin", [473.7341,87.4665], { valueTemplate: '@@0@@% @@1@@%', fromValue: [346.5312,133.6768]}], position: 1701, duration: 0 },
            { id: "eid23348", tween: [ "style", "${_sa4}", "-ms-transform-origin", [473.7341,87.4665], { valueTemplate: '@@0@@% @@1@@%', fromValue: [346.5312,133.6768]}], position: 1701, duration: 0 },
            { id: "eid23349", tween: [ "style", "${_sa4}", "msTransformOrigin", [473.7341,87.4665], { valueTemplate: '@@0@@% @@1@@%', fromValue: [346.5312,133.6768]}], position: 1701, duration: 0 },
            { id: "eid23350", tween: [ "style", "${_sa4}", "-o-transform-origin", [473.7341,87.4665], { valueTemplate: '@@0@@% @@1@@%', fromValue: [346.5312,133.6768]}], position: 1701, duration: 0 },
            { id: "eid4091", tween: [ "color", "${_apple_txt}", "color", 'rgba(83,179,151,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(83,179,151,1.00)'}], position: 4983, duration: 0 },
            { id: "eid1973", tween: [ "style", "${_netfrontpercent_txt}", "opacity", '1', { fromValue: '0'}], position: 4411, duration: 411 },
            { id: "eid12042", tween: [ "transform", "${_sa1}", "rotateZ", '360deg', { fromValue: '153deg'}], position: 250, duration: 1451, easing: "easeOutCirc" },
            { id: "eid1113", tween: [ "style", "${_operaico_sym}", "clip", [0,12,54,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,12,0,0]}], position: 2000, duration: 250, easing: "easeOutSine" },
            { id: "eid12066", tween: [ "transform", "${_sa4}", "translateX", '310px', { fromValue: '310px'}], position: 1701, duration: 0 },
            { id: "eid12049", tween: [ "transform", "${_sa3}", "rotateZ", '0deg', { fromValue: '289deg'}], position: 250, duration: 1451, easing: "easeOutCirc" },
            { id: "eid12047", tween: [ "style", "${_sa2}", "opacity", '1', { fromValue: '0'}], position: 250, duration: 437, easing: "easeOutCirc" },
            { id: "eid12074", tween: [ "style", "${_sa1}", "-webkit-transform-origin", [54.6311,111.5979], { valueTemplate: '@@0@@% @@1@@%', fromValue: [54.6311,111.5979]}], position: 1701, duration: 0 },
            { id: "eid23351", tween: [ "style", "${_sa1}", "-moz-transform-origin", [54.6311,111.5979], { valueTemplate: '@@0@@% @@1@@%', fromValue: [54.6311,111.5979]}], position: 1701, duration: 0 },
            { id: "eid23352", tween: [ "style", "${_sa1}", "-ms-transform-origin", [54.6311,111.5979], { valueTemplate: '@@0@@% @@1@@%', fromValue: [54.6311,111.5979]}], position: 1701, duration: 0 },
            { id: "eid23353", tween: [ "style", "${_sa1}", "msTransformOrigin", [54.6311,111.5979], { valueTemplate: '@@0@@% @@1@@%', fromValue: [54.6311,111.5979]}], position: 1701, duration: 0 },
            { id: "eid23354", tween: [ "style", "${_sa1}", "-o-transform-origin", [54.6311,111.5979], { valueTemplate: '@@0@@% @@1@@%', fromValue: [54.6311,111.5979]}], position: 1701, duration: 0 },
            { id: "eid12040", tween: [ "transform", "${_sa1}", "translateX", '269.99999px', { fromValue: '283.26171px'}], position: 250, duration: 1451, easing: "easeOutCirc" },
            { id: "eid1963", tween: [ "style", "${_otherpercent_txt}", "opacity", '1', { fromValue: '0'}], position: 4572, duration: 411 },
            { id: "eid12061", tween: [ "style", "${_sa6}", "opacity", '1', { fromValue: '0'}], position: 250, duration: 388, easing: "easeOutCirc" },
            { id: "eid12057", tween: [ "style", "${_sa5}", "opacity", '1', { fromValue: '0'}], position: 250, duration: 656, easing: "easeOutCirc" },
            { id: "eid12063", tween: [ "transform", "${_sa6}", "translateY", '300.00002px', { fromValue: '300.00002px'}], position: 1701, duration: 0 },
            { id: "eid4092", tween: [ "color", "${_netfront_txt}", "color", 'rgba(215,145,63,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(215,145,63,1.00)'}], position: 4983, duration: 0 },
            { id: "eid1941", tween: [ "style", "${_opera_txt}", "opacity", '1', { fromValue: '0'}], position: 3749, duration: 411 },
            { id: "eid12064", tween: [ "transform", "${_sa5}", "translateX", '321.99998px', { fromValue: '269.99999px'}], position: 250, duration: 0 },
            { id: "eid1943", tween: [ "style", "${_operapercent_txt}", "opacity", '1', { fromValue: '0'}], position: 3749, duration: 411 },
            { id: "eid12043", tween: [ "style", "${_sa1}", "opacity", '1', { fromValue: '0'}], position: 250, duration: 656, easing: "easeOutCirc" },
            { id: "eid1967", tween: [ "style", "${_apple_txt}", "opacity", '1', { fromValue: '0'}], position: 4160, duration: 411 },
            { id: "eid12038", tween: [ "style", "${_apple_txt}", "opacity", '0.99000000953674', { fromValue: '1'}], position: 11129, duration: 0 },
            { id: "eid8780", tween: [ "style", "${_samsungico_sym}", "clip", [0,13,73,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,12,0,0]}], position: 2291, duration: 250, easing: "easeOutSine" },
            { id: "eid1939", tween: [ "style", "${_netfront_txt}", "opacity", '1', { fromValue: '0'}], position: 4411, duration: 411 },
            { id: "eid1105", tween: [ "style", "${_appleico_sym}", "clip", [0,12,85,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,12,0,0]}], position: 2250, duration: 250, easing: "easeOutSine" },
            { id: "eid12044", tween: [ "transform", "${_sa2}", "translateX", '281.99999px', { fromValue: '199.48623px'}], position: 250, duration: 1451, easing: "easeOutCirc" },
            { id: "eid4090", tween: [ "color", "${_bb_txt}", "color", 'rgba(207,204,109,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(207,204,109,1.00)'}], position: 4983, duration: 0 },
            { id: "eid12050", tween: [ "style", "${_sa3}", "-webkit-transform-origin", [279.1775,147.4864], { valueTemplate: '@@0@@% @@1@@%', fromValue: [279.1775,147.4864]}], position: 250, duration: 0, easing: "easeOutCirc" },
            { id: "eid23355", tween: [ "style", "${_sa3}", "-moz-transform-origin", [279.1775,147.4864], { valueTemplate: '@@0@@% @@1@@%', fromValue: [279.1775,147.4864]}], position: 250, duration: 0, easing: "easeOutCirc" },
            { id: "eid23356", tween: [ "style", "${_sa3}", "-ms-transform-origin", [279.1775,147.4864], { valueTemplate: '@@0@@% @@1@@%', fromValue: [279.1775,147.4864]}], position: 250, duration: 0, easing: "easeOutCirc" },
            { id: "eid23357", tween: [ "style", "${_sa3}", "msTransformOrigin", [279.1775,147.4864], { valueTemplate: '@@0@@% @@1@@%', fromValue: [279.1775,147.4864]}], position: 250, duration: 0, easing: "easeOutCirc" },
            { id: "eid23358", tween: [ "style", "${_sa3}", "-o-transform-origin", [279.1775,147.4864], { valueTemplate: '@@0@@% @@1@@%', fromValue: [279.1775,147.4864]}], position: 250, duration: 0, easing: "easeOutCirc" },
            { id: "eid12070", tween: [ "style", "${_sa3}", "-webkit-transform-origin", [452.1907,103.9725], { valueTemplate: '@@0@@% @@1@@%', fromValue: [279.1775,147.4864]}], position: 1701, duration: 0 },
            { id: "eid23359", tween: [ "style", "${_sa3}", "-moz-transform-origin", [452.1907,103.9725], { valueTemplate: '@@0@@% @@1@@%', fromValue: [279.1775,147.4864]}], position: 1701, duration: 0 },
            { id: "eid23360", tween: [ "style", "${_sa3}", "-ms-transform-origin", [452.1907,103.9725], { valueTemplate: '@@0@@% @@1@@%', fromValue: [279.1775,147.4864]}], position: 1701, duration: 0 },
            { id: "eid23361", tween: [ "style", "${_sa3}", "msTransformOrigin", [452.1907,103.9725], { valueTemplate: '@@0@@% @@1@@%', fromValue: [279.1775,147.4864]}], position: 1701, duration: 0 },
            { id: "eid23362", tween: [ "style", "${_sa3}", "-o-transform-origin", [452.1907,103.9725], { valueTemplate: '@@0@@% @@1@@%', fromValue: [279.1775,147.4864]}], position: 1701, duration: 0 },
            { id: "eid12052", tween: [ "transform", "${_sa4}", "rotateZ", '360deg', { fromValue: '74deg'}], position: 250, duration: 1451, easing: "easeOutCirc" },
            { id: "eid4089", tween: [ "color", "${_nokia_txt}", "color", 'rgba(171,109,169,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(171,109,169,1.00)'}], position: 4983, duration: 0 },
            { id: "eid12054", tween: [ "style", "${_sa4}", "opacity", '1', { fromValue: '0'}], position: 250, duration: 500, easing: "easeOutCirc" },
            { id: "eid1431", tween: [ "style", "${_TextCopy}", "clip", [0,192,31,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,0,31,0]}], position: 3365, duration: 250 },
            { id: "eid12068", tween: [ "transform", "${_sa3}", "translateX", '296px', { fromValue: '296px'}], position: 1701, duration: 0 },
            { id: "eid12062", tween: [ "transform", "${_sa6}", "translateX", '336.18932px', { fromValue: '336.18932px'}], position: 1701, duration: 0 },
            { id: "eid12060", tween: [ "transform", "${_sa6}", "rotateZ", '360deg', { fromValue: '445deg'}], position: 250, duration: 1451, easing: "easeOutCirc" },
            { id: "eid12045", tween: [ "transform", "${_sa2}", "translateY", '236.99999px', { fromValue: '202.55142px'}], position: 250, duration: 1451, easing: "easeOutCirc" },
            { id: "eid1017", tween: [ "style", "${_Rectangle}", "height", '2px', { fromValue: '0px'}], position: 1701, duration: 299 },
            { id: "eid1949", tween: [ "style", "${_other_txt}", "opacity", '1', { fromValue: '0'}], position: 4572, duration: 411 },
            { id: "eid12065", tween: [ "transform", "${_sa5}", "translateY", '336px', { fromValue: '219.99999px'}], position: 250, duration: 0 },
            { id: "eid1947", tween: [ "style", "${_nokiapercent_txt}", "opacity", '1', { fromValue: '0'}], position: 3838, duration: 411 },
            { id: "eid4093", tween: [ "color", "${_other_txt}", "color", 'rgba(117,70,139,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(117,70,139,1.00)'}], position: 4983, duration: 0 },
            { id: "eid12059", tween: [ "transform", "${_sa5}", "rotateZ", '360deg', { fromValue: '131deg'}], position: 250, duration: 1451, easing: "easeOutCirc" },
            { id: "eid1115", tween: [ "style", "${_netfrontico_sym}", "clip", [0,13,73,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,12,0,0]}], position: 2120, duration: 250, easing: "easeOutSine" },
            { id: "eid12073", tween: [ "style", "${_sa2}", "-webkit-transform-origin", [114.164,114.0101], { valueTemplate: '@@0@@% @@1@@%', fromValue: [114.164,114.0101]}], position: 1701, duration: 0 },
            { id: "eid23363", tween: [ "style", "${_sa2}", "-moz-transform-origin", [114.164,114.0101], { valueTemplate: '@@0@@% @@1@@%', fromValue: [114.164,114.0101]}], position: 1701, duration: 0 },
            { id: "eid23364", tween: [ "style", "${_sa2}", "-ms-transform-origin", [114.164,114.0101], { valueTemplate: '@@0@@% @@1@@%', fromValue: [114.164,114.0101]}], position: 1701, duration: 0 },
            { id: "eid23365", tween: [ "style", "${_sa2}", "msTransformOrigin", [114.164,114.0101], { valueTemplate: '@@0@@% @@1@@%', fromValue: [114.164,114.0101]}], position: 1701, duration: 0 },
            { id: "eid23366", tween: [ "style", "${_sa2}", "-o-transform-origin", [114.164,114.0101], { valueTemplate: '@@0@@% @@1@@%', fromValue: [114.164,114.0101]}], position: 1701, duration: 0 },
            { id: "eid1429", tween: [ "style", "${_header}", "clip", [0,433,31,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,0,31,0]}], position: 2589, duration: 1160 }         ]
      }
   }
},
"ocgraph_sym": {
   version: "0.1.4",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {"dom":[{"id":"operaico_sym","className":"symbolStage_asiagraph_sym_operaico_sym_id","type":"rect","rect":[269.000005,379.500018,0,0],"transform":[[52.00001,-2]]},{"id":"nokiaico_sym","className":"symbolStage_asiagraph_sym_nokiaico_sym_id","type":"rect","rect":[283.500009,379.500018,0,0],"transform":[[28.00001,-1]]},{"id":"bbico_sym","className":"symbolStage_asiagraph_sym_bbico_sym_id","type":"rect","rect":[294.499997,379.500018,0,0],"transform":[[-12]]},{"id":"appleico_sym","className":"symbolStage_asiagraph_sym_appleico_sym_id","type":"rect","rect":[312,379.500018,0,0],"transform":[[-42]]},{"id":"otherico_sym","className":"symbolStage_asiagraph_sym_otherico_sym_id","type":"rect","rect":[337.500004,379.500018,0,0],"transform":[]},{"id":"header","className":"Text_id","type":"text","rect":[417,327,433.80078125,31],"text":"Mobile Browser Marketshare","font":["Armata",24,"rgba(65,64,66,1.00)","normal","none",""],"transform":[[169.78122,-70]]},{"id":"TextCopy","className":"Text_id","type":"text","rect":[417,327,433.80078125,31],"text":"Oceania","font":["Armata",24,"rgba(144,144,144,1.00)","normal","none",""],"transform":[[169.78122,-38.99999]]},{"id":"opera_txt","className":"symbolStage_asiagraph_sym_Text2_id","type":"text","rect":[587,331,91,16],"opacity":1,"text":"iOS","align":"auto","font":["Armata",13,"rgba(63,215,95,1.00)","normal","none","normal"],"transform":[]},{"id":"operapercent_txt","className":"Text2Copy_id","type":"text","rect":[587,331,91,16],"opacity":1,"text":"xxx","align":"auto","font":["Armata",13,"rgba(144,144,144,1.00)","normal","none","normal"],"transform":[[0,16]]},{"id":"nokiapercent_txt","className":"Text2Copy_id","type":"text","rect":[587,331,91,16],"opacity":1,"text":"xxx","align":"auto","font":["Armata",13,"rgba(144,144,144,1.00)","normal","none","normal"],"transform":[[0,61.99999]]},{"id":"nokia_txt","className":"symbolStage_asiagraph_sym_Text2_id","type":"text","rect":[587,331,91,16],"opacity":1,"text":"BlackBerry","align":"auto","font":["Armata",13,"rgba(63,215,95,1.00)","normal","none","normal"],"transform":[[0,45.99999]]},{"id":"bb_txt","className":"symbolStage_asiagraph_sym_Text2_id","type":"text","rect":[587,331,91,16],"opacity":1,"text":"Android","align":"auto","font":["Armata",13,"rgba(63,215,95,1.00)","normal","none","normal"],"transform":[[0,89.99999]]},{"id":"bbpercent_txt","className":"Text2Copy_id","type":"text","rect":[587,331,91,16],"opacity":1,"text":"xxx","align":"auto","font":["Armata",13,"rgba(144,144,144,1.00)","normal","none","normal"],"transform":[[0,105.99999]]},{"id":"otherpercent_txt","className":"Text2Copy_id","type":"text","rect":[587,331,91,16],"opacity":1,"text":"xxx","align":"auto","font":["Armata",13,"rgba(144,144,144,1.00)","normal","none","normal"],"transform":[[135.85937,105.99999]]},{"id":"other_txt","className":"symbolStage_asiagraph_sym_Text2_id","type":"text","rect":[587,331,91,16],"opacity":1,"text":"Other","align":"auto","font":["Armata",13,"rgba(63,215,95,1.00)","normal","none","normal"],"transform":[[135.85937,89.99999]]},{"id":"netfront_txt","className":"symbolStage_asiagraph_sym_Text2_id","type":"text","rect":[587,331,91,16],"opacity":1,"text":"Opera","align":"auto","font":["Armata",13,"rgba(63,215,95,1.00)","normal","none","normal"],"transform":[[135.85937,45.99999]]},{"id":"netfrontpercent_txt","className":"Text2Copy_id","type":"text","rect":[587,331,91,16],"opacity":1,"text":"xxx","align":"auto","font":["Armata",13,"rgba(144,144,144,1.00)","normal","none","normal"],"transform":[[135.85937,61.99999]]},{"id":"iospercent_txt","className":"Text2Copy_id","type":"text","rect":[587,331,91,16],"opacity":1,"text":"xxx","align":"auto","font":["Armata",13,"rgba(144,144,144,1.00)","normal","none","normal"],"transform":[[135.85937,16]]},{"id":"apple_txt","className":"symbolStage_asiagraph_sym_Text2_id","type":"text","rect":[587,331,91,16],"opacity":1,"text":"Nokia","align":"auto","font":["Armata",13,"rgba(63,215,95,1.00)","normal","none","normal"],"transform":[[135.85937]]},{"id":"androidico_sym2","className":"symbolStage_ocgraph_sym_androidico_sym2_id","type":"rect","rect":[305.48828125,399.984375,0,0],"transform":[[-6,-21]]},{"id":"au1","className":"symbolStage_ocgraph_sym_au1_id","type":"image","rect":[0,0,307,287],"fill":["rgba(0,0,0,0)","images/au1.png"],"transform":[[234.84065,208]]},{"id":"au2","className":"symbolStage_ocgraph_sym_au2_id","type":"image","rect":[0,0,48,96],"fill":["rgba(0,0,0,0)","images/au2.png"],"transform":[[234.84065,208]]},{"id":"au3","className":"symbolStage_ocgraph_sym_au3_id","type":"image","rect":[0,0,28,60],"fill":["rgba(0,0,0,0)","images/au3.png"],"transform":[[234.84065,208]]},{"id":"au4","className":"symbolStage_ocgraph_sym_au4_id","type":"image","rect":[0,0,24,50],"fill":["rgba(0,0,0,0)","images/au4.png"],"transform":[[234.84065,208]]},{"id":"au5","className":"symbolStage_ocgraph_sym_au5_id","type":"image","rect":[0,0,17,23],"fill":["rgba(0,0,0,0)","images/au5.png"],"transform":[[234.84065,208]]},{"id":"au6","className":"symbolStage_ocgraph_sym_au6_id","type":"image","rect":[0,0,16,18],"fill":["rgba(0,0,0,0)","images/au6.png"],"transform":[[234.84065,208]]},{"id":"Rectangle","className":"symbolStage_asiagraph_sym_Rectangle_id","type":"rect","rect":[268.33331298828,377.49997901917,91.360687255859,1.904296875],"fill":["rgba(88,89,90,1.00)",null],"stroke":[0,"rgba(0, 0, 0, 0)","none"],"transform":[[-4]]}],"symbolInstances":[{"id":"operaico_sym","symbolName":"operaico_sym"},{"id":"androidico_sym2","symbolName":"androidico_sym"},{"id":"nokiaico_sym","symbolName":"nokiaico_sy"},{"id":"appleico_sym","symbolName":"appleico_sym"},{"id":"bbico_sym","symbolName":"bbico_sym"},{"id":"otherico_sym","symbolName":"otherico_sym"}]},
   states: {
      "Base State": {
         "${_bbpercent_txt}": [
            ["style", "width", '91px'],
            ["transform", "translateX", '0px'],
            ["style", "height", '16px'],
            ["color", "color", 'rgba(144,144,144,1.00)'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '105.99999px'],
            ["style", "font-size", '13px']
         ],
         "${_au5}": [
            ["style", "-webkit-transform-origin", [310.721,113.3263],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-moz-transform-origin", [310.721,113.3263],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [310.721,113.3263],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [310.721,113.3263],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [310.721,113.3263],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "translateX", '232.84065px'],
            ["transform", "rotateZ", '131deg'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '210px']
         ],
         "${_otherico_sym}": [
            ["style", "clip", [0,12,0,0],{valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}]
         ],
         "${_nokiapercent_txt}": [
            ["style", "font-size", '13px'],
            ["transform", "translateX", '0px'],
            ["color", "color", 'rgba(144,144,144,1.00)'],
            ["style", "height", '16px'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '61.99999px'],
            ["style", "width", '91px']
         ],
         "${_apple_txt}": [
            ["style", "width", '91px'],
            ["transform", "translateX", '135.85937px'],
            ["style", "height", '16px'],
            ["color", "color", 'rgba(83,179,151,1.00)'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '0px'],
            ["style", "font-size", '13px']
         ],
         "${_netfrontpercent_txt}": [
            ["style", "width", '91px'],
            ["transform", "translateX", '135.85937px'],
            ["style", "height", '16px'],
            ["color", "color", 'rgba(144,144,144,1.00)'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '61.99999px'],
            ["style", "font-size", '13px']
         ],
         "${_other_txt}": [
            ["style", "width", '91px'],
            ["transform", "translateX", '135.85937px'],
            ["style", "height", '16px'],
            ["color", "color", 'rgba(117,70,139,1.00)'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '89.99999px'],
            ["style", "font-size", '13px']
         ],
         "${symbolSelector}": [
            ["style", "height", '149px'],
            ["style", "width", '282px']
         ],
         "${_au2}": [
            ["style", "-webkit-transform-origin", [-110.2102,326.4498],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-moz-transform-origin", [-110.2102,326.4498],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [-110.2102,326.4498],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [-110.2102,326.4498],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [-110.2102,326.4498],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "translateX", '280px'],
            ["transform", "rotateZ", '115deg'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '282.00001px']
         ],
         "${_Rectangle}": [
            ["style", "height", '0px'],
            ["color", "background-color", 'rgba(88,89,90,1.00)'],
            ["transform", "translateX", '-4px'],
            ["style", "width", '0px']
         ],
         "${_operapercent_txt}": [
            ["style", "width", '91px'],
            ["transform", "translateX", '0px'],
            ["style", "height", '16px'],
            ["color", "color", 'rgba(144,144,144,1.00)'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '16px'],
            ["style", "font-size", '13px']
         ],
         "${_otherpercent_txt}": [
            ["style", "font-size", '13px'],
            ["transform", "translateX", '135.85937px'],
            ["color", "color", 'rgba(144,144,144,1.00)'],
            ["style", "height", '16px'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '105.99999px'],
            ["style", "width", '91px']
         ],
         "${_nokiaico_sym}": [
            ["style", "clip", [0,12,0,0],{valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}],
            ["transform", "translateX", '28.00001px'],
            ["transform", "translateY", '-1px']
         ],
         "${_nokia_txt}": [
            ["style", "width", '91px'],
            ["transform", "translateX", '0px'],
            ["style", "height", '16px'],
            ["color", "color", 'rgba(171,109,169,1.00)'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '45.99999px'],
            ["style", "font-size", '13px']
         ],
         "${_au3}": [
            ["style", "-webkit-transform-origin", [279.1775,147.4864],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-moz-transform-origin", [279.1775,147.4864],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [279.1775,147.4864],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [279.1775,147.4864],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [279.1775,147.4864],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "translateX", '294px'],
            ["transform", "rotateZ", '289deg'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '318.00002px']
         ],
         "${_au4}": [
            ["style", "-webkit-transform-origin", [346.5312,133.6768],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-moz-transform-origin", [346.5312,133.6768],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [346.5312,133.6768],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [346.5312,133.6768],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [346.5312,133.6768],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "translateX", '308px'],
            ["transform", "rotateZ", '74deg'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '329.00002px']
         ],
         "${_opera_txt}": [
            ["style", "font-size", '13px'],
            ["transform", "translateX", '0px'],
            ["color", "color", 'rgba(63,215,95,1.00)'],
            ["style", "height", '16px'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '0px'],
            ["style", "width", '91px']
         ],
         "${_bbico_sym}": [
            ["style", "clip", [0,12,0,0],{valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}],
            ["transform", "translateX", '-12px']
         ],
         "${_netfront_txt}": [
            ["style", "font-size", '13px'],
            ["transform", "translateX", '135.85937px'],
            ["color", "color", 'rgba(215,145,63,1.00)'],
            ["style", "height", '16px'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '45.99999px'],
            ["style", "width", '91px']
         ],
         "${_bb_txt}": [
            ["style", "font-size", '13px'],
            ["transform", "translateX", '0px'],
            ["color", "color", 'rgba(207,204,109,1.00)'],
            ["style", "height", '16px'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '89.99999px'],
            ["style", "width", '91px']
         ],
         "${_androidico_sym2}": [
            ["style", "clip", [0,12,0,0],{valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}],
            ["transform", "translateX", '-6px'],
            ["transform", "translateY", '-21px']
         ],
         "${_header}": [
            ["transform", "translateX", '169.78122px'],
            ["transform", "translateY", '-70px'],
            ["color", "color", 'rgba(65,64,66,1)'],
            ["style", "font-family", 'Armata'],
            ["style", "clip", [0,0,31,0],{valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}],
            ["style", "height", '31px']
         ],
         "${_iospercent_txt}": [
            ["style", "font-size", '13px'],
            ["transform", "translateX", '135.85937px'],
            ["color", "color", 'rgba(144,144,144,1.00)'],
            ["style", "height", '16px'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '16px'],
            ["style", "width", '91px']
         ],
         "${_au6}": [
            ["style", "-webkit-transform-origin", [508.8572,121.3482],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-moz-transform-origin", [508.8572,121.3482],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [508.8572,121.3482],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [508.8572,121.3482],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [508.8572,121.3482],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "translateX", '336.00001px'],
            ["transform", "rotateZ", '445deg'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '361.00003px']
         ],
         "${_operaico_sym}": [
            ["style", "clip", [0,12,0,0],{valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}],
            ["transform", "translateX", '52.00001px'],
            ["transform", "translateY", '-2px']
         ],
         "${_au1}": [
            ["style", "-webkit-transform-origin", [50.1356,55.4151],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-moz-transform-origin", [50.1356,55.4151],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50.1356,55.4151],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50.1356,55.4151],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50.1356,55.4151],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "translateX", '248.10237px'],
            ["transform", "rotateZ", '153deg'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '240.33718px']
         ],
         "${_TextCopy}": [
            ["transform", "translateX", '169.78122px'],
            ["transform", "translateY", '-38.99999px'],
            ["color", "color", 'rgba(144,144,144,1.00)'],
            ["style", "font-family", 'Armata'],
            ["style", "clip", [0,0,31,0],{valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}],
            ["style", "height", '31px']
         ],
         "${_appleico_sym}": [
            ["style", "clip", [0,12,0,0],{valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}],
            ["transform", "translateX", '-42px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 4983,
         autoPlay: false,
         labels: {
            "play": 250
         },
         timeline: [
            { id: "eid1111", tween: [ "style", "${_nokiaico_sym}", "clip", [0,11,75,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,12,0,0]}], position: 2120, duration: 250, easing: "easeOutSine" },
            { id: "eid1945", tween: [ "style", "${_bbpercent_txt}", "opacity", '1', { fromValue: '0'}], position: 4000, duration: 411 },
            { id: "eid14663", tween: [ "style", "${_au2}", "-webkit-transform-origin", [296.9076,115.0472], { valueTemplate: '@@0@@% @@1@@%', fromValue: [-110.2102,326.4498]}], position: 250, duration: 0 },
            { id: "eid23367", tween: [ "style", "${_au2}", "-moz-transform-origin", [296.9076,115.0472], { valueTemplate: '@@0@@% @@1@@%', fromValue: [-110.2102,326.4498]}], position: 250, duration: 0 },
            { id: "eid23368", tween: [ "style", "${_au2}", "-ms-transform-origin", [296.9076,115.0472], { valueTemplate: '@@0@@% @@1@@%', fromValue: [-110.2102,326.4498]}], position: 250, duration: 0 },
            { id: "eid23369", tween: [ "style", "${_au2}", "msTransformOrigin", [296.9076,115.0472], { valueTemplate: '@@0@@% @@1@@%', fromValue: [-110.2102,326.4498]}], position: 250, duration: 0 },
            { id: "eid23370", tween: [ "style", "${_au2}", "-o-transform-origin", [296.9076,115.0472], { valueTemplate: '@@0@@% @@1@@%', fromValue: [-110.2102,326.4498]}], position: 250, duration: 0 },
            { id: "eid12838", tween: [ "style", "${_au2}", "opacity", '1', { fromValue: '0'}], position: 250, duration: 437, easing: "easeOutCirc" },
            { id: "eid1965", tween: [ "style", "${_nokia_txt}", "opacity", '1', { fromValue: '0'}], position: 3838, duration: 411 },
            { id: "eid1019", tween: [ "style", "${_Rectangle}", "width", '91px', { fromValue: '0px'}], position: 1701, duration: 299 },
            { id: "eid1973", tween: [ "style", "${_netfrontpercent_txt}", "opacity", '1', { fromValue: '0'}], position: 4411, duration: 411 },
            { id: "eid1969", tween: [ "style", "${_iospercent_txt}", "opacity", '1', { fromValue: '0'}], position: 4160, duration: 411 },
            { id: "eid1107", tween: [ "style", "${_otherico_sym}", "clip", [0,12,32,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,12,0,0]}], position: 2250, duration: 250, easing: "easeOutSine" },
            { id: "eid12834", tween: [ "style", "${_au1}", "opacity", '1', { fromValue: '0'}], position: 250, duration: 656, easing: "easeOutCirc" },
            { id: "eid4089", tween: [ "color", "${_nokia_txt}", "color", 'rgba(171,109,169,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(171,109,169,1.00)'}], position: 4983, duration: 0 },
            { id: "eid1109", tween: [ "style", "${_bbico_sym}", "clip", [0,13,56,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,12,0,0]}], position: 2000, duration: 250, easing: "easeOutSine" },
            { id: "eid1971", tween: [ "style", "${_bb_txt}", "opacity", '1', { fromValue: '0'}], position: 4000, duration: 411 },
            { id: "eid12841", tween: [ "style", "${_au5}", "opacity", '1', { fromValue: '0'}], position: 250, duration: 656, easing: "easeOutCirc" },
            { id: "eid12853", tween: [ "style", "${_au3}", "-webkit-transform-origin", [279.1775,147.4864], { valueTemplate: '@@0@@% @@1@@%', fromValue: [279.1775,147.4864]}], position: 250, duration: 0, easing: "easeOutCirc" },
            { id: "eid23371", tween: [ "style", "${_au3}", "-moz-transform-origin", [279.1775,147.4864], { valueTemplate: '@@0@@% @@1@@%', fromValue: [279.1775,147.4864]}], position: 250, duration: 0, easing: "easeOutCirc" },
            { id: "eid23372", tween: [ "style", "${_au3}", "-ms-transform-origin", [279.1775,147.4864], { valueTemplate: '@@0@@% @@1@@%', fromValue: [279.1775,147.4864]}], position: 250, duration: 0, easing: "easeOutCirc" },
            { id: "eid23373", tween: [ "style", "${_au3}", "msTransformOrigin", [279.1775,147.4864], { valueTemplate: '@@0@@% @@1@@%', fromValue: [279.1775,147.4864]}], position: 250, duration: 0, easing: "easeOutCirc" },
            { id: "eid23374", tween: [ "style", "${_au3}", "-o-transform-origin", [279.1775,147.4864], { valueTemplate: '@@0@@% @@1@@%', fromValue: [279.1775,147.4864]}], position: 250, duration: 0, easing: "easeOutCirc" },
            { id: "eid12865", tween: [ "style", "${_au3}", "-webkit-transform-origin", [476.008,102.4913], { valueTemplate: '@@0@@% @@1@@%', fromValue: [279.1775,147.4864]}], position: 1701, duration: 0 },
            { id: "eid23375", tween: [ "style", "${_au3}", "-moz-transform-origin", [476.008,102.4913], { valueTemplate: '@@0@@% @@1@@%', fromValue: [279.1775,147.4864]}], position: 1701, duration: 0 },
            { id: "eid23376", tween: [ "style", "${_au3}", "-ms-transform-origin", [476.008,102.4913], { valueTemplate: '@@0@@% @@1@@%', fromValue: [279.1775,147.4864]}], position: 1701, duration: 0 },
            { id: "eid23377", tween: [ "style", "${_au3}", "msTransformOrigin", [476.008,102.4913], { valueTemplate: '@@0@@% @@1@@%', fromValue: [279.1775,147.4864]}], position: 1701, duration: 0 },
            { id: "eid23378", tween: [ "style", "${_au3}", "-o-transform-origin", [476.008,102.4913], { valueTemplate: '@@0@@% @@1@@%', fromValue: [279.1775,147.4864]}], position: 1701, duration: 0 },
            { id: "eid4091", tween: [ "color", "${_apple_txt}", "color", 'rgba(83,179,151,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(83,179,151,1.00)'}], position: 4983, duration: 0 },
            { id: "eid12863", tween: [ "style", "${_au6}", "-webkit-transform-origin", [508.8572,121.3482], { valueTemplate: '@@0@@% @@1@@%', fromValue: [508.8572,121.3482]}], position: 1701, duration: 0 },
            { id: "eid23379", tween: [ "style", "${_au6}", "-moz-transform-origin", [508.8572,121.3482], { valueTemplate: '@@0@@% @@1@@%', fromValue: [508.8572,121.3482]}], position: 1701, duration: 0 },
            { id: "eid23380", tween: [ "style", "${_au6}", "-ms-transform-origin", [508.8572,121.3482], { valueTemplate: '@@0@@% @@1@@%', fromValue: [508.8572,121.3482]}], position: 1701, duration: 0 },
            { id: "eid23381", tween: [ "style", "${_au6}", "msTransformOrigin", [508.8572,121.3482], { valueTemplate: '@@0@@% @@1@@%', fromValue: [508.8572,121.3482]}], position: 1701, duration: 0 },
            { id: "eid23382", tween: [ "style", "${_au6}", "-o-transform-origin", [508.8572,121.3482], { valueTemplate: '@@0@@% @@1@@%', fromValue: [508.8572,121.3482]}], position: 1701, duration: 0 },
            { id: "eid1431", tween: [ "style", "${_TextCopy}", "clip", [0,114,31,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,0,31,0]}], position: 3365, duration: 250 },
            { id: "eid12854", tween: [ "style", "${_au3}", "opacity", '1', { fromValue: '0'}], position: 250, duration: 388, easing: "easeOutCirc" },
            { id: "eid12839", tween: [ "style", "${_au5}", "-webkit-transform-origin", [516.5364,78.091], { valueTemplate: '@@0@@% @@1@@%', fromValue: [310.721,113.3263]}], position: 250, duration: 1451, easing: "easeOutCirc" },
            { id: "eid23383", tween: [ "style", "${_au5}", "-moz-transform-origin", [516.5364,78.091], { valueTemplate: '@@0@@% @@1@@%', fromValue: [310.721,113.3263]}], position: 250, duration: 1451, easing: "easeOutCirc" },
            { id: "eid23384", tween: [ "style", "${_au5}", "-ms-transform-origin", [516.5364,78.091], { valueTemplate: '@@0@@% @@1@@%', fromValue: [310.721,113.3263]}], position: 250, duration: 1451, easing: "easeOutCirc" },
            { id: "eid23385", tween: [ "style", "${_au5}", "msTransformOrigin", [516.5364,78.091], { valueTemplate: '@@0@@% @@1@@%', fromValue: [310.721,113.3263]}], position: 250, duration: 1451, easing: "easeOutCirc" },
            { id: "eid23386", tween: [ "style", "${_au5}", "-o-transform-origin", [516.5364,78.091], { valueTemplate: '@@0@@% @@1@@%', fromValue: [310.721,113.3263]}], position: 250, duration: 1451, easing: "easeOutCirc" },
            { id: "eid12856", tween: [ "transform", "${_au3}", "translateY", '318.00002px', { fromValue: '318.00002px'}], position: 1701, duration: 0 },
            { id: "eid1963", tween: [ "style", "${_otherpercent_txt}", "opacity", '1', { fromValue: '0'}], position: 4572, duration: 411 },
            { id: "eid12862", tween: [ "transform", "${_au5}", "translateY", '355.00001px', { fromValue: '210px'}], position: 250, duration: 0 },
            { id: "eid13636", tween: [ "transform", "${_au5}", "translateY", '356.00001px', { fromValue: '355.00001px'}], position: 1701, duration: 0 },
            { id: "eid1429", tween: [ "style", "${_header}", "clip", [0,433,31,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,0,31,0]}], position: 2589, duration: 1160 },
            { id: "eid4092", tween: [ "color", "${_netfront_txt}", "color", 'rgba(215,145,63,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(215,145,63,1.00)'}], position: 4983, duration: 0 },
            { id: "eid12846", tween: [ "style", "${_au4}", "opacity", '1', { fromValue: '0'}], position: 250, duration: 500, easing: "easeOutCirc" },
            { id: "eid4093", tween: [ "color", "${_other_txt}", "color", 'rgba(117,70,139,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(117,70,139,1.00)'}], position: 4983, duration: 0 },
            { id: "eid12857", tween: [ "transform", "${_au4}", "translateX", '308px', { fromValue: '308px'}], position: 1701, duration: 0 },
            { id: "eid12855", tween: [ "transform", "${_au3}", "translateX", '294px', { fromValue: '294px'}], position: 1701, duration: 0 },
            { id: "eid12840", tween: [ "transform", "${_au5}", "rotateZ", '360deg', { fromValue: '131deg'}], position: 250, duration: 1451, easing: "easeOutCirc" },
            { id: "eid12867", tween: [ "style", "${_au1}", "-webkit-transform-origin", [50.1356,55.4151], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50.1356,55.4151]}], position: 1701, duration: 0 },
            { id: "eid23387", tween: [ "style", "${_au1}", "-moz-transform-origin", [50.1356,55.4151], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50.1356,55.4151]}], position: 1701, duration: 0 },
            { id: "eid23388", tween: [ "style", "${_au1}", "-ms-transform-origin", [50.1356,55.4151], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50.1356,55.4151]}], position: 1701, duration: 0 },
            { id: "eid23389", tween: [ "style", "${_au1}", "msTransformOrigin", [50.1356,55.4151], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50.1356,55.4151]}], position: 1701, duration: 0 },
            { id: "eid23390", tween: [ "style", "${_au1}", "-o-transform-origin", [50.1356,55.4151], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50.1356,55.4151]}], position: 1701, duration: 0 },
            { id: "eid12845", tween: [ "style", "${_au6}", "opacity", '1', { fromValue: '0'}], position: 250, duration: 388, easing: "easeOutCirc" },
            { id: "eid1949", tween: [ "style", "${_other_txt}", "opacity", '1', { fromValue: '0'}], position: 4572, duration: 411 },
            { id: "eid1943", tween: [ "style", "${_operapercent_txt}", "opacity", '1', { fromValue: '0'}], position: 3749, duration: 411 },
            { id: "eid12837", tween: [ "transform", "${_au2}", "rotateZ", '0deg', { fromValue: '115deg'}], position: 250, duration: 1451, easing: "easeOutCirc" },
            { id: "eid12860", tween: [ "transform", "${_au6}", "translateY", '361.00003px', { fromValue: '361.00003px'}], position: 1701, duration: 0 },
            { id: "eid1967", tween: [ "style", "${_apple_txt}", "opacity", '1', { fromValue: '0'}], position: 4160, duration: 411 },
            { id: "eid12848", tween: [ "style", "${_au4}", "-webkit-transform-origin", [346.5312,133.6768], { valueTemplate: '@@0@@% @@1@@%', fromValue: [346.5312,133.6768]}], position: 250, duration: 0, easing: "easeOutCirc" },
            { id: "eid23391", tween: [ "style", "${_au4}", "-moz-transform-origin", [346.5312,133.6768], { valueTemplate: '@@0@@% @@1@@%', fromValue: [346.5312,133.6768]}], position: 250, duration: 0, easing: "easeOutCirc" },
            { id: "eid23392", tween: [ "style", "${_au4}", "-ms-transform-origin", [346.5312,133.6768], { valueTemplate: '@@0@@% @@1@@%', fromValue: [346.5312,133.6768]}], position: 250, duration: 0, easing: "easeOutCirc" },
            { id: "eid23393", tween: [ "style", "${_au4}", "msTransformOrigin", [346.5312,133.6768], { valueTemplate: '@@0@@% @@1@@%', fromValue: [346.5312,133.6768]}], position: 250, duration: 0, easing: "easeOutCirc" },
            { id: "eid23394", tween: [ "style", "${_au4}", "-o-transform-origin", [346.5312,133.6768], { valueTemplate: '@@0@@% @@1@@%', fromValue: [346.5312,133.6768]}], position: 250, duration: 0, easing: "easeOutCirc" },
            { id: "eid12864", tween: [ "style", "${_au4}", "-webkit-transform-origin", [503.1976,73.6097], { valueTemplate: '@@0@@% @@1@@%', fromValue: [346.5312,133.6768]}], position: 1701, duration: 0 },
            { id: "eid23395", tween: [ "style", "${_au4}", "-moz-transform-origin", [503.1976,73.6097], { valueTemplate: '@@0@@% @@1@@%', fromValue: [346.5312,133.6768]}], position: 1701, duration: 0 },
            { id: "eid23396", tween: [ "style", "${_au4}", "-ms-transform-origin", [503.1976,73.6097], { valueTemplate: '@@0@@% @@1@@%', fromValue: [346.5312,133.6768]}], position: 1701, duration: 0 },
            { id: "eid23397", tween: [ "style", "${_au4}", "msTransformOrigin", [503.1976,73.6097], { valueTemplate: '@@0@@% @@1@@%', fromValue: [346.5312,133.6768]}], position: 1701, duration: 0 },
            { id: "eid23398", tween: [ "style", "${_au4}", "-o-transform-origin", [503.1976,73.6097], { valueTemplate: '@@0@@% @@1@@%', fromValue: [346.5312,133.6768]}], position: 1701, duration: 0 },
            { id: "eid12858", tween: [ "transform", "${_au4}", "translateY", '329.00002px', { fromValue: '329.00002px'}], position: 1701, duration: 0 },
            { id: "eid1105", tween: [ "style", "${_appleico_sym}", "clip", [0,12,85,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,12,0,0]}], position: 2250, duration: 250, easing: "easeOutSine" },
            { id: "eid12831", tween: [ "transform", "${_au1}", "translateX", '267px', { fromValue: '248.10237px'}], position: 250, duration: 1451, easing: "easeOutCirc" },
            { id: "eid12832", tween: [ "transform", "${_au1}", "translateY", '224px', { fromValue: '240.33718px'}], position: 250, duration: 1451, easing: "easeOutCirc" },
            { id: "eid1947", tween: [ "style", "${_nokiapercent_txt}", "opacity", '1', { fromValue: '0'}], position: 3838, duration: 411 },
            { id: "eid12861", tween: [ "transform", "${_au5}", "translateX", '321.00002px', { fromValue: '232.84065px'}], position: 250, duration: 0 },
            { id: "eid1941", tween: [ "style", "${_opera_txt}", "opacity", '1', { fromValue: '0'}], position: 3749, duration: 411 },
            { id: "eid12847", tween: [ "transform", "${_au4}", "rotateZ", '360deg', { fromValue: '74deg'}], position: 250, duration: 1451, easing: "easeOutCirc" },
            { id: "eid12833", tween: [ "transform", "${_au1}", "rotateZ", '360deg', { fromValue: '153deg'}], position: 250, duration: 1451, easing: "easeOutCirc" },
            { id: "eid12852", tween: [ "transform", "${_au3}", "rotateZ", '0deg', { fromValue: '289deg'}], position: 250, duration: 1451, easing: "easeOutCirc" },
            { id: "eid1017", tween: [ "style", "${_Rectangle}", "height", '2px', { fromValue: '0px'}], position: 1701, duration: 299 },
            { id: "eid1939", tween: [ "style", "${_netfront_txt}", "opacity", '1', { fromValue: '0'}], position: 4411, duration: 411 },
            { id: "eid10043", tween: [ "style", "${_androidico_sym2}", "clip", [0,13,73,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,12,0,0]}], position: 2120, duration: 250, easing: "easeOutSine" },
            { id: "eid12844", tween: [ "transform", "${_au6}", "rotateZ", '360deg', { fromValue: '445deg'}], position: 250, duration: 1451, easing: "easeOutCirc" },
            { id: "eid1113", tween: [ "style", "${_operaico_sym}", "clip", [0,12,54,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,12,0,0]}], position: 2000, duration: 250, easing: "easeOutSine" },
            { id: "eid12859", tween: [ "transform", "${_au6}", "translateX", '336.00001px', { fromValue: '336.00001px'}], position: 1701, duration: 0 },
            { id: "eid4090", tween: [ "color", "${_bb_txt}", "color", 'rgba(207,204,109,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(207,204,109,1.00)'}], position: 4983, duration: 0 }         ]
      }
   }
},
"boltico_sym": {
   version: "0.1.4",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {"dom":[{"id":"Rectangle2Copy5","className":"Rectangle2Copy5_id","type":"rect","rect":[-152.83334350586,-87.00003898083,2,32],"fill":["rgba(88,88,90,1.00)",null],"stroke":[0,"rgba(0, 0, 0, 0)","none"],"transform":[[155.83331,86.50002]]},{"id":"bolt_ico","type":"image","rect":[0,0,8,14],"fill":["rgba(0,0,0,0)","images/bolt_ico.png"],"transform":[[1.36107,30],[0,0],[0],[1,1]]}],"symbolInstances":[]},
   states: {
      "Base State": {
         "${_Rectangle2Copy5}": [
            ["color", "background-color", 'rgba(88,88,90,1.00)'],
            ["transform", "translateX", '155.83331px'],
            ["style", "height", '32px'],
            ["transform", "translateY", '86.50002px'],
            ["style", "width", '2px']
         ],
         "${_bolt_ico}": [
            ["transform", "translateX", '1.36107px'],
            ["transform", "translateY", '30px']
         ],
         "${symbolSelector}": [
            ["style", "height", '84.499983px'],
            ["style", "width", '12px']
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
         ]
      }
   }
},
"androidico_sym": {
   version: "0.1.4",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {"dom":[{"id":"Rectangle2Copy5","className":"Rectangle2Copy5_id","type":"rect","rect":[-152.83334350586,-87.00003898083,2,24],"fill":["rgba(88,88,90,1.00)",null],"stroke":[0,"rgba(0, 0, 0, 0)","none"],"transform":[[155.83331,86.50002]]},{"id":"android_ico","type":"image","rect":[0,0,13,15],"fill":["rgba(0,0,0,0)","images/android_ico.png"],"transform":[[-2,22.69517],[0,0],[0],[1,1]]}],"symbolInstances":[]},
   states: {
      "Base State": {
         "${_android_ico}": [
            ["transform", "translateX", '-2px'],
            ["transform", "translateY", '22.69517px']
         ],
         "${symbolSelector}": [
            ["style", "height", '84.499983px'],
            ["style", "width", '12px']
         ],
         "${_Rectangle2Copy5}": [
            ["color", "background-color", 'rgba(88,88,90,1.00)'],
            ["transform", "translateX", '155.83331px'],
            ["style", "height", '24px'],
            ["transform", "translateY", '86.50002px'],
            ["style", "width", '2px']
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
         ]
      }
   }
},
"samsungico_sym": {
   version: "0.1.4",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {"dom":[{"id":"Rectangle2","className":"symbolStage_asiagraph_sym_Rectangle2_id","type":"rect","rect":[-109.83334850586,-87.00003898083,2,46],"fill":["rgba(88,88,90,1.00)",null],"stroke":[0,"rgba(0, 0, 0, 0)","none"],"transform":[[114.93488,86.50002]]},{"id":"samsung_ico2","className":"symbolStage_samsungico_sym_samsung_ico2_id","type":"image","rect":[0,0,10,21],"fill":["rgba(0,0,0,0)","images/samsung_ico2.png"],"transform":[[1,40.99998]]}],"symbolInstances":[]},
   states: {
      "Base State": {
         "${_Rectangle2}": [
            ["color", "background-color", 'rgba(88,88,90,1.00)'],
            ["transform", "translateX", '114.93488px'],
            ["style", "height", '46px'],
            ["transform", "translateY", '86.50002px'],
            ["style", "width", '2px']
         ],
         "${_samsung_ico2}": [
            ["transform", "translateX", '1px'],
            ["transform", "translateY", '40.99998px']
         ],
         "${symbolSelector}": [
            ["style", "height", '53.499982px'],
            ["style", "width", '12px']
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
         ]
      }
   }
},
"eugraph_sym": {
   version: "0.1.4",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {"dom":[{"id":"operaico_sym","className":"symbolStage_asiagraph_sym_operaico_sym_id","type":"rect","rect":[269.000005,379.500018,0,0],"transform":[[41.25,-2.16671]]},{"id":"nokiaico_sym","className":"symbolStage_asiagraph_sym_nokiaico_sym_id","type":"rect","rect":[283.500009,379.500018,0,0],"transform":[[43.00001,-1]]},{"id":"bbico_sym","className":"symbolStage_asiagraph_sym_bbico_sym_id","type":"rect","rect":[294.499997,379.500018,0,0],"transform":[[-25.44445,-1]]},{"id":"appleico_sym","className":"symbolStage_asiagraph_sym_appleico_sym_id","type":"rect","rect":[312,379.500018,0,0],"transform":[[-26.80556,-1.16669]]},{"id":"otherico_sym","className":"symbolStage_asiagraph_sym_otherico_sym_id","type":"rect","rect":[337.500004,379.500018,0,0],"transform":[]},{"id":"header","className":"Text_id","type":"text","rect":[417,327,433.80078125,31],"text":"Mobile Browser Marketshare","font":["Armata",24,"rgba(65,64,66,1.00)","normal","none",""],"transform":[[169.78122,-70]]},{"id":"TextCopy","className":"Text_id","type":"text","rect":[417,327,433.80078125,31],"text":"Europe","font":["Armata",24,"rgba(144,144,144,1.00)","normal","none",""],"transform":[[169.78122,-38.99999]]},{"id":"opera_txt","className":"symbolStage_asiagraph_sym_Text2_id","type":"text","rect":[587,331,91,16],"opacity":1,"text":"BlackBerry","align":"auto","font":["Armata",13,"rgba(63,215,95,1.00)","normal","none","normal"],"transform":[]},{"id":"operapercent_txt","className":"Text2Copy_id","type":"text","rect":[587,331,91,16],"opacity":1,"text":"xxx","align":"auto","font":["Armata",13,"rgba(144,144,144,1.00)","normal","none","normal"],"transform":[[0,16]]},{"id":"nokiapercent_txt","className":"Text2Copy_id","type":"text","rect":[587,331,91,16],"opacity":1,"text":"xxx","align":"auto","font":["Armata",13,"rgba(144,144,144,1.00)","normal","none","normal"],"transform":[[0,61.99999]]},{"id":"nokia_txt","className":"symbolStage_asiagraph_sym_Text2_id","type":"text","rect":[587,331,91,16],"opacity":1,"text":"iOS","align":"auto","font":["Armata",13,"rgba(63,215,95,1.00)","normal","none","normal"],"transform":[[0,45.99999]]},{"id":"bb_txt","className":"symbolStage_asiagraph_sym_Text2_id","type":"text","rect":[587,331,91,16],"opacity":1,"text":"Android","align":"auto","font":["Armata",13,"rgba(63,215,95,1.00)","normal","none","normal"],"transform":[[0,89.99999]]},{"id":"bbpercent_txt","className":"Text2Copy_id","type":"text","rect":[587,331,91,16],"opacity":1,"text":"xxx","align":"auto","font":["Armata",13,"rgba(144,144,144,1.00)","normal","none","normal"],"transform":[[0,105.99999]]},{"id":"otherpercent_txt","className":"Text2Copy_id","type":"text","rect":[587,331,91,16],"opacity":1,"text":"xxx","align":"auto","font":["Armata",13,"rgba(144,144,144,1.00)","normal","none","normal"],"transform":[[135.85937,105.99999]]},{"id":"other_txt","className":"symbolStage_asiagraph_sym_Text2_id","type":"text","rect":[587,331,91,16],"opacity":1,"text":"Other","align":"auto","font":["Armata",13,"rgba(63,215,95,1.00)","normal","none","normal"],"transform":[[135.85937,89.99999]]},{"id":"netfront_txt","className":"symbolStage_asiagraph_sym_Text2_id","type":"text","rect":[587,331,91,16],"opacity":1,"text":"Nokia","align":"auto","font":["Armata",13,"rgba(63,215,95,1.00)","normal","none","normal"],"transform":[[135.85937,45.99999]]},{"id":"netfrontpercent_txt","className":"Text2Copy_id","type":"text","rect":[587,331,91,16],"opacity":1,"text":"xxx","align":"auto","font":["Armata",13,"rgba(144,144,144,1.00)","normal","none","normal"],"transform":[[135.85937,61.99999]]},{"id":"iospercent_txt","className":"Text2Copy_id","type":"text","rect":[587,331,91,16],"opacity":1,"text":"xxx","align":"auto","font":["Armata",13,"rgba(144,144,144,1.00)","normal","none","normal"],"transform":[[135.85937,16]]},{"id":"apple_txt","className":"symbolStage_asiagraph_sym_Text2_id","type":"text","rect":[587,331,91,16],"opacity":1,"text":"Opera","align":"auto","font":["Armata",13,"rgba(63,215,95,1.00)","normal","none","normal"],"transform":[[135.85937]]},{"id":"androidico_sym","className":"symbolStage_nagraph_sym_androidico_sym_id","type":"rect","rect":[447.97103881836,416.65692138672,0,0],"transform":[[-148.00002,-38]]},{"id":"eu1","className":"symbolStage_eugraph_sym_eu1_id","type":"image","rect":[0,0,305,155],"fill":["rgba(0,0,0,0)","images/eu1.png"],"transform":[[268.99999,223.00001]]},{"id":"eu2","className":"symbolStage_eugraph_sym_eu2_id","type":"image","rect":[0,0,91,128],"fill":["rgba(0,0,0,0)","images/eu2.png"],"transform":[[268.99999,223.00001]]},{"id":"eu3","className":"symbolStage_eugraph_sym_eu3_id","type":"image","rect":[0,0,72,108],"fill":["rgba(0,0,0,0)","images/eu3.png"],"transform":[[268.99999,223.00001]]},{"id":"eu4","className":"symbolStage_eugraph_sym_eu4_id","type":"image","rect":[0,0,42,78],"fill":["rgba(0,0,0,0)","images/eu4.png"],"transform":[[268.99999,223.00001]]},{"id":"eu5","className":"symbolStage_eugraph_sym_eu5_id","type":"image","rect":[0,0,35,63],"fill":["rgba(0,0,0,0)","images/eu5.png"],"transform":[[268.99999,223.00001]]},{"id":"eu6","className":"symbolStage_eugraph_sym_eu6_id","type":"image","rect":[0,0,28,47],"fill":["rgba(0,0,0,0)","images/eu6.png"],"transform":[[268.99999,223.00001]]},{"id":"Rectangle","className":"symbolStage_asiagraph_sym_Rectangle_id","type":"rect","rect":[268.33331298828,377.49997901917,91.360687255859,1.904296875],"fill":["rgba(88,89,90,1.00)",null],"stroke":[0,"rgba(0, 0, 0, 0)","none"],"transform":[[-4]]}],"symbolInstances":[{"id":"operaico_sym","symbolName":"operaico_sym"},{"id":"nokiaico_sym","symbolName":"nokiaico_sy"},{"id":"androidico_sym","symbolName":"androidico_sym"},{"id":"appleico_sym","symbolName":"appleico_sym"},{"id":"bbico_sym","symbolName":"bbico_sym"},{"id":"otherico_sym","symbolName":"otherico_sym"}]},
   states: {
      "Base State": {
         "${_bbpercent_txt}": [
            ["style", "font-size", '13px'],
            ["transform", "translateX", '0px'],
            ["style", "height", '16px'],
            ["color", "color", 'rgba(144,144,144,1.00)'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '105.99999px'],
            ["style", "width", '91px']
         ],
         "${_netfront_txt}": [
            ["style", "width", '91px'],
            ["transform", "translateX", '135.85937px'],
            ["color", "color", 'rgba(215,145,63,1.00)'],
            ["style", "height", '16px'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '45.99999px'],
            ["style", "font-size", '13px']
         ],
         "${_otherico_sym}": [
            ["style", "clip", [0,12,0,0],{valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}]
         ],
         "${_nokiapercent_txt}": [
            ["style", "width", '91px'],
            ["transform", "translateX", '0px'],
            ["color", "color", 'rgba(144,144,144,1.00)'],
            ["style", "height", '16px'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '61.99999px'],
            ["style", "font-size", '13px']
         ],
         "${_apple_txt}": [
            ["style", "font-size", '13px'],
            ["transform", "translateX", '135.85937px'],
            ["style", "height", '16px'],
            ["color", "color", 'rgba(83,179,151,1.00)'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '0px'],
            ["style", "width", '91px']
         ],
         "${_netfrontpercent_txt}": [
            ["style", "font-size", '13px'],
            ["transform", "translateX", '135.85937px'],
            ["style", "height", '16px'],
            ["color", "color", 'rgba(144,144,144,1.00)'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '61.99999px'],
            ["style", "width", '91px']
         ],
         "${_TextCopy}": [
            ["transform", "translateX", '169.78122px'],
            ["style", "height", '31px'],
            ["color", "color", 'rgba(144,144,144,1.00)'],
            ["style", "font-family", 'Armata'],
            ["style", "clip", [0,0,31,0],{valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}],
            ["transform", "translateY", '-38.99999px']
         ],
         "${symbolSelector}": [
            ["style", "height", '149px'],
            ["style", "width", '282px']
         ],
         "${_other_txt}": [
            ["style", "font-size", '13px'],
            ["transform", "translateX", '135.85937px'],
            ["style", "height", '16px'],
            ["color", "color", 'rgba(117,70,139,1.00)'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '89.99999px'],
            ["style", "width", '91px']
         ],
         "${_Rectangle}": [
            ["color", "background-color", 'rgba(88,89,90,1.00)'],
            ["style", "height", '0px'],
            ["transform", "translateX", '-4px'],
            ["style", "width", '0px']
         ],
         "${_operapercent_txt}": [
            ["style", "font-size", '13px'],
            ["transform", "translateX", '0px'],
            ["style", "height", '16px'],
            ["color", "color", 'rgba(144,144,144,1.00)'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '16px'],
            ["style", "width", '91px']
         ],
         "${_otherpercent_txt}": [
            ["style", "width", '91px'],
            ["transform", "translateX", '135.85937px'],
            ["color", "color", 'rgba(144,144,144,1.00)'],
            ["style", "height", '16px'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '105.99999px'],
            ["style", "font-size", '13px']
         ],
         "${_nokia_txt}": [
            ["style", "font-size", '13px'],
            ["transform", "translateX", '0px'],
            ["style", "height", '16px'],
            ["color", "color", 'rgba(171,109,169,1.00)'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '45.99999px'],
            ["style", "width", '91px']
         ],
         "${_eu3}": [
            ["style", "-webkit-transform-origin", [279.1775,147.4864],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-moz-transform-origin", [279.1775,147.4864],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [279.1775,147.4864],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [279.1775,147.4864],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [279.1775,147.4864],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "translateX", '296.99999px'],
            ["transform", "rotateZ", '289deg'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '270px']
         ],
         "${_eu1}": [
            ["style", "-webkit-transform-origin", [50.2111,100.519],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-moz-transform-origin", [50.2111,100.519],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50.2111,100.519],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50.2111,100.519],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50.2111,100.519],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "translateX", '282.26171px'],
            ["transform", "rotateZ", '153deg'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '255.33719px']
         ],
         "${_opera_txt}": [
            ["style", "width", '91px'],
            ["transform", "translateX", '0px'],
            ["color", "color", 'rgba(63,215,95,1.00)'],
            ["style", "height", '16px'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '0px'],
            ["style", "font-size", '13px']
         ],
         "${_bbico_sym}": [
            ["style", "clip", [0,12,0,0],{valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}],
            ["transform", "translateX", '-25.44445px'],
            ["transform", "translateY", '-1px']
         ],
         "${_iospercent_txt}": [
            ["style", "width", '91px'],
            ["transform", "translateX", '135.85937px'],
            ["color", "color", 'rgba(144,144,144,1.00)'],
            ["style", "height", '16px'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '16px'],
            ["style", "font-size", '13px']
         ],
         "${_operaico_sym}": [
            ["style", "clip", [0,12,0,0],{valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}],
            ["transform", "translateX", '41.25px'],
            ["transform", "translateY", '-2.16671px']
         ],
         "${_bb_txt}": [
            ["style", "width", '91px'],
            ["transform", "translateX", '0px'],
            ["color", "color", 'rgba(207,204,109,1.00)'],
            ["style", "height", '16px'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '89.99999px'],
            ["style", "font-size", '13px']
         ],
         "${_eu5}": [
            ["style", "-webkit-transform-origin", [310.721,113.3263],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-moz-transform-origin", [310.721,113.3263],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [310.721,113.3263],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [310.721,113.3263],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [310.721,113.3263],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "translateX", '266.99999px'],
            ["transform", "rotateZ", '131deg'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '225.00001px']
         ],
         "${_header}": [
            ["transform", "translateX", '169.78122px'],
            ["style", "height", '31px'],
            ["color", "color", 'rgba(65,64,66,1)'],
            ["style", "font-family", 'Armata'],
            ["style", "clip", [0,0,31,0],{valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}],
            ["transform", "translateY", '-70px']
         ],
         "${_eu2}": [
            ["style", "-webkit-transform-origin", [160.6196,118.8328],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-moz-transform-origin", [160.6196,118.8328],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [160.6196,118.8328],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [160.6196,118.8328],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [160.6196,118.8328],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "translateX", '198.48623px'],
            ["transform", "rotateZ", '115deg'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '205.55144px']
         ],
         "${_eu6}": [
            ["style", "-webkit-transform-origin", [270.6204,96.0292],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-moz-transform-origin", [270.6204,96.0292],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [270.6204,96.0292],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [270.6204,96.0292],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [270.6204,96.0292],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "translateX", '337.99999px'],
            ["transform", "rotateZ", '445deg'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '333px']
         ],
         "${_androidico_sym}": [
            ["style", "clip", [0,12,0,0],{valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}],
            ["transform", "translateX", '-148.00002px'],
            ["transform", "translateY", '-38px']
         ],
         "${_nokiaico_sym}": [
            ["style", "clip", [0,12,0,0],{valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}],
            ["transform", "translateX", '43.00001px'],
            ["transform", "translateY", '-1px']
         ],
         "${_eu4}": [
            ["style", "-webkit-transform-origin", [346.5312,133.6768],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-moz-transform-origin", [346.5312,133.6768],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [346.5312,133.6768],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [346.5312,133.6768],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [346.5312,133.6768],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "translateX", '311px'],
            ["transform", "rotateZ", '74deg'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '300px']
         ],
         "${_appleico_sym}": [
            ["style", "clip", [0,12,0,0],{valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}],
            ["transform", "translateX", '-26.80556px'],
            ["transform", "translateY", '-1.16669px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 18014,
         autoPlay: false,
         labels: {
            "play": 250
         },
         timeline: [
            { id: "eid8598", tween: [ "style", "${_androidico_sym}", "clip", [0,13,73,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,12,0,0]}], position: 2000, duration: 250, easing: "easeOutSine" },
            { id: "eid1945", tween: [ "style", "${_bbpercent_txt}", "opacity", '1', { fromValue: '0'}], position: 4000, duration: 411 },
            { id: "eid1965", tween: [ "style", "${_nokia_txt}", "opacity", '1', { fromValue: '0'}], position: 3838, duration: 411 },
            { id: "eid1939", tween: [ "style", "${_netfront_txt}", "opacity", '1', { fromValue: '0'}], position: 4411, duration: 411 },
            { id: "eid1973", tween: [ "style", "${_netfrontpercent_txt}", "opacity", '1', { fromValue: '0'}], position: 4411, duration: 411 },
            { id: "eid1969", tween: [ "style", "${_iospercent_txt}", "opacity", '1', { fromValue: '0'}], position: 4160, duration: 411 },
            { id: "eid1107", tween: [ "style", "${_otherico_sym}", "clip", [0,12,32,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,12,0,0]}], position: 2250, duration: 250, easing: "easeOutSine" },
            { id: "eid15182", tween: [ "style", "${_eu1}", "opacity", '1', { fromValue: '0'}], position: 250, duration: 656, easing: "easeOutCirc" },
            { id: "eid4089", tween: [ "color", "${_nokia_txt}", "color", 'rgba(171,109,169,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(171,109,169,1.00)'}], position: 4983, duration: 0 },
            { id: "eid15183", tween: [ "transform", "${_eu2}", "translateX", '283px', { fromValue: '198.48623px'}], position: 250, duration: 1451, easing: "easeOutCirc" },
            { id: "eid1109", tween: [ "style", "${_bbico_sym}", "clip", [0,13,56,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,12,0,0]}], position: 2000, duration: 250, easing: "easeOutSine" },
            { id: "eid15198", tween: [ "style", "${_eu4}", "opacity", '1', { fromValue: '0'}], position: 250, duration: 500, easing: "easeOutCirc" },
            { id: "eid1429", tween: [ "style", "${_header}", "clip", [0,433,31,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,0,31,0]}], position: 2589, duration: 1160 },
            { id: "eid4091", tween: [ "color", "${_apple_txt}", "color", 'rgba(83,179,151,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(83,179,151,1.00)'}], position: 4983, duration: 0 },
            { id: "eid15181", tween: [ "transform", "${_eu1}", "rotateZ", '360deg', { fromValue: '153deg'}], position: 250, duration: 1451, easing: "easeOutCirc" },
            { id: "eid4090", tween: [ "color", "${_bb_txt}", "color", 'rgba(207,204,109,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(207,204,109,1.00)'}], position: 4983, duration: 0 },
            { id: "eid15203", tween: [ "transform", "${_eu3}", "rotateZ", '0deg', { fromValue: '289deg'}], position: 250, duration: 1451, easing: "easeOutCirc" },
            { id: "eid15200", tween: [ "transform", "${_eu4}", "rotateZ", '360deg', { fromValue: '74deg'}], position: 250, duration: 1451, easing: "easeOutCirc" },
            { id: "eid15180", tween: [ "transform", "${_eu1}", "translateY", '223.00001px', { fromValue: '255.33719px'}], position: 250, duration: 1451, easing: "easeOutCirc" },
            { id: "eid15184", tween: [ "transform", "${_eu2}", "translateY", '249.99999px', { fromValue: '205.55144px'}], position: 250, duration: 1451, easing: "easeOutCirc" },
            { id: "eid15185", tween: [ "transform", "${_eu2}", "rotateZ", '0deg', { fromValue: '115deg'}], position: 250, duration: 1451, easing: "easeOutCirc" },
            { id: "eid15196", tween: [ "transform", "${_eu6}", "rotateZ", '360deg', { fromValue: '445deg'}], position: 250, duration: 1451, easing: "easeOutCirc" },
            { id: "eid1963", tween: [ "style", "${_otherpercent_txt}", "opacity", '1', { fromValue: '0'}], position: 4572, duration: 411 },
            { id: "eid1019", tween: [ "style", "${_Rectangle}", "width", '91px', { fromValue: '0px'}], position: 1701, duration: 299 },
            { id: "eid4092", tween: [ "color", "${_netfront_txt}", "color", 'rgba(215,145,63,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(215,145,63,1.00)'}], position: 4983, duration: 0 },
            { id: "eid15201", tween: [ "style", "${_eu3}", "opacity", '1', { fromValue: '0'}], position: 250, duration: 388, easing: "easeOutCirc" },
            { id: "eid15206", tween: [ "transform", "${_eu6}", "translateX", '337.99999px', { fromValue: '337.99999px'}], position: 1701, duration: 0 },
            { id: "eid15194", tween: [ "style", "${_eu5}", "-webkit-transform-origin", [275.6333,89.1627], { valueTemplate: '@@0@@% @@1@@%', fromValue: [310.721,113.3263]}], position: 250, duration: 1451, easing: "easeOutCirc" },
            { id: "eid23399", tween: [ "style", "${_eu5}", "-moz-transform-origin", [275.6333,89.1627], { valueTemplate: '@@0@@% @@1@@%', fromValue: [310.721,113.3263]}], position: 250, duration: 1451, easing: "easeOutCirc" },
            { id: "eid23400", tween: [ "style", "${_eu5}", "-ms-transform-origin", [275.6333,89.1627], { valueTemplate: '@@0@@% @@1@@%', fromValue: [310.721,113.3263]}], position: 250, duration: 1451, easing: "easeOutCirc" },
            { id: "eid23401", tween: [ "style", "${_eu5}", "msTransformOrigin", [275.6333,89.1627], { valueTemplate: '@@0@@% @@1@@%', fromValue: [310.721,113.3263]}], position: 250, duration: 1451, easing: "easeOutCirc" },
            { id: "eid23402", tween: [ "style", "${_eu5}", "-o-transform-origin", [275.6333,89.1627], { valueTemplate: '@@0@@% @@1@@%', fromValue: [310.721,113.3263]}], position: 250, duration: 1451, easing: "easeOutCirc" },
            { id: "eid1947", tween: [ "style", "${_nokiapercent_txt}", "opacity", '1', { fromValue: '0'}], position: 3838, duration: 411 },
            { id: "eid1943", tween: [ "style", "${_operapercent_txt}", "opacity", '1', { fromValue: '0'}], position: 3749, duration: 411 },
            { id: "eid15215", tween: [ "style", "${_eu2}", "-webkit-transform-origin", [160.6196,118.8328], { valueTemplate: '@@0@@% @@1@@%', fromValue: [160.6196,118.8328]}], position: 1701, duration: 0 },
            { id: "eid23403", tween: [ "style", "${_eu2}", "-moz-transform-origin", [160.6196,118.8328], { valueTemplate: '@@0@@% @@1@@%', fromValue: [160.6196,118.8328]}], position: 1701, duration: 0 },
            { id: "eid23404", tween: [ "style", "${_eu2}", "-ms-transform-origin", [160.6196,118.8328], { valueTemplate: '@@0@@% @@1@@%', fromValue: [160.6196,118.8328]}], position: 1701, duration: 0 },
            { id: "eid23405", tween: [ "style", "${_eu2}", "msTransformOrigin", [160.6196,118.8328], { valueTemplate: '@@0@@% @@1@@%', fromValue: [160.6196,118.8328]}], position: 1701, duration: 0 },
            { id: "eid23406", tween: [ "style", "${_eu2}", "-o-transform-origin", [160.6196,118.8328], { valueTemplate: '@@0@@% @@1@@%', fromValue: [160.6196,118.8328]}], position: 1701, duration: 0 },
            { id: "eid15208", tween: [ "transform", "${_eu5}", "translateX", '324.99999px', { fromValue: '268.99999px'}], position: 250, duration: 0 },
            { id: "eid15211", tween: [ "transform", "${_eu4}", "translateY", '300px', { fromValue: '300px'}], position: 1701, duration: 0 },
            { id: "eid15214", tween: [ "style", "${_eu3}", "-webkit-transform-origin", [172.354,109.5631], { valueTemplate: '@@0@@% @@1@@%', fromValue: [279.1775,147.4864]}], position: 250, duration: 0 },
            { id: "eid23407", tween: [ "style", "${_eu3}", "-moz-transform-origin", [172.354,109.5631], { valueTemplate: '@@0@@% @@1@@%', fromValue: [279.1775,147.4864]}], position: 250, duration: 0 },
            { id: "eid23408", tween: [ "style", "${_eu3}", "-ms-transform-origin", [172.354,109.5631], { valueTemplate: '@@0@@% @@1@@%', fromValue: [279.1775,147.4864]}], position: 250, duration: 0 },
            { id: "eid23409", tween: [ "style", "${_eu3}", "msTransformOrigin", [172.354,109.5631], { valueTemplate: '@@0@@% @@1@@%', fromValue: [279.1775,147.4864]}], position: 250, duration: 0 },
            { id: "eid23410", tween: [ "style", "${_eu3}", "-o-transform-origin", [172.354,109.5631], { valueTemplate: '@@0@@% @@1@@%', fromValue: [279.1775,147.4864]}], position: 250, duration: 0 },
            { id: "eid15207", tween: [ "transform", "${_eu6}", "translateY", '331px', { fromValue: '333px'}], position: 1701, duration: 0 },
            { id: "eid16081", tween: [ "transform", "${_eu6}", "translateY", '331px', { fromValue: '331px'}], position: 4983, duration: 0 },
            { id: "eid16370", tween: [ "transform", "${_eu6}", "translateY", '333px', { fromValue: '331px'}], position: 18014, duration: 0 },
            { id: "eid15193", tween: [ "style", "${_eu5}", "opacity", '1', { fromValue: '0'}], position: 250, duration: 656, easing: "easeOutCirc" },
            { id: "eid1967", tween: [ "style", "${_apple_txt}", "opacity", '1', { fromValue: '0'}], position: 4160, duration: 411 },
            { id: "eid15216", tween: [ "style", "${_eu1}", "-webkit-transform-origin", [50.2111,100.519], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50.2111,100.519]}], position: 1701, duration: 0 },
            { id: "eid23411", tween: [ "style", "${_eu1}", "-moz-transform-origin", [50.2111,100.519], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50.2111,100.519]}], position: 1701, duration: 0 },
            { id: "eid23412", tween: [ "style", "${_eu1}", "-ms-transform-origin", [50.2111,100.519], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50.2111,100.519]}], position: 1701, duration: 0 },
            { id: "eid23413", tween: [ "style", "${_eu1}", "msTransformOrigin", [50.2111,100.519], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50.2111,100.519]}], position: 1701, duration: 0 },
            { id: "eid23414", tween: [ "style", "${_eu1}", "-o-transform-origin", [50.2111,100.519], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50.2111,100.519]}], position: 1701, duration: 0 },
            { id: "eid15209", tween: [ "transform", "${_eu5}", "translateY", '314.99997px', { fromValue: '223.00001px'}], position: 250, duration: 0 },
            { id: "eid15199", tween: [ "style", "${_eu4}", "-webkit-transform-origin", [346.5312,133.6768], { valueTemplate: '@@0@@% @@1@@%', fromValue: [346.5312,133.6768]}], position: 250, duration: 0, easing: "easeOutCirc" },
            { id: "eid23415", tween: [ "style", "${_eu4}", "-moz-transform-origin", [346.5312,133.6768], { valueTemplate: '@@0@@% @@1@@%', fromValue: [346.5312,133.6768]}], position: 250, duration: 0, easing: "easeOutCirc" },
            { id: "eid23416", tween: [ "style", "${_eu4}", "-ms-transform-origin", [346.5312,133.6768], { valueTemplate: '@@0@@% @@1@@%', fromValue: [346.5312,133.6768]}], position: 250, duration: 0, easing: "easeOutCirc" },
            { id: "eid23417", tween: [ "style", "${_eu4}", "msTransformOrigin", [346.5312,133.6768], { valueTemplate: '@@0@@% @@1@@%', fromValue: [346.5312,133.6768]}], position: 250, duration: 0, easing: "easeOutCirc" },
            { id: "eid23418", tween: [ "style", "${_eu4}", "-o-transform-origin", [346.5312,133.6768], { valueTemplate: '@@0@@% @@1@@%', fromValue: [346.5312,133.6768]}], position: 250, duration: 0, easing: "easeOutCirc" },
            { id: "eid15213", tween: [ "style", "${_eu4}", "-webkit-transform-origin", [212.9612,77.3933], { valueTemplate: '@@0@@% @@1@@%', fromValue: [346.5312,133.6768]}], position: 1701, duration: 0 },
            { id: "eid23419", tween: [ "style", "${_eu4}", "-moz-transform-origin", [212.9612,77.3933], { valueTemplate: '@@0@@% @@1@@%', fromValue: [346.5312,133.6768]}], position: 1701, duration: 0 },
            { id: "eid23420", tween: [ "style", "${_eu4}", "-ms-transform-origin", [212.9612,77.3933], { valueTemplate: '@@0@@% @@1@@%', fromValue: [346.5312,133.6768]}], position: 1701, duration: 0 },
            { id: "eid23421", tween: [ "style", "${_eu4}", "msTransformOrigin", [212.9612,77.3933], { valueTemplate: '@@0@@% @@1@@%', fromValue: [346.5312,133.6768]}], position: 1701, duration: 0 },
            { id: "eid23422", tween: [ "style", "${_eu4}", "-o-transform-origin", [212.9612,77.3933], { valueTemplate: '@@0@@% @@1@@%', fromValue: [346.5312,133.6768]}], position: 1701, duration: 0 },
            { id: "eid1111", tween: [ "style", "${_nokiaico_sym}", "clip", [0,11,75,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,12,0,0]}], position: 2120, duration: 250, easing: "easeOutSine" },
            { id: "eid15210", tween: [ "transform", "${_eu4}", "translateX", '311px', { fromValue: '311px'}], position: 1701, duration: 0 },
            { id: "eid15195", tween: [ "transform", "${_eu5}", "rotateZ", '360deg', { fromValue: '131deg'}], position: 250, duration: 1451, easing: "easeOutCirc" },
            { id: "eid1105", tween: [ "style", "${_appleico_sym}", "clip", [0,12,85,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,12,0,0]}], position: 2250, duration: 250, easing: "easeOutSine" },
            { id: "eid1941", tween: [ "style", "${_opera_txt}", "opacity", '1', { fromValue: '0'}], position: 3749, duration: 411 },
            { id: "eid15186", tween: [ "style", "${_eu2}", "opacity", '1', { fromValue: '0'}], position: 250, duration: 437, easing: "easeOutCirc" },
            { id: "eid1017", tween: [ "style", "${_Rectangle}", "height", '2px', { fromValue: '0px'}], position: 1701, duration: 299 },
            { id: "eid1949", tween: [ "style", "${_other_txt}", "opacity", '1', { fromValue: '0'}], position: 4572, duration: 411 },
            { id: "eid15212", tween: [ "style", "${_eu6}", "-webkit-transform-origin", [270.6204,96.0292], { valueTemplate: '@@0@@% @@1@@%', fromValue: [270.6204,96.0292]}], position: 1701, duration: 0 },
            { id: "eid23423", tween: [ "style", "${_eu6}", "-moz-transform-origin", [270.6204,96.0292], { valueTemplate: '@@0@@% @@1@@%', fromValue: [270.6204,96.0292]}], position: 1701, duration: 0 },
            { id: "eid23424", tween: [ "style", "${_eu6}", "-ms-transform-origin", [270.6204,96.0292], { valueTemplate: '@@0@@% @@1@@%', fromValue: [270.6204,96.0292]}], position: 1701, duration: 0 },
            { id: "eid23425", tween: [ "style", "${_eu6}", "msTransformOrigin", [270.6204,96.0292], { valueTemplate: '@@0@@% @@1@@%', fromValue: [270.6204,96.0292]}], position: 1701, duration: 0 },
            { id: "eid23426", tween: [ "style", "${_eu6}", "-o-transform-origin", [270.6204,96.0292], { valueTemplate: '@@0@@% @@1@@%', fromValue: [270.6204,96.0292]}], position: 1701, duration: 0 },
            { id: "eid15197", tween: [ "style", "${_eu6}", "opacity", '1', { fromValue: '0'}], position: 250, duration: 388, easing: "easeOutCirc" },
            { id: "eid15179", tween: [ "transform", "${_eu1}", "translateX", '268.99999px', { fromValue: '282.26171px'}], position: 250, duration: 1451, easing: "easeOutCirc" },
            { id: "eid4093", tween: [ "color", "${_other_txt}", "color", 'rgba(117,70,139,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(117,70,139,1.00)'}], position: 4983, duration: 0 },
            { id: "eid1113", tween: [ "style", "${_operaico_sym}", "clip", [0,12,54,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,12,0,0]}], position: 2000, duration: 250, easing: "easeOutSine" },
            { id: "eid1971", tween: [ "style", "${_bb_txt}", "opacity", '1', { fromValue: '0'}], position: 4000, duration: 411 },
            { id: "eid1431", tween: [ "style", "${_TextCopy}", "clip", [0,91,31,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,0,31,0]}], position: 3365, duration: 250 }         ]
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
})(jQuery, AdobeEdge, "EDGE-39072750");
