// A component that fetches data
const fetchApiData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Data loaded!');
    }, 2000); // Simulating a 2-second delay for data fetching
  });
};

// A component that uses Suspense to handle asynchronous data fetching
export default async function  () {
  const apidata = await fetchApiData(); // This can be any async function, like an API call
  console.log('apidata',apidata); 
  return <div>{apidata}</div>;
};
