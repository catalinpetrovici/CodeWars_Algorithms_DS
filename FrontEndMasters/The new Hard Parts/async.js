async function createFlow() {
  console.log('~~~Me first~~~');
  const data = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  console.log(await data.json());
  console.log('~~~Me third~~~');
}

createFlow();
console.log('~~~Me second~~~');

// emulate async await

function doWhenDataReceived(value) {
  returnNextElement.next(value);
}
function* createFlow() {
  const data = yield fetch('https://jsonplaceholder.typicode.com/posts/1');
  console.log(data);
}
const returnNextElement = createFlow();
const futureData = returnNextElement.next();
futureData.value.then(doWhenDataReceived);
