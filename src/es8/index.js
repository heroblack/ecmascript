//salio 2017
/**
 *  Object.entries
 *  Object.values
 *  padStart
 *  padEnd
 */
const data = {
  frontend: "daniel",
  backend: "fabio",
  design: "david",
};

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);

const values = Object.values(data);
console.log(values);

const dato = "fabio";
console.log(dato.padStart(7, "*"));
console.log(dato.padEnd(7, "*"));

//async await

const helloWorldPromise = () => {
  return new Promise((resolve, reject) => {
    false
      ? setTimeout(() => resolve("Hello World"), 3000)
      : reject(new Error("Test Error"));
  });
};

const helloAsync = async () => {
  try {
    let message = await helloWorldPromise();
    console.log(message);
  } catch (err) {
    console.log(err);
  }
};

helloAsync();
