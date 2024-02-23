import { Minus, Plus } from "lucide-react";
import React from "react";

export default function CounterButtons() {
  return (
    <div className="flex justify-center items-center gap-1">
      <div className="flex justify-center items-center gap-1 bg-accent p-4 rounded-lg">
        <button className="flex items-center justify-center btn btn-primary p-10">
          <Minus size={40} />
        </button>
        <button className="btn btn-primary p-10">
          <Plus size={40} />
        </button>
      </div>
    </div>
  );
}
