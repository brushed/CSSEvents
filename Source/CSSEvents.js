/*
---
description: CSSEvents

license: MIT-style

authors:
- Amadeus Demarzi (http://enmassellc.com/)

- updated by Brushed, for better minimization

requires:
 core/1.3: [Core/Core, Core/Event, Core/Element.Event, Core/String]

provides: [Element.Events.transitionstart, Element.Events.transitionend, Element.Events.animationstart, Element.Events.animationend, Element.Events.animationiteration]
...
*/

/*
Example:
	Events.addNativeEvent('TransitionEnd');
    Events.addNativeEvent('TransitionStart','TransitionEnd','AnimationStart','AnimationIteration','AnimationEnd');

*/
(function(css3){

var B = Browser,
	pfx = B.cssprefix = (B.safari || B.chrome || B.Platform.ios) ? 'webkit' : (B.opera) ? 'o' : (B.ie) ? 'ms' : '';

	for ( style in css3 ){

		var eventType = css3[style],
			type = eventType.toLowerCase(),
			aType = pfx ? pfx + eventType : type,
			aTest = pfx ? pfx + style.capitalize() : style;

		if( document.createElement('div').style[ aTest ] != null ){

			Element.NativeEvents[type] = Element.NativeEvents[aType] = 2;
			Element.Events[type] = { base: aType };

		}

		//console.log(Element.NativeEvents, Element.Events);

	}

})({transition:'TransitionEnd'});
//})({transition:'TransitionStart',transition:'TransitionEnd',animation:'AnimationStart',animation:'AnimationIteration',animation:'AnimationEnd');
