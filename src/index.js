// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    var H = 50,
        Q = 25,
        D = 10,
        N = 5,
        P = 1;
    var Hnum = 0,
        Qnum = 0,
        Dnum = 0,
        Nnum = 0,
        Pnum = 0;
    var res = {};

    if (currency < 10000 && currency > 0) {
        Hnum = parseInt(currency / H);
        currency = currency - Hnum * H;
        Qnum = parseInt(currency / Q);
        currency = currency - Qnum * Q
        Dnum = parseInt(currency / D);
        currency = currency - Dnum * D
        Nnum = parseInt(currency / N);
        currency = currency - Nnum * N
        Pnum = parseInt(currency / P);
        console.log(Hnum, Qnum, Dnum, Nnum, Pnum);
        // Your code goes here!
        // Return an object containing the minimum number of coins needed to make change

        if (Hnum != 0)
            res.H = Hnum;
        if (Qnum != 0)
            res.Q = Qnum;
        if (Dnum != 0)
            res.D = Dnum;
        if (Nnum != 0)
            res.N = Nnum;
        if (Pnum != 0)
            res.P = Pnum;
    } else
    if (currency > 10000)
        res.error = "You are rich, my friend! We don't have so much coins for exchange"

    console.log(res)
    return res;

}