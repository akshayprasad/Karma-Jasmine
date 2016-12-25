(function() {
    'use strict';

    app.controller('Controller', Controller);

    Controller.$inject = ['$scope'];

    /* @ngInject */
    function Controller($scope) {
        var vm = this;
        $scope.title = 'Hello World';
    }
})();
