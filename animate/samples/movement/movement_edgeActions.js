/***********************
* Adobe Edge Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

//Edge symbol: 'stage'
(function(symbolName) {


Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
sym.stop();
sym.$("button").show();
sym.$("white").show();

});
//Edge binding end

Symbol.bindElementAction(compId, symbolName, "${_button}", "mouseover", function(sym, e) {
sym.$("button").css('cursor','pointer');

});
//Edge binding end

Symbol.bindElementAction(compId, symbolName, "${_button}", "click", function(sym, e) {
sym.play(1);
// Hide an Element.
//  (sym.$("name") resolves an Edge element name to a DOM
//  element that can be used with jQuery)
sym.$("button").hide();
sym.$("white").hide();

});
//Edge binding end

Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 10500, function(sym, e) {
sym.play(0);
// Show an Element.
//  (sym.$("name") resolves an Edge element name to a DOM
//  element that can be used with jQuery)
sym.$("button").show();
sym.$("white").show();

});
//Edge binding end



})("stage");
//Edge symbol end:'stage'

})(jQuery, AdobeEdge, "EDGE-12699905");