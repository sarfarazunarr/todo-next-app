"use client";
import React, { useState } from 'react'
import Form from 'next/form'

const NewTodo = ({alert, alertValue}: {alertValue:number, alert: (data: number) => void}) => {
    const [show, setShow] = useState(false);
    const action = (formData: FormData) => {
        const uniqueId = new Date().getTime() + Math.random();

        const data = {
            title: formData.get('title') as string,
            description: formData.get('description') as string,
            status: "Pending",
            id: uniqueId

        };
        if (localStorage.getItem('todos')) {
          const oldData: TodoType[] = JSON.parse(localStorage.getItem('todos') || "");
          const updateData = [...oldData, data];
          const stringifyIt = JSON.stringify(updateData);
          localStorage.setItem("todos", stringifyIt)
        } else {
          const dataArray = [data];
          const info = JSON.stringify(dataArray);
          localStorage.setItem('todos', info);
        }
        alert(alertValue + 1);
        setShow(false);
      };
    return (
        <>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-md" onClick={() => setShow(true)}>Add New</button>
            <div className={`fixed inset-0 w-full h-full z-10 bg-gray-900 bg-opacity-75 ${show ? 'flex' : 'hidden'} items-center justify-center`}>
                <div className="bg-gray-900 border border-gray-700 md:border-transparent  rounded-lg p-4 w-full m-2 md:m-0 md:w-1/3 z-10" >
                    <h2 className="text-3xl text-white font-bold pt-5 text-center">New Todo</h2>
                    <Form action={action} className="mt-4">
                        <label htmlFor="title" className="block text-white">
                            Title
                        </label>
                        <input type="text" name='title' id="title" className="block w-full px-4 py-2 mt-2 text-gray-100 bg-transparent border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent" required  />
                       
                    
                        <label htmlFor="description" className="block mt-4 text-white">
                            Description
                        </label>
                        <textarea id="description" name='description' className="block w-full px-4 py-2 mt-2 text-gray-100 bg-transparent border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent" required />
                        <div className='flex justify-center items-center gap-4'>
                            <button type='submit' className="mt-4 bg-indigo-700 hover:bg-indigo-900 text-white font-bold py-2 px-6 rounded">
                                Add
                            </button>
                            <button type='button' onClick={() => setShow(false)} className="mt-4 bg-red-700 hover:bg-red-900 text-white font-bold py-2 px-6 rounded">
                                Close
                            </button>
                        </div>
                    </Form>
                </div>
            </div>
        </>
    )
}

export default NewTodo
