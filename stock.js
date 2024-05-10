/**
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
 */

var maxProfit = function(prices) {

    let buyPrice = prices[0];
    let profit = 0;

    for(let i = 1; i < prices.length;i++){

        let tempProfit = prices[i] - buyPrice;
        // if the tempProfit is greater than the normal profit update profit
        if(tempProfit > profit){
            profit = tempProfit;
        }

        // if the price is lesser than the buy price update the price
        if (prices[i] < buyPrice){
            buyPrice = prices[i];
        }
    }

    return profit;
    
};
