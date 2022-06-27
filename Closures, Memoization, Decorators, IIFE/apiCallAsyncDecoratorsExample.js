// Decorating an async API call function
// Time data requests during development

let requestData = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

const dataResponseTime = (fn) => {
  return async (url) => {
    console.time('API call function');
    const data = await fn(url);
    console.timeEnd('API call function');
    return data;
  };
};

const myTestFunction = async () => {
  requestData = dataResponseTime(requestData);
  const data = await requestData(`https://jsonplaceholder.typicode.com/posts`);
  console.log(data);
};

console.log(myTestFunction());
