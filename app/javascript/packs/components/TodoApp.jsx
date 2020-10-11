import React from 'react'
import ReactDOM from 'react-dom'
import axios from "axios";
import TodoItems from "./TodoItems";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";

class TodoApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todoItems: [],
            hideCompletedTodoItems: false
        };
        this.getTodoItems = this.getTodoItems.bind(this);
        this.createTodoItem = this.createTodoItem.bind(this);
        this.toggleCompletedTodoItems = this.toggleCompletedTodoItems.bind(this);
    }
    componentDidMount() {
        this.getTodoItems();
    }
    getTodoItems() {
        axios
            .get("/api/v1/todo_items")
            .then(response => {
                const todoItems = response.data;
                this.setState({ todoItems });
            })
            .catch(error => {
                console.log(error);
            });
    }
    createTodoItem(todoItem) {
        const todoItems = [todoItem, ...this.state.todoItems];
        this.setState({ todoItems });
    }
    toggleCompletedTodoItems() {
        this.setState({
            hideCompletedTodoItems: !this.state.hideCompletedTodoItems
        });
    }
    render() {
        return (
            <>
                <TodoForm createTodoItem={this.createTodoItem} />
                <TodoItems
                    toggleCompletedTodoItems={this.toggleCompletedTodoItems}
                    hideCompletedTodoItems={this.state.hideCompletedTodoItems}
                >
                    {this.state.todoItems.map(todoItem => (
                        <TodoItem
                            key={todoItem.id}
                            todoItem={todoItem}
                            getTodoItems={this.getTodoItems}
                            hideCompletedTodoItems={this.state.hideCompletedTodoItems}
                        />
                    ))}
                </TodoItems>
            </>
        );
    }
}

document.addEventListener('turbolinks:load', () => {
    const app = document.getElementById('todo-app')
    app && ReactDOM.render(<TodoApp />, app)
})
