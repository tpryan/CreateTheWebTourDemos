
(function($,Edge,compId){var _=null,y=true,n=false,e42='${_tk}',e63='${_co}',e52='${_in_title}',e53='${_in}',x34='hidden',s='style',x33='rgba(178,170,252,1.00)',e64='${_an}',i='none',x37='rgba(82,222,198,1.00)',e38='${_rs_bd}',lf='left',x1='"AdobeClean-Light", "source_sans_pro_lightregular"',zx='scaleX',x9='AdobeClean-Light, source_sans_pro_lightregular',e54='${_in_slogan}',bg='background-color',x3='0.1.7',x68='107px',t='transform',e73='${symbolSelector}',x72='rs',fs='font-size',tp='top',ta='text-align',xc='rgba(0,0,0,1)',x70='auto',x30='stage',x4='1.0.0.185',x69='62px',e35='${_rf}',e55='${_an_title}',c='color',x10='rgba(0,0,0,0)',x8='35',e49='${_tk_title}',g='image',po='center',e44='${_rs_wf}',e65='${_tk_slogan}',x62='rgba(0,0,0,0.00)',e61='${_Stage}',e48='${_an_slogan}',e60='${_co_slogan}',x40='rgba(170,170,170,1.00)',e51='${_wf_slogan}',qoq='easeOutQuad',e59='${_rs_rf}',x='text',e56='${_wf_title}',e57='${_wf}',m='rect',x67='0px',h='height',e50='${_rf_title}',qiq='easeInQuad',x2='1.0.0',x66='rs_an',e47='${_bd_title}',e36='${_co_title}',e39='${_bd_slogan}',p='px',o='opacity',x32='rgba(253,171,72,1.00)',x6='44',e41='${_rs_tk}',e43='${_rs_in}',e45='${_rf_slogan}',e46='${_rs_co}',qib='easeInBounce',l='normal',e31='${_rs_an}',ff='font-family',a='Base State',w='width',e58='${_bd}',ql='linear',dt='Default Timeline',ov='overflow';var im='images/';var g11='edge_animate_mn.png',g23='edge_web_fonts_mn.png',g71='redsheet.png',g17='edge_reflow_mn.png',g24='edge_inspect_mn.png',g29='edge_code_mn.png',g14='phonegap_build_mn.png',g20='typekit.png';var s18="Typekit",s22="Get Started with <br>Free Web Fonts",s26="Preview the Web",s19="Use High Quality <br>Fonts on the Web",s16="Create the <br>Responsive Web",s7="Animate the Web",s15="Adobe Edge Reflow",s27="Adobe Edge Code",s25="Adobe Edge Inspect ",s21="Adobe Edge Web Fonts",s28="Code the Web",s5="Adobe Edge Animate",s12="PhoneGap Build",s13="Build Apps <br>with the Web";var fonts={};fonts[x1]='<link rel=\"stylesheet\" href=\"fonts.css\">';var P=Edge.P,T=Edge.T,A=Edge.A;var resources=[];var symbols={"stage":{v:x2,mv:x3,b:x4,bS:a,iS:a,gpu:n,rI:n,cn:{dom:[{id:'an_title',t:x,r:['257px','157px','auto','auto','auto','auto'],text:s5,n:[x1,x6,xc,l,i,""]},{id:'an_slogan',t:x,r:['317px','225px','254px','53px','auto','auto'],text:s7,align:"left",n:[x9,x8,"rgba(255,255,255,1.00)",l,i,l]},{id:'an',t:g,r:['38px','18px','75px','75px','auto','auto'],f:[x10,im+g11,'0px','0px']},{id:'rs_an',t:m,r:['22','18','auto','auto','auto','auto']},{id:'bd_title',t:x,r:['273px','464px','362px','46px','auto','auto'],text:s12,align:"left",n:[x9,x6,"rgba(158,218,225,1)",l,i,l]},{id:'bd_slogan',t:x,r:['303px','532px','auto','auto','auto','auto'],text:s13,align:"center",n:[x9,x6,"rgba(255,255,255,1.00)",l,i,l]},{id:'bd',t:g,r:['350px','18px','75px','73px','auto','auto'],f:[x10,im+g14,'0px','0px']},{id:'rs_bd',t:m,r:['443','239','auto','auto','auto','auto']},{id:'rf_title',t:x,r:['273px','464px','362px','46px','auto','auto'],text:s15,align:"left",n:[x9,x6,"rgba(97,220,254,1)",l,i,l]},{id:'rf_slogan',t:x,r:['309px','532px','auto','auto','auto','auto'],text:s16,align:"center",n:[x9,x6,"rgba(255,255,255,1.00)",l,i,l]},{id:'rf',t:g,r:['455px','18px','75px','73px','auto','auto'],f:[x10,im+g17,'0px','0px']},{id:'rs_rf',t:m,r:['598','239','auto','auto','auto','auto']},{id:'tk_title',t:x,r:['326px','464px','147px','46px','auto','auto'],text:s18,align:"left",n:[x9,x6,"rgba(157,193,68,1.00)",l,i,l]},{id:'tk_slogan',t:x,r:['265px','532px','auto','auto','auto','auto'],text:s19,align:"left",n:[x9,x6,"rgba(255,255,255,1.00)",l,i,l]},{id:'tk',t:g,r:['560px','18px','75px','73px','auto','auto'],f:[x10,im+g20,'0px','0px']},{id:'rs_tk',t:m,r:['577','55','auto','auto','auto','auto']},{id:'wf_title',t:x,r:['273px','464px','439px','46px','auto','auto'],text:s21,align:"left",n:[x9,x6,"rgba(254,205,71,1.00)",l,i,l]},{id:'wf_slogan',t:x,r:['229px','532px','auto','auto','auto','auto'],text:s22,align:"left",n:[x9,x6,"rgba(255,255,255,1.00)",l,i,l]},{id:'wf',t:g,r:['665px','18px','75px','73px','auto','auto'],f:[x10,im+g23,'0px','0px']},{id:'rs_wf',t:m,r:['548','195','auto','auto','auto','auto']},{id:'in',t:g,r:['140px','18px','75px','73px','auto','auto'],f:[x10,im+g24,'0px','0px']},{id:'rs_in',t:m,r:['388','274','auto','auto','auto','auto']},{id:'in_title',t:x,r:['273px','464px','362px','46px','auto','auto'],text:s25,align:"left",n:[x9,x6,"rgba(178,170,252,1)",l,i,l]},{id:'in_slogan',t:x,r:['293','532px','auto','auto','auto','auto'],text:s26,align:"left",n:[x9,x6,"rgba(178,170,252,1)",l,i,l]},{id:'co_title',t:x,r:['273px','464px','362px','46px','auto','auto'],text:s27,align:"left",n:[x9,x6,"rgba(178,170,252,1)",l,i,l]},{id:'co_slogan',t:x,r:['293','532px','auto','auto','auto','auto'],text:s28,align:"left",n:[x9,x6,"rgba(178,170,252,1)",l,i,l]},{id:'co',t:g,r:['245px','18px','75px','73px','auto','auto'],f:[x10,im+g29,'0px','0px']},{id:'rs_co',t:m,r:['254','177','auto','auto','auto','auto']}],sI:[{id:'rs_an',sN:'rs'},{id:'rs_rf',sN:'rs'},{id:'rs_tk',sN:'rs'},{id:'rs_co',sN:'rs'},{id:'rs_wf',sN:'rs'},{id:'rs_bd',sN:'rs'},{id:'rs_in',sN:'rs'}]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:45000,a:y,l:{"reveal":250,"start_an":2000,"stop_an":6000,"start_in":8000,"stop_in":12000,"start_co":14000,"stop_co":18000,"start_bd":20000,"stop_bd":24000,"start_rf":26000,"stop_rf":30000,"start_tk":34000,"stop_tk":38000,"start_wf":40000,"stop_wf":44000},tt:[]}}},"rs":{v:x2,mv:x3,b:x4,bS:a,iS:a,gpu:n,rI:n,cn:{dom:[{id:x66,t:g,r:[x67,x67,x68,x69,x70,x70],f:[x10,im+g71,x67,x67]}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:500,a:n,l:{"remove":0},tt:[]}}}};var S1=symbols[x30];var tl0=S1.tl[dt].tt,st1=S1.s[a]={},A1=A(_,tl0,st1);A1.A(e31).P(lf,25);A1.A(e35).P(tp,17.92).T(26,157,1,ql).T(30,17.92,1).P(h,73.25).T(26,195.33,1).T(30,73.25,1).P(lf,455).T(26,38,1).T(30,455,1).P(w,75).T(26,200,1).T(30,75,1);A1.A(e36).P(lf,263).P(tp,464).T(14,157,1,qoq).T(18,464,1).P(o,0,_,_,"").T(14,1,1,qiq).T(18,0,1,qoq).P(c,x37,c).T(14,x37);A1.A(e38).P(tp,18).T(0,18).P(lf,337).T(0,337);A1.A(e39).P(ta,po).P(lf,303).P(tp,532).T(20,225,1,ql).T(24,532,1).P(o,0,_,_,"").T(20.009,1,1,qiq).T(24.009,0,1,qoq).P(c,x40,c).T(0,x40);A1.A(e41).P(tp,18).T(0,18).P(lf,547).T(0,547);A1.A(e42).P(tp,17.92).T(34,157,1,ql).T(38,17.92,1).P(h,73.25).T(34,195.33,1).T(38,73.25,1).P(lf,560).T(34,38,1).T(38,560,1).P(w,75).T(34,200,1).T(38,75,1);A1.A(e43).P(tp,18).T(0,18).P(lf,127).T(0,127);A1.A(e44).P(lf,652).T(0,652).P(tp,18).T(0,18);A1.A(e45).P(ta,po).P(lf,309).P(c,x40,c).T(0,x40).P(o,0,_,_,"").T(26,1,1,qiq).T(30,0,1,qoq).P(tp,532,_,_,p).T(26,225,1,ql).T(30,532,1);A1.A(e46).P(lf,232).T(0,232).P(tp,18).T(0,18);A1.A(e47).P(tp,464).T(20,157,1,ql).T(24,464,1).P(o,0,_,_,"").T(20.009,1,1,qiq).T(24.009,0,1,qoq);A1.A(e48).P(fs,35).P(lf,317).P(w,253.64).P(tp,532.1).T(2,225,1,qoq).T(6,532.1,1).P(o,0,_,_,"").T(2,1,1,qiq).T(6,0,1,qoq).P(c,x40,c).T(0,x40);A1.A(e49).P(lf,326).P(w,147).P(tp,464).T(34,157,1,ql).T(38,464,1).P(o,0,_,_,"").T(34,1,1,qiq).T(38,0,1,qoq);A1.A(e50).P(tp,464).T(26,157,1,ql).T(30,464,1).P(o,0,_,_,"").T(26,1,1,qiq).T(30,0,1,qoq);A1.A(e51).P(lf,276).P(c,x40,c).T(0,x40).P(o,0,_,_,"").T(40,1,1,qiq).T(44,0,1,qoq).P(tp,532,_,_,p).T(40,225,1,ql).T(44,532,1);A1.A(e52).P(lf,263).P(c,x32,c).P(tp,464).T(8,157,1,qoq).T(12,464,1).P(o,0,_,_,"").T(8,1,1,qiq).T(12,0,1,qoq);A1.A(e53).P(h,73.25).T(8,195.46,1,qoq).T(12,73.25,1).P(tp,17.92).T(8,156.95,1).T(12,17.92,1).P(lf,140).T(8,38,1).T(12,140,1).P(w,75).T(8,200.13,1).T(12,75,1);A1.A(e54).P(lf,320.44).P(fs,35).P(c,x40,c).T(0,x40).P(o,0,_,_,"").T(8,1,1,qiq).T(12,0,1,qoq).P(tp,532,_,_,p).T(8,225,1).T(12,532,1);A1.A(e55).P(c,x33,c).P(ff,x1).P(lf,257).P(fs,44).P(tp,464.1).T(2,157,1,qoq).T(6,464.1,1).P(o,0,_,_,"").T(2,1,1,qiq).T(6,0,1,qoq);A1.A(e56).P(w,438.63).P(tp,464).T(40,157,1,ql).T(44,464,1).P(o,0,_,_,"").T(40,1,1,qiq).T(44,0,1,qoq).P(lf,276,_,_,p).T(40,276).T(41,276).T(44,276).T(45,276);A1.A(e57).P(tp,17.87).T(40,157,1,ql).T(44,17.87,1).P(h,73.25).T(40,195.33,1).T(44,73.25,1).P(lf,665).T(40,38,1).T(44,665,1).P(w,75).T(40,200,1).T(44,75,1);A1.A(e58).P(tp,17.92).T(20,157,1,ql).T(24,17.92,1).P(h,73.25).T(20,195.33,1).T(24,73.25,1).P(lf,350).T(20,38,1).T(24,350,1).P(w,75).T(20,200,1).T(24,75,1);A1.A(e59).P(lf,444).T(0,444).P(tp,18).T(0,18);A1.A(e60).P(lf,320.44).P(fs,35).P(tp,532).T(14,225,1,qoq).T(18,532,1).P(o,0,_,_,"").T(14,1,1,qiq).T(18,0,1,qoq).P(c,x40,c).T(0,x40);A1.A(e61).P(ov,x34).P(h,450).P(w,800).P(bg,x62,c).T(0,x62);A1.A(e63).P(h,73.25).T(14,195.33,1,qoq).T(18,73.25,1).P(tp,17.92).T(14,157,1).T(18,17.92,1).P(lf,245).T(14,38,1).T(18,245,1).P(w,75).T(14,200,1).T(18,75,1);A1.A(e64).P(h,75).T(2,200.39,1,qoq).T(6,75,1).P(tp,18).T(2,156.67,1).T(6,18,1).P(lf,38).T(2,33.62,1).T(6,38,1).P(w,75).T(2,200.39,1).T(6,75,1);A1.A(e65).P(lf,265).P(c,x40,c).T(0,x40).P(o,0,_,_,"").T(34,1,1,qiq).T(38,0,1,qoq).P(tp,532,_,_,p).T(34,225,1,ql).T(38,532,1);var S2=symbols[x72];var tl1=S2.tl[dt].tt,st2=S2.s[a]={},A2=A(_,tl1,st2);A2.A(e73).P(h,62.45).P(w,107.28);A2.A(e31).P(h,62.46).P(zx,1,t,_,"").P(lf,0.01,_,_,p).P(w,107.29).P(tp,0).T(0,-161.7,0.5,ql);Edge.registerCompositionDefn(compId,symbols,fonts,resources);$(window).ready(function(){Edge.launchComposition(compId);});})(jQuery,AdobeEdge,"logos");