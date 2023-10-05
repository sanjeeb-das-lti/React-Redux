import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'
import { Player } from '@lottiefiles/react-lottie-player';
import DatePicker from './DatePicker';
import dayjs from 'dayjs'

const AddTask = () => {
    let currentDate = dayjs().format('MMM DD, YYYY')
    const [input, setInput] = useState('')
    const [date, setDate] = useState(currentDate)
    const dispatch = useDispatch();
    const addTodoHandler = (e) => {
        e.preventDefault()
        dispatch(addTodo({ text: input, date: date }))
        setInput('')
        // setDate(currentDate)
    }
    const handleDate = (value) => {
        setDate(value)
    }
    return (
        <>
            <form className='space-x-3 mt-12 flex  justify-center items-center' onSubmit={addTodoHandler}>
                <Player
                    className='mx-auto'
                    background='transparent'
                    autoplay
                    loop
                    speed={0.7}
                    //src="https://lottie.host/80704d44-1de4-4b85-8338-34060234b2c5/XtEUJKcGlf.json"
                    src="https://lottie.host/01e1fb24-a259-430d-90e2-fad261029c7b/mcW2nPnTkI.json"
                    style={{ height: '350px', width: '350px' }}
                >
                </Player>
                <input
                    className='bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base text-gray-100 py-1 px-2 leading-8 outline-none w-1/3
                transition-colors duration-200 ease-in-out'
                    type="text"
                    name="input"
                    id="input"
                    value={input}
                    onChange={(e) => (setInput(e.target.value))}
                    placeholder='Add your task' />
                <DatePicker handleDate={handleDate} />
                <button
                    type='submit'
                    className='text-white bg-indigo-500 hover:bg-indigo-600 border-0 px-6 py-2 rounded text-xl focus:outline-none'>
                    Add Todo
                </button>
            </form>
        </>
    )
}

export default AddTask