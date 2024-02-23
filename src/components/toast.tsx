"use client";

import React, { useEffect } from "react";

export default function Toast({ open, setOpen }) {
  useEffect(() => {
    if (open) {
      const timer = setTimeout(() => {
        setOpen(false);
      }, 2000);
      return () => clearTimeout(timer); // Clear the timeout if the component unmounts or `open` changes before the timeout is reached.
    }
  }, [open, setOpen]); // Depend on `open` and `setOpen` to re-run effect when `open` changes.

  // Correct conditional rendering syntax
  return open ? (
    <div className="toast">
      <div className="alert alert-info bg-accent">
        <span className="text-black">Counter Reset Success!</span>
      </div>
    </div>
  ) : null;
}
