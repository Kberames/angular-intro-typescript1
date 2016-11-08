namespace App {

    export class HomeController {
        //static $inject = ['$scope'];
        static $inject = [];

        public title;

        constructor (/*private $scope*/) {
            this.title = 'Home Page';
        }

        public testMethod (){
            this.title = "Snoopy";
        }
    }

}
