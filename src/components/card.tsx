import React from "react";
import Title from "./title";
import Reset from "./reset";
import CounterButtons from "./counter-buttons";
import Count from "./count";

export default function Card() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div className="bg-secondary p-10 rounded-lg">
        <Title />
        <Count />
        <Reset />
        <CounterButtons />
      </div>
    </div>
  );
}
