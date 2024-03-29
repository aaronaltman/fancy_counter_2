"use client";

import React, { useState } from "react";
import Title from "./title";
import Reset from "./reset";
import CounterButtons from "./counter-buttons";
import Count from "./count";
import ThemeToggle from "./theme-toggle";
import Toast from "./toast";

export default function Card() {
  const [count, setCount] = useState(0);
  const [open, setOpen] = useState(false);
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div className="flex flex-col bg-base-300 p-10 rounded-lg space-y-10 border-4 border-accent">
        <Title />
        <Count count={count} />
        <Reset setCount={setCount} setOpen={setOpen} open={open} />
        <CounterButtons count={count} setCount={setCount} />
      </div>
      <ThemeToggle />
      <Toast setOpen={setOpen} open={open} />
    </div>
  );
}
