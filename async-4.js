// 34-4 Promies and async / await

const myLoader = () => {
  return new Promise((resolve, reject) => {
    const success = Math.random();

    if (success <= 0.5) {
      resolve(success);
    } else {
      reject(success);
    }
  });
};

myLoader()
  .then((data) => console.log("resolved data: ", data))
  .catch((err) => console.log("rejected data: ", err));



// fetch 3 vabe kora jay

fetch("url")
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

// reguer function
async function loadData() {
  const res = await fetch("url");
  const data = await res.json();
  console.log(data);
}
loadData();

// arrow function

const myLoadData = async () => {
  const res = await fetch("url");
  const data = await res.json();
  console.log(data);
};
myLoadData()