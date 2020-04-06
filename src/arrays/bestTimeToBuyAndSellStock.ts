// Say you have an array for which the ith element is the price of a given stock on day i.
// For you to be able to sell something you first need to buy
export function maxProfit(numbers: number[]) {
    if (numbers.length <= 1) {
        return 0;
    }

    let investment = -1;
    let moneyInvested = false;

    let profit = 0;

    function sell(i: number) {
        profit += numbers[i] - investment;
        investment = 0;
        moneyInvested = false;
    }

    for (let i = 0; i < numbers.length; i++) {
        if (i < numbers.length - 1) {
            if ((numbers[i] < numbers[i + 1]) && !moneyInvested) {
                // We buy
                investment = numbers[i];
                moneyInvested = true;
            }
            else if (numbers[i] > numbers[i + 1] && moneyInvested) {
                sell(i);
            }
        }
        else if (moneyInvested && numbers[i] >= investment) {
            sell(i);
        }
    }

    return profit;
}