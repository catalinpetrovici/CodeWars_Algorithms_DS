// a globally available function on the window object
// every time there's a render, it makes a call to requestAnimationFrame

// Create a function to move an element. The function arguments are, distance,
// duration, an the element to move,

function moveElement(duration, distance, element) {
  const start = performance.now();

  function move(currentTime) {
    const elapsed = currentTime - start;
    const progress = elapsed / duration;
    const amountsToMove = progress * distance;

    element.style.transform = `translateX(${amountsToMove}px)`;

    if (amountsToMove < distance) {
      requestAnimationFrame(move);
    }
  }

  requestAnimationFrame(move);
}
