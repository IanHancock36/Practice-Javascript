// fetch api

fetch("https://jsonplaceholder.typicode.com/todos/")
  .then((response) => {
    console.log(response, "resolved");
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log("rejected", error);
  });
