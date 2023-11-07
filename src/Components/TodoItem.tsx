import { ITodo } from "../Types/data"


interface ITodoItem extends ITodo {
  removeTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
}

const TodoItem: React.FC <ITodoItem> = (props) => {
    const {id, title, complete, removeTodo, toggleTodo} = props;

    return<div className="relative flex mt-6 justify-center content-center gap-3">
      <input  type="checkbox"  checked={complete} onChange={() => toggleTodo(id)} className="cursor-pointer"/>
      <h1 className="text-2xl">{title}</h1>
      <button className="flex justify-center items-center cursor-pointer w-5 h-5 my-2 mx-3  bg-blue-300 rounded-xl" onClick={() => removeTodo(id) }>X</button>
      </div>
}

export {TodoItem}