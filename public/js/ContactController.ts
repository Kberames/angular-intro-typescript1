namespace App {

    export class ContactController {
        static $inject = ['$scope'];

        constructor (private $scope) {
            $scope.title = 'Contact Page';
        }
    }
}
