app.controller('loginController', ['$location', function($location) {
    var vm = this;
    vm.isLoggedIn = false;
    vm.loginError = false;

    vm.selectUserType = function(userType) {
        vm.selectedUserType = userType;
        vm.username = '';
        vm.password = '';
        vm.loginError = false;
    };

    vm.login = function() {
        if (vm.username === 'loukya' && vm.password === 'peerla') {
            vm.isLoggedIn = true;
            vm.userType = vm.selectedUserType;
            vm.loginError = false;
        } else {
            vm.loginError = true;
        }
    };

    vm.logout = function() {
        vm.isLoggedIn = false;
        vm.selectedUserType = null;
        vm.userType = null;
    };

    vm.navigate = function(page) {
        $location.path('/' + page);
    };
}]);
