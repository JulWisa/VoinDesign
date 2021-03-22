new SimpleLightbox('.gallery div div a');
new SimpleLightbox('.gallery div .img-to-zoom a');

var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
var imgToZoom = document.querySelectorAll("#main-container #design-boards-container .concepts .img-to-zoom img");
if (isSafari) imgToZoom.forEach( img => img.style.minHeight = "200px");
