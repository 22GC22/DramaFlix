setInterval(textanime, 10000);
function textanime(){
  var string = "SEMANTIC ERROR";
    var str = string.split("");
    var el = document.getElementById('banner-title');
    el.innerHTML = "";
    (function animate() {
    str.length > 0 ? el.innerHTML += str.shift() : clearTimeout(running); 
    var running = setTimeout(animate, 300);
    })();  
}
