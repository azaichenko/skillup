let buttons = document.getElementsByClassName('submit')[0],
   link = document.getElementsByClassName('link')[0];

link.onclick = buttons.onclick = function (e) {

   alert("привет - два");
}

butt.onclick = function () {
   var data = document.getElementById('inp').value;
   if (data != "") {
      console.log("ввод-раз");

   }
   
}
