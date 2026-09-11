function one() {
    const intervalId = setInterval(() => {
        let num = Math.floor(Math.random() * 10);
        console.log(num);
    }, 2000);

    setTimeout(() => {
        clearInterval(intervalId);
        console.log("Stopped the execution");
    }, 5000);
}

one();


// question 2

function fetchWithTimeout(url) {
  const controller = new AbortController();
  const signal = controller.signal;

  // Abort after 10ms
  setTimeout(() => {
    controller.abort();
  }, 10);

  fetch(url, { signal })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => {
      if (error.name === "AbortError") {
        console.log("Fetch aborted: request took too long");
      } else {
        console.error("Fetch error:", error);
      }
    });
}
