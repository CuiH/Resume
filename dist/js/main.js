if(!navigator.userAgent.match(/(iPhone|iPod|Android|ios)/i)){
  var right = document.querySelectorAll('.col-4')[0];

  var left = document.querySelectorAll('.col-2')[0];

  left.style.height = right.offsetHeight + 'px';
}


window.scrollTo(0, 0);

setTimeout(function() {
  var more = document.querySelectorAll('.more')[0];
  var mask = document.querySelectorAll('.mask')[0];
  var arrow = document.querySelectorAll('.arrow')[0];
  var popover = document.querySelectorAll('.popover')[0];
  var rect = more.getBoundingClientRect();
  var scroll = document.documentElement.scrollTop || document.body.scrollTop;

  popover.style.left = rect.left - more.offsetWidth + 'px';
  popover.style.top = rect.top + more.offsetHeight + scroll + 'px';
  arrow.style.left = more.offsetWidth/2 + 'px';
  more.addEventListener('click', function(e) {
    mask.classList.add('show');
    popover.classList.add('show');
  }, false);
  mask.addEventListener('click', function(e) {
    mask.classList.remove('show');
    popover.classList.remove('show');
  }, false);
}, 1000);

