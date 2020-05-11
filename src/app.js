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
            newTodoName: "",
            newTodoPriority: "Low"
        },
        methods: {
            addTask: function() {
                this.todos.push({
                    name: this.newTodoName,
                    priority: this.newTodoPriority
                });
                this.newTodoName = "";
                this.newTodoPriority = "Low";
            }
        }
    });
});

