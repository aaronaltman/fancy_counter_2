import { Minus, Plus } from "lucide-react";
import React from "react";

export default function CounterButtons({ count, setCount }: any) {
  return (
    <>
      <div className="flex justify-center items-center gap-2">
        <button
          onClick={(e) => {
            e.preventDefault();
            setCount(count - 1);
          }}
          className="btn btn-outline btn-lg shadow-lg"
        >
          <Minus size={40} className="" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            setCount(count + 1);
          }}
          className="btn btn-outline btn-lg shadow-lg "
        >
          <Plus size={40} className="" />
        </button>
      </div>
    </>
  );
}
