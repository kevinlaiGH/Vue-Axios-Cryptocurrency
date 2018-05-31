## Tutorial from Digital Ocean

Learning Vue and Axios from https://www.digitalocean.com/community/tutorials/how-to-use-vue-js-and-axios-to-display-data-from-an-api#prerequisites

## How to make request?

To make request: Use the mounted() function from Vue & the GET function of the Axios library to fetch the data & store it in the results array in the data model.

1.Add this <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
after <script src="https://unpkg.com/vue"></script>

2.

```
const url = "https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH&tsyms=USD,EUR";

const vm = new Vue({
        el: '#app',
        data: {
          results: []
        },
        mounted() {
          axios.get(url).then(response => {
            this.results = response.data
          })
        }
      });
```

The axios.get function uses a Promise. When the API returns data successfully, the code within the then block is executed, and the data gets saved to our results variable.
