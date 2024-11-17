"use client";
import React, { useEffect, useState } from 'react'
import Todo from './Todo';

const Todos = ({signal, setSignal}: {signal: number, setSignal: (data:number) => void}) => {
  const [todos, setTodos] = useState<TodoType[]>();
    useEffect(() => {
        if (localStorage.getItem('todos')) {
            const data = localStorage.getItem('todos');
            const finaldata = JSON.parse(data || "");
            setTodos(finaldata);
            console.log(finaldata)
        }
    }, [signal])
  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-end items-center gap-5">
      </div>
      {todos && todos?.length > 0 && <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        {todos?.reverse().map((todo, index) => (<Todo setSignal={setSignal} signal={signal} key={index} data={todo} />))}
      </div>}
      {!todos || todos?.length === 0 && <p className="text-white border-t-2 border-gray-500 pt-5 text-2xl text-center">No Todos found</p>}
    </div>
  )
}

export default Todos
