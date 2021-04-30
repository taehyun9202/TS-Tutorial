import React, { useEffect, useState } from "react";

function EffectComponent() {
  const [val, setVal] = useState(1);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setVal((prev) => prev + 1);
    }, 1000);
    return () => window.clearInterval(timer);
  }, []);
  return (
    <div>
      <h1>{val}</h1>
    </div>
  );
}

export default EffectComponent;
