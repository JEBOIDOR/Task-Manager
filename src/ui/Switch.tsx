import { useState } from "react";

export const Switch = ({ options }: { options: string[] }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <div
      className="tab-container pointer flex align-center justify-between semi-r relative"
      onClick={() => setToggle((toggle) => !toggle)}
    >
      {/* adjust in middle of the container align/justify  */}
      <span className={`indicator ${toggle ? "trslt" : ""}`}></span>
      {options.map((opt) => (
        <p className={opt}>{opt}</p>
      ))}
    </div>
  );
};
