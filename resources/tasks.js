angular.module('Tasks', ['smart-table']);
angular.module('MobileAngularUiExamples').requires.push('Tasks');

// var app = angular.module('MobileAngularUiExamples');

//tasks controller
angular.module('Tasks').controller('TasksController',['$scope', '$rootScope','HumanTasks',
    function($scope, $rootScope, HumanTasks){
        $rootScope.loading = true;
       
        $scope.humanTasks = HumanTasks.initializeData;
        HumanTasks.data().then(function(data){
            $rootScope.loading = false;
            $scope.humanTasks = data.data;
        });        
        
        $scope.boo = function(){
            return 'asdf';
        }
        
        $scope.setData = function(key, data)
        {
            $rootScope.Ui.setData(key,data);
            var fo = $rootScope.Ui.getData(key);
        }
        
        window.foo = function(){
            var x = $scope;
            return 'asdf';
        }
        
          window.booga = function(scope)
          {
            //debugger;
            window.lastScope = scope;
            lastScope = scope;
          }
        $scope.booga = window.booga;
    }]
)

//routes
.config(['$routeProvider',
    function($routeProvider){
        $routeProvider.when('/tasks/accordion',              {templateUrl: 'content/tasks/accordion.html', reloadOnSearch: false});
        $routeProvider.when('/tasks/table',              {templateUrl: 'content/tasks/table.html', reloadOnSearch: false});
        $routeProvider.when('/tasks/scroll',              {templateUrl: 'content/tasks/scroll.html', reloadOnSearch: false});
    }]
)

//services
.factory('HumanTasks', ['$http', function($http){
    return {
        initializeData: {},
        data: function(){
            return $http.get('/api/bonita/API/bpm/humanTask?p=0&c=5&d=rootContainerId&f=user_id%3D101&f=state%3Dready');
            // $http.get('http://dev.learninghealth.io:8080/bonita/API/bpm/humanTask?p=0&c=5&d=rootContainerId&f=user_id%3D101&f=state%3Dready').
        }
    }
    
}])

.filter('simpleDate',
    function(){
        return function(dateString){
            var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
            
            var dateObj = new Date(dateString);
            
            return months[dateObj.getMonth()] + ' ' + dateObj.getDate() + ', ' + dateObj.getFullYear(); 
        }
    }
)

.filter('emptyDescription',
    function(){
        return function(str){
            var emptyText = 'No description';
            if(!str || str.length < 1)
                return emptyText;
            else 
                return str;
        }
    }
)
.filter('toReadableFormat', function(){
    return function(str){
        return str.replace(/([A-Z])/g, ' $1').trim().replace(/[\-\_]/g, ' ').replace('/\ \ /g', ' ').trim();
    }
})
;