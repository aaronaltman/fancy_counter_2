"use client";

import { Rotate3D } from "lucide-react";
import React from "react";

export default function Reset() {
  return (
    <>
      <button
        onClick={(e) => {
          console.log(e);
        }}
      >
        <Rotate3D />
      </button>
    </>
  );
}
