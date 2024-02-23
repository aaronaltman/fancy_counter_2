import { Minus, Plus } from "lucide-react";
import React from "react";
import Toast from "./toast";

export default function CounterButtons({ count, setCount }: any) {
  return (
    <>
      <div className="flex justify-center">
        <button
          onClick={(e) => {
            e.preventDefault();
            setCount(count - 1);
          }}
          className="btn"
        >
          <Minus size={40} className="" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            setCount(count + 1);
          }}
          className="btn "
        >
          <Plus size={40} />
        </button>
      </div>
      <Toast />
    </>
  );
}
