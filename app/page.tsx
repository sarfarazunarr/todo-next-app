"use client";
import { useState } from "react";
import NewTodo from "./NewTodo";
import Todos from "./Todos";

export default function Home() {
  const [signal, setSignal] = useState(0);
  return (
    <section className="flex py-10 flex-col gap-5">
      <div className="flex justify-between py-2 md:py-5 items-center">
        <h1 className="text-3xl font-semibold text-white">Your Todos</h1>
        <NewTodo alert={setSignal} alertValue={signal} />
      </div>
      <Todos setSignal={setSignal} signal={signal} />
    </section>
  );
}
