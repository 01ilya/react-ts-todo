import { useEffect, useState, useRef} from 'react';
import { ITodo } from '../Types/data';
import { TodoList } from './TodoList';




const App: React.FC = () => {
    const [value, setValue] = useState('');
    const [todos, setTodos] = useState<ITodo[]>([]);

    const inputRef = useRef<HTMLInputElement>(null);
    
    const handleChenge:React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setValue(e.target.value)
    }

    const handleKeyDown:React.KeyboardEventHandler<HTMLInputElement> = (e) => {
        if (e.key === 'Enter') addTod();
    }

    const addTod = () => {
        if(value) {
        setTodos ([...todos, {
            id: Date.now(),
            title: value,
            complete: false,
        }])
    }
    setValue('')
}

    const removeTodo = (id: number): void => {
        setTodos(todos.filter(todo => todo.id !== id))
    }
    

    
    const toggleTodo = (id: number): void => {
        setTodos(todos.map(todo => {
            if (todo.id !== id) return todo;

            return {
                ...todo,
                complete: !todo.complete
            }
        }))
    } 
    
    
    useEffect(() => {
       inputRef.current?.focus();
    },[]);

    return<div className='flex flex-col'> 
        <img className='fixed w-full h-full' src={require("../Image/fon.jpg")}></img>
        <div className='flex justify-center pt-10'>
            <div className='#'>
                <input value={value} placeholder="DO IT!"  onChange={handleChenge} onKeyDown={handleKeyDown} ref={inputRef} className='h-10 w-60 outline-none backdrop-opacity-60 bg-slate-700 rounded-3xl focus:border-blue px-4'/>
            </div>
            <div className='pl-1 relative'>
                <button onClick={addTod} className='bg-grey h-10 bg-red-700 rounded-3xl w-20'>Add</button>
            </div>
        </div>
        <TodoList items={todos} removeTodo={removeTodo}  toggleTodo={toggleTodo}/>
    </div>
}

export {App}