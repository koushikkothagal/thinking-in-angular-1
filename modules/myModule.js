var myHelloModule = angular.module("myHelloModule", []);


myHelloModule.controller("HelloCtrl", HelloCtrl);

function HelloCtrl() {
    this.helloMessage = "I'm from the myHelloModule module";

}