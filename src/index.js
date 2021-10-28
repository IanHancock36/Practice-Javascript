// fetch api

fetch("https://jsonplaceholder.typicode.com/todos/")
  .then((response) => {
    console.log(response, "resolved");
  })
  .catch((error) => {
    console.log("rejected", error);
  });
