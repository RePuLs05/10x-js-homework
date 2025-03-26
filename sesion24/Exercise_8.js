function processTransaction(balance, amount, transactionType) {
    if (transactionType === "withdraw") {
        if (amount <= balance) {
            return balance - amount;
        } else {
            return "You don't have enough balance";
        }
    } else if (transactionType === "deposit") {
        return balance + amount;
    } else {
        return "Invalid transaction type";
    }
}
console.log(processTransaction(100, 50, "withdraw"));
console.log(processTransaction(100, 150, "withdraw"));
console.log(processTransaction(100, 50, "deposit"));