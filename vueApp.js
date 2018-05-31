const vm = new Vue({
  el: "#app",
  //Mock data for the value of BTC in USD
  data: {
    results: {
      BTC: { USD: 3759.91, EUR: 3166.21 },
      ETH: { USD: 281.7, EUR: 236.25 },
      KEVINCOIN: { USD: 8003.23, EUR: 7705.45 },
      SHITCOIN: { USD: 34.99, EUR: 28.74 }
    }
  }
});
