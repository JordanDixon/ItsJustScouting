var nystories = document.querySelector("p").offsetTop;
window.onscroll = function() {
  if (window.pageYOffset > 0) {
 var opac = (window.pageYOffset / nystories);
    console.log(opac);
  document.body.style.background = "linear-gradient(rgba(31, 31, 31, " + opac + "), rgba(31, 31, 31, " + opac + ")), url(img/Rogers_Selects_032.jpg) no-repeat";
  }
}