// function checkPasswordLength(password) {
//   return new Promise((resolve, reject) => {
//     if (password.length >= 8) {
//       resolve(" Password length is sufficient.");
//     } else {
//       reject(" Password too short. Minimum 8 characters required.");
//     }
//   });
// }

// checkPasswordLength("myPass123")
//   .then(message => console.log(message))
//   .catch(error => console.error(error));


const fetchData = () => {
  return new Promise((resolve, reject) => {
    const success = Math.random() > 0.5; 
    setTimeout(() => {
      if (success) {
        resolve("Data fetched successfully!");
      } else {
        reject("Failed to fetch data.");
      }
    }, 1000);
  });
};

fetchData()
  .then(response => {
    console.log(" Success:", response);
  })
  .catch(error => {
    console.error(" Error:", error);
  })
  .finally(() => {
    console.log(" Operation completed.");
  });


  async function handleData(url) {
    const data=await mypromise(url);
    console.log(data);
  }
  handleData();
  