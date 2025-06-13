import { useState } from "react";
import { switchStates } from "./constants";

export function useSwitch(initial = false, disabled = false) {
  type SwitchState = keyof typeof switchStates;
  const [currentState, setCurrentState] = useState<SwitchState>(
    initial ? "on" : "off"
  );
  const [isAnimating, setIsAnimating] = useState(false);

  const isOn = currentState === "on";
  const current = switchStates[currentState];

  const toggle = () => {
    if (isAnimating || disabled) return;

    setIsAnimating(true);

    const sequence = !isOn
      ? [
          "intermediate1",
          "intermediate2",
          "intermediate3",
          "intermediate4",
          "on",
        ]
      : ["intermediate3", "intermediate2", "intermediate1", "off"];

    sequence
      .reduce((prev, next) => {
        return prev.then(() => {
          return new Promise<void>((resolve) => {
            setCurrentState(next as SwitchState);
            setTimeout(resolve, 75);
          });
        });
      }, Promise.resolve())
      .then(() => {
        setIsAnimating(false);
      });
  };

  return {
    isOn,
    isAnimating,
    toggle,
    current,
  };
}
