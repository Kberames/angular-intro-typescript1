namespace App {

    export class AboutController {
        static $inject = ['$scope'];

        constructor (private $scope) {
            $scope.title = 'About Page';
        }
    }
}
