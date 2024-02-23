"use client";

import React, { useState } from "react";
import Title from "./title";
import Reset from "./reset";
import CounterButtons from "./counter-buttons";
import Count from "./count";
import ThemeToggle from "./theme-toggle";

export default function Card() {
  const [count, setCount] = useState(0);
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div className="flex flex-col bg-secondary p-10 rounded-lg space-y-10">
        <Title />
        <Count count={count} />
        <Reset setCount={setCount} />
        <CounterButtons count={count} setCount={setCount} />
      </div>
      <ThemeToggle />
    </div>
  );
}
