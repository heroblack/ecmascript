//junio del 2018
//spread
const node = {
  name: "fabio",
  age: 38,
  country: "co",
};

let { country, ...pro } = node;
console.log(pro);

const js = {
  nivel: 45,
};

const supernode = {
  ...node,
  ...js,
};

console.log(supernode);

//finally

const helloWorldPromise = () => {
  return new Promise((resolve, reject) => {
    true
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
  } finally {
    console.log("termino proceso");
  }
};

helloAsync();

//expreseiones regulares
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexData.exec("2018-04-20");
console.log(match);
const year = match[1];
const month = match[2];
const day = match[3];

console.log(year, month, day);
