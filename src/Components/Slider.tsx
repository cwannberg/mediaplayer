import { useState } from "react";

export default function SliderMock() {
  const [value, setValue] = useState(50);

  return (
    <div className="flex flex-col items-center gap-4 w-full max-w-md">
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        className="w-full"
      />
    </div>
  );
}