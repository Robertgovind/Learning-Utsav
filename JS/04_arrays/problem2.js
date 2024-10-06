let prices = [250,645,300,900,500];

for(let i=0;i<prices.length;i++){
    prices[i] = prices[i] - prices[i] * 0.1;
}
console.log("After the discount the prices are :");
console.log(prices);