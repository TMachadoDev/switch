"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { switchStates } from "./constants";

export default function Switch() {
  const [state, setState] = useState<keyof typeof switchStates>("off");
  const [isAnimating, setIsAnimating] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const isOn = state === "on";

  const getVisualState = () => {
    if (isAnimating) return state;

    if (isPressed) {
      return isOn ? "intermediate3" : "intermediate2";
    }

    if (isHovering) {
      return isOn ? "intermediate4" : "intermediate1";
    }

    return state;
  };

  const current = switchStates[getVisualState()];

  const toggle = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    const sequence = !isOn
      ? ["intermediate2", "intermediate3", "on"]
      : ["intermediate3", "intermediate2", "intermediate1", "off"];
    sequence
      .reduce((prev, next) => {
        return prev.then(() => {
          return new Promise<void>((resolve) => {
            setState(next as keyof typeof switchStates);
            setTimeout(resolve, 75);
          });
        });
      }, Promise.resolve())
      .then(() => {
        setIsAnimating(false);
      });
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <motion.button
        className={`flex w-20 h-10 rounded-full  p-2 focus:outline-2 focus:outline-offset-2 focus:outline-emerald-500  ${
          current.trackBg
        } ${isAnimating ? "pointer-events-none" : "cursor-pointer"}`}
        onClick={toggle}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => {
          setIsHovering(false);
          setIsPressed(false);
        }}
        onMouseDown={() => setIsPressed(true)}
        onMouseUp={() => setIsPressed(false)}
        layout
        transition={{
          duration: 0.12,
          type: "spring",
          stiffness: 600,
          damping: 30,
        }}
      >
        <motion.div
          className={`rounded-full flex items-center justify-center ${current.knobSize} ${current.knobTranslate} bg-white shadow-md`}
          layout
          transition={{
            duration: 0.12,
            type: "spring",
            stiffness: 600,
            damping: 30,
          }}
        >
          <motion.div
            className={`rounded-full ${current.knobInnerSize} ${current.knobInnerBg}`}
            layout
            transition={{ duration: 0.12, ease: "easeOut" }}
          />
        </motion.div>
      </motion.button>
      <span className="text-xl">{isOn ? "Ligado ✅" : "Desligado ❌"}</span>
    </div>
  );
}
