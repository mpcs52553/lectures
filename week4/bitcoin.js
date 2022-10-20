document.addEventListener("DOMContentLoaded", function() {
  const link = document.querySelector("#refresh");
  link.addEventListener("click", function (e) {
    e.preventDefault();
    getBitcoinData()
  });
})

// Implementation with Promise objects
// function getBitcoinData() {
//   const bitcoinUrl = 'https://api.coindesk.com/v1/bpi/currentprice/USD.json'
//   let step1 = fetch(bitcoinUrl, { method: 'get' })
//   step1.then(function(response) {
//     let step2 = response.json()
//     step2.then(function(obj) {
//       document.querySelector("h2").innerText = `$ ${obj.bpi.USD.rate}`
//     })
//   })
// }

// Alternative syntax with "arrow functions"
// function getBitcoinData() {
//   const bitcoinUrl = 'https://api.coindesk.com/v1/bpi/currentprice/USD.json'
//   let step1 = fetch(bitcoinUrl, { method: 'get' })
//   step1.then((response) => {
//     let step2 = response.json()
//     step2.then((obj) => {
//       document.querySelector("h2").innerText = `$ ${obj.bpi.USD.rate}`
//     })
//   })
// }

// Alternative syntax with async/await
async function getBitcoinData() {
  const bitcoinUrl = 'https://api.coindesk.com/v1/bpi/currentprice/USD.json'
  const httpResponse = await fetch(bitcoinUrl);

  const obj = await httpResponse.json()
  document.querySelector("h2").innerText = `$ ${obj.bpi.USD.rate}`
}
