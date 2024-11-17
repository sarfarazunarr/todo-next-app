import React from 'react'

const Todo = ({data, setSignal, signal}: {data: TodoType, setSignal: (data: number) => void, signal: number}) => {
    const {title, description, status} = data;
    const todoComplete = () => {
        const updatedData = {
            ...data,
            status: "Completed"
        };
        if (localStorage.getItem('todos')) {
            const oldData: TodoType[] = JSON.parse(localStorage.getItem('todos') || "");
            const updateData = oldData.map(item => item.title === data.title ? updatedData : item);
            const stringifyIt = JSON.stringify(updateData);
            localStorage.setItem("todos", stringifyIt)
            setSignal(signal + 1);
        }
    }

    const deleteTodo = () => {
        const confirm = window.confirm("Are you sure you want to delete this todo?");
        if (confirm && localStorage.getItem('todos')) {
            const oldData: TodoType[] = JSON.parse(localStorage.getItem('todos') || "");
            const updateData = oldData.filter(item => item.title !== data.title);
            const stringifyIt = JSON.stringify(updateData);
            localStorage.setItem("todos", stringifyIt);
            setSignal(signal + 1);
        }
    }
    return (
        <div className="w-full p-5 bg-indigo-600 relative rounded-md flex flex-col gap-5">
            <span className="absolute top-0 right-0 px-3 bg-white rounded-tr-md rounded-bl-lg text-black">{status}</span>
            <h3 className='text-white pt-3 font-semibold text-2xl text-center'>{title}</h3>
            <p className="text-sm text-white basis-12 text-center">{description}</p>
            <div className="flex justify-center gap-2 items-center">
                <button className='px-3 text-sm py-2 bg-white border border-transparent text-indigo-600 hover:bg-transparent hover:text-white hover:border-white capitalize disabled:bg-gray-600 disabled:text-gray-400 disabled:border-transparent' onClick={() => todoComplete()} disabled={status === "Completed"}>Mark as completed</button>
                <button className='px-3 py-2 text-sm border border-transparent bg-white text-red-600 hover:bg-transparent hover:text-white hover:border-white' onClick={() => deleteTodo()}>Delete</button>
            </div>
        </div>
    )
}

export default Todo
