import Vue from "vue";

document.addEventListener("DOMContentLoaded", () => {
    new Vue({
        el: "#app",
        data: {
            todos: [
                {name: "Finish Homework", priority: "High"},
                {name: "Make Dinner", priority: "Medium"},
                {name: "Eat Dinner", priority: "High"},
                {name: "Wash Dishes", priority: "Low"}
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

