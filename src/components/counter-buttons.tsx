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
          className="btn btn-outline btn-lg shadow-lg px-12 py-12"
        >
          <Minus size={40} className="-mt-4" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            setCount(count + 1);
          }}
          className="btn btn-outline btn-lg shadow-lg px-12 py-12"
        >
          <Plus size={40} className="-mt-4" />
        </button>
      </div>
    </>
  );
}
