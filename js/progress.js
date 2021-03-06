var body = document.body;
var html = document.documentElement;

var height = 0;
var h = 0;

var initiateHeights = function () {
  height = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );
  h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
  console.log("heights were initialised:", height, h);
}

initiateHeights();

var resize = function (e) {
  var scrolled = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
  height > 0 ? e[0].style.width = scrolled/(height-h) * 100 + "%" : e.style.width = 0 + "%";
}

document.onscroll = function () {
  resize(document.getElementsByClassName("indicator"));
};

window.onresize = function () {
  initiateHeights();
}
