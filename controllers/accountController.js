app.controller('accountController', function() {
    var vm = this;
    vm.title = "Account Management";
    vm.accountDetails = [
        { accountNumber: "12345", balance: 5000 },
        { accountNumber: "67890", balance: 3000 }
    ];
});
