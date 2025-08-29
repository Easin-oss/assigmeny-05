function increaseHeart() {
    const heartSpan = document.getElementById("heart-count");
    const currentCount = parseInt(heartSpan.innerText);
    heartSpan.innerText = currentCount + 1;
  }
