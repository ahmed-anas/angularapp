angular.module('Processes', ['smart-table']);
angular.module('MobileAngularUiExamples').requires.push('Processes');

// var app = angular.module('MobileAngularUiExamples');

//tasks controller
angular.module('Processes').controller('ProcessesController',['$scope', '$rootScope','Processes',
    function($scope, $rootScope, Processes){
         $rootScope.loading = true;
       
        $scope.Processes = Processes.initializeData;
        Processes.data().then(function(data){
            $rootScope.loading = false;
            $scope.processes = data.data;
        });        
        
    }
])

//services
.factory('Processes', ['$http', function($http){
    return {
        initializeData: {},
        data: function(){
            return $http.get('/api/bonita/API/bpm/process?c=5&p=0&d=deployedBy&f=user_id%3D101');
            // $http.get('http://dev.learninghealth.io:8080/bonita/API/bpm/process?c=5&p=0&d=deployedBy&f=user_id%3D101').
        }
    }
}])
.config(['$routeProvider',
    function($routeProvider){
        $routeProvider.when('/processes/accordion',              {templateUrl: 'content/processes/accordion.html', reloadOnSearch: false});
        $routeProvider.when('/processes/table',              {templateUrl: 'content/processes/table.html', reloadOnSearch: false});
        $routeProvider.when('/processes/scroll',              {templateUrl: 'content/processes/scroll.html', reloadOnSearch: false});
    }]
)

;