var hehe = angular.module('myApp', [])
hehe.controller('namesCtrl', function($scope) {
    $scope.names = [
        {code: 'SN54', name:'Sony 54', price: 1700, img:'img.png'},
        {code: 'SS49', name:'SamSung 49', price: 9000, img:'img.png'},
		{code: 'SS59', name:'SamSung Note 10', price: 19000, img:'img.png'},
		{code: 'SS69', name:'My Class Note 10', price: 20000, img:'img.png'},
		{code: '1907', name:'Clop ADI', price: 200, img:'img.png'},
		{code: '2009.M1', name:'Clop 2009M1', price: 200, img:'img.png'}
    ];
});