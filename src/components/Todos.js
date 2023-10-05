import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'
import { openTodo } from '../features/todo/todoSlice'
import { ReactComponent as Trash } from '../icons/trash.svg'
import { ReactComponent as Refresh } from '../icons/refresh.svg'

const Todos = () => {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch();

    return (
        <div className='mt-4 flex flex-col justify-center items-center'>
            <div className='mt-2 w-1/2'>
                <ul className='max-h-60 overflow-auto'>
                    {todos.map((todo) => (
                        <li
                            key={todo.id}
                            className=' text-black text-base leading-8 mb-2 py-1 px-6 bg-zinc-400/60 hover:bg-zinc-500/60 rounded-lg 
                            flex justify-between'>
                            <div className='flex flex-1 gap-2 my-1'>
                                <div className='rounded-full text-white bg-red-600 font-bold w-15 px-4'>
                                    {todo.date}
                                </div>
                                <div className={`${todo.completed ? 'line-through' : ''}`}>
                                    {todo.text}
                                </div>
                            </div>
                            <div className='space-x-4 flex justify-center items-center'>
                                <button type='button' onClick={() => dispatch(openTodo(todo.id))}>
                                    <Refresh className='hover:fill-green-700' />
                                </button>
                                <button type='button' onClick={() => dispatch(removeTodo(todo.id))}>
                                    {/* <img src={trash} alt="delete" width={25} height={25} /> */}
                                    <Trash className='hover:fill-red-600' />
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>

            </div>
        </div>
    )
}

export default Todos