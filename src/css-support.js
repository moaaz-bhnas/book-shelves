// Function from: https://stackoverflow.com/a/36191841/7982963
const isValueSupported = (prop, value) => {
    const el = document.createElement('div');
    el.style[prop] = value;
    return el.style[prop] === value;
  }
// Function from: http://lea.verou.me/2009/02/check-if-a-css-property-is-supported/
const isPropertySupported = property =>  property in document.body.style;

/* Browser support --- */
// Firefox
const isFirefox = navigator.userAgent.toLowerCase().includes('firefox');

// Edge
const isEdge = navigator.userAgent.toLowerCase().includes('edge');

const browserSupports3d = isValueSupported('perspective', '400px') && isValueSupported('transform-style', 'preserve-3d') && isValueSupported('transform', 'rotateY(-180deg)') && isPropertySupported('perspective') && isPropertySupported('transform-style') && isPropertySupported('transform') && !isFirefox && !isEdge;

/* bigViewport --- */
const viewportIsBig = window.innerWidth > 600;

const display3d = browserSupports3d && viewportIsBig;

export default display3d;