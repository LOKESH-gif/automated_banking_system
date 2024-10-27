app.controller('transactionController', function() {
    var vm = this;
    vm.title = "Transaction Management";
    vm.transactions = [
        { transactionId: "T1001", amount: 200, type: "Credit" },
        { transactionId: "T1002", amount: 150, type: "Debit" }
    ];
});
