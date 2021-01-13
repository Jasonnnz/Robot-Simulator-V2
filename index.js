document.addEventListener("DOMContentLoaded", function() {
  // initializes the board
  init();

  const mainBoard = document.body;
  const ul = document.querySelector('ul#moves-container');
  const btn = document.querySelector('div#control-panel button#move-button');

  function createLiElem(move) {
    const li = document.createElement('li');
    li.dataset.movement = "movement";
    li.textContent = move;
    ul.append(li);
  }

  mainBoard.addEventListener('keydown', function(e){
    const key = e.key;
    switch(key) {
      case "ArrowLeft":
        const left = e.key.replace("Arrow",""); //"Left"
        createLiElem(left);
        break;
      case "ArrowRight":
        const right = e.key.replace("Arrow",""); //"Right"
        createLiElem(right);
        break;
      case "ArrowUp":
        const up = e.key.replace("Arrow",""); //"Up"
        createLiElem(up);
        break;
      case "ArrowDown":
        const down = e.key.replace("Arrow",""); //"Down"
        createLiElem(down);
        break;
      default:
        alert("Not a Valid Key");
      }
      
  });
    
  btn.addEventListener('click', function(e){ 
    const moveList = ul.querySelectorAll('li');
    for (i = 0; i < moveList.length; i++){ //moveList = ["Down","Down","Down"] -> ['down','down','down']
      move(moveList[i].textContent.toLowerCase()); //move("down")
    }
  });

  ul.addEventListener('click', function(e) {
    if (e.target.matches('[data-movement="movement"]')) {
      e.target.remove();
    }
  });
});
