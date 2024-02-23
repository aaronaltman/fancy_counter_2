import { Minus, Plus } from "lucide-react";
import React from "react";

export default function CounterButtons() {
  return (
    <div>
      <button className="btn btn-primary">
        <Minus />
      </button>
      <button className="btn btn-primary">
        <Plus />
      </button>
    </div>
  );
}
