import { useState } from "react";
import '../assets/css/mediaplayer.css'

export default function SliderMock() {
  const [value, setValue] = useState(50);

  return (
    <div>
      <input
        className="slider"
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
      />
    </div>
  );
}