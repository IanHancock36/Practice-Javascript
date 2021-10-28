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
  const response = await fetch("https://jsonplaceholdefr.typicode.com/todos/");
  const data = await response.json();
  if (response.status !== 200) {
    throw new Error("cannot fetch data");
  }
  return data;
};
getTodos()
  .then((data) => console.log(data, "resloved"))
  .catch((error) => console.log(error, "ERROR"));
//returns a promise
