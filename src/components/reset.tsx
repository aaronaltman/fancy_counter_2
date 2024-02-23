"use client";

import { RefreshCw } from "lucide-react";
import React from "react";

export default function Reset({ setCount }: any) {
  return (
    <>
      <button
        onClick={(e) => {
          e.preventDefault();
          setCount(0);
        }}
        className="flex justify-center items-center"
      >
        <RefreshCw size={40} />
      </button>
    </>
  );
}
