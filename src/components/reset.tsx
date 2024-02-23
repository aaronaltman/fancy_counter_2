"use client";

import { RefreshCw } from "lucide-react";
import React from "react";

export default function Reset({ setCount, setOpen, open }: any) {
  return (
    <>
      <button
        onClick={(e) => {
          e.preventDefault();
          setCount(0);
          setOpen(!open);
        }}
        className="flex justify-center items-center"
      >
        <RefreshCw size={40} />
      </button>
    </>
  );
}
