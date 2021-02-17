import React, {useState} from 'react';
import TodoForm from "./TodoForm";
import Todo from "./Todo";

function TodoList() {
    const [todos, setTodos] = useState([]);

    // Add todo-list function
    const addTodo = todo => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return;
        }
        const newTodos = [todo, ...todos];
        setTodos(newTodos);
    };

    // Edit function 
    const updatedTodo = (todoId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return;
        }
        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
    };

    // Remove function
    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id);

        setTodos(removeArr);
    }

    // Complete function
    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        });
        setTodos(updatedTodo);
    };

    return (
        <div>
            <h1>Today's Plan</h1>
            <TodoForm onSubmit={addTodo} />
            <Todo 
                todos={todos} 
                completeTodo={completeTodo}
                removeTodo={removeTodo}
                updatedTodo={updatedTodo}
            />
        </div>
    );
}

export default TodoList;
