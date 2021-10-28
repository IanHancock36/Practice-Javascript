// fetch api

// fetch("https://jsonplaceholder.typicode.com/todos/")
//   .then((response) => {
//     console.log(response, "resolved");
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log("rejected", error);
//   });

//async and await

// async function always returns a promise...
// await chains the promises.

const getTodos = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/");
  const data = await response.json();
  return data;
};
getTodos(); // this is a promise.
