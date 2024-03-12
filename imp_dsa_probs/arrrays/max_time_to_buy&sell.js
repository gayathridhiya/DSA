//greedy

//https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/



// var maxProfit = function(prices) {
//     let max = 0;
//     for(let i=0;i<prices.length;i++){
//         let buyingPrice = prices[i];
//         for(let j=i;j<prices.length;j++){
//             let sellingPrice = prices[j];
//             if(sellingPrice - buyingPrice > max){
//                 max = sellingPrice - buyingPrice;
//             }
//         }
//     }
//     return max
// };


var maxProfit = function(prices) {
    let profit = 0;
    let buy = prices[0];
    for(i=1;i<prices.length;i++){
        if(prices[i]<buy){
            buy = prices[i]
        }
        let tempProfit = prices[i]- buy;
        if(tempProfit > profit){
            profit = tempProfit;
        }
    }
    return profit;
};

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
// Example 2:

// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.
 