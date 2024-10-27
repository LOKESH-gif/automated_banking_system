app.controller('cardController', function() {
    var vm = this;
    vm.title = "Card Management";
    vm.cards = [
        { cardNumber: "1111-2222-3333-4444", cardType: "Debit", status: "Active" },
        { cardNumber: "5555-6666-7777-8888", cardType: "Credit", status: "Blocked" }
    ];
});
