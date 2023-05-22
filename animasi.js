window.addEventListener('DOMContentLoaded', function() {
  var elements = document.querySelectorAll('.fade-in');
  
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.animationDelay = i * 200 + 'ms';
  }
});