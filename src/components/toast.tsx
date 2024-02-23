import React from "react";

export default function Toast() {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="toast">
      <div className="alert alert-info bg-accent">
        <span className="text-black">Counter Reset Success!</span>
      </div>
    </div>
  );
}
