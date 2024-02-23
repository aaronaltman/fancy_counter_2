import { Minus, Plus } from "lucide-react";
import React from "react";

export default function CounterButtons({ count, setCount }: any) {
  return (
    <>
      <div className="flex justify-center items-center">
        <button
          onClick={(e) => {
            e.preventDefault();
            setCount(count - 1);
          }}
          className="btn px-10 py-10"
        >
          <Minus size={40} className="-mt-4" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            setCount(count + 1);
          }}
          className="btn px-10 py-10 "
        >
          <Plus size={40} className="-mt-4" />
        </button>
      </div>
    </>
  );
}
