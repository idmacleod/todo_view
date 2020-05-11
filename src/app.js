import Vue from "vue";

document.addEventListener("DOMContentLoaded", () => {
    new Vue({
        el: "#app",
        data: {
            todos: [
                "Finish Homework",
                "Make Dinner",
                "Eat Dinner"
            ],
            newTodo: ""
        },
        methods: {
            addTask: function() {
                this.todos.push(this.newTodo);
                this.newTodo = "";
            }
        }
    });
});

