document.addEventListener("DOMContentLoaded", function() {
  // initializes the board
  init();

  const mainBoard = document.body;
  const ul = document.querySelector('ul#moves-container');
  const btn = document.querySelector('div#control-panel button#move-button');
  // const ulArr = [];

  function createLiElem(move) {
    const li = document.createElement('li');
    li.dataset.movement = "movement";
    li.textContent = move;
    ul.append(li);
    // ulArr.push(li);
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
    // if (ul.querySelectorAll('li').length > 0) {
    //   setInterval(function() {
    //     for (i = 0; i < ulArr.length; i++){ //moveList = ["Down","Down","Down"] -> ['down','down','down']
    //       move(ulArr[i].textContent.toLowerCase()); //move("down")
    //       ul.querySelector('li[data-movement="movement"]').remove();
    //       let dummyVariable = ulArr.splice(0, 1);
    //     }
    //   },500); 
    // }
    // clearInterval();
    // moveList.forEach((li,index) => function(li){
      //   setTimeout(() => {
        //     move(li.textContent.toLowerCase());
        //     li.remove();
        //   }, 500 * (index + 1)); 
        // });
    
    const moveList = ul.querySelectorAll('li');
    
    // for (i = 0; i < moveList.length; i++) {
    //   move(moveList[i].textContent.toLowerCase());
    // }
    moveList.forEach((li, index) => {
      setTimeout(() => {
        move(li.textContent.toLowerCase());
        li.remove();
      }, 500*(index + 1))
    });
  });

  ul.addEventListener('click', function(e) {
    if (e.target.matches('[data-movement="movement"]')) {
      e.target.remove();
    }
  });
 
});
