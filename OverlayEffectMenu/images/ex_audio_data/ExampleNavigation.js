/*
 * $Id: ExampleNavigation.js 824 2009-09-03 17:48:01Z klaus $
 *
 * add hidden back and forward buttons to paper examples
 *
 */
var addNavigation = function() {
  var svgNS = 'http://www.w3.org/2000/svg';
  var xlinkNS = 'http://www.w3.org/1999/xlink';

  var examples = [
    ['index.html','Index'],  
    ['ex_read.svg','Read pixel values'],
    ['ex_distribution.svg','distribution of colors'],
    ['ex_reclass.svg','reclassify pixels'],
    ['ex_grayscale.svg','convert to grayscale'],
    ['ex_colors.svg','color picker'],
    ['ex_icons.svg','extract icons'],
    ['ex_relief.svg','shaded relief and elevation'],
    ['ex_profile.svg','elevation profiles'],
    ['ex_audio.svg','simple sound-map'],
    ['index.html','Index']
  ];
  var r = 10;

  // do not add navigation if loaded as iframe
  if (window != window.top) {
    return;
  }

  for (var i=0; i<examples.length; i++) {
    if (document.URL.search(examples[i][0]) != -1) {
      // define back and forward
      var bwd = (i>=1) ? i-1 : examples.length-1;
      var fwd = (i<examples.length-1) ? i+1 : 0;

      // create circles
      var c1 = document.createElementNS(svgNS,"circle");
      c1.r.baseVal.value = r;
      c1.cx.baseVal.value = r+(r*0.1);
      c1.cy.baseVal.value = r+(r*0.1);
      c1.setAttributeNS(null,"fill",'#F00');
      c1.setAttributeNS(null,"fill-opacity",0.0);
      c1.setAttributeNS(null,"title",examples[bwd][1]);
      var c2 = c1.cloneNode(false);
      c2.cx.baseVal.value = 300-(r+(r*0.1)); 
      c2.setAttributeNS(null,"title",examples[fwd][1]);

      // create links
      var a1 = document.createElementNS(svgNS,"a");
      a1.setAttributeNS(xlinkNS,"href",examples[bwd][0]);
      var a2 = a1.cloneNode(false);
      a2.setAttributeNS(xlinkNS,"href",examples[fwd][0]);

      // add eventListeners
      c1.onmouseover = c2.onmouseover = function (evt) {
        evt.target.setAttributeNS(null,"fill-opacity",0.2);
      };
      c1.onmouseout = c2.onmouseout = function (evt) {
        evt.target.setAttributeNS(null,"fill-opacity",0.0);
      };

      // append navigation
      a1.appendChild(c1);
      a2.appendChild(c2);
      document.rootElement.appendChild(a1);
      document.rootElement.appendChild(a2);
    }
  }

  // reposition status text
  var hint = document.getElementById('svgHint');
  hint.setAttributeNS(null,"x",310);
  hint.setAttributeNS(null,"y",20);

  // reposition profile if appropriate
  try {
    var profile = document.getElementById('svgProfile').parentNode;
    profile.setAttributeNS(null,"x",310);
    profile.setAttributeNS(null,"y",20);
  }
  catch(e) {};
};
