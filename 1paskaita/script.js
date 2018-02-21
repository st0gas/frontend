function setRandomColor(el) {
    el.style = 'background: #'+(Math.random()*0xFFFFFF<<0).toString(16);
}

$(document).ready(function(){
  $('#rectangle').on('click', function() {
    setRandomColor(this);
  })
})
