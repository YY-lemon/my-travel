var html = document.getElementsByTagName('html')[0]
var width = window.innerWidth
var fontSize = 100 / 750 * width
// console.log(fontSize)
html.style.fontSize = fontSize + 'px'
window.onresize = function () {
  var html = document.getElementsByTagName('html')[0]
  // console.log(html)
  var width = window.innerWidth
  // console.log(width)
  var fontSize = 100 / 750 * width
  // console.log(fontSize)
  html.style.fontSize = fontSize + 'px'
}
