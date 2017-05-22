// That's it. It's a plain class that models the todo's description text along with a boolean done to indicate if you've completed your todo.
export class Todo {
    constructor(description) {
        this.description = description;
        this.done = false;

    }
}