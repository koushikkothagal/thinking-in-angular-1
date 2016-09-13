var app = angular.module("todoApp", []);
app.controller("TodoCtrl", TodoCtrl);

function TodoCtrl() {
    this.editMode = false;
    this.todos = [
        "Learn Angular 1",
        "Try out exercises",
        "Visit Java Brains site"
    ];


    this.addNewTodo = function() {
        this.todos.push(this.newTodo);
        this.newTodo = "";
    }


    this.triggerEditMode = function() {
        this.editMode = !this.editMode;
    }


    this.deleteTodo = function(index) {
        this.todos.splice(index, 1);

    }
}