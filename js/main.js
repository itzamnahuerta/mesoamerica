function moveSerpent(){
  let elem = document.getElementById('SerpentinMoasiac');
  let pos = 0;
  let id = setInterval(frame, 5);
  function frame(){
    if (pos == 500){
      clearInterval(id);
    }else {
      pos++;
      elem.style.left = pos + 'px';
    }
  }
}
moveSerpent()
