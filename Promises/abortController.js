const controller = new AbortController();

// Abort after 10ms
setTimeout(() => {
    controller.abort();
}, 2100);

fetch("https://jsonplaceholder.typicode.com/posts", { signal: controller.signal })
  .then(res => res.json()) 
  .then(data => console.log(data))
  .catch(err => {
      if (err.name === 'AbortError') { 
          console.log("Request Aborted");
      } else {
          console.error("Fetch error:", err);
      }
  });
