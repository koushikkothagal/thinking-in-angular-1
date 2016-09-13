var app = angular.module("modulesApp", ["myHelloModule", "ngTagsInput"]);


app.controller("TagsDemoCtrl", TagsDemoCtrl);

function TagsDemoCtrl() {
    this.tags = [
    { text: 'Test1' },
    { text: 'Test2' },
    { text: 'Test3' }
  ];
}