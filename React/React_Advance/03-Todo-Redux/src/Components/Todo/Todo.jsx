import TodoAdd from "./TodoAdd";
import TodoList from "./TodoList";

const Todo = () => {
   

    return (
        <div className="todo-container">
            <TodoAdd />
            <TodoList />
        </div>
    );
};

export default Todo;
