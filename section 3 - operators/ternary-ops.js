//if customer has more than 100 points, they are "gold", else, they are "silver"

let points = 110;
let type = points > 100 ? 'gold' :'silver';

console.log(type);

// AND (&&), OR (||)
let highIncome = true;
let goodCreditScore = false;
let eligibleForLoan = highIncome && goodCreditScore;
console.log('Eligible', eligibleForLoan)

//NOT (!)
let applicationRefused = !eligibleForLoan;
console.log('Application Refused', applicationRefused);

//bitwise OR (|)[adds] AND (&)