/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'board'
   (function(symbolName) {   
   
            Symbol.bindElementAction(compId, symbolName, "${_fring3}", "click", function(sym, e) {
         var el = sym.getParentSymbol().getSymbol("board2").getSymbolElement();
         
         TweenMax.to(el, 1, {css:{scale:1.2, left:"0px", top:"-81px", }, ease:Expo.easeOut});

      });
         //Edge binding end



      Symbol.bindElementAction(compId, symbolName, "${_board}", "click", function(sym, e) {
         var el = sym.getParentSymbol().getSymbol("board2").getSymbolElement();
         
         TweenMax.to(fringi, 0.5, {css:{alpha:0}, onComplete: function() {
         	fringi.hide();
         }});
         
         TweenMax.to(pollosi, 0.5, {css:{alpha:0}, onComplete: function() {
         	pollosi.hide();
         }});
         
         TweenMax.to(salamancai, 0.5, {css:{alpha:0}, onComplete: function() {
         	salamancai.hide();
         }});
         
         TweenMax.to(schuleri, 0.5, {css:{alpha:0}, onComplete: function() {
         	schuleri.hide();
         }});
         
         TweenMax.to(mikei, 0.5, {css:{alpha:0}, onComplete: function() {
         	mikei.hide();
         }});
         
         TweenMax.to(labi, 0.5, {css:{alpha:0}, onComplete: function() {
         	labi.hide();
         }});
         
         TweenMax.to(el, 0.5, {css:{scale:0.3, top:"0px", left:"0px"}, ease: Expo.easeOut});

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_mike}", "click", function(sym, e) {
         var el = sym.getParentSymbol().getSymbol("board2").getSymbolElement();
         
         TweenMax.to(el, 1, {css:{scale:1.2, left:"590px", top:"250px"}, ease:Expo.easeOut});

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_schuler}", "click", function(sym, e) {
         var el = sym.getParentSymbol().getSymbol("board2").getSymbolElement();
         
         TweenMax.to(el, 1, {css:{scale:1.2, left:"590px", top:"-350px"}, ease:Expo.easeOut});

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_pollos}", "click", function(sym, e) {
         var el = sym.getParentSymbol().getSymbol("board2").getSymbolElement();
         
         TweenMax.to(el, 1, {css:{scale:1.2, left:"0px", top:"380px"}, ease:Expo.easeOut});

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_salamanca}", "click", function(sym, e) {
         var el = sym.getParentSymbol().getSymbol("board2").getSymbolElement();
         
         TweenMax.to(el, 1, {css:{scale:1.2, left:"-580px", top:"250px"}, ease:Expo.easeOut});
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_lab}", "click", function(sym, e) {
         var el = sym.getParentSymbol().getSymbol("board2").getSymbolElement();
         
         TweenMax.to(el, 1, {css:{scale:1.2, left:"-580px", top:"-350px"}, ease:Expo.easeOut});
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_fring3}", "dblclick", function(sym, e) {
         fringi.show();
         TweenMax.to(fringi, 1, {css:{alpha:1}});
         
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         fringi = sym.getSymbol("fringInfo").getSymbolElement();
         fringi.hide();
         
         salamancai = sym.getSymbol("salamancaInfo").getSymbolElement();
         salamancai.hide();
         
         schuleri = sym.getSymbol("schulerInfo").getSymbolElement();
         schuleri.hide();
         
         pollosi = sym.getSymbol("pollosInfo").getSymbolElement();
         pollosi.hide();
         
         mikei = sym.getSymbol("mikeInfo").getSymbolElement();
         mikei.hide();
         
         labi = sym.getSymbol("labInfo").getSymbolElement();
         labi.hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_mike}", "dblclick", function(sym, e) {
         mikei.show();
         TweenMax.to(mikei, 1, {css:{alpha:1}});

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_pollos}", "dblclick", function(sym, e) {
         pollosi.show();
         TweenMax.to(pollosi, 1, {css:{alpha:1}});

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_lab}", "dblclick", function(sym, e) {
         labi.show();
         TweenMax.to(labi, 1, {css:{alpha:1}});

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_schuler}", "dblclick", function(sym, e) {
         schuleri.show();
         TweenMax.to(schuleri, 1, {css:{alpha:1}});

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_salamanca}", "dblclick", function(sym, e) {
         salamancai.show();
         TweenMax.to(salamancai, 1, {css:{alpha:1}});

      });
      //Edge binding end

   })("board");
   //Edge symbol end:'board'

   //=========================================================
   
   //Edge symbol: 'info'
   (function(symbolName) {   
   
   })("info");
   //Edge symbol end:'info'

   //=========================================================
   
   //Edge symbol: 'fringInfo'
   (function(symbolName) {   
   
   })("fringInfo");
   //Edge symbol end:'fringInfo'

   //=========================================================
   
   //Edge symbol: 'fringInfo_1'
   (function(symbolName) {   
   
   })("labInfo");
   //Edge symbol end:'labInfo'

   //=========================================================
   
   //Edge symbol: 'fringInfo_1'
   (function(symbolName) {   
   
   })("salamancaInfo");
   //Edge symbol end:'salamancaInfo'

   //=========================================================
   
   //Edge symbol: 'fringInfo_1'
   (function(symbolName) {   
   
   })("pollosInfo");
   //Edge symbol end:'pollosInfo'

   //=========================================================
   
   //Edge symbol: 'fringInfo_1'
   (function(symbolName) {   
   
   })("schulerInfo");
   //Edge symbol end:'schulerInfo'

   //=========================================================
   
   //Edge symbol: 'fringInfo_1'
   (function(symbolName) {   
   
   })("mikeInfo");
   //Edge symbol end:'mikeInfo'

})(jQuery, AdobeEdge, "EDGE-321751761");