app.controller('atmController', function() {
    var vm = this;
    vm.title = "ATM Management";
    vm.atmLocations = [
        { atmId: "ATM001", location: "Main Street", status: "Operational" },
        { atmId: "ATM002", location: "Park Avenue", status: "Maintenance" }
    ];
});
