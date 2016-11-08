namespace App {

    export class FaqController {
        static $inject = [];


        public title;


        constructor () {
            this.title = 'FAQ Page';
        }

        public testMethod (){
            this.title = "Frequently Asked Questions";
        }
    }


}
