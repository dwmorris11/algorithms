var maxProfit = function(prices) {
  let buyPrice = prices[0];
  let profit = 0;
  for(let i = 1; i < prices.length; i++){
      if(prices[i] < buyPrice){
          buyPrice = prices[i];
      }else if(prices[i]-buyPrice > profit){
          profit = prices[i] - buyPrice;
      }
  }
  return profit;
};

/*
I: array of positive integers
O: integer
C: none
E: not a valid time to buy and sell, empty set

*find max difference
*find lowest price
*return max difference
*/