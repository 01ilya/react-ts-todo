import { ITodo } from "../Types/data";
import { TodoItem } from "./TodoItem";


interface ITodoListProps {
    items: ITodo[];
    toggleTodo: (id: number) => void;
    removeTodo: (id: number) => void;
}

const TodoList: React.FC<ITodoListProps> = (props) => {

    const {items, removeTodo, toggleTodo} = props

    return <div>
        {
           items.map(todo =>
           <TodoItem 
             key={todo.id} 
             toggleTodo={toggleTodo}
             removeTodo={removeTodo}
             {...todo} 
           />
           )
        }
    </div>
}
export { TodoList }