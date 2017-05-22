import { todo } from './todo';

// this is the app that runs


export class App {
    // create an object that will hold all the info
    constructor() {
        this.heading = "Todos";
        this.todos = [];
        this.todoDescription = ''";

    }


    addTodo() {
        // add a todo to the todo object array
        if (this.todoDescription) {
            // in this objects name array push a new object with the name
            this.todos.push(new todo(this.todoDescription));
            this.todoDescription = '';
        }

        removeTodo(todo){
            // init var index then find the index and splice the item at that index
            let index = this.todos.indexOf(todo);
            if (index !== -1) {
                this.todos.splice(index, 1);

            }
        }


    }

}