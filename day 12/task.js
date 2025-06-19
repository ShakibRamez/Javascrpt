    let count = 0;
    let timerId = null;

    function startTimer() {
      if (timerId) return;

      timerId = setInterval(() => {
        count++;
        document.getElementById("timer").textContent = count;
      }, 1000);
    }

    function stopTimer() {
      clearInterval(timerId);
      timerId = null;
    }