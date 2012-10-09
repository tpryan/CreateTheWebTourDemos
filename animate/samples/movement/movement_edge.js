/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
var fonts = {
   "Candal":"<link href='http://fonts.googleapis.com/css?family=Candal' rel='stylesheet' type='text/css'>"
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
            id:'bg',
            className:'stage_bg_id',
            type:'image',
            rect:[0,0,1280,960],
            clip:['rect(0px 600px 303px 0px)'],
            fill:['rgba(0,0,0,0)','images/bg.jpg']
        },
        {
            id:'adobe',
            display:'none',
            className:'stage_adobe_id',
            type:'text',
            rect:[154.32096862793,44.367279052734,325.86361694336,91],
            text:"adobe",
            align:"auto",
            font:["Candal",80,"rgba(255,255,255,1)","normal","none","normal"],
            transform:[[7.04162,18.63272]]
        },
        {
            id:'edge',
            className:'stage_edge_id',
            type:'text',
            rect:[137.92436218262,195.79472351074,357.58682250977,90],
            clip:['rect(22px 357px 122px 0px)'],
            text:"edge",
            align:"auto",
            font:["Candal",80,"rgba(255,255,255,1)","normal","none","normal"],
            transform:[[56.66469,-86.79474]]
        },
        {
            id:'movable',
            className:'stage_movable_id',
            type:'text',
            rect:[207,-37,386.7265625,91],
            text:"movable ",
            align:"auto",
            font:["Candal",80,"rgba(255,255,255,1.00)","normal","none","normal"],
            transform:[[-81.00001,144]]
        },
        {
            id:'Rectangle',
            className:'stage_Rectangle_id',
            type:'rect',
            rect:[-31,199,507.265625,7],
            fill:['rgba(255,255,255,1.00)',null],
            stroke:[0,"rgba(0,0,0,1)","none"]
        },
        {
            id:'Rectangle2',
            className:'stage_Rectangle2_id',
            type:'rect',
            rect:[485,92,23.08984375,119.26953125],
            fill:['rgba(255,255,255,1)',null],
            stroke:[0,"rgb(0, 0, 0)","none"]
        },
        {
            id:'Rectangle3',
            className:'stage_Rectangle3_id',
            type:'rect',
            rect:[348,266.703125,311,7],
            fill:['rgba(255,255,255,1)',null],
            stroke:[0,"rgb(0, 0, 0)","none"],
            transform:[[-88,-11.00002]]
        },
        {
            id:'Rectangle4',
            display:'none',
            className:'stage_Rectangle4_id',
            type:'rect',
            rect:[168.69813537598,101.53686523438,285,7],
            fill:['rgba(255,255,255,1)',null],
            stroke:[0,"rgb(0, 0, 0)","none"],
            transform:[[2.17594,11.29525]]
        },
        {
            id:'type',
            className:'stage_type_id',
            type:'text',
            rect:[179.39811706543,-0.96450805664062,222.24328613281,91],
            text:"typ",
            align:"auto",
            font:["Candal",80,"rgba(255,255,255,1)","normal","none","normal"],
            transform:[[74.60187,29.9645]]
        },
        {
            id:'Rectangle5',
            className:'stage_Rectangle5_id',
            type:'rect',
            rect:[-6.7515411376953,0,611.4967956543,300],
            opacity:0.25524400684932,
            fill:['rgba(255,255,255,1)',null],
            stroke:[0,"rgb(0, 0, 0)","none"]
        },
        {
            id:'white',
            className:'stage_white_id',
            type:'rect',
            rect:[-7,-0.96450614929199,624.28388977051,312.49996757507],
            opacity:0.52916309931507,
            fill:['rgba(255,255,255,1)',null],
            stroke:[0,"rgb(0, 0, 0)","none"]
        },
        {
            id:'button',
            className:'stage_button_id',
            type:'image',
            rect:[0,0,74,79],
            fill:['rgba(0,0,0,0)','images/button.png'],
            transform:[[265.99998,110]]
        }],
      symbolInstances: [

      ]
   },
   states: {
      "Base State": {
         "${_Rectangle2}": [
            ["style", "-webkit-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "translateX", '-16.00004px'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '0px'],
            ["transform", "translateY", '106.99999px'],
            ["style", "width", '7px']
         ],
         "${_adobe}": [
            ["style", "-webkit-transform-origin", [50.0744,100.539],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-moz-transform-origin", [50.0744,100.539],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50.0744,100.539],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50.0744,100.539],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50.0744,100.539],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "translateX", '7.04162px'],
            ["style", "display", 'none'],
            ["transform", "translateY", '18.63272px'],
            ["transform", "scaleY", '0']
         ],
         "${_movable}": [
            ["style", "-webkit-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-moz-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [50,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "translateX", '-81.00001px'],
            ["transform", "rotateZ", '0deg'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "font-size", '80px'],
            ["style", "width", '386px'],
            ["style", "height", '91px'],
            ["style", "font-family", 'Candal'],
            ["style", "clip", [0,0,91,0],{valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}],
            ["transform", "translateY", '144px']
         ],
         "${_type}": [
            ["style", "clip", [0,222,91,167],{valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}],
            ["transform", "translateY", '29.9645px'],
            ["transform", "translateX", '74.60187px'],
            ["style", "width", '222px']
         ],
         "${_stage}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "width", '600px'],
            ["style", "height", '300px'],
            ["style", "overflow", 'hidden']
         ],
         "${_edge}": [
            ["transform", "scaleY", '0'],
            ["style", "height", '90px'],
            ["style", "clip", [22,357,219,0],{valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}],
            ["transform", "translateY", '-86.79474px'],
            ["transform", "translateX", '56.66469px']
         ],
         "${_bg}": [
            ["style", "clip", [0,600,303,0],{valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}],
            ["style", "background-position", [0,0],{valueTemplate:'@@0@@px @@1@@px'}]
         ],
         "${_Rectangle3}": [
            ["style", "-webkit-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-moz-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,50],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "translateX", '-88px'],
            ["transform", "rotateZ", '0deg'],
            ["style", "height", '7px'],
            ["transform", "translateY", '-11.00002px'],
            ["style", "width", '0px']
         ],
         "${_Text}": [
            ["style", "font-family", '']
         ],
         "${_Rectangle5}": [
            ["style", "opacity", '0.25524400684932']
         ],
         "${_button}": [
            ["style", "display", 'block'],
            ["transform", "translateY", '110px'],
            ["transform", "translateX", '265.99998px']
         ],
         "${_Rectangle}": [
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["transform", "translateX", '0'],
            ["transform", "rotateZ", '-0.25385deg'],
            ["style", "height", '7px'],
            ["style", "-webkit-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-moz-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [0,100],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "translateY", '0'],
            ["style", "width", '0px']
         ],
         "${_Rectangle4}": [
            ["style", "-webkit-transform-origin", [98.1686,65.6529],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-moz-transform-origin", [98.1686,65.6529],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [98.1686,65.6529],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [98.1686,65.6529],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [98.1686,65.6529],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "translateX", '4.1178px'],
            ["style", "display", 'none'],
            ["style", "height", '7px'],
            ["transform", "scaleX", '-0.00859'],
            ["transform", "translateY", '11.29525px'],
            ["style", "width", '282px']
         ],
         "${_white}": [
            ["style", "display", 'block'],
            ["style", "opacity", '0.52916309931507']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 10500,
         autoPlay: true,
         labels: {

         },
         timeline: [
            { id: "eid306", tween: [ "style", "${_Rectangle4}", "display", 'block', { fromValue: 'none'}], position: 3674, duration: 0 },
            { id: "eid39", tween: [ "style", "${_Rectangle2}", "height", '165px', { fromValue: '0px'}], position: 1335, duration: 665 },
            { id: "eid395", tween: [ "style", "${_type}", "clip", [0,222,128,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,222,91,167]}], position: 3839, duration: 356 },
            { id: "eid3121", tween: [ "transform", "${_edge}", "translateX", '467.07567px', { fromValue: '56.66469px'}], position: 8898, duration: 500 },
            { id: "eid4", tween: [ "style", "${_Rectangle}", "width", '507px', { fromValue: '0px'}], position: 0, duration: 1335 },
            { id: "eid42", tween: [ "transform", "${_Rectangle2}", "translateY", '-58.36328px', { fromValue: '106.99999px'}], position: 1335, duration: 1075 },
            { id: "eid177", tween: [ "transform", "${_Rectangle2}", "translateY", '54.29934px', { fromValue: '-58.36328px'}], position: 2896, duration: 537 },
            { id: "eid179", tween: [ "transform", "${_movable}", "translateY", '256.66258px', { fromValue: '144px'}], position: 2896, duration: 537 },
            { id: "eid2973", tween: [ "style", "${_button}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid1260", tween: [ "style", "${_adobe}", "display", 'block', { fromValue: 'none'}], position: 6000, duration: 0 },
            { id: "eid1264", tween: [ "style", "${_adobe}", "display", 'none', { fromValue: 'block'}], position: 6852, duration: 0 },
            { id: "eid33", tween: [ "style", "${_Rectangle2}", "width", '7px', { fromValue: '7px'}], position: 1335, duration: 0 },
            { id: "eid171", tween: [ "transform", "${_Rectangle2}", "rotateZ", '-90deg', { fromValue: '0deg'}], position: 2896, duration: 537 },
            { id: "eid166", tween: [ "style", "${_Rectangle3}", "-webkit-transform-origin", [51.5668,-562.3207], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0.028451406596452324,49.66648632668145]}], position: 2831, duration: 65 },
            { id: "eid3447", tween: [ "style", "${_Rectangle3}", "-moz-transform-origin", [51.5668,-562.3207], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0.028451406596452324,49.66648632668145]}], position: 2831, duration: 65 },
            { id: "eid3448", tween: [ "style", "${_Rectangle3}", "-ms-transform-origin", [51.5668,-562.3207], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0.028451406596452324,49.66648632668145]}], position: 2831, duration: 65 },
            { id: "eid3449", tween: [ "style", "${_Rectangle3}", "msTransformOrigin", [51.5668,-562.3207], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0.028451406596452324,49.66648632668145]}], position: 2831, duration: 65 },
            { id: "eid3450", tween: [ "style", "${_Rectangle3}", "-o-transform-origin", [51.5668,-562.3207], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0.028451406596452324,49.66648632668145]}], position: 2831, duration: 65 },
            { id: "eid135", tween: [ "style", "${_Rectangle3}", "-webkit-transform-origin", [50.7972,-545.456], { valueTemplate: '@@0@@% @@1@@%', fromValue: [51.5668,-562.3207]}], position: 2896, duration: 537 },
            { id: "eid3451", tween: [ "style", "${_Rectangle3}", "-moz-transform-origin", [50.7972,-545.456], { valueTemplate: '@@0@@% @@1@@%', fromValue: [51.5668,-562.3207]}], position: 2896, duration: 537 },
            { id: "eid3452", tween: [ "style", "${_Rectangle3}", "-ms-transform-origin", [50.7972,-545.456], { valueTemplate: '@@0@@% @@1@@%', fromValue: [51.5668,-562.3207]}], position: 2896, duration: 537 },
            { id: "eid3453", tween: [ "style", "${_Rectangle3}", "msTransformOrigin", [50.7972,-545.456], { valueTemplate: '@@0@@% @@1@@%', fromValue: [51.5668,-562.3207]}], position: 2896, duration: 537 },
            { id: "eid3454", tween: [ "style", "${_Rectangle3}", "-o-transform-origin", [50.7972,-545.456], { valueTemplate: '@@0@@% @@1@@%', fromValue: [51.5668,-562.3207]}], position: 2896, duration: 537 },
            { id: "eid1263", tween: [ "transform", "${_adobe}", "scaleY", '1', { fromValue: '0'}], position: 6000, duration: 250 },
            { id: "eid1265", tween: [ "transform", "${_adobe}", "scaleY", '0', { fromValue: '1'}], position: 6602, duration: 250 },
            { id: "eid172", tween: [ "transform", "${_movable}", "rotateZ", '-90deg', { fromValue: '0deg'}], position: 2896, duration: 537 },
            { id: "eid305", tween: [ "transform", "${_Rectangle4}", "scaleX", '0.16998', { fromValue: '-0.00859'}], position: 3674, duration: 164 },
            { id: "eid1453", tween: [ "transform", "${_Rectangle4}", "scaleX", '0.5514', { fromValue: '0.16998'}], position: 3839, duration: 356 },
            { id: "eid1456", tween: [ "transform", "${_Rectangle4}", "scaleX", '0.78289', { fromValue: '0.5514'}], position: 4196, duration: 217 },
            { id: "eid1459", tween: [ "transform", "${_Rectangle4}", "scaleX", '1.03079', { fromValue: '0.78289'}], position: 4413, duration: 233 },
            { id: "eid1748", tween: [ "style", "${_edge}", "clip", [22,357,219,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [22,357,219,0]}], position: 7250, duration: 0 },
            { id: "eid43", tween: [ "transform", "${_Rectangle}", "translateY", '-165.36329px', { fromValue: '0px'}], position: 1335, duration: 1075 },
            { id: "eid175", tween: [ "transform", "${_Rectangle}", "translateY", '-165.94855px', { fromValue: '-165.36329px'}], position: 2859, duration: 37 },
            { id: "eid184", tween: [ "transform", "${_Rectangle}", "translateY", '-52.70066px', { fromValue: '-165.94855px'}], position: 2896, duration: 537 },
            { id: "eid1271", tween: [ "transform", "${_edge}", "scaleY", '1', { fromValue: '0'}], position: 6852, duration: 397 },
            { id: "eid6", tween: [ "style", "${_Rectangle}", "-webkit-transform-origin", [0,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,100]}], position: 1335, duration: 0 },
            { id: "eid3455", tween: [ "style", "${_Rectangle}", "-moz-transform-origin", [0,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,100]}], position: 1335, duration: 0 },
            { id: "eid3456", tween: [ "style", "${_Rectangle}", "-ms-transform-origin", [0,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,100]}], position: 1335, duration: 0 },
            { id: "eid3457", tween: [ "style", "${_Rectangle}", "msTransformOrigin", [0,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,100]}], position: 1335, duration: 0 },
            { id: "eid3458", tween: [ "style", "${_Rectangle}", "-o-transform-origin", [0,100], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0,100]}], position: 1335, duration: 0 },
            { id: "eid168", tween: [ "style", "${_Rectangle}", "-webkit-transform-origin", [137.3351,1693.0896], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0.07656001016260162,100.89753671413064]}], position: 2831, duration: 27 },
            { id: "eid3459", tween: [ "style", "${_Rectangle}", "-moz-transform-origin", [137.3351,1693.0896], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0.07656001016260162,100.89753671413064]}], position: 2831, duration: 27 },
            { id: "eid3460", tween: [ "style", "${_Rectangle}", "-ms-transform-origin", [137.3351,1693.0896], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0.07656001016260162,100.89753671413064]}], position: 2831, duration: 27 },
            { id: "eid3461", tween: [ "style", "${_Rectangle}", "msTransformOrigin", [137.3351,1693.0896], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0.07656001016260162,100.89753671413064]}], position: 2831, duration: 27 },
            { id: "eid3462", tween: [ "style", "${_Rectangle}", "-o-transform-origin", [137.3351,1693.0896], { valueTemplate: '@@0@@% @@1@@%', fromValue: [0.07656001016260162,100.89753671413064]}], position: 2831, duration: 27 },
            { id: "eid136", tween: [ "style", "${_Rectangle}", "-webkit-transform-origin", [136.6904,1702.4639], { valueTemplate: '@@0@@% @@1@@%', fromValue: [137.3351,1693.0896]}], position: 2859, duration: 575 },
            { id: "eid3463", tween: [ "style", "${_Rectangle}", "-moz-transform-origin", [136.6904,1702.4639], { valueTemplate: '@@0@@% @@1@@%', fromValue: [137.3351,1693.0896]}], position: 2859, duration: 575 },
            { id: "eid3464", tween: [ "style", "${_Rectangle}", "-ms-transform-origin", [136.6904,1702.4639], { valueTemplate: '@@0@@% @@1@@%', fromValue: [137.3351,1693.0896]}], position: 2859, duration: 575 },
            { id: "eid3465", tween: [ "style", "${_Rectangle}", "msTransformOrigin", [136.6904,1702.4639], { valueTemplate: '@@0@@% @@1@@%', fromValue: [137.3351,1693.0896]}], position: 2859, duration: 575 },
            { id: "eid3466", tween: [ "style", "${_Rectangle}", "-o-transform-origin", [136.6904,1702.4639], { valueTemplate: '@@0@@% @@1@@%', fromValue: [137.3351,1693.0896]}], position: 2859, duration: 575 },
            { id: "eid178", tween: [ "transform", "${_movable}", "translateX", '14.16959px', { fromValue: '-81.00001px'}], position: 2896, duration: 537 },
            { id: "eid996", tween: [ "transform", "${_movable}", "translateX", '390.14229px', { fromValue: '14.16959px'}], position: 4413, duration: 836 },
            { id: "eid387", tween: [ "transform", "${_Rectangle4}", "translateX", '-56.31156px', { fromValue: '4.1178px'}], position: 3674, duration: 164 },
            { id: "eid1452", tween: [ "transform", "${_Rectangle4}", "translateX", '-199.74327px', { fromValue: '-56.31156px'}], position: 3839, duration: 356 },
            { id: "eid1454", tween: [ "transform", "${_Rectangle4}", "translateX", '-288.4314px', { fromValue: '-199.74327px'}], position: 4196, duration: 217 },
            { id: "eid1457", tween: [ "transform", "${_Rectangle4}", "translateX", '-283.38004px', { fromValue: '-288.4314px'}], position: 4413, duration: 233 },
            { id: "eid995", tween: [ "transform", "${_Rectangle4}", "translateX", '-10.8471px', { fromValue: '-283.38004px'}], position: 4646, duration: 603 },
            { id: "eid1182", tween: [ "transform", "${_Rectangle4}", "translateX", '-158.82387px', { fromValue: '-10.8471px'}], position: 5250, duration: 500 },
            { id: "eid1257", tween: [ "transform", "${_Rectangle4}", "translateX", '-159.79491px', { fromValue: '-158.82387px'}], position: 5750, duration: 250 },
            { id: "eid44", tween: [ "transform", "${_Rectangle2}", "translateX", '-359.08593px', { fromValue: '-16.00004px'}], position: 1335, duration: 1075 },
            { id: "eid176", tween: [ "transform", "${_Rectangle2}", "translateX", '-263.9163px', { fromValue: '-359.08593px'}], position: 2896, duration: 537 },
            { id: "eid994", tween: [ "transform", "${_Rectangle2}", "translateX", '112.0564px', { fromValue: '-263.9163px'}], position: 4413, duration: 836 },
            { id: "eid173", tween: [ "transform", "${_Rectangle3}", "rotateZ", '-90deg', { fromValue: '0deg'}], position: 2896, duration: 537 },
            { id: "eid2974", tween: [ "style", "${_white}", "display", 'none', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid388", tween: [ "transform", "${_Rectangle4}", "translateY", '11.72686px', { fromValue: '11.29525px'}], position: 3674, duration: 521 },
            { id: "eid1455", tween: [ "transform", "${_Rectangle4}", "translateY", '11.72687px', { fromValue: '11.72686px'}], position: 4196, duration: 217 },
            { id: "eid1458", tween: [ "transform", "${_Rectangle4}", "translateY", '14.00001px', { fromValue: '11.72687px'}], position: 4413, duration: 233 },
            { id: "eid1258", tween: [ "transform", "${_Rectangle4}", "translateY", '48.72686px', { fromValue: '14.00001px'}], position: 5750, duration: 250 },
            { id: "eid476", tween: [ "style", "${_Rectangle4}", "width", '675px', { fromValue: '282px'}], position: 3674, duration: 971 },
            { id: "eid1183", tween: [ "style", "${_Rectangle4}", "width", '823px', { fromValue: '675px'}], position: 5250, duration: 500 },
            { id: "eid992", tween: [ "transform", "${_type}", "translateX", '450.57455px', { fromValue: '74.60187px'}], position: 4413, duration: 836 },
            { id: "eid54", tween: [ "style", "${_Rectangle3}", "width", '379px', { fromValue: '0px'}], position: 2000, duration: 896 },
            { id: "eid167", tween: [ "style", "${_Rectangle2}", "-webkit-transform-origin", [2815.4594,71.767], { valueTemplate: '@@0@@% @@1@@%', fromValue: [51.525590038340724,50.012592401723026]}], position: 2831, duration: 65 },
            { id: "eid3467", tween: [ "style", "${_Rectangle2}", "-moz-transform-origin", [2815.4594,71.767], { valueTemplate: '@@0@@% @@1@@%', fromValue: [51.525590038340724,50.012592401723026]}], position: 2831, duration: 65 },
            { id: "eid3468", tween: [ "style", "${_Rectangle2}", "-ms-transform-origin", [2815.4594,71.767], { valueTemplate: '@@0@@% @@1@@%', fromValue: [51.525590038340724,50.012592401723026]}], position: 2831, duration: 65 },
            { id: "eid3469", tween: [ "style", "${_Rectangle2}", "msTransformOrigin", [2815.4594,71.767], { valueTemplate: '@@0@@% @@1@@%', fromValue: [51.525590038340724,50.012592401723026]}], position: 2831, duration: 65 },
            { id: "eid3470", tween: [ "style", "${_Rectangle2}", "-o-transform-origin", [2815.4594,71.767], { valueTemplate: '@@0@@% @@1@@%', fromValue: [51.525590038340724,50.012592401723026]}], position: 2831, duration: 65 },
            { id: "eid134", tween: [ "style", "${_Rectangle2}", "-webkit-transform-origin", [2773.7916,72.4825], { valueTemplate: '@@0@@% @@1@@%', fromValue: [2815.4594,71.767]}], position: 2896, duration: 537 },
            { id: "eid3471", tween: [ "style", "${_Rectangle2}", "-moz-transform-origin", [2773.7916,72.4825], { valueTemplate: '@@0@@% @@1@@%', fromValue: [2815.4594,71.767]}], position: 2896, duration: 537 },
            { id: "eid3472", tween: [ "style", "${_Rectangle2}", "-ms-transform-origin", [2773.7916,72.4825], { valueTemplate: '@@0@@% @@1@@%', fromValue: [2815.4594,71.767]}], position: 2896, duration: 537 },
            { id: "eid3473", tween: [ "style", "${_Rectangle2}", "msTransformOrigin", [2773.7916,72.4825], { valueTemplate: '@@0@@% @@1@@%', fromValue: [2815.4594,71.767]}], position: 2896, duration: 537 },
            { id: "eid3474", tween: [ "style", "${_Rectangle2}", "-o-transform-origin", [2773.7916,72.4825], { valueTemplate: '@@0@@% @@1@@%', fromValue: [2815.4594,71.767]}], position: 2896, duration: 537 },
            { id: "eid391", tween: [ "style", "${_type}", "width", '166px', { fromValue: '222px'}], position: 3839, duration: 356 },
            { id: "eid96", tween: [ "style", "${_movable}", "clip", [0,386,91,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,0,91,0]}], position: 2464, duration: 432 },
            { id: "eid2", tween: [ "style", "${_bg}", "background-position", [-411,0], { valueTemplate: '@@0@@px @@1@@px', fromValue: [0,0]}], position: 0, duration: 1335 },
            { id: "eid46", tween: [ "style", "${_bg}", "background-position", [-680,-174], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-411,0]}], position: 1335, duration: 1075 },
            { id: "eid1033", tween: [ "style", "${_bg}", "background-position", [-326,-174], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-680,-174]}], position: 4413, duration: 836 },
            { id: "eid1259", tween: [ "style", "${_bg}", "background-position", [-326,-210], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-326,-174]}], position: 5750, duration: 250 },
            { id: "eid3122", tween: [ "style", "${_bg}", "background-position", [-47,-210], { valueTemplate: '@@0@@px @@1@@px', fromValue: [-326,-210]}], position: 8898, duration: 500 },
            { id: "eid45", tween: [ "transform", "${_Rectangle}", "translateX", '-343.08594px', { fromValue: '0px'}], position: 1335, duration: 1075 },
            { id: "eid174", tween: [ "transform", "${_Rectangle}", "translateX", '-343.8985px', { fromValue: '-343.08594px'}], position: 2859, duration: 37 },
            { id: "eid183", tween: [ "transform", "${_Rectangle}", "translateX", '-247.91631px', { fromValue: '-343.8985px'}], position: 2896, duration: 537 },
            { id: "eid993", tween: [ "transform", "${_Rectangle}", "translateX", '128.05639px', { fromValue: '-247.91631px'}], position: 4413, duration: 836 },
            { id: "eid59", tween: [ "transform", "${_Rectangle3}", "translateX", '-168px', { fromValue: '-88px'}], position: 2000, duration: 250 },
            { id: "eid63", tween: [ "transform", "${_Rectangle3}", "translateX", '-205px', { fromValue: '-168px'}], position: 2250, duration: 116 },
            { id: "eid73", tween: [ "transform", "${_Rectangle3}", "translateX", '-221.27969px', { fromValue: '-205px'}], position: 2366, duration: 97 },
            { id: "eid67", tween: [ "transform", "${_Rectangle3}", "translateX", '-220px', { fromValue: '-221.27969px'}], position: 2464, duration: 432 },
            { id: "eid180", tween: [ "transform", "${_Rectangle3}", "translateX", '-124.83037px', { fromValue: '-220px'}], position: 2896, duration: 537 },
            { id: "eid991", tween: [ "transform", "${_Rectangle3}", "translateX", '251.14238px', { fromValue: '-124.83037px'}], position: 4413, duration: 836 },
            { id: "eid169", tween: [ "style", "${_movable}", "-webkit-transform-origin", [51.061,49.0694], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50.00017099789819,50.00020538791112]}], position: 2831, duration: 65 },
            { id: "eid3475", tween: [ "style", "${_movable}", "-moz-transform-origin", [51.061,49.0694], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50.00017099789819,50.00020538791112]}], position: 2831, duration: 65 },
            { id: "eid3476", tween: [ "style", "${_movable}", "-ms-transform-origin", [51.061,49.0694], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50.00017099789819,50.00020538791112]}], position: 2831, duration: 65 },
            { id: "eid3477", tween: [ "style", "${_movable}", "msTransformOrigin", [51.061,49.0694], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50.00017099789819,50.00020538791112]}], position: 2831, duration: 65 },
            { id: "eid3478", tween: [ "style", "${_movable}", "-o-transform-origin", [51.061,49.0694], { valueTemplate: '@@0@@% @@1@@%', fromValue: [50.00017099789819,50.00020538791112]}], position: 2831, duration: 65 },
            { id: "eid141", tween: [ "style", "${_movable}", "-webkit-transform-origin", [50.3053,50.3667], { valueTemplate: '@@0@@% @@1@@%', fromValue: [51.061,49.0694]}], position: 2896, duration: 537 },
            { id: "eid3479", tween: [ "style", "${_movable}", "-moz-transform-origin", [50.3053,50.3667], { valueTemplate: '@@0@@% @@1@@%', fromValue: [51.061,49.0694]}], position: 2896, duration: 537 },
            { id: "eid3480", tween: [ "style", "${_movable}", "-ms-transform-origin", [50.3053,50.3667], { valueTemplate: '@@0@@% @@1@@%', fromValue: [51.061,49.0694]}], position: 2896, duration: 537 },
            { id: "eid3481", tween: [ "style", "${_movable}", "msTransformOrigin", [50.3053,50.3667], { valueTemplate: '@@0@@% @@1@@%', fromValue: [51.061,49.0694]}], position: 2896, duration: 537 },
            { id: "eid3482", tween: [ "style", "${_movable}", "-o-transform-origin", [50.3053,50.3667], { valueTemplate: '@@0@@% @@1@@%', fromValue: [51.061,49.0694]}], position: 2896, duration: 537 },
            { id: "eid182", tween: [ "transform", "${_Rectangle}", "rotateZ", '-90deg', { fromValue: '-0.25385deg'}], position: 2896, duration: 537 },
            { id: "eid60", tween: [ "transform", "${_Rectangle3}", "translateY", '-50.00002px', { fromValue: '-11.00002px'}], position: 2000, duration: 250 },
            { id: "eid64", tween: [ "transform", "${_Rectangle3}", "translateY", '-68.01794px', { fromValue: '-50.00002px'}], position: 2250, duration: 116 },
            { id: "eid74", tween: [ "transform", "${_Rectangle3}", "translateY", '-74.28283px', { fromValue: '-68.01794px'}], position: 2366, duration: 97 },
            { id: "eid68", tween: [ "transform", "${_Rectangle3}", "translateY", '-75px', { fromValue: '-74.28283px'}], position: 2464, duration: 432 },
            { id: "eid181", tween: [ "transform", "${_Rectangle3}", "translateY", '37.6626px', { fromValue: '-75px'}], position: 2896, duration: 537 }         ]
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
})(jQuery, AdobeEdge, "EDGE-12699905");
