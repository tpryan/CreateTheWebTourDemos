
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_button}","click",function(sym,e){sym.play('roll');});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'button'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_RoundRect}","click",function(sym,e){sym.play('roll');});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",2000,function(sym,e){sym.play(0);});
//Edge binding end
})("button");
//Edge symbol end:'button'
})(jQuery,AdobeEdge,"EDGE-270617903");