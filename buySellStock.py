"""
I: array of positive integers
O: integer
C: none
E: not a valid time to buy and sell, empty set

*find max difference
*find lowest price
*return max difference
"""
def max_profit(prices):
    buy_price = prices[0]
    profit = 0
    for i in prices:
      if i < buy_price:
        buy_price = i
      elif i-buy_price > profit:
        profit = i - buy_price
    return profit

print(max_profit([4,6,8,2,4,10]))
print(max_profit([1,1,1,2,0]))
print(max_profit([10,9,8,7,6,5,4]))