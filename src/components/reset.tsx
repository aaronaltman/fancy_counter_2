"use client";

import { RefreshCw } from "lucide-react";
import React from "react";

export default function Reset() {
  return (
    <>
      <button
        onClick={(e) => {
          console.log(e);
        }}
        className="flex justify-center items-center"
      >
        <RefreshCw size={40} />
      </button>
    </>
  );
}
