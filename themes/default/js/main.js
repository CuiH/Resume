if(!navigator.userAgent.match(/(iPhone|iPod|Android|ios)/i)){
  var right = document.querySelectorAll('.col-4')[0];

  var left = document.querySelectorAll('.col-2')[0];

  left.style.height = right.offsetHeight + 'px';
}


window.scrollTo(0, 0);
