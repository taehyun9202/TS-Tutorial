import React, { useRef } from "react";

function RefComponent() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  return (
    <div>
      <input ref={inputRef} />
    </div>
  );
}

export default RefComponent;
